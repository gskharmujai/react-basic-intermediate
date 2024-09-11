import { Fragment, useState } from "react";
import { checkEmail, checkPassword } from "../validators";

export function SampleForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if(emailResults.length === 0 && passwordResults.length === 0) {
      alert("Login success");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="col-7">
        <input
          type="email"
          className={`form-control ${emailErrors.length > 0 ? 'bg-danger-subtle' : ''}`}
          id="email"
          value={email}
          placeholder="Enter Email"
          onChange={e => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (<span className="text text-danger">{emailErrors.join(", ")}</span>)}
        
      </div>
      <div className="col-7 mt-3">
        <input
          type="password"
          className={`form-control ${passwordErrors.length > 0 ? 'bg-danger-subtle' : ''}`}
          id="password"
          value={password}
          placeholder="Enter Password"
          onChange={e => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (<span className="text text-danger">{passwordErrors.join(", ")}</span>)}
      </div>
      <button className="mt-3 btn btn-secondary">Submit</button>
    </form>
  );
}
