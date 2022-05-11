import React from "react";
import "./FabButton.css";

import { BiExport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { FiMousePointer } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { csvExport } from "../../util/csvExport";

const FabButton = () => {
  let navigate = useNavigate();

  const addressList = useSelector((state) => state.addresses.value);

  return (
    <div>
      <div className="floating-container">
        <div className="floating-button">
          <FiMousePointer size={30} />
        </div>
        <div className="element-container">
          <span
            onClick={() => {
              csvExport(addressList);
            }}
            className="float-element"
          >
            <BiExport size={25} />
          </span>
          <span
            onClick={() => {
              navigate("/addresses/new");
            }}
            className="float-element"
          >
            <IoMdAdd size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FabButton;
