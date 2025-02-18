import React, { useContext, useEffect, useState } from "react";
import "../../css_files/Homepage/Table.css";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
import { triggerscroll } from "./Homepage";

function Table({
  tablehead,
  tabledata,
  setshowaddform,
  settriggerupdate,
  fetchdata,
  url,
  reload,
  setReload,
  setdatareload,
  datareload,
}) {
  const scrollupwords = useContext(triggerscroll);

  function handleDelete(id) {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/${url}?id=${id}`;
    axios
      .delete(URL)
      .then((res) => {
        toast.success("Record Deleted Successfully", {
          position: "bottom-center",
        });
        setReload(!reload);
      })
      .catch((err) => {
        toast.error("Failed to Delete", {
          position: "bottom-center",
        });
      });
  }
  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            {tablehead.map((head, index) => (
              <th key={index}>{head}</th>
            ))}

            <th colSpan={2} align="center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((data, index) => (
            <tr key={index}>
              {data.map((tdata, idx) => (
                <td key={idx}>
                  <p>{tdata}</p>
                </td>
              ))}
              <td>
                <i
                  className="fa-regular fa-pen-to-square"
                  onClick={() => {
                    setdatareload(datareload + 1);
                    setshowaddform(true);
                    settriggerupdate(true);
                    scrollupwords();
                    fetchdata(tabledata[index][0]);
                  }}
                  title="Edit"
                />
              </td>
              <td>
                <i
                  className="fa-solid fa-trash"
                  title="Delete"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDelete(tabledata[index][0]);
                      }
                    });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
