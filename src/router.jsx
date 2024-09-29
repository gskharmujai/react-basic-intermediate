import {
  createBrowserRouter,
  Navigate,
  Outlet,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";

import { NavBar } from "./pages/partials/NavBar";
import { TeamNav } from "./pages/partials/TeamNav";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamLayout />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users?_limit=2", {
            signal,
          });
        },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            element: <TeamMember />,
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                {
                  signal,
                },
              ).then((res) => {
                if (res.status === 200) return res.json();

                throw redirect("/team");
              });
            },
          },
        ],
      },
    ],
  },
]);

export function Layout() {
  const { state } = useNavigation();
  return (
    <>
      <NavBar />
      {state === "loading" ? "Loading..." : <Outlet />}
    </>
  );
}

export function TeamLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="Sub-Heading from Context" />
    </>
  );
}
