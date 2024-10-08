import { Form, Link } from "react-router-dom";

export function PostForm({ users, messages, post = {}, state }) {
  const isSubmitting = state == "submitting";
  const isDisabled = isSubmitting ? "disabled" : "";
  const hasError = messages ? "" : "d-none";

  return (
    <>
      <Form method="post">
        <p className={`alert alert-danger ${hasError}`}>{messages}</p>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              id="title"
              name="title"
              defaultValue={post.title}
            />
          </div>
          <div className="col-6">
            <select
              name="author"
              id="author"
              className="form-control"
              defaultValue={post.userId}
            >
              <option value="">- Author -</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <textarea
              name="body"
              id="body"
              className="form-control"
              placeholder="Body"
              defaultValue={post.body}
            ></textarea>
          </div>
        </div>
        <div className="">
          <Link to=".." className="btn btn-secondary me-2">
            Back
          </Link>
          <button className={`btn btn-success ${isDisabled}`}>
            {isSubmitting ? "Saving.." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
}
