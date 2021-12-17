import React from "react";
import "./Buttons.style.css";
// import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';

const Button = (props) => {
  return (
    <button onClick={props.onClickFunc} disabled={props.isDisabled}>
   {props.buttonText}
    </button>
  );
};

export default Button;
