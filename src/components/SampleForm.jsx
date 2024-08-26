import { Fragment, useRef } from "react";

export function SampleForm() {
  const nameRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    if (nameRef.current.value !== "") alert(nameRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          id="name"
          ref={nameRef}
          placeholder="Enter Name"
        />
        <br />
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
  );
}
