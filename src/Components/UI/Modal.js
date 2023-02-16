import React from "react";
import Cart from "../Cart";

const Modal = (props) => {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <Cart {...props} />
      </div>
    </div>
  );
};

export default Modal;
