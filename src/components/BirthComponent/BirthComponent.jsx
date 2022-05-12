import React from "react";
import { _calculateAge } from "../../util/ageCalculator";
import "./BirthComponent.css";
import { FaBirthdayCake } from "react-icons/fa";
import {
  dateConverter,
  dateConverterFormatted,
} from "../../util/dateConverter";

const BirthComponent = (props) => {
  const { birth_date, place_of_birth, gender, nick_name } = props.data;

  return (
    <div className="card-details__item">
      <div className="card-details__title">
        <FaBirthdayCake />
        <span className="birth__title">Birth</span>
      </div>
      {birth_date && (
        <h3 className="birth__label">
          <strong>Birth Date:</strong> {dateConverterFormatted(birth_date)}
        </h3>
      )}
      {birth_date && (
        <h3 className="birth__label">
          <strong>Age:</strong> {_calculateAge(birth_date)}
        </h3>
      )}
      {place_of_birth && (
        <h3 className="birth__label">
          <strong>Place:</strong> {place_of_birth}
        </h3>
      )}
      {gender && (
        <h3 className="birth__label">
          <strong>Gender:</strong> {gender}
        </h3>
      )}
      {nick_name && (
        <h3 className="birth__label">
          <strong>Nick:</strong> {nick_name}
        </h3>
      )}
    </div>
  );
};

export default BirthComponent;
