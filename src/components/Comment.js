import React from 'react';

const Comment = (props) => {
    return(
        <div className="card py-2 text-center" style={{height: "100px"}}>
            <p>{props.createdAt}</p>
            <p>{props.message}</p>
        </div>
        )
    }

export default Comment;
