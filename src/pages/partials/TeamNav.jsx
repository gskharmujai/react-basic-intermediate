import { NavLink, useLoaderData } from "react-router-dom";

export function TeamNav() {
  const teamMembers = useLoaderData();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <ul className="navbar-nav">
          {teamMembers.map((obj) => (
            <li className="nav-item" key={obj.id}>
              <NavLink to={obj.id.toString()} className="nav-link">
                {obj.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
