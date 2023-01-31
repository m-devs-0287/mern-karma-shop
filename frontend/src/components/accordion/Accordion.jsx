import React from "react";
import { useState } from "react";

const Accordion = ({ list }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const styles = {
    wrapper: "drop-shadow-md bg-white",
    title: 'flex items-center h-12 border-b-2 font-semibold text-black px-4 hover:text-orange-500',
    content: 'pl-8 flex items-center h-12 border-b-2 text-black hover:text-orange-500'
  }

  return (
    <ul className={styles.wrapper}>
      {list.map(({ title, content }, index) => (
        <li key={index}>
          <span className={styles.title} onClick={() => toggle(index)}>{title}</span>
          
          {selected === index ? (
            <ul>
              {content.map(({ title }, index) => (
                <li key={index} className={styles.content}>
                  {title}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
