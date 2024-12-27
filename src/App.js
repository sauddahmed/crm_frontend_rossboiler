import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./javascript_files/pages/Dashboard";
import CategoryMaster from "./javascript_files/pages/Master/CategoryMaster";
import SubCategoryMaster from "./javascript_files/pages/Master/SubCategoryMaster";
import HsnMaster from "./javascript_files/pages/Master/HsnMaster";
import UnitMaster from "./javascript_files/pages/Master/UnitMaster";
import PackagingMaster from "./javascript_files/pages/Master/PackagingMaster";
import CurrencyMaster from "./javascript_files/pages/Master/CurrencyMaster";
import GstMaster from "./javascript_files/pages/Master/GstMaster";
import PartsMaster from "./javascript_files/pages/Master/PartsMaster";
import Inventory from "./javascript_files/pages/Inventory";
import Customers from "./javascript_files/pages/Customers";
import SignInPage from "./javascript_files/pages/SignIn";
import Navbar from "./javascript_files/components/Navbar";
import Sidebar from "./javascript_files/components/Sidebar";
// import { DataProvider } from "./context/DataContextParts";
import { CategoryProvider } from "./context/CategoryContext";
import { SubCategoryProvider } from "./context/SubCategoryContext";
import { HsnProvider } from "./context/HsnContext";
import { UnitProvider } from "./context/UnitContext";
import { PackagingProvider } from "./context/PackagingContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import { GstProvider } from "./context/GstContext";
import { PartsProvider } from "./context/PartsContext";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

const App = () => {
  // State for toggling sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapsed state
  };

  return (
    <CategoryProvider>
      <SubCategoryProvider>
        <HsnProvider>
          <UnitProvider>
            <PackagingProvider>
              <CurrencyProvider>
                <GstProvider>
                  <PartsProvider>
                    <Router>
                      <Navbar />
                      <div
                        className={`app-container ${
                          isCollapsed ? "sidebar-collapsed" : ""
                        }`}
                      >
                        <Sidebar
                          isCollapsed={isCollapsed}
                          toggleSidebar={toggleSidebar}
                        />
                        <main className="main-content">
                          <Routes>
                            <Route path="/signin" element={<SignInPage />} />
                            <Route
                              path="/Dashboard"
                              element={<PrivateRoute element={<Dashboard />} />}
                            />
                            <Route
                              path="/CategoryMaster"
                              element={
                                <PrivateRoute element={<CategoryMaster />} />
                              }
                            />
                            <Route
                              path="/SubCategoryMaster"
                              element={
                                <PrivateRoute element={<SubCategoryMaster />} />
                              }
                            />
                            <Route
                              path="/HsnMaster"
                              element={<PrivateRoute element={<HsnMaster />} />}
                            />
                            <Route
                              path="/UnitMaster"
                              element={
                                <PrivateRoute element={<UnitMaster />} />
                              }
                            />
                            <Route
                              path="/PackagingMaster"
                              element={
                                <PrivateRoute element={<PackagingMaster />} />
                              }
                            />
                            <Route
                              path="/CurrencyMaster"
                              element={
                                <PrivateRoute element={<CurrencyMaster />} />
                              }
                            />
                            <Route
                              path="/GstMaster"
                              element={<PrivateRoute element={<GstMaster />} />}
                            />
                            <Route
                              path="/PartsMaster"
                              element={
                                <PrivateRoute element={<PartsMaster />} />
                              }
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
                  </PartsProvider>
                </GstProvider>
              </CurrencyProvider>
            </PackagingProvider>
          </UnitProvider>
        </HsnProvider>
      </SubCategoryProvider>
    </CategoryProvider>
  );
};

export default App;
