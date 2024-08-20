export function TodoItem({ item, completed, id, toggleTodo, deleteTodo }) {
  return (
    <li className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label className="form-check-label">{item}</label>
      <button
        className="ms-2 btn-secondary btn btn-sm py-0"
        onClick={() => deleteTodo(id)}
      >
        x
      </button>
    </li>
  );
}
