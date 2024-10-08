import { Form, Link, useLoaderData } from "react-router-dom";
import { getPosts, getUsers } from "../services/data";
import { PostCard } from "../components/PostCard";
import { useEffect, useRef } from "react";

function PostList() {
  const {
    posts,
    users,
    searchParams: { query, author },
  } = useLoaderData();

  const queryRef = useRef();
  const authorRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  useEffect(() => {
    authorRef.current.value = author || "";
  }, [author]);

  return (
    <>
      <Form>
        <div className="d-flex">
          <div className="flex-grow-1">
            <h1>Posts</h1>
          </div>
          <div className="">
            <Link to="new" className="btn btn-primary ">
              New
            </Link>
          </div>
        </div>
        <div className="d-flex mb-3">
          <div className="me-3">
            <input
              type="search"
              className="form-control"
              name="query"
              ref={queryRef}
            />
          </div>
          <div className="me-3">
            <select className="form-control" name="author" ref={authorRef}>
              <option value="">- Select -</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <button className="btn btn-primary ">Search</button>
          </div>
        </div>
      </Form>
      <div className="row">
        {posts.map((obj) => (
          <PostCard key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
}

async function dataLoader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const author = searchParams.get("author");
  const filterParams = { q: query };

  if (author != "") {
    filterParams.userId = author;
  }

  const posts = getPosts({ signal, params: filterParams });
  const users = getUsers({ signal });

  return {
    posts: await posts,
    users: await users,
    searchParams: { query, author },
  };
}

export const PostListData = {
  loader: dataLoader,
  element: <PostList />,
};
