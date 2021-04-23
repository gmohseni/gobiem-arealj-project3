import * as actionType from '../constants/actionTypes';

const Post = (post = {},  action) => {
    switch(action.type){
        case actionType.FETCH_BY_ID:
            return action.payload;
        case actionType.FETCH_BY_AUTHOR:
            return action.payload;
        case actionType.CREATE_COMMENT:
            return action.payload;
        default:
            return post;
    }
}

export default Post;
