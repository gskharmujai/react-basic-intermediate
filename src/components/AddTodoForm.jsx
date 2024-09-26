import { useContext, useRef } from "react";
import { ListContext } from "../App";

export function AddTodoForm() {
  const { addNewTodo } = useContext(ListContext);
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (nameRef.current.value === null) return;

    addNewTodo(nameRef.current.value);

    nameRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          ref={nameRef}
          placeholder="enter your todo item"
        />
      </div>
      <div className="d-grid">
        <button className="btn btn-block btn-primary mt-3">Add New</button>
      </div>
    </form>
  );
}
