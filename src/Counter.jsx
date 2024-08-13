import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  }

  function decrementCounter() {
    if (counter > 0) {
      setCounter(currentCounter => {
        return currentCounter - 1;
      });
    }
  }

  return (
    <div>
      <h2>Counter Value : {counter}</h2>
      <input
        type="button"
        className="btn btn-danger"
        value=" - "
        onClick={decrementCounter}
      />
      <input
        type="button"
        className="ms-2 btn btn-success"
        value=" + "
        onClick={incrementCounter}
      />
    </div>
  );
}
