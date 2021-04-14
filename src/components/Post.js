import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import NavBar from './NavBar';
import Comment from './Comment';
import { createComment, getPosts } from '../actions/posts';
import { useParams } from "react-router-dom";
import { LOGIN_STATE } from '../reducers/storeConstants';

const Post  = () => {
    const [commentData, setCommentData] = useState({createdAt: new Date(), message: ''});
    var {  id } = useParams();
    const loginState = useSelector(state => state.login);
    const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);
    const comments = post.comments;

    const dispatch = useDispatch();

    const handleComment = () => {
        dispatch(createComment(id, commentData));
        dispatch(getPosts());
        clearForm();
    }

    const clearForm = () => {
        setCommentData({createdAt: new Date(), message: ''});
    }

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>{post.title}</h3>
            <h5>{post.message}</h5>
            <h5>{post.createdAt}</h5>
            {
                loginState === LOGIN_STATE.LOGGED_IN ?
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <input id="comment" type="text" placeholder="" 
                    value={commentData.message} 
                    onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}/>
                    <button onClick={() => handleComment()}>Add Comment</button>
                </div>
                :
                <>
                </>
            }
            <div>
                {
                    comments.map((comment, i) => {
                        return <div key={i} className="py-2">
                                <Comment message={comment.message} createdAt={comment.createdAt}/>
                            </div>
                    })
                }
            </div>
        </div>
        )
    }

export default Post;


