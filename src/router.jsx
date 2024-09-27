import { createBrowserRouter, Outlet } from "react-router-dom";
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
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "bruno-mars", element: <TeamMember name="bruno-mars" /> },
          { path: "rick-price", element: <TeamMember name="rick-price" /> },
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
