import React from 'react';
import { deleteComment } from '../actions/posts';
import { useDispatch } from 'react-redux';

const Comment = (props) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(props.postId, props.commentId));
    }

    return(
        <div className="card py-2 text-center" style={{height: "100px"}}>
            <p>{props.createdAt}</p>
            <p>{props.message}</p>
            <button onClick={() => handleDelete()}>Delete Comment</button>
        </div>
        )
    }

export default Comment;
