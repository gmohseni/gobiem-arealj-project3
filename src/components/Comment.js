import React, { useState } from 'react';


const Comment = (props) => {
    const [updatedMessage, setUpdatedMessage] = useState(props.message);
    const [showTextBox, setShowTextBox] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleDelete = () => {
        let newArray = [];
        for (let i = 0; i < props.postData.comments.length; i++) {
            if (props.commentId !== props.postData.comments[i].id) {
                newArray.push(props.postData.comments[i]);
            }
        }
        props.setUpdatePostFlag(true);
        props.setPostData({creator: props.postData.creator, title: props.postData.title, url: props.postData.url, message: props.postData.message, comments: newArray});
    }

    const handleUpdate = () => {
        setShowTextBox(!showTextBox);
    }

    const submitUpdate = () => {
        let newArray = [];
        for (let i = 0; i < props.postData.comments.length; i++) {
            if (props.commentId === props.postData.comments[i].id) {
                let comment = props.postData.comments[i];
                comment.message = updatedMessage;
            }
            newArray.push(props.postData.comments[i]);
        }
        props.setUpdatePostFlag(true);
        props.setPostData({creator: props.postData.creator, title: props.postData.title, url: props.postData.url, message: props.postData.message, comments: newArray});
    }

    const convertDate = () => {
        let date = new Date(props.createdAt);
        return date.toLocaleDateString();
    }
    
    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="comment">
                        <div className="row">
                            <div className="col-sm-3">
                                <p><b>Author: {props.username}</b></p>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-3">
                                <p><b>{convertDate()}</b></p>
                            </div>
                        </div>
                        <p>{props.message}</p>
                        <div>
                            {
                                (showTextBox) ?
                                <div>
                                    <label htmlFor="comment">Comment:</label>
                                    <input id="comment" type="text" placeholder="" 
                                    value={updatedMessage}
                                    onChange={(e) => setUpdatedMessage(e.target.value)}/>
                                    <button className="add-comment text-white" onClick={() => submitUpdate()}>Submit</button>
                                </div>
                                :
                                <>
                                </>
                            }
                        </div>
                        {(user?.result?.username === props?.username) && (
                        <button className="delete-button text-white" onClick={() => handleDelete()}>Delete</button>
                        )}
                        {(user?.result?.username === props?.username) && (
                        <button className="update-button text-white" onClick={() => handleUpdate()}>Update</button>
                        )}
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
        )
    }

export default Comment;
