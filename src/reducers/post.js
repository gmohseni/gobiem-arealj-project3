const Post = (post = {id: "", title: "", createdAt: "", message: "", comments: []},  action) => {
    switch(action.type){
        case 'FETCH_BY_ID':
            return action.payload;
        // return {...post, id: action.payload.id, title: action.payload.title, createdAt:action.payload.createdAt, message: action.payload.message, comments: action.payload.comments };
        case 'CREATE_COMMENT':
            // return post.comments.push(action.payload);
            return {...post, comments: [...post.comments, action.payload]}
        case 'DELETE_COMMENT':
            const newArray = post.comments.filter((comment) => {return comment.id !== action.payload});
            return {...post, comments: newArray}
            // return post.comments.filter((comment) => comment.id !== action.payload);

        default:
            return post;
    }
}

export default Post;
