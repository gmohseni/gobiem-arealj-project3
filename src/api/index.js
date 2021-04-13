import axios from 'axios';

// pointing to backend route
const url = 'http://localhost:8000/post';

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
