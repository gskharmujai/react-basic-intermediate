import { NavLink } from "react-router-dom";

export function PrimaryNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Basic Routing App
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="users">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="todos">
              Todo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
