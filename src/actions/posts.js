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
    try{
        const { data } = await api.updatePost(id, post);
        console.log(data);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error){
        console.log(error);
        
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: 'DELETE'});
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = (id, commentId) => async (dispatch) => {
    // id --> post and commentId --> commentId

    try {
        // console.log(id);
        // console.log(commentId);
        const { data } = await api.deleteComment(id, commentId);
        // console.log(commentId);
        // console.log("this first");
        console.log(data);
        dispatch({type: 'DELETE_COMMENT', payload:{id: commentId}});
        
    } catch (error) {
        console.log(error);
    }
}

// export const getCommentById = (id, commentId) => async (dispatch) => {
//     try{
        
//         const { data } = await api.fetchCommentById(commentId);
        
//         dispatch({ type: 'FETCH_COMMENT_ID', payload:data});
//     } catch (error){
       
//         console.log(error.message);

//     }
// }

// export const getPostById = (id) => async (dispatch) => {
//     try{
//         const { data } = await api.fetchPostById(id);
//         dispatch({ type: 'FETCH_BY_ID', payload: data});
//     } catch (error){
//         console.log(error.message);

//     }
// }



export const createComment = (id, comment) => async (dispatch) =>{
    try{
        const { data } = await api.createComment(id, comment);
        
        
        dispatch({type: 'CREATE_COMMENT', payload: data});
        
    } catch (error){
        console.log(error);
        
    }
}
