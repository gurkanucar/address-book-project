import React from "react";
import "./ImageComponent.css";
import { FaPhone, FaUser } from "react-icons/fa";
import ImageComponent from "./ImageComponent";

const UserImageComponent = (props) => {
  const { img, className, size, color } = props;
  return (
    <div>
      {img !== "" ? (
        <ImageComponent className={className} img={img} />
      ) : (
        <FaUser color={color} size={size || 180} />
      )}
    </div>
  );
};

export default UserImageComponent;
