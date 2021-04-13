import React from 'react';

const Comment = (props) => {
    return(
        <div>
            {/* <h3>{props.author}</h3> */}
            <h5>{props.message}</h5>
        </div>
        )
    }

export default Comment;
