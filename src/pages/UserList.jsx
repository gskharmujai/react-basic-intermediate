import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../services/data";

function UserList() {
  const users = useLoaderData();

  return (
    <>
      <h1>Users</h1>
      <div className="row">
        {users.map((obj) => (
          <div className="col-md-3 mb-4" key={obj.id}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{obj.name}</h4>
                <p className="card-text m-0">{obj.company.name}</p>
                <p className="card-text">{obj.email}</p>
                <Link to={`/users/${obj.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function dataLoader({ request: { signal } }) {
  return getUsers({ signal });
}

export const UserListData = {
  loader: dataLoader,
  element: <UserList />,
};
