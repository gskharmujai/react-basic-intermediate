import { Fragment, useState, useRef } from "react";
import { checkEmail, checkPassword } from "../validators";

export function ReferenceForm() {
  
  const email = useRef();
  const password = useRef(); 

  const [isFirstSubmit, setIsFirstSubmit] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setIsFirstSubmit(true);

    const emailResults = checkEmail(email.current.value);
    const passwordResults = checkPassword(password.current.value);

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
          ref={email}
          placeholder="Enter Email"
          onChange={ isFirstSubmit && (e => setEmailErrors(checkEmail(e.target.value))) }
        />
        {emailErrors.length > 0 && (<span className="text text-danger">{emailErrors.join(", ")}</span>)}
        
      </div>
      <div className="col-7 mt-3">
        <input
          type="password"
          className={`form-control ${passwordErrors.length > 0 ? 'bg-danger-subtle' : ''}`}
          ref={password}
          placeholder="Enter Password"
          onChange={ isFirstSubmit && ((e) => setPasswordErrors(checkPassword(e.target.value))) }
        />
        {passwordErrors.length > 0 && (<span className="text text-danger">{passwordErrors.join(", ")}</span>)}
      </div>
      <button className="mt-3 btn btn-secondary">Submit</button>
    </form>
  );
}
