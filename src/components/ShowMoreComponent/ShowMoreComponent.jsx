import React from "react";

import "./ShowMoreComponent.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const ShowMoreComponent = (props) => {
  const { setExpand, expand } = props;

  return (
    <div
      onClick={() => {
        setExpand(!expand);
      }}
      className="show-more__root"
    >
      {expand == true ? (
        <MdKeyboardArrowUp size={40} />
      ) : (
        <MdKeyboardArrowDown size={40} />
      )}
    </div>
  );
};

export default ShowMoreComponent;
