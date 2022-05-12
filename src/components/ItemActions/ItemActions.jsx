import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemActions.css";

import { MdEdit, MdDelete } from "react-icons/md";

const ItemActions = (props) => {
  const { id, setId, setIsAlertModalOpen } = props;
  let navigate = useNavigate();
  return (
    <div>
      <div className="item__actions">
        <MdEdit
          onClick={() => {
            navigate("/addresses/edit/" + id);
          }}
          size={25}
        />
        <MdDelete
          onClick={() => {
            setIsAlertModalOpen(true);
            setId(id);
          }}
          size={25}
          color={"#f2493d"}
        />
      </div>
    </div>
  );
};

export default ItemActions;
