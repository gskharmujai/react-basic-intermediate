import React from "react";

export class BasicHooksClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control"
          value={this.state.name}
          ref={this.nameRef}
          placeholder="class component..."
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </React.Fragment>
    );
  }
}
