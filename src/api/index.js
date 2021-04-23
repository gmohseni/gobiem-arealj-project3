import axios from 'axios';

const API = axios.create({ baseURL:'https://gobiem-arealj-webdev2021-pr3-b.herokuapp.com'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;

});

export const fetchPost = () => API.get('/post');
export const fetchPostById = (id) => API.get(`/post/${id}`);
export const createPost = (newPost) => API.post('/post', newPost);
export const createComment = (id, newComment) => API.post(`/post/${id}`, newComment);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const updatePost = (id, post) => API.patch(`post/${id}`, post);
export const deleteComment = (postId) => API.delete(`/post/${postId}`);
export const signIn = (username, password) => API.post('/account/signin', username, password);
export const signUp = (username, password) => API.post('/account/signup', username, password);

