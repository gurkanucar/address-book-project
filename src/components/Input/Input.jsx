import React from "react";
import "./Input.css";
const Input = (props) => {
  const {
    labelName,
    id,
    defaultValue,
    name,
    type,
    onChange,
    value,
    placeholder,
    error,
  } = props;

  return (
    <div className="input-component__item">
      <label className="input-component__label" htmlFor={name}>
        {labelName}
      </label>
      <input
      id={id || ""}
        className="input-component__input"
        type={type || "text"}
        name={name || ""}
        onChange={onChange}
        value={value || ""}
        // defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <p className="input-component__error">{error ? error : " "}</p>
    </div>
  );
};

export default Input;
