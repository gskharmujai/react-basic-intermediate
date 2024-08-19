export function UserCard({ name, company, email, phone }) {
  return (
    <div className="col-4 my-3">
      <div className="card p-3">
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <hr />
        <h5>{company}</h5>
      </div>
    </div>
  );
}
