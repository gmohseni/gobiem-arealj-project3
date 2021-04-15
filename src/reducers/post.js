const Post = (post = {},  action) => {
    switch(action.type){
        case 'FETCH_BY_ID':
            return action.payload;
        case 'FETCH_COMMENT_ID':
            console.log(action.payload);
            return action.payload;
        // return {...post, id: action.payload.id, title: action.payload.title, createdAt:action.payload.createdAt, message: action.payload.message, comments: action.payload.comments };
        case 'CREATE_COMMENT':
            // return post.comments.push(action.payload);
            // return {...post, comments: [...post.comments, action.payload]}
            // console.log(post);
            return action.payload;
        case 'DELETE_COMMENT':
            // const newArray = post.comments[i].filter((comment) => {return comment.id !== action.payload});
            // console.log(post);

            // const newArray = post.comments.filter((comment) => {return comment.id !== action.payload});
            // console.log(newArray);
            // console.log(post.comments);
            // console.log(post._id);
            // console.log(post);
            // return {...post, action.payload}
            // console.log(post);
            // payload:{id: id, commentId: commentId}
            // console.log(post.comments[0].id);
            // return {...post, payload: };
            
            const newArray = post.comments.filter((comment) => {
                // console.log("then this");
                // console.log(comment.id);
                // console.log(action.payload);
                // console.log('last');
                return comment.id != action.payload});
            
            // console.log(newArray);
            
            
           
            return {...post, comments: newArray}
        
            // return post.comments.filter((comment) => comment.id !== action.payload);

        default:
            return post;
    }
}

export default Post;
