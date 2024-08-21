import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { ContentSelector } from "./components/ContentSelector";
import { ContentListing } from "./components/ContentListing";

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState(URLS.USERS);

  return (
    <div className="container mt-5">
      <ContentSelector url={url} setUrl={setUrl} URLS={URLS} />
      <ContentListing url={url} />
    </div>
  );
}

export default App;
