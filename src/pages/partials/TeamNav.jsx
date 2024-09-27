import { NavLink } from "react-router-dom";

export function TeamNav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="bruno-mars" className="nav-link">
              Bruno Mars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="rick-price" className="nav-link">
              Rick Price
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
