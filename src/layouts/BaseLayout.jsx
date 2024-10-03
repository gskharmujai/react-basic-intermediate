import { Outlet, ScrollRestoration } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <ScrollRestoration />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
