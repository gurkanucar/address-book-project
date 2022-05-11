import React from "react";
import "./Input.css";
const Input = (props) => {
  const { labelName, name, type, onChange, value, placeholder, error } = props;

  return (
    <div className="input-component__item">
      <label className="input-component__label" for={name}>
        {labelName}
      </label>
      <input
        className="input-component__input "
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        values={value}
        placeholder={placeholder}
      />
      <p className="input-component__error">{error ? error : " "}</p>
    </div>
  );
};

export default Input;
