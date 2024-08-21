import { useLocalStorage } from "../hooks/useLocalStorage";

export function UserProfile() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");
  const [lastName, setLastName] = useLocalStorage("LAST_NAME", "");

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Photography",
    "Gardening",
  ]);

  return (
    <div className="row col-6">
      <div className="col-auto">
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="col-12 mt-4">
        <p>{hobbies.join(",")}</p>
        <button
          className="btn btn-secondary"
          onClick={() =>
            setHobbies((currentHobby) => [...currentHobby, "Programming"])
          }
        >
          Add Hobbies
        </button>
      </div>
    </div>
  );
}
