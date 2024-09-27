import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
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
        children: [
          { index: true, element: <Team /> },
          { path: ":memberName", element: <TeamMember /> },
        ],
      },
    ],
  },
]);

export function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
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
