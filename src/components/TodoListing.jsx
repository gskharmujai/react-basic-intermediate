import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { ListContext } from "../App";

export function TodoListing() {
  const { todoItems } = useContext(ListContext);

  return (
    <ul>
      {todoItems.map((t) => {
        return <TodoItem key={t.id} {...t} />;
      })}
    </ul>
  );
}
