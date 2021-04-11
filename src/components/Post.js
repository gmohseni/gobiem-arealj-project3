import React from 'react';
import NavBar from './NavBar';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/posts';

const Post  = () => {
    var {  title, message, createdAt, id} = useParams();

    const dispatch = useDispatch();

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>{title}</h3>
            <h5>{message}</h5>
            <h5>{createdAt}</h5>
            <h5>{id}</h5>
            <Link to={"/home"}>
                <button onClick={() => dispatch(deletePost(id))}>Delete</button>
            </Link>
        </div>
        )
    }

export default Post;


