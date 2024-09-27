import { useOutletContext } from "react-router-dom";
import { TeamNav } from "./partials/TeamNav";

export function Team() {
  const context = useOutletContext();
  return (
    <div className="container">
      <h1>Team Page</h1>
      <h5>{context}</h5>
    </div>
  );
}
