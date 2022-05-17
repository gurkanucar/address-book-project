import React from "react";
import "./DetailListComponent.css";

const DetailComponent = (props) => {
  return <div className="detail-list-component__card">{props.children}</div>;
};

export default DetailComponent;
