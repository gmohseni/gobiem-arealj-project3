import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getPostById } from '../actions/posts';

const Thread  = (props) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPostById(props.id));
    // }, [dispatch, props.id])

    console.log(props.id);
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
