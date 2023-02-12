import { useState, createContext, useContext } from "react";

export const Filter = createContext();
export const UpdateFilter = createContext();

export const UseFilter = () => useContext(Filter);
export const UseUpdateFilter = () => useContext(UpdateFilter);

export const GenderProvider = ({ children }) => {

  const [filter, setFilter] = useState({  
      category: "",
      gender: "",
      color: ''
  });

  const updateFilter = (e) => {

    switch(e.target.parentElement.parentElement.firstChild.innerText.toLowerCase()){
      case 'category':
        setFilter({ ...filter, category: e.target.innerText.toLowerCase()})
        break;
  
      case 'gender':
        setFilter({ ...filter, gender: e.target.innerText.toLowerCase()})
        console.log(filter)
        break;
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
