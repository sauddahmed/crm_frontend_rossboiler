import React from "react";
import "../../css_files/Homepage/Table.css";

function Table({ tablehead, tabledata }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {tablehead.map((head, index) => (
            <th key={index}>{head}</th>
          ))}

          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tabledata.map((data, index) => (
          <tr key={index}>
            {data.map((tdata, idx) => (
              <td key={idx}>{tdata}</td>
            ))}
            <td>
              <i className="fa-regular fa-pen-to-square" />
            </td>
            <td>
              <i className="fa-solid fa-trash" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
