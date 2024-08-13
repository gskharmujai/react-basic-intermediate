import React from "react";
import { HotelCardClass } from "./HotelCardClass";

export class HotelListingClass extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.hotelList.map(hotel => (
          <HotelCardClass
            name={hotel.name}
            description={hotel.shortDescription}
            rating={hotel.ratings}
            cost={hotel.roomCost}
          />
        ))}
      </div>
    );
  }
}
