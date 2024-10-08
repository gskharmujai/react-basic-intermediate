import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { createPost, getUsers } from "../services/data";
import { PostForm } from "../components/PostForm";

function NewPost() {
  const actionData = useActionData();
  const usersData = useLoaderData();
  const { state } = useNavigation();

  return (
    <>
      <h1>New Post</h1>
      <PostForm messages={actionData} users={usersData} state={state} />
    </>
  );
}

async function newPostAction({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const author = formData.get("author");
  const body = formData.get("body");

  if (title == "") {
    return "Title is required";
  }

  if (author == "") {
    return "Author is required";
  }

  if (body == "") {
    return "Body is required";
  }

  const newPost = await createPost(
    { title, userId: author, body },
    { signal: request.signal },
  );
  return redirect(`/posts/${newPost.id}`);
}

function loadAuthorsData({ request: { signal } }) {
  return getUsers({ signal });
}

export const NewPostData = {
  loader: loadAuthorsData,
  action: newPostAction,
  element: <NewPost />,
};
