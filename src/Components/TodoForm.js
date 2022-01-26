import React from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const { setOpenModal, openModal, addTodo} = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onAdd = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
}

  const onCancel = () => {
    setOpenModal(!openModal);
  };

  
  return (
    <>
      <form onSubmit={onAdd}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Write you TODO here
          </label>
          <textarea
            value={newTodoValue}
            onChange={onChange}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            It will send to your list TODO.
          </div>
        </div>
        <button type="submit" class="btn btn-success">
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </>
  );
};

export { TodoForm };
