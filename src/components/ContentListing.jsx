import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";

export function ContentListing({ url }) {
  const { data, isLoading, isError } = useFetch(url);

  return (
    <div className="row mt-4">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : isError ? (
        <h4>Error</h4>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
