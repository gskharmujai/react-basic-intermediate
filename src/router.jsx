import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { PostListData } from "./pages/PostList";
import { UserListData } from "./pages/UserList";
import { TodoListData } from "./pages/TodoList";
import { PostDetailData } from "./pages/PostDetail";
import { UserDetailData } from "./pages/UserDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...PostListData },
              { path: ":postId", ...PostDetailData },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...UserListData },
              { path: ":userId", ...UserDetailData },
            ],
          },
          {
            path: "todos",
            children: [{ index: true, ...TodoListData }],
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
