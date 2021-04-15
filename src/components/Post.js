import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import NavBar from './NavBar';
import Comment from './Comment';
import { createComment, getPostById, getPosts } from '../actions/posts';
import { useParams, useHistory } from "react-router-dom";
import { LOGIN_STATE } from '../reducers/storeConstants';

const Post  = () => {
    const [commentData, setCommentData] = useState({createdAt: new Date(), message: ''});
    const [postData, setPostData] = useState({creator: '', title: '', url: '', message: '', comments: []});
    // const [postData, setPostData] = useState({});
    var {  id } = useParams();
    const loginState = useSelector(state => state.login);
    // const posts = useSelector(state => state.posts);
    const test = useSelector(state => state);
    const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);
    
    const [comments, setComments] = useState([]);

    const dispatch = useDispatch();

    

    useEffect(() =>{
        dispatch(getPostById(id));
        
        
    },[])

    useEffect(() => {
        if (post !== undefined){
        setPostData(post);
        setComments(post.comments);
        
        }
    dispatch(getPostById(id));
    //setPostData(post);
    //setComments(post.comments);
        
    }, [post]);

    

    const handleComment = () => {
        dispatch(createComment(id, commentData));
        dispatch(getPosts());
        clearForm();
    }
    // const onChangeHandler = (e) =>{
    //     setCurrentComment({...currentComment, message: e.target.value});

    // }

    const clearForm = () => {
        setCommentData({createdAt: new Date(), message: ''});
    }


    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>{postData.title}</h3>
            <h5>{postData.message}</h5>
            <h5>{postData.createdAt}</h5>
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
                                <Comment message={comment.message} createdAt={comment.createdAt} postId={id} commentId={comment.id}/>
                            </div>
                    })
                }
            </div>
        </div>
        )
    }

export default Post;


