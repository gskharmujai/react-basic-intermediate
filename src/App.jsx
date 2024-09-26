import "bootstrap/dist/css/bootstrap.min.css";

import { createContext, useEffect, useReducer, useState } from "react";

import { TodoListing } from "./components/TodoListing";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoFilterForm } from "./components/TodoFilterForm";

const LOCAL_STORAGE_KEY = "TODO";

const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE",
  UPDATE: "UPDATE",
};

function reducer(todoItems, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todoItems,
        { item: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTIONS.DELETE:
      return todoItems.filter((t) => t.id !== payload.id);

    case ACTIONS.TOGGLE:
      return todoItems.map((t) => {
        if (t.id === payload.id) {
          return { ...t, completed: payload.completed };
        }
        return t;
      });

    case ACTIONS.UPDATE:
      return todoItems.map((t) => {
        if (t.id === payload.id) {
          return { ...t, item: payload.name };
        }
        return t;
      });
  }

  return state;
}

export const ListContext = createContext();

function App() {
  const [filterName, setFilterName] = useState("");
  const [filterComplete, setFilterComplete] = useState(false);

  const [todoItems, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) {
      return initialValue;
    }

    return JSON.parse(value);
  });

  const filteredTodos = todoItems.filter((todo) => {
    if (todo.completed && filterComplete) return null;

    return todo.item.includes(filterName);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  /**
   * add new todo item.
   */
  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  /**
   * toggle todo item to check or uncheck.
   */
  function toggleTodo(id, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id, completed } });
  }

  /**
   * delete todo item
   */
  function deleteTodo(id) {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  }

  function updateTodo(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  }

  return (
    <div className="container mt-5">
      <div className="col-5">
        <h2>Todo List</h2>
        <ListContext.Provider
          value={{
            todoItems: filteredTodos,
            toggleTodo,
            deleteTodo,
            addNewTodo,
            updateTodo,
          }}
        >
          <TodoFilterForm
            filterName={filterName}
            setFilterName={setFilterName}
            filterComplete={filterComplete}
            setFilterComplete={setFilterComplete}
          />
          <hr />
          <TodoListing />
          <AddTodoForm />
        </ListContext.Provider>
      </div>
    </div>
  );
}

export default App;
