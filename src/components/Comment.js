import React, { useEffect} from 'react';
import { deleteComment, getCommentById } from '../actions/posts';
import { useDispatch } from 'react-redux';


const Comment = (props) => {
    
    // console.log(props);
    const dispatch = useDispatch();

    const handleDelete = () => {
        let newArray = [];
        for (let i = 0; i < props.postData.comments.length; i++) {
            if (props.commentId !== props.postData.comments[i].id) {
                newArray.push(props.postData.comments[i]);
            }
        }
        props.setPostData({creator: props.postData.creator, title: props.postData.title, url: props.postData.url, message: props.postData.message, comments: newArray});
        // console.log(props.postId);
        // console.log(props.commentId);
        // dispatch(deleteComment(props.postId, props.commentId));
    }

    useEffect(() =>{
        // console.log(props);
        // dispatch(getCommentById(props.commentId));
        
    },[])

    // const handleComment = () => {
    //     // console.log(props.postId);
    //     // console.log(props.commentId);
    //     dispatch(getCommentById(props.commentId));
    // }

    return(
        <div className="card py-2 text-center" style={{height: "100px"}}>
            <p>{props.createdAt}</p>
            <p>{props.message}</p>
            <button onClick={() => handleDelete()}>Delete</button>
                        
                    
           
        </div>
        )
    }

export default Comment;
