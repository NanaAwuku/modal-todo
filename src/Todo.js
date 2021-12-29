import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ title }) {
  const [openModal, setOpenModal] = useState(false);

  const openClickHandler = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={openClickHandler}>
          Delete
        </button>
      </div>
      {openModal && <Modal onCancel={closeModal} />}
      {openModal && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Todo;
