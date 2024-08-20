import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { AddTodoForm } from "./components/AddTodoForm";
import { TodoListing } from "./components/TodoListing";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="container mt-5">
      <div className="col-5">
        <h2>Todo List</h2>
        <TodoListing items={todoItems} setTodoItems={setTodoItems} />
        <AddTodoForm setTodoItems={setTodoItems} />
      </div>
    </div>
  );
}

export default App;
