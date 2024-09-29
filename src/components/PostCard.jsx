import { Link } from "react-router-dom";

export function PostCard({ body, title, id }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-capitalize">{title.slice(0, 25)}</h4>
          <p className="card-text">{body.slice(0, 150)}</p>
          <Link to={`/posts/${id}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
