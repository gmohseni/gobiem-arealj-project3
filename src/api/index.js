import axios from 'axios';

// pointing to backend route
const url = 'http://localhost:8000/post';

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);