import { useState, Fragment } from "react";

export function ContentSelector({ url, setUrl, URLS }) {
  return (
    <div className="row">
      <div className="col-auto form-check">
        <input
          type="radio"
          className="form-check-input"
          checked={url === URLS.USERS}
          onChange={() => setUrl(URLS.USERS)}
        />
        <label htmlFor="" className="form-check-label">
          Users
        </label>
      </div>
      <div className="col-auto form-check">
        <input
          type="radio"
          className="form-check-input"
          checked={url === URLS.POSTS}
          onChange={() => setUrl(URLS.POSTS)}
        />
        <label htmlFor="" className="form-check-label">
          Posts
        </label>
      </div>
      <div className="col-auto form-check">
        <input
          type="radio"
          className="form-check-input"
          checked={url === URLS.COMMENTS}
          onChange={() => setUrl(URLS.COMMENTS)}
        />
        <label htmlFor="" className="form-check-label">
          Comments
        </label>
      </div>
    </div>
  );
}
