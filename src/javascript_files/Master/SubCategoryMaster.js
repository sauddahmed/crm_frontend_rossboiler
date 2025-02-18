import React, { useState, useEffect } from "react";
import "../../css_files/Master/SubCategoryMaster.css";
import AddSubCategoryMaster from "./AddSubCategoryMaster";
import SearchSubCategoryMaster from "./SearchSubCategoryMaster";
import Table from "../Homepage/Table";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function SubCategoryMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Subcategory Name", "Description", "Category Name"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [subcategoryupdatedata, setsubcategoryupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.name);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchsubcategorydata(subcategoryid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/SubCategory/GetSubCategoryById?id=${subcategoryid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setsubcategoryupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const fetchSubCategories = async () => {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/SubCategory`;
      try {
        const response = await axios.get(URL);
        const subCategories = response.data;

        const tableDataArray = await Promise.all(
          subCategories.map(async (subCategory) => {
            const categoryName = await fetchCategory(subCategory.categoryId);
            return [
              subCategory.id,
              subCategory.name,
              subCategory.description,
              categoryName,
            ];
          })
        );

        setTableData(tableDataArray);
      } catch (error) {
        console.error("Error fetching subcategory data:", error);
      }
    };

    fetchSubCategories();
  }, [reload]);

  function fetchCategory(CategoryId) {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Category/GetCategoryById?id=${CategoryId}`;
    return axios
      .get(URL)
      .then((res) => {
        return res.data.name;
      })
      .catch((err) => {
        return "";
      });
  }

  return (
    <>
      <section className="sub-category-master">
        <ToastContainer />
        <h1>Sub Category Master</h1>
        <blockquote className="sub-category-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Sub-Category Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Sub-Category Master
          </button>
        </blockquote>
        {showaddform && (
          <AddSubCategoryMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            subcategorypdatedata={subcategoryupdatedata}
            key={`${subcategoryupdatedata?.id}-${triggerupdate}-${datareload}`}
          />
        )}
        {showsearchform && (
          <SearchSubCategoryMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchsubcategorydata}
          url="SubCategory/DeleteSubCategory"
          reload={reload}
          setReload={setReload}
          setdatareload={setdatareload}
          datareload={datareload}
        />
      </section>
    </>
  );
}

export default SubCategoryMaster;
