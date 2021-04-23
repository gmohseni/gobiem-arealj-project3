import React from 'react';
import {Link} from "react-router-dom";


const Thread  = (props) => {

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
            <div className="row">
                <div className="col-sm-3">
                    <h5><b>Author: {props.username}</b></h5>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-3">
                    <h5><b>{convertDate()}</b></h5>
                </div>
            </div>
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
            <div>
                <Link className="thread-text" to={"/post/" + props.id} style={{textDecoration: "none"}}>
                    <button type="button" className="btn comments-button text-white">Comments</button>
                </Link>
            </div>
        </div>
        )
}

export default Thread;
