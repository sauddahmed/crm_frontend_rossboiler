import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const PackagingContext = createContext();

// Custom hook to access the context
export const usePackagingContext = () => {
  return useContext(PackagingContext);
};

export const PackagingProvider = ({ children }) => {
  // State to manage the table data for the dashboard
  const [tableData, setTableData] = useState(() => {
    // Initialize state with data from localStorage, if available
    const storedData = localStorage.getItem("Packaging");
    return storedData ? JSON.parse(storedData) : [];
  });

  // Save the tableData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("Packaging", JSON.stringify(tableData));
  }, [tableData]);

  // Function to add data to the table
  const addDataToTable = (newData) => {
    setTableData((prevData) => [...prevData, newData]);
  };

  // Function to edit a data entry in the table (if needed)
  const editDataInTable = (index, updatedDetails) => {
    setTableData((prevData) =>
      prevData.map((data, i) =>
        i === index ? { ...data, ...updatedDetails } : data
      )
    );
  };

  // Function to delete a data entry by index
  const deleteDataFromTable = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <PackagingContext.Provider
      value={{
        tableData,
        addDataToTable,
        editDataInTable,
        deleteDataFromTable,
      }}
    >
      {children}
    </PackagingContext.Provider>
  );
};
