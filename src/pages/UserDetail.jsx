import { Link, useLoaderData } from "react-router-dom";
import { getUserDetail, getPosts, getTodos } from "../services/data";
import { TodoItem } from "../components/TodoItem";
import { PostCard } from "../components/PostCard";

function UserDetail() {
  const { user, posts, todos } = useLoaderData();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-capitalize">{user.name}</h2>
          <p className="card-text m-0">
            <b>Company :</b>
            {user.company.name}
          </p>
          <p className="card-text m-0">
            <b>Phone :</b>
            {user.phone}
          </p>
          <p className="card-text">
            <b>Email :</b>
            {user.email}
          </p>
          <p className="card-text">
            <b>Address :</b> {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
        <div className="card-body">
          <h4 className="my-3">Posts</h4>
          <div className="row">
            {posts.map((obj) => (
              <PostCard key={obj.id} {...obj} />
            ))}
          </div>
        </div>
        <div className="card-body">
          <h4 className="my-3">Todos</h4>
          <ul>
            {todos.map((obj) => (
              <TodoItem key={obj.id} {...obj} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

async function dataLoader({ request: { signal }, params: { userId } }) {
  const user = getUserDetail(userId, { signal });
  const posts = getPosts({ signal, params: { userId } });
  const todos = getTodos({ signal, params: { userId } });

  return { user: await user, posts: await posts, todos: await todos };
}

export const UserDetailData = {
  loader: dataLoader,
  element: <UserDetail />,
};
