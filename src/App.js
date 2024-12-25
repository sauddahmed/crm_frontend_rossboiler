import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Homepage from "./javascript_files/Homepage/Homepage";
import CategoryMaster from "./javascript_files/Master/CategoryMaster";
import Overview from "./javascript_files/Homepage/Overview";
import { useState } from "react";
import SubCategoryMaster from "./javascript_files/Master/SubCategoryMaster";
import HSNMaster from "./javascript_files/Master/HSNMaster";
import CurrencyMaster from "./javascript_files/Master/CurrencyMaster";
import UnitMaster from "./javascript_files/Master/UnitMaster";

function App() {
  const [showsidebar, setshowsidebar] = useState(false);

  function showsidebarset(showsidebar) {
    setshowsidebar(showsidebar);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage setshowsidebar={showsidebarset} showsidebar={showsidebar} />
        }
      >
        <Route path="/" element={<Overview showsidebar={showsidebar} />} />
        <Route path="/master/category-master" element={<CategoryMaster />} />
        <Route
          path="/master/sub-category-master"
          element={<SubCategoryMaster />}
        />
        <Route path="/master/hsn-master" element={<HSNMaster />} />
        <Route path="/master/currency-master" element={<CurrencyMaster />} />
        <Route path="/master/unit-master" element={<UnitMaster />} />
      </Route>
    </Routes>
  );
}

export default App;
