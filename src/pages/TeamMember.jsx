import { NavLink, useOutletContext, useParams } from "react-router-dom";

export function TeamMember() {
  const { memberName } = useParams();
  const fullName = memberName.split("-");
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
