import React, { createContext, useContext, useState, useEffect } from "react";

const SubCategoryContext = createContext();

export const SubCategoryProvider = ({ children }) => {
  const [tableData, setTableData] = useState(() => {
    const storedData = localStorage.getItem("subCategoryData");
    return storedData ? JSON.parse(storedData) : []; // Default to empty array
  });

  useEffect(() => {
    localStorage.setItem("subCategoryData", JSON.stringify(tableData));
  }, [tableData]);

  const addDataToTable = (newData) => {
    setTableData((prevData) => [...prevData, newData]);
  };

  const editDataInTable = (index, updatedData) => {
    setTableData((prevData) =>
      prevData.map((item, i) => (i === index ? updatedData : item))
    );
  };

  const deleteDataFromTable = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <SubCategoryContext.Provider
      value={{
        tableData,
        addDataToTable,
        editDataInTable,
        deleteDataFromTable,
      }}
    >
      {children}
    </SubCategoryContext.Provider>
  );
};

export const useSubCategoryContext = () => useContext(SubCategoryContext);
