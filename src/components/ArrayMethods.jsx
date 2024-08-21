import { Fragment, useState } from "react";
import { useArray } from "../hooks/useArray";

const INITIAL_ARRAY = [1, 2, 3];

export function ArrayMethods() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <Fragment>
      <div className="col-12">
        <h3>Array Values : {array.join(", ")}</h3>
      </div>
      <div className="col-12 mt-3 d-flex flex-row">
        <button
          className="mx-2 btn btn-secondary"
          onClick={() => set([4, 5, 6])}
        >
          Set to [4, 5, 6]
        </button>
        <button className="mx-2 btn btn-secondary" onClick={() => push(4)}>
          Push 4
        </button>
        <button
          className="mx-2 btn btn-secondary"
          onClick={() => replace(1, 9)}
        >
          Replace the second element with 9
        </button>
        <button
          className="mx-2 btn btn-secondary"
          onClick={() => filter((n) => n < 3)}
        >
          Keep numbers less than 3
        </button>
        <button className="mx-2 btn btn-secondary" onClick={() => remove(1)}>
          Remove second element
        </button>
        <button className="mx-2 btn btn-secondary" onClick={clear}>
          Clear
        </button>
        <button className="mx-2 btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </Fragment>
  );
}
