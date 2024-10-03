import { Form, useLoaderData, useNavigation, Link } from "react-router-dom";
import { getTodos } from "../services/data";
import { TodoItem } from "../components/TodoItem";
import { useEffect, useRef } from "react";

function TodoList() {
  const {
    todos,
    searchParams: { query },
  } = useLoaderData();

  const queryRef = useRef();
  const { state } = useNavigation();

  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);

  return (
    <>
      <h1>Todos</h1>
      <Form className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="query"
            name="query"
            defaultValue={query}
            ref={queryRef}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-secondary mb-3">
            Search
          </button>
          <Link className="btn btn-success mb-3 ms-3" to="new">
            New
          </Link>
        </div>
      </Form>

      {state === "loading" ? (
        "Loading...."
      ) : (
        <ul className="p-0 my-0 ms-3">
          {todos.map((obj) => (
            <TodoItem key={obj.id} {...obj} />
          ))}
        </ul>
      )}
    </>
  );
}

async function dataLoader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";

  return { searchParams: { query }, todos: await getTodos({ signal }, query) };
}

export const TodoListData = {
  loader: dataLoader,
  element: <TodoList />,
};
