import React from "react";
import { TodoCounter } from "../Components/TodoCounter.js";
import { TodoSearch } from "../Components/TodoSearch.js";
import { TodoList } from "../Components/TodoList.js";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoItem } from "../Components/TodoItem.js";
import { TodoContext } from "../TodoContext/index";
import { ModalComponent } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm.js";
import { EmptyTodos } from '../Components/EmptyTodos.js'
import { TodosError } from "../Components/TodosError.js";
import { TodosLoading } from "../Components/TodosLoading.js";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <ModalComponent>
          <TodoForm />
        </ModalComponent>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };