import React from "react";
import { _calculateAge } from "../../util/ageCalculator";
import "./Summary.css";
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
          <span className="summary__phone">☎ {phone_number}</span>
          <span className="summary__email"> ✉ {email}</span>

          <span className="summary__country">
            <strong>{city}</strong>
            {",  "}
            {country.toUpperCase()}
          </span>
        </div>
        <img src={imageUrl} className="summary__img" />
      </div>
    </div>
  );
};

export default Summary;
