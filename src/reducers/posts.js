import * as actionType from '../constants/actionTypes';

const Posts = (posts = [], action) => {
    switch(action.type){
        case actionType.FETCH_POSTS:
            return action.payload;
        case actionType.CREATE:
            return [...posts, action.payload];
        case actionType.UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case actionType.DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default Posts;
