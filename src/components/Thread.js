import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import {Link} from "react-router-dom";

const Thread  = (props) => {

return(
    <div>
        {
                (props.url === 'N/A') ? 
                    <div>
                        <Link to={"/post/" + props.title + "/" + props.message + "/" + props.createdAt}>
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