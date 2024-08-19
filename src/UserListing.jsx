import { UserCard } from "./UserCard";
import { Fragment } from "react";

export function UserListing({ users }) {
  return (
    <Fragment>
      {users.map((u) => (
        <UserCard key={u.id} {...u} />
      ))}
    </Fragment>
  );
}
