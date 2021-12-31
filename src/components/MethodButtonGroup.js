import styles from "./MethodButtonGroup.module.css";
import { useEffect, useState } from "react";

function MethodButtonGroup(props) {
  const [isActive, setIsActive] = useState(-1); 

  const toggleButton = (event, index) => {
      event.preventDefault();
      setIsActive(index); 
      props.onToggle(event.target.name);
    };

  const buttonGroup = props.methods.map((value, i) => (
    <button key={i} name={value} onClick={(event) => toggleButton(event, i)} className={i===isActive? `${styles["button-active"]}` : `${styles["button-inactive"]}` }>
      {value}
    </button>
  ));


  // const listSteps = hoffman.map((step, i) => <li key={i}>{step}</li>);

  return <div>{buttonGroup}</div>;
}
export default MethodButtonGroup;
