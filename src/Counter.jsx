import { useState } from "react";

export function Counter() {
  const [counter, counterValue] = useState(0);

  return (
    <div>
      <h2>Counter Value {counter}</h2>
      <input type="button" value=" + " onClick={incrementCounter} />
      <input type="button" value=" - " onClick={decrementCounter} />
    </div>
  );

  function incrementCounter() {
    counterValue(counter + 1);
  }

  function decrementCounter() {
    if (counter > 0) {
      counterValue(counter - 1);
    }
  }
}
