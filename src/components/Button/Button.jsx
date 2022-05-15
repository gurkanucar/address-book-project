import React from "react";
import "./Button.css";
const Button = (props) => {
  const { onClick, text } = props;
  return (
    <div className="button-bg" onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
