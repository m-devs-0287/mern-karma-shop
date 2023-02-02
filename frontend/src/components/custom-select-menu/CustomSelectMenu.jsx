import React from "react";


const styles = {
  select: 'h-10 px-4',
  option: 'h-full flex'
}
const CustomSelectMenu = ({name, data}) => {
  return (
    <select name={name} id={name} className={styles.select}>
      {data.map(({name}) => (
        <option className={styles.option} value={name}>{name}</option>
      ))}
    </select>
  );
};

export default CustomSelectMenu;
