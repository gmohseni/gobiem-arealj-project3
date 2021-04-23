import * as actionType from '../constants/actionTypes';

const Posts = (state = {posts: [], createdPost: {}}, action) => {
    switch(action.type){
        case actionType.CLEARCREATEDPOST:
            return {...state, createdPost: {}};
        case actionType.FETCH_POSTS:
            return {...state, posts: action.payload};
        case actionType.CREATE:
            return {...state, posts: [...state.posts, action.payload], createdPost: action.payload};
        case actionType.UPDATE:
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case actionType.DELETE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
        default:
            return state;
    }
}

export default Posts;
