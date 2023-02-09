import { useState, createContext, useContext } from "react";

export const Filter = createContext();
export const UpdateFilter = createContext();

export const UseFilter = () => useContext(Filter);
export const UseUpdateFilter = () => useContext(UpdateFilter);

export const GenderProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    
      category: "sports",
      gender: "man",
      collection: "",
    
  });

  const updateFilter = (e) => {
 
 
    if (e.target.parentElement.parentElement.firstChild.innerText.toLowerCase() === "category") {
      const value = e.target.innerText.toLowerCase()
      setFilter(
       { ...filter,
        category: value}
      )
    }

    if (e.target.parentElement.parentElement.firstChild.innerText.toLowerCase() === "gender") {
      const value = e.target.innerText.toLowerCase()
      setFilter(
       { ...filter,
        gender: value}
      )
    }


  };

  return (
    <Filter.Provider value={filter}>
      <UpdateFilter.Provider value={updateFilter}>
        {children}
      </UpdateFilter.Provider>
    </Filter.Provider>
  );
};
