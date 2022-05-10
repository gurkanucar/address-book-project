import React from "react";
import "./AddressComponent.css";

const AddressComponent = (props) => {
  const { country, city, home_address, work_address } = props.data;

  return (
    <div className="address__item">
      {(home_address || work_address || city || country) && (
        <span className="address__title">Address</span>
      )}
      {country && (
        <h3 className="address__label">
          <strong>Country:</strong> {country}
        </h3>
      )}
      {city && (
        <h3 className="address__label">
          <strong>City:</strong> {city}
        </h3>
      )}
      {home_address && (
        <h3 className="address__label">
          <strong>Home:</strong> {home_address}
        </h3>
      )}
      {work_address && (
        <h3 className="address__label">
          <strong>Work:</strong> {work_address}
        </h3>
      )}
    </div>
  );
};

export default AddressComponent;
