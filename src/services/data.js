import { baseUrl } from "./baseUrl";

export function getTodos(options, query) {
  return baseUrl
    .get(`/todos?_limit=20&q=${query}`, options)
    .then((res) => res.data);
}
