import React from "react";
import { _calculateAge } from "../../util/ageCalculator";
import "./Summary.css";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdMail, MdLocationPin } from "react-icons/md";

const Summary = (props) => {
  const {
    first_name,
    country,
    city,
    last_name,
    email,
    job,
    phone_number,
    birth_date,
    imageUrl,
  } = props.data;

  return (
    <div className="summary__root">
      <div className="summary__body">
        <div className="summary__col">
          <span className="summary__name">
            {first_name}
            {"  "}
            {last_name.toUpperCase()}
            <span className="summary__age">
              {" - "}
              {_calculateAge(new Date(birth_date))}
            </span>
          </span>
          <span className="summary__job">{job}</span>
          <br />
          <div className="summary__row">
            <FaPhone size={25} />
            <span className="summary__phone">{phone_number}</span>
          </div>
          <div className="summary__row">
            <MdMail size={25} />
            <span className="summary__email">{email}</span>
          </div>
     
          <div className="summary__row">
            <MdLocationPin size={25} />
            <span className="summary__country">
              <strong>{city}</strong>
              {",  "}
              {country.toUpperCase()}
            </span>
          </div>
        </div>
        {imageUrl !== "" ? (
          <img src={imageUrl} className="summary__img" />
        ) : (
          <FaUser size={150} />
        )}
      </div>
    </div>
  );
};

export default Summary;
