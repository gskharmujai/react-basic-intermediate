import React from "react";

export class NameCounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <div className="container mt-2">
        <h2>Counter with Age Function</h2>
        <div className="row mt-4">
          <div className="col-auto">
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-auto">
            <button
              className="btn btn-secondary"
              onClick={() =>
                this.setState((currentState) => {
                  if (currentState.age > 0) {
                    return { age: currentState.age - 1 };
                  }
                  return { age: currentState.age };
                })
              }
            >
              -
            </button>
            <label htmlFor="" className="mx-3">
              {this.state.age}
            </label>
            <button
              className="btn btn-secondary"
              onClick={() =>
                this.setState((currentState) => {
                  return { age: currentState.age + 1 };
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <h4 className={`mt-4 ${this.state.name == '' && 'd-none'}`}>
          My name is {this.state.name} and I am {this.state.age} years old.
        </h4>
      </div>
    );
  }
}
