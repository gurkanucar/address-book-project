import React from "react";
import "./Button.css";
const Button = (props) => {
  const { onClick, text, className } = props;
  return (
    <div className={className || "button-bg"} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
