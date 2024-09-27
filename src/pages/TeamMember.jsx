import { useEffect } from "react";
import {
  NavLink,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

export function TeamMember() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/teams");
    }, 5000);

    return () => {
      clearTimeout();
    };
  });

  const { memberName } = useParams();
  const fullName = memberName.split("-");
  const context = useOutletContext();
  return (
    <div className="container">
      <h1>
        Team Member - {fullName.map((obj) => obj.toUpperCase()).join(" ")}
      </h1>
      <h5>{context}</h5>
      You will be redirect back to Teams Page in 5 seconds or click{" "}
      <NavLink className="" to="..">
        here
      </NavLink>{" "}
      to go back.
    </div>
  );
}
