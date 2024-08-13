import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const incrementCounter = () => {
      this.setState(currentState => {
        return { counter: currentState.counter + 1 };
      });
    };

    const decrementCounter = () => {
      this.setState(currentState => {
        if (currentState.counter > 0) {
          return { counter: currentState.counter - 1 };
        }
      });
    };

    return (
      <div>
        <h2>Counter Value : {this.state.counter}</h2>
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
}
