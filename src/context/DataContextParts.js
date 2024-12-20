import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const DataContext = createContext();

// Custom hook to access the context
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  // Load initial data from localStorage
  const initialData = JSON.parse(localStorage.getItem("partsData")) || [];
  const [partsData, setPartsData] = useState(initialData);

  // State to manage visibility of the Add Part form
  const [showAddPartForm, setShowAddPartForm] = useState(false);

  // Save data to localStorage whenever partsData changes
  useEffect(() => {
    localStorage.setItem("partsData", JSON.stringify(partsData));
  }, [partsData]);

  // Function to add a new part
  const addPart = (newPart) => {
    setPartsData((prevData) => [...prevData, newPart]);
  };

  // Function to edit a part's details
  const editPart = (partId, updatedDetails) => {
    setPartsData((prevData) =>
      prevData.map((part) =>
        part.id === partId ? { ...part, ...updatedDetails } : part
      )
    );
  };

  // Function to delete a part by ID
  const deletePart = (partId) => {
    setPartsData((prevData) => prevData.filter((part) => part.id !== partId));
  };

  return (
    <DataContext.Provider
      value={{
        partsData,
        addPart,
        editPart, // Provide the editPart function
        deletePart,
        showAddPartForm,
        setShowAddPartForm,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
