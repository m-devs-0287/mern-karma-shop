import React from "react";

import { useState } from "react";

const styles = {
  container: "drop-shadow-md bg-white",
  header: "bg-[#828bb3] text-white text-lg font-semibold p-4",
  content:
    "pl-8 flex items-center h-12 border-b-2 text-black hover:text-orange-500 flex gap-2 capitalize",
};

const Checkbox = ({ componentName, data }) => {
  const [isChecked, setIsChecked] = useState({
    black: false,
    blackLeather: false,
    gold: false,
    spacegrey: false,
  });

  const handleChange = ({ target }) => {
    setIsChecked(
      {
        ...isChecked,
        [ target.name ]: !isChecked[ target.name ]
      }
    )
  };

  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.header}>{componentName}</h4>
      </div>

      {data.map(({ title, name }, i) => (
        <label key={i} className={styles.content}>
          <input
            type="checkbox"
            value="first"
            name={name}
            checked={isChecked[name]}
            onChange={(e) => handleChange(e)}
          />
          <span>{title}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
