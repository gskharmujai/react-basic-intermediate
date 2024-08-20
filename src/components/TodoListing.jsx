import { TodoItem } from "./TodoItem";

export function TodoListing({ items, setTodoItems }) {
  /**
   * toggle todo item to check or uncheck.
   */
  function toggleTodo(id, completed) {
    setTodoItems((currentTodos) => {
      return currentTodos.map((t) => {
        if (t.id == id) {
          return { ...t, completed };
        }
        return t;
      });
    });
  }

  /**
   * delete todo item
   */
  function deleteTodo(id) {
    setTodoItems((currentTodos) => {
      return currentTodos.filter((t) => t.id !== id);
    });
  }

  return (
    <ul>
      {items.map((t) => {
        return (
          <TodoItem
            key={t.id}
            {...t}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
