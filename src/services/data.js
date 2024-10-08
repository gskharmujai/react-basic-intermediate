import { baseUrl } from "./baseUrl";

export function getPosts(options) {
  return baseUrl.get(`/posts`, options).then((res) => res.data);
}

export function getPostDetail(id, options) {
  return baseUrl.get(`/posts/${id}`, options).then((res) => res.data);
}

export function getUsers(options) {
  return baseUrl.get("/users", options).then((res) => res.data);
}

export function getUserDetail(id, options) {
  return baseUrl.get(`/users/${id}`, options).then((res) => res.data);
}

export function getTodos(options) {
  return baseUrl.get("/todos", options).then((res) => res.data);
}

export function getComments(postId, options) {
  return baseUrl
    .get(`/posts/${postId}/comments`, options)
    .then((res) => res.data);
}

export function createPost(data, options) {
  return baseUrl.post("/posts", data, options).then((res) => res.data);
}

export function updatePost(postId, data, options) {
  return baseUrl.put(`/posts/${postId}`, data, options).then((res) => res.data);
}
