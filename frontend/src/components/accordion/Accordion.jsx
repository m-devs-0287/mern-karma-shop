import React from "react";
import { useState } from "react";
import { UseUpdateFilter } from "../../hooks/FilterContext";

const Accordion = ({ header, data }) => {
  const updateFilter = UseUpdateFilter();

  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const styles = {
    wrapper: "drop-shadow-md bg-white",
    header:"bg-[#828bb3] text-white text-lg font-semibold px-4 h-16 flex items-center",
    title:"flex items-center h-12 border-b-2 font-semibold text-black px-4 hover:text-orange-500",
    content:"pl-8 flex items-center h-12 border-b-2 text-black hover:text-orange-500",
  };

  return (
    <div>
      <h4 className={styles.header}>{header}</h4>
      <ul className={styles.wrapper}>
        {data.map(({ title, content }, index) => (
          <li key={index}>
            <span className={styles.title} onClick={() => toggle(index)}>
              {title}
            </span>

            {selected === index ? (
              <ul>
                {content.map(({ title }, index) => (
                  <li
                    key={index}
                    className={styles.content}
                    onClick={(e) => updateFilter(e)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
