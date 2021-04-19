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
    console.log(props.postData.username);

    return(
        <div className="py-5">
            <div className="card py-2 text-center" style={{height: "100px"}}>
                <p>{props.createdAt}</p>
                <p>{props.message}</p>
                <div>
                    {
                        (showTextBox) ?
                        <div>
                            <label htmlFor="comment">Comment:</label>
                            <input id="comment" type="text" placeholder="" 
                            value={updatedMessage} 
                            onChange={(e) => setUpdatedMessage(e.target.value)}/>
                            <button onClick={() => submitUpdate()}>Submit</button>
                        </div>
                        :
                        <>
                        </>
                    }
                </div>
                {(user?.result?.username === props.postData?.username) && (
                <button onClick={() => handleDelete()}>Delete</button>
                )}
                 {(user?.result?.username === props.postData?.username) && (
                <button onClick={() => handleUpdate()}>Update</button>
                 )}
            </div>
        </div>
        )
    }

export default Comment;
