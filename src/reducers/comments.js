import * as actionType from '../constants/actionTypes';

const Comments = (comments = [], action) => {
    switch(action.type){
        case actionType.FETCH_COMMENTS:
            return action.payload;
        case actionType.CREATE:
            return [...comments, action.payload];
        case actionType.UPDATE:
            return comments.map((comment) => comment._id === action.payload._id ? action.payload : comment);
        case actionType.DELETE:
            return comments.filter((comment) => comment._id !== action.payload);
        default:
            return comments;
    }
}

export default Comments;
