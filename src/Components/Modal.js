import React from "react";
import ReactDOM from "react-dom";
import "../stylesComponents/Modal.css";

const ModalComponent = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modalStyles ">{children}</div>,
    document.getElementById("modal")
  );
};

export { ModalComponent };
