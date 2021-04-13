import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import NavBar from './NavBar';
import Comment from './Comment';
import { getPostById, createComment } from '../actions/posts';
import { useParams } from "react-router-dom";
import { LOGIN_STATE } from '../reducers/storeConstants';

const Post  = () => {
    const [commentData, setCommentData] = useState({createdAt: new Date(), message: ''});
    var {  id } = useParams();
    const loginState = useSelector(state => state.login);
    const post = useSelector(state => state.post);

    const dispatch = useDispatch();

    // async function getPost(id) {
    //     dispatch(getPostById(id));
    //     setComments(post.comments); 
    // }

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch, id])

    const handleComment = () => {
        dispatch(createComment(id, commentData));
        clearForm();
    }

    const clearForm = () => {
        setCommentData({createdAt: new Date(), message: ''});
    }

    // const getComments = () => {
    //     post.comments.map((comment, i) => {
    //         return <Comment key={i} message={comment}/>
    //     })
    // }

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
                    post.comments.map((comment, i) => {
                        console.log(comment);
                        // return <Comment key={i} message={comment}/>
                    })
                }
            </div>
        </div>
        )
    }

export default Post;


