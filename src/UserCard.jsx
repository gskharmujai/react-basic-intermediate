export function UserCard({ name, email, phone, website }) {
  return (
    <div className="col-4 my-3">
      <div className="card p-3">
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <hr />
        <h5>{website}</h5>
      </div>
    </div>
  );
}
