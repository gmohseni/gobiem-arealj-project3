import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import NavBar from './NavBar';
import Comment from './Comment';
import { createComment, getPostById, getPosts, updatePost } from '../actions/posts';
import { useParams } from "react-router-dom";
import { LOGIN_STATE } from '../reducers/storeConstants';
import { useHistory } from 'react-router-dom';

const Post  = () => {
    const [commentData, setCommentData] = useState({createdAt: new Date(), message: '', username:''});
    const [postData, setPostData] = useState({title: '', url: '', message: '', comments: []});
    const [updatePostFlag, setUpdatePostFlag] = useState(false);
    var {  id } = useParams();
    const loginState = useSelector(state => state.login);
    
    const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);
    const [comments, setComments] = useState([]);
    const history = useHistory();

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

   

    useEffect(() =>{
        dispatch(getPostById(id));
    },[dispatch, id])

    useEffect(() => {
        if (post !== undefined){
            setPostData(post);
            let sorted = post.comments.sort((a,b) => Date.parse(new Date(a.createdAt)) - Date.parse(new Date(b.createdAt)));
            setComments(sorted); 
        }
        else{
            history.push("/");
        }
    }, [post]);

    useEffect(() => {
        if (updatePostFlag) {
            if (postData) {
                setUpdatePostFlag(false);
                dispatch(updatePost(id, {...postData, name:user?.result?.name}));
            }
        }
    }, [dispatch, postData, id, updatePostFlag, user?.result?.name]);

    
    const handleComment = () => {
        dispatch(createComment(id, {...commentData, username:user?.result?.username}));
        dispatch(getPosts());
        clearForm();
    }
   

    const clearForm = () => {
        setCommentData({createdAt: new Date(), message: '', username: ''});
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
                    <button disabled={!user?.result} onClick={() => handleComment()}>Add Comment</button>
                </div>
                :
                <>
                </>
            }
            <div>
                {
                    comments.map((comment, i) => {
                        return <div key={i} className="py-2">
                                <Comment username={comment.username} message={comment.message} createdAt={comment.createdAt} postId={id} commentId={comment.id} postData={postData} setPostData={setPostData} setUpdatePostFlag={setUpdatePostFlag}/>
                            </div>
                    })
                }
            </div>
        </div>
        )
    }

export default Post;


