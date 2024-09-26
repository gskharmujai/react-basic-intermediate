import { Fragment, useContext, useState, useRef } from "react";
import { ListContext } from "../App";

export function TodoItem({ item, completed, id }) {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(ListContext);
  const [isEdit, setIsEdit] = useState(false);
  const nameRef = useRef();

  function handleUpdate(e) {
    e.preventDefault();

    if (nameRef.current.value === "") return;
    updateTodo(id, nameRef.current.value);

    setIsEdit(false);
  }

  return (
    <li className="form-check">
      {isEdit ? (
        <form onSubmit={handleUpdate}>
          <input type="text" ref={nameRef} defaultValue={item} />
          <button className="ms-2 btn-secondary btn btn-sm py-0">Save</button>
        </form>
      ) : (
        <Fragment>
          <input
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <label className="form-check-label">{item}</label>

          <button
            className="ms-2 btn-secondary btn btn-sm py-0"
            onClick={() => setIsEdit(true)}
          >
            e
          </button>
          <button
            className="ms-2 btn-secondary btn btn-sm py-0"
            onClick={() => deleteTodo(id)}
          >
            x
          </button>
        </Fragment>
      )}
    </li>
  );
}
