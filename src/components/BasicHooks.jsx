import { useState, useRef, useEffect, Fragment } from "react";

export function BasicHooks() {
  const [name, setName] = useState("");
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <Fragment>
      <input
        type="text"
        className="form-control"
        value={name}
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
      />
    </Fragment>
  );
}
