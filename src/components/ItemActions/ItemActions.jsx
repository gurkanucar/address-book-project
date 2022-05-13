import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemActions.css";

import { MdEdit, MdDelete } from "react-icons/md";

import { BiShow } from "react-icons/bi";
import { URL_PREFIX } from "../../constants";

const ItemActions = (props) => {
  const { id, setId, setIsAlertModalOpen } = props;
  let navigate = useNavigate();
  return (
    <div>
      <div className="item__actions">
        <BiShow
          color="e48902"
          onClick={() => {
            navigate(URL_PREFIX+"/addresses/details/" + id);
          }}
          size={25}
        />
        <MdEdit
          onClick={() => {
            navigate(URL_PREFIX+"/addresses/edit/" + id);
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
