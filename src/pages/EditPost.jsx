import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { getPostDetail, getUsers, updatePost } from "../services/data";

function EditPost() {
  const { postData, usersData } = useLoaderData();
  const actionData = useActionData();
  const { state } = useNavigation();

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm
        users={usersData}
        messages={actionData}
        post={postData}
        state={state}
      />
    </>
  );
}

async function loadData({ request: { signal }, params: { postId } }) {
  const post = getPostDetail(postId, { signal });
  const users = getUsers({ signal });

  return { postData: await post, usersData: await users };
}

async function editPostAction({ request, params: { postId } }) {
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

  const post = await updatePost(
    postId,
    { title, userId: author, body },
    { signal: request.signal },
  );

  return redirect(`/posts/${post.id}`);
}

export const EditPostData = {
  loader: loadData,
  action: editPostAction,
  element: <EditPost />,
};
