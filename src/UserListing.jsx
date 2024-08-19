import { UserCard } from "./UserCard";
import { Fragment } from "react";

export function UserListing({ users }) {
  return (
    <Fragment>
      {users.map((u) => (
        <UserCard
          name={u.name}
          company={u.company.name}
          email={u.email}
          phone={u.phone}
          key={u.id}
        />
      ))}
    </Fragment>
  );
}
