import React from 'react';


function CreatePost() {
    return(

        <div>
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
                    <input id="Title" type="text" placeholder="Title"></input>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="URL">URL</label>
                    <textarea id="URL" type="text" placeholder="URL" cols="80"></textarea>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="Body">Body of Post</label>
                    <textarea id="Body" type="text" placeholder="Body" cols="100" rows="5"></textarea>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1"></div>
            <div className="col-sm-10 float-end">
                    <button>Submit</button>
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>

    )
}

export default CreatePost;