import React from "react";
import "./Buttons.style.css";

const Button = (props) => {
  return (
    <button onClick={props.onClickFunc} disabled={props.isDisabled}>
   <i className={props.icon}></i>{props.buttonText}
    </button>
  );
};

export default Button;
