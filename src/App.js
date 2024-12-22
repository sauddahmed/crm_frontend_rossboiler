import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./javascript_files/pages/Dashboard";
import CategoryMaster from "./javascript_files/pages/Master/CategoryMaster";
import SubCategoryMaster from "./javascript_files/pages/Master/SubCategoryMaster";
import Inventory from "./javascript_files/pages/Inventory";
import Customers from "./javascript_files/pages/Customers";
import SignInPage from "./javascript_files/pages/SignIn";
import Navbar from "./javascript_files/components/Navbar";
import Sidebar from "./javascript_files/components/Sidebar";
// import { DataProvider } from "./context/DataContextParts";
import { CategoryProvider } from "./context/CategoryContext";
import { SubCategoryProvider } from "./context/SubCategoryContext";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <CategoryProvider>
      <SubCategoryProvider>
        <Router>
          <Navbar />
          <div className="app-container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route
                  path="/Dashboard"
                  element={<PrivateRoute element={<Dashboard />} />}
                />
                <Route
                  path="/CategoryMaster"
                  element={<PrivateRoute element={<CategoryMaster />} />}
                />
                <Route
                  path="/SubCategoryMaster"
                  element={<PrivateRoute element={<SubCategoryMaster />} />}
                />
                <Route
                  path="/inventory"
                  element={<PrivateRoute element={<Inventory />} />}
                />
                <Route
                  path="/customers"
                  element={<PrivateRoute element={<Customers />} />}
                />
              </Routes>
            </main>
          </div>
        </Router>
      </SubCategoryProvider>
    </CategoryProvider>
  );
};

export default App;
