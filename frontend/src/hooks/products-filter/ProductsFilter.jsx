import { useState } from "react";
import { createContext, useContext } from "react";

export const Gender = createContext();
export const Category = createContext();
export const Collection = createContext();

export const UseGender = () => useContext(Gender);
export const UseCategory = () => useContext(Category);
export const UseCollection = () => useContext(Collection);

export const GenderProvider = ({ children }) => {
  const [gender, setGender] = useStateate("men");
  const [category, setCategory] = useState("red");
  const [collection, setCollection] = useState("men");

  return (
    <Gender.Provider value={gender}>
      <Category.Provider value={category}>
        <Collection.Provider value={collection}>
          {children}
        </Collection.Provider>
      </Category.Provider>
    </Gender.Provider>
  );
};
