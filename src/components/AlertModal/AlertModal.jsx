import React from "react";
import { useDispatch } from "react-redux";
import "./AlertModal.css";
import { deleteRecord } from "../../reducer/Addresses";

const AlertModal = ({ setIsAlertModalOpen, id }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    console.log(id);
    dispatch(deleteRecord({ id: id }));
  };

  return (
    <div>
      <div className="alert-modal__centered">
        <div className="alert-modal__modal">
          <div className="alert-modal__modalHeader">
            <h5 className="alert-modal__heading">Dialog</h5>
          </div>
          <div className="alert-modal__modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="alert-modal__modalActions">
            <div className="alert-modal__actionsContainer">
              <button
                className="alert-modal__deleteBtn"
                onClick={() => {
                  onDeleteClick();
                  setIsAlertModalOpen(false);
                }}
              >
                Delete
              </button>
              <button
                className="alert-modal__cancelBtn"
                onClick={() => setIsAlertModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
