import React from "react";
import { useDataContext } from "../../context/DataContext";

const CRMTable = () => {
  const { tableData } = useDataContext();

  // Ensure tableData is an array before trying to map over it
  if (!Array.isArray(tableData)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>CRM Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Company Name</th>
            {/* Add other headers */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp}</td>
              <td>{row.companyName}</td>
              {/* Render other columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRMTable;
