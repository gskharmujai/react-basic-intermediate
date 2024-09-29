import { Outlet, ScrollRestoration } from "react-router-dom";
import { PrimaryNav } from "./PrimaryNav";

export function BaseLayout() {
  return (
    <>
      <PrimaryNav />
      <ScrollRestoration />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
