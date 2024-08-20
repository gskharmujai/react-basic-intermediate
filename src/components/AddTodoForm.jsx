import { useState, Fragment } from "react";

export function AddTodoForm({ setTodoItems }) {
  const [todoItem, setTodoItem] = useState("");

  /**
   * add new todo item.
   */
  function addNewTodo() {
    // prevent adding new todo if item is empty.
    if (todoItem === "") return;

    setTodoItems((currentTodo) => {
      return [
        ...currentTodo,
        { item: todoItem, completed: false, id: crypto.randomUUID() },
      ];
    });

    setTodoItem("");
  }

  return (
    <Fragment>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
          placeholder="enter your todo item"
        />
      </div>
      <div className="d-grid">
        <button className="btn btn-block btn-primary mt-3" onClick={addNewTodo}>
          Add New
        </button>
      </div>
    </Fragment>
  );
}
