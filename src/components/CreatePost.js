import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';
import { useParams } from "react-router-dom";

const CreatePost  = () => {
    const [postData, setPostData] = useState({title: '', url: '', message: ''});
    const [errorFlag, setErrorFlag] = useState(false);
    var {id} = useParams();
    const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    
    useEffect(() => {
        if (id === undefined){
            clear();
        }
        else if (post) {
            setPostData(post);
        }
    }, [id, post]);

    const checkURL = (url) => {
        if (postData.message.length > 0){
            setErrorFlag(true);
        }
        else{
            setPostData({ ...postData, url: url });
        }
    }

    const checkText = (message) => {
        if (postData.url.length > 0){
            setErrorFlag(true);
        }
        else{
            setPostData({ ...postData, message: message });
        }
    }

    const handleSubmit = () => {
            if (id !== undefined){
                dispatch(updatePost(id, postData));
            }
            else if (id === undefined){
                dispatch(createPost({...postData,username: user?.result?.username}));
            }
         clear();
    }

    const clear = () => {
        setPostData({title: '', url:'', message: ''});
        setErrorFlag(false);
    }

    return(
        <div>
            <NavBar/>
            <div className="container-fluid background">
                <div className="row">
                    <div className ="col-sm-1">
                    </div>
                    <div className="col-sm-10">
                        <h3>{id ? 'Updating a': 'Creating a New'} Post</h3>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        {
                        (errorFlag) ?
                        <div className="alert alert-danger">Can only have a URL or Text, not both!</div>
                        : 
                        <>
                        </>
                        }
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="create-post">
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10">
                            <label htmlFor="Title">Title</label>
                            <input id="Title" required type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></input>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10">
                            <label htmlFor="URL">URL</label>
                            <textarea id="URL" type="text" placeholder="URL" cols="80" value={postData.url} onChange={(e) => checkURL(e.target.value)}></textarea>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10">
                            <label htmlFor="Body">Body of Post</label>
                            <textarea id="Body" type="text" placeholder="Body" cols="100" rows="5" value={postData.message} onChange={(e) => checkText(e.target.value)}></textarea>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10 float-end">
                                <button className="submit-button text-white" disabled={errorFlag} onClick={() => handleSubmit()}>Submit</button>
                                <button className="clear-button text-white" onClick={() => clear()}>Clear</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;

