const Post = (post = {}, action) => {
    switch(action.type){
        case 'FETCH_BY_ID':
            return action.payload;
        case 'CREATE_COMMENT':
            return action.payload;
        default:
            return post;
    }
}

export default Post;
