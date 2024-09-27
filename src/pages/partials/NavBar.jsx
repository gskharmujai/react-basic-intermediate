import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/team" className="nav-link">
              Team
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
