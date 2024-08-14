import React from "react";

export class ChildClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("** Hi **");
    console.log("** Render **");
  }

  componentWillUnmount() {
    console.log("** Bye **");

    if (this.nameTimeout !== null) {
      clearTimeout(this.nameTimeout);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("** Render **");

    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `** My name is ${this.state.name} and I am ${this.state.age} years old **`
      );
    }

    if (prevState.name != this.state.name) {
      document.title = this.state.name;

      if (this.nameTimeout !== null) {
        clearTimeout(this.nameTimeout);
      }

      this.nameTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  render() {
    return (
      <div className="container mt-2">
        <h2>Counter with Age Class</h2>
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
        <h4 className="mt-4">
          My name is {this.state.name} and I am {this.state.age} years old.
        </h4>
      </div>
    );
  }
}
