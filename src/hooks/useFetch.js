import { useState, useEffect, useRef } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError(false);

    const controller = new AbortController();
    fetch(url, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(setData)
      .catch((e) => {
        if (e.name === "AbortError") return;

        setError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
}
