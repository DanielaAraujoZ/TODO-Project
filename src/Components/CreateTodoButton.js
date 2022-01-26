import React from "react";
import "../stylesComponents/CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton(props) {
  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button
      className="CreateTodoButton "
      onClick={onClickButton}
      data-bs-target="#exampleModal"
      data-bs-toggle="modal"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
