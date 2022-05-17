import React from "react";
import { _calculateAge } from "../../util/ageCalculator";
import "./BirthComponent.css";
import { FaBirthdayCake } from "react-icons/fa";
import InfoElement from "../InfoElement/InfoElement";

const BirthComponent = (props) => {
  const { birth_date, place_of_birth, gender, nick_name } = props.data;

  return (
    <div className="card-details__item">
      <div className="card-details__title">
        <FaBirthdayCake />
        <span className="birth__title">Birth</span>
      </div>
      <InfoElement value={new Date(birth_date).toLocaleDateString()}>
        Birth Date:
      </InfoElement>
      <InfoElement value={_calculateAge(birth_date)}>Age:</InfoElement>
      <InfoElement value={place_of_birth}>Place:</InfoElement>
      <InfoElement value={gender}>Gender:</InfoElement>
      <InfoElement value={nick_name}>Nick:</InfoElement>
    </div>
  );
};

export default BirthComponent;
