import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export function NewTodo() {
  const actionData = useActionData();
  const state = useNavigation();

  const isSubmit = state === "submitting";

  return (
    <Form method="post">
      <h1>New Todo</h1>
      {actionData}

      <div className="mb-3 col-3">
        <input type="text" className="form-control" name="title" />
      </div>
      <Link to=".." className="btn btn-info">
        Back
      </Link>
      <button
        type="submit"
        className="btn btn-success ms-2"
        disabled={isSubmit}
      >
        Add New
      </button>
    </Form>
  );
}
