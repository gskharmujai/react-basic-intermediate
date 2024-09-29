import { useLoaderData } from "react-router-dom";
import { getTodos } from "../services/data";
import { TodoItem } from "../components/TodoItem";

function TodoList() {
  const todos = useLoaderData();

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((obj) => (
          <TodoItem key={obj.id} {...obj} />
        ))}
      </ul>
    </>
  );
}

function dataLoader({ request: { signal } }) {
  return getTodos({ signal });
}

export const TodoListData = {
  loader: dataLoader,
  element: <TodoList />,
};
