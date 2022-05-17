import React, { useEffect, useState } from "react";
import AlertModal from "../AlertModal/AlertModal";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = (props) => {
  const { datas } = props;

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (isAlertModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.pointerEvents = "all";
    }
  }, [isAlertModalOpen]);

  return (
    <div className="list__root">
      <div className="list__data">
      {datas.map((item, index) => {
        return (
          <ListItem
            setId={setId}
            key={item.id}
            setIsAlertModalOpen={setIsAlertModalOpen}
            item={item}
          />
        );
      })}
      </div>
      {isAlertModalOpen && (
        <AlertModal id={id} setIsAlertModalOpen={setIsAlertModalOpen} />
      )}
    </div>
  );
};

export default List;
