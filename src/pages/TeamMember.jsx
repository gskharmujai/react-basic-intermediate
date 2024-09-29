import { useEffect } from "react";
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

export function TeamMember() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/team");
    }, 3000);

    return () => {
      clearTimeout();
    };
  });

  // const { memberName } = useParams();
  // const fullName = memberName.split("-");

  const member = useLoaderData();
  const context = useOutletContext();

  return (
    <div className="container">
      <h1>
        {/*Team Member - {fullName.map((obj) => obj.toUpperCase()).join(" ")}*/}
        Team Member - {member.name}
      </h1>
      <h5>{context}</h5>
      You will be redirect back to Teams Page in 3 seconds or click{" "}
      <NavLink className="" to="..">
        here
      </NavLink>{" "}
      to go back.
    </div>
  );
}
