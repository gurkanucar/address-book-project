import React from "react";
import "./InfoElement.css";
const InfoElement = (props) => {
  const { value, className } = props;
  return (
    value && (
      <h3 className={className || "info__text"}>
        <strong>{props.children}</strong> {value}
      </h3>
    )
  );
};

export default InfoElement;
