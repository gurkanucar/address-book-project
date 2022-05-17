import React from "react";
import "./SelectComponent.css";
const SelectComponent = (props) => {
  const { labelName, name, onChange, value, className, error, options } = props;

  return (
    <div className={className || "input-component__item"}>
      <label className="input-component__label" htmlFor={name}>
        {labelName}
      </label>
      <select
        onChange={onChange}
        value={value}
        className="input-component__input"
        name={name}
      >
        {options.map((x, index) => {
          return (
            <option key={index} value={x.value}>
              {x.text}
            </option>
          );
        })}
      </select>
      <p className="input-component__error">{error ? error : " "}</p>
    </div>
  );
};

export default SelectComponent;
