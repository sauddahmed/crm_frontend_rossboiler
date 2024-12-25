import React, { useEffect, useState } from "react";
import "../../css_files/Homepage/Table.css";

function Table({ tablehead, tabledata, handleupdate, handledelete }) {
  const [editable, seteditable] = useState(
    Array.from({ length: tabledata.length }, () => false)
  );

  const [fetcheddata, setfetcheddata] = useState(tabledata);

  return (
    <section className="table">
      <table>
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
                <td key={idx}>
                  <p hidden={editable[index] && idx != 0}>{tdata}</p>
                  <input
                    type={editable[index] && idx != 0 ? "text" : "hidden"}
                    value={fetcheddata[index][idx]}
                    onChange={(e) =>
                      setfetcheddata((prev) => {
                        const newArr = [...prev];
                        const rowCopy = [...newArr[index]];
                        rowCopy[idx] = e.target.value;
                        newArr[index] = rowCopy;
                        return newArr;
                      })
                    }
                  />
                </td>
              ))}
              <td>
                {editable[index] ? (
                  <i
                    className="fa-solid fa-floppy-disk"
                    title="Save Changes"
                    onClick={() => {
                      handleupdate(fetcheddata);
                      seteditable(false);
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() =>
                      seteditable((prev) => {
                        const arr = prev.map((_, i) => i === index);
                        return arr;
                      })
                    }
                    title="Edit"
                  />
                )}
              </td>
              <td>
                {editable[index] ? (
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() =>
                      seteditable((prev) => {
                        const arr = [...prev];
                        arr[index] = false;
                        return arr;
                      })
                    }
                    title="Cancel"
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-trash"
                    title="Delete"
                    onClick={() => {
                      if (window.confirm("Do You want to delete")) {
                        handledelete(index);
                      }
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
