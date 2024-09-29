import { Link, useLoaderData } from "react-router-dom";
import { getUserDetail, getComments, getPostDetail } from "../services/data";

function PostDetail() {
  const { post, comments, user } = useLoaderData();

  return (
    <>
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-capitalize">{post.title}</h3>
              <p>
                By: <Link to={`/users/${post.userId}`}>{user.name}</Link>
              </p>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="my-3">Comments</h4>
      {comments.map((obj) => (
        <div className="card mb-2" key={obj.id}>
          <div className="card-body">
            <p className="card-title text-capitalize text-secondary">
              {obj.email}
            </p>
            <p className=" card-text">{obj.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}

async function dataLoader({ request: { signal }, params: { postId } }) {
  const post = await getPostDetail(postId, { signal });
  const comments = getComments(postId, { signal });
  const user = getUserDetail(post.userId, { signal });

  return { post, comments: await comments, user: await user };
}

export const PostDetailData = {
  loader: dataLoader,
  element: <PostDetail />,
};
