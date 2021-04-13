import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';
import { useParams } from "react-router-dom";


const CreatePost  = () => {
    const [postData, setPostData] = useState({creator: '', title: '', url: '', message: ''});
    var {id} = useParams();
    const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id === undefined){
            clear();
        }
        else if (post) {
            setPostData(post);
        }
    }, [id, post]);

    const handleSubmit = (e) => {
        if (id !== undefined){
            dispatch(updatePost(id, postData));
        }
        else if (id === undefined){
            dispatch(createPost(postData));
        }
    
        clear();
    }

    const clear = () => {
        setPostData({creator: '', title: '', url:'', message: ''});
    }

   

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="row">
                <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <h3>{id ? 'Updating a': 'Creating a new'} post</h3>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="Title">Title</label>
                    <input id="Title" type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></input>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="URL">URL</label>
                    <textarea id="URL" type="text" placeholder="URL" cols="80" value={postData.url} onChange={(e) => setPostData({ ...postData, url: e.target.value })}></textarea>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="Body">Body of Post</label>
                    <textarea id="Body" type="text" placeholder="Body" cols="100" rows="5" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1"></div>
            <div className="col-sm-10 float-end">
                    <button onClick={() => handleSubmit()}>Submit</button>
                    <button onClick={() => clear()}>Clear</button>
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>
    )
}

export default CreatePost;

