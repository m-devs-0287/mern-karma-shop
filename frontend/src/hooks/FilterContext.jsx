import { useState, createContext, useContext } from "react";

export const Filter = createContext();
export const UseFilter = () => useContext(Filter);

export const GenderProvider = ({ children }) => {

  const [filter, setFilter] = useState({
    category: "",
    gender: "women",
    collection: "",
  });

  return (
    <Filter.Provider value={filter}>
      {children}
    </Filter.Provider>
  );
};
