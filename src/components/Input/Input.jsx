import React from "react";
import "./Input.css";
const Input = (props) => {
  const {
    labelName,
    id,
    className,
    onKeyPress,
    name,
    type,
    onChange,
    value,
    placeholder,
    hideError,
    error,
  } = props;

  return (
    <div className={className || "input-component__item"}>
      <label className="input-component__label" htmlFor={name}>
        {labelName}
      </label>
      <input
        id={id || ""}
        onKeyPress={onKeyPress}
        className="input-component__input"
        type={type || "text"}
        name={name || ""}
        onChange={onChange}
        value={value || ""}
        // defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {hideError === true ? null : (
        <p className="input-component__error">{error ? error : " "}</p>
      )}
    </div>
  );
};

export default Input;
