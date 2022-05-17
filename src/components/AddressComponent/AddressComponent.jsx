import React from "react";
import "./AddressComponent.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import InfoElement from "../InfoElement/InfoElement";

const AddressComponent = (props) => {
  const { country, city, home_address, work_address } = props.data;

  return (
    <div className="card-details__item">
      <div className="card-details__title">
        <FaMapMarkedAlt />
        <span className="address__title">Address</span>
      </div>
      <InfoElement value={country}>Country:</InfoElement>
      <InfoElement value={city}>City:</InfoElement>
      <InfoElement value={home_address}>Home:</InfoElement>
      <InfoElement value={work_address}>Work:</InfoElement>
    </div>
  );
};

export default AddressComponent;
