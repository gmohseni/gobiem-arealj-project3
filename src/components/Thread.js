import React from 'react';
import {Link} from "react-router-dom";


const Thread  = (props) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const openInNewTab = () => {
        const newWindow = window.open(props.url, '_blank', 'noopener,noreferrer');
        if(newWindow) newWindow.opener = null;
    }

    const convertDate = () => {
        let date = new Date(props.createdAt);
        return date.toLocaleDateString();
    }

    return(
        <div className="text-center">
            {
                (props.url === 'N/A' || props.url === 'NA' || props.url === '') ? 
                    <div>
                        <Link className="thread-text thread-title" to={"/post/" + props.id} style={{textDecoration: "none"}}>
                            {props.title}
                        </Link>
                    </div>
                : 
                <>
                {
                    <div>
                        <Link className="thread-text thread-title" to={"/post/" + props.id} style={{textDecoration: "none"}}>
                            <span onClick={() => openInNewTab()}>{props.title}</span>
                        </Link>
                    </div>
                }
                </>
                }
            <h5>{convertDate()}</h5>
            <div>
                <Link className="thread-text" to={"/post/" + props.id} style={{textDecoration: "none"}}>
                    <button className="comments-button text-white">Comments</button>
                </Link>
            </div>
        </div>
        )
}

export default Thread;
