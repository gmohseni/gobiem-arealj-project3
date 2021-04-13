import React from 'react';
import {Link} from "react-router-dom";

const Thread  = (props) => {
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
                        <a href={props.url}>{props.title}</a>
                    </div>
                }
                </>
                }
            <h5>{props.createdAt}</h5>
        </div>
        )
}

export default Thread;
