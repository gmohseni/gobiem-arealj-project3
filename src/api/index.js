import axios from 'axios';

// pointing to backend route
const postUrl = 'http://localhost:8000/post';

export const fetchPost = () => axios.get(postUrl);
export const fetchPostById = (id) => axios.get(`${postUrl}/${id}`);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const createComment = (id, newComment) => axios.post(`${postUrl}/${id}`, newComment);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);
export const updatePost = (id, post) => axios.patch(`${postUrl}/${id}`, post);
export const deleteComment = (postId, comment) => axios.delete(`${postUrl}/${postId}`, comment);
