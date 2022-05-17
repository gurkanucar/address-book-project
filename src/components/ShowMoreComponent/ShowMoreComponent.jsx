import React from "react";

import "./ShowMoreComponent.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const ShowMoreComponent = (props) => {
  const { setExpand, expand, color, className } = props;

  return (
    <div
      onClick={() => {
        setExpand(!expand);
      }}
      className={className || "show-more__root"}
    >
      {expand == true ? (
        <MdKeyboardArrowUp color={color || ""} size={40} />
      ) : (
        <MdKeyboardArrowDown color={color || ""} size={40} />
      )}
    </div>
  );
};

export default ShowMoreComponent;
