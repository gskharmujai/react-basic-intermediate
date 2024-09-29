import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../services/data";
import { PostCard } from "../components/PostCard";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Posts</h1>
      <div className="row">
        {posts.map((obj) => (
          <PostCard key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
}

function dataLoader({ request: { signal } }) {
  return getPosts({ signal });
}

export const PostListData = {
  loader: dataLoader,
  element: <PostList />,
};
