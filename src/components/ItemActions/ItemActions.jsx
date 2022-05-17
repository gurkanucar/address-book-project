import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemActions.css";

import { MdEdit, MdDelete } from "react-icons/md";

import { BiShow } from "react-icons/bi";

const ItemActions = (props) => {
  const { id, setId, setIsAlertModalOpen } = props;
  let navigate = useNavigate();
  //#dfafff
  return (
    <div>
      <div className="item__actions">
        <BiShow
          className="item__action"
          color="fff"
          onClick={() => {
            navigate("/addresses/details/" + id);
          }}
          size={25}
        />
        <MdEdit
          className="item__action"
          color="fff"
          onClick={() => {
            navigate("/addresses/edit/" + id);
          }}
          size={25}
        />
        <MdDelete
          className="item__action"
          onClick={() => {
            setIsAlertModalOpen(true);
            setId(id);
          }}
          size={25}
          color={"fff"}
        />
      </div>
    </div>
  );
};

export default ItemActions;
