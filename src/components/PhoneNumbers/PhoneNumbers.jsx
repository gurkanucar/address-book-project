import React from "react";
import "./PhoneNumbers.css";
import { FaPhone } from "react-icons/fa";
import InfoElement from "../InfoElement/InfoElement";
const PhoneNumbers = (props) => {
  const { home_phone_number, work_phone_number,phone_number } = props.data;

  return (
    <div className="card-details__item">
      <div className="card-details__title">
        <FaPhone />
        <span className="phone-numbers__title">Phones</span>
      </div>
      <InfoElement value={phone_number}>Personal:</InfoElement>
      <InfoElement value={home_phone_number}>Home:</InfoElement>
      <InfoElement value={work_phone_number}>Work:</InfoElement>
    </div>
  );
};

export default PhoneNumbers;
