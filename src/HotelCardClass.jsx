import React from "react";

export class HotelCardClass extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card p-3">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <p className="p-0 m-0">
            <strong>Rating :</strong> {this.props.rating} / 5
          </p>
          <hr />
          <h5>INR {this.props.cost} / night</h5>
        </div>
      </div>
    );
  }
}
