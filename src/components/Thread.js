import React from 'react';
import {Link} from "react-router-dom";

const Thread  = (props) => {
    
    const openInNewTab = () => {
        const newWindow = window.open(props.url, '_blank', 'noopener,noreferrer');
        if(newWindow) newWindow.opener = null;
    }

    return(
        <div>
            {
                (props.url === 'N/A' || props.url === 'NA' || props.url === '') ? 
                    <div>
                        <Link to={"/post/" + props.id}>
                            {props.title}
                        </Link>
                    </div>
                : 
                <>
                {
                    <div>
                        <Link to={"/post/" + props.id}>
                            <span onClick={() => openInNewTab()}>{props.title}</span>
                        </Link>
                    </div>
                }
                </>
                }
            <h5>{props.createdAt}</h5>
        </div>
        )
}

export default Thread;
