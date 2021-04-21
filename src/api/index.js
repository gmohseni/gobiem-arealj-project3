import axios from 'axios';

// pointing to backend route
const postUrl = 'http://localhost:8000/post';
const userUrl = 'http://localhost:8000/account';



// export const fetchPost = () => axios.get(postUrl);
// export const fetchPostById = (id) => axios.get(`${postUrl}/${id}`);

// export const createPost = (newPost) => axios.post(postUrl, newPost);
// export const createComment = (id, newComment) => axios.post(`${postUrl}/${id}`, newComment);
// export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);
// export const updatePost = (id, post) => axios.patch(`${postUrl}/${id}`, post);
// export const deleteComment = (postId) => axios.delete(`${postUrl}/${postId}`);
// export const signIn = (username, password) => axios.post('/account/signin', username, password);
// export const signUp = (username, password) => axios.post('/account/signup', username, password);




const API = axios.create({ baseURL:'http://localhost:8000'});

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
export const fetchUsers = () => API.get('/account');

