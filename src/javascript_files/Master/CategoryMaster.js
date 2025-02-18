import React, { useEffect, useState } from "react";
import "../../css_files/Master/CategoryMaster.css";
import AddCategoryMaster from "./AddCategoryMaster";
import Table from "../Homepage/Table";
import SearchCategoryMaster from "./SearchCategoryMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function CategoryMaster() {
  const [showaddcategorymaster, setshowaddcategorymaster] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Name", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [categoryupdatedata, setcategoryupdatedata] = useState(null);
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

  function fetchcategorydata(categoryid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Category/GetCategoryById?id=${categoryid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setcategoryupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Category`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].name);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, [reload]);

  return (
    <section className="category-master">
      <ToastContainer />
      <h1>Category Master</h1>
      <blockquote className="category-master-forms">
        <button
          onClick={() => {
            setshowaddcategorymaster(true);
            settriggerupdate(false);
          }}
        >
          Add Category Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Category Master
        </button>
      </blockquote>
      {showaddcategorymaster && (
        <AddCategoryMaster
          setshowaddform={setshowaddcategorymaster}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          categoryupdatedata={categoryupdatedata}
          key={`${categoryupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchCategoryMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddcategorymaster}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchcategorydata}
        url="Category/DeleteCategory"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default CategoryMaster;
