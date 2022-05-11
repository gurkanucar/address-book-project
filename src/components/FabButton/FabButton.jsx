import React from "react";
import "./FabButton.css";

import { BiExport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { FiMousePointer } from "react-icons/fi";

const FabButton = () => {
  return (
    <div>
      <div class="floating-container">
        <div class="floating-button">
          <FiMousePointer size={30} />
        </div>
        <div class="element-container">
          <span class="float-element">
            <BiExport size={25} />
          </span>
          <span class="float-element">
            <IoMdAdd size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FabButton;
