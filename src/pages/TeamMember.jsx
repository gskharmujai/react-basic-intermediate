import { NavLink, useOutletContext } from "react-router-dom";

export function TeamMember({ name }) {
  const fullName = name.split("-");
  const context = useOutletContext();
  return (
    <div className="container">
      <h1>
        Team Member - {fullName.map((obj) => obj.toUpperCase()).join(" ")}
      </h1>
      <h5>{context}</h5>
      <NavLink className="btn btn-success mt-2" to="..">
        Back
      </NavLink>
    </div>
  );
}
