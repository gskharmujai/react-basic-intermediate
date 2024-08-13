import { HotelCard } from "./HotelCard";

export function HotelListing({ hotelList }) {
  return (
    <div className="row my-5">
      {hotelList.map(hotel => (
        <HotelCard
          name={hotel.name}
          description={hotel.shortDescription}
          rating={hotel.ratings}
          cost={hotel.roomCost}
        />
      ))}
    </div>
  );
}
