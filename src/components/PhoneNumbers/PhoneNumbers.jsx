import React from "react";
import "./PhoneNumbers.css";
const PhoneNumbers = (props) => {
  const { home_phone_number, work_phone_number, phone_number } = props.data;

  return (
    <div className="phone-numbers__item">
      {(home_phone_number || work_phone_number) && (
        <span className="phone-numbers__title">Phones</span>
      )}
      {home_phone_number && (
        <h3 className="phone-numbers__label">
          <strong>Home:</strong> {home_phone_number}
        </h3>
      )}
      {work_phone_number && (
        <h3 className="phone-numbers__label">
          <strong>Work:</strong> {work_phone_number}
        </h3>
      )}
    </div>
  );
};

export default PhoneNumbers;
