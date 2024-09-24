import { Fragment, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  CHANGE_COUNT: "CHANGE_COUNT",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1;

    case ACTIONS.INCREMENT:
      return count + 1;

    case ACTIONS.RESET:
      return 0;

    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.value;

    default:
      return count;
  }

  return state;
}

export function Counter({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <Fragment>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
      >
        -
      </button>
      {count}
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: ACTIONS.RESET })}
      >
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }
      >
        +5
      </button>
    </Fragment>
  );
}
