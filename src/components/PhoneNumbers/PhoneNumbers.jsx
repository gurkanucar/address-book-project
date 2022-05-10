import React from "react";
import "./PhoneNumbers.css";
import { FaPhone } from "react-icons/fa";
const PhoneNumbers = (props) => {
  const { home_phone_number, work_phone_number, phone_number } = props.data;

  return (
    (home_phone_number || work_phone_number) && (
      <div className="phone-numbers__item">
        {
          <div>
            <FaPhone />
            <span className="phone-numbers__title">Phones</span>
          </div>
        }
        <br />
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
    )
  );
};

export default PhoneNumbers;
