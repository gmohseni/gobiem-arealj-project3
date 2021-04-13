import * as api from '../api';

// Action creators, functions that return actions

export const getPosts = () => async (dispatch) => {

    try{
        const { data } = await api.fetchPost();
        dispatch({ type: 'FETCH_POSTS', payload: data});
    } catch (error){
        console.log(error.message);

    }
}

export const getPostById = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchPostById(id);
        dispatch({ type: 'FETCH_BY_ID', payload: data});
    } catch (error){
        console.log(error.message);

    }
}

export const createPost = (post) => async (dispatch) =>{
    try{
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error);
        
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    console.log(id);
    console.log(post);
    try{
        const { data } = await api.updatePost(id, post);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error){
        console.log(error);
        
    }
}

export const deletePost = (id) => async (dispatch) => {
    console.log(id);
    try {
        await api.deletePost(id);

        dispatch({type: 'DELETE'});
    } catch (error) {
        console.log(error);
    }
}

export const createComment = (id, comment) => async (dispatch) =>{
    try{
        const { data } = await api.createComment(id, comment);
        dispatch({type: 'CREATE_COMMENT', payload: data});
    } catch (error){
        console.log(error);
        
    }
}
