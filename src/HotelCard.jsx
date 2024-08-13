export function HotelCard({ name, description, rating, cost }) {
  return (
    <div className="col-4">
      <div className="card p-3">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="p-0 m-0">
          <strong>Rating :</strong> {rating} / 5
        </p>
        <hr />
        <h5>INR {cost} / night</h5>
      </div>
    </div>
  );
}
