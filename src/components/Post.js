import React from 'react';
import NavBar from './NavBar';
import { useParams } from "react-router-dom";

const Post  = (props) => {
    var   {  title, message, createdAt } = useParams();

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>{title}</h3>
            <h5>{message}</h5>
            <h5>{createdAt}</h5>
        </div>
        )
    }

export default Post;


