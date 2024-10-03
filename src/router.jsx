import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { TodoListData } from "./pages/TodoList";
import { NewTodo } from "./pages/NewTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/todos" /> },
          {
            path: "todos",
            children: [
              { index: true, ...TodoListData },
              {
                path: "new",
                element: <NewTodo />,
                action: async ({ request }) => {
                  const formData = await request.formData();
                  const title = formData.get("title");

                  if (title === "") {
                    return "Title is required";
                  }

                  const todo = await fetch("https://example.com", {
                    method: "POST",
                    signal: request.signal,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title }),
                  });

                  console.log(todo);
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

export function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h2>Something went wrong</h2>
      <p>We are currently checking this issue from our end.</p>
      <pre>{error.message} </pre>
      <pre>{error.stack} </pre>
    </>
  );
}
