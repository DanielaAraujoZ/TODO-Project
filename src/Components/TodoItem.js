import React from "react";
import "../stylesComponents/TodoItem.css";

function TodoItem(props) {
  // const onComplete = () => {
  //   alert("Completaste el TODO " + props.text);
  // };

  // const onDelete = () => {
  //   alert("Borraste el TODO " + props.text);
  // };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ☑
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        ✗
      </span>
    </li>
  );
}
export { TodoItem };
