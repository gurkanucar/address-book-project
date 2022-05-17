import React from "react";
import "./ImageComponent.css";

const ImageComponent = (props) => {
  const { img, className } = props;
  return <img alt="img" className={className || "summary__img"} src={img} />;
};

export default ImageComponent;
