const Comments = (comments = [], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
            return action.payload;
        case 'CREATE':
            return [...comments, action.payload];
        case 'UPDATE':
            return comments.map((comment) => comment._id === action.payload._id ? action.payload : comment);
        case 'DELETE':
            return comments.filter((comment) => comment._id !== action.payload);
        default:
            return comments;
    }
}

export default Comments;
