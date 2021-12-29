import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure??</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        clicked
      </button>
      <button className="btn " onClick={props.onCancel}>
        cancel
      </button>
    </div>
  );
}

export default Modal;
