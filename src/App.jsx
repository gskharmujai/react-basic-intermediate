import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { UserListing } from "./UserListing";

function App() {
  const [users, getUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(getUsers)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container mt-5">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="row">
          <UserListing users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
