import NavBar from './NavBar';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';


import { createPost } from '../actions/posts';

const CreatePost  = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', url: '', message: ''
    
    });

const dispatch = useDispatch();
const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
}

const clear = () => {

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
                    <h3>Create a new post</h3>
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
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>

    )
}

export default CreatePost;

