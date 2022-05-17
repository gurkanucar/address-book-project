import React from "react";
import "./DetailListComponent.css";

const DetailItem = (props) => {
  const { value, text } = props;
  return (
    value && (
      <div className="detail-list-component__item">
        <span className="detail-list-component__title">{text}</span>
        <span className="detail-list-component__value">{value}</span>
      </div>
    )
  );
};

export default DetailItem;
