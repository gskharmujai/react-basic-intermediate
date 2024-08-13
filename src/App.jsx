import "bootstrap/dist/css/bootstrap.min.css";
import { HotelListing } from "./HotelListing";
import { HotelListingClass } from "./HotelListingClass";
import hotels from "./assets/hotels.json";

function App() {
  return (
    <div className="container mt-5">
      <HotelListing hotelList={hotels} />
      <HotelListingClass hotelList={hotels} />
    </div>
  );
}

export default App;
