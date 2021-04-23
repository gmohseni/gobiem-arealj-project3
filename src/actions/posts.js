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

export const getPostByAuthorAndTitle = (username, title) => async (dispatch) => {
    try{
        console.log(username);
        console.log(title);
        const { data } = await api.fetchPostByAuthor(username, title);
        console.log("HERE");
        console.log(data);
        //dispatch({ type: 'FETCH_BY_ID', payload: data});
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
        const { posts } = await api.fetchPost();
        console.log(data);
        console.log(posts);
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

export const createComment = (id, comment) => async (dispatch) =>{
    try{
        const { data } = await api.createComment(id, comment);
        dispatch({type: 'CREATE_COMMENT', payload: data});
    } catch (error){
        console.log(error);
        
    }
}
