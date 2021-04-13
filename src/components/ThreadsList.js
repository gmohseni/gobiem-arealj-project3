import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { deletePost, getPosts } from '../actions/posts';
import Thread from './Thread';

const ThreadsList  = (props) => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(deletePost(id));
        dispatch(getPosts());
    }

    return(
        <div>
            {
                posts.map((post,i) => {
                    return <div key={i}>
                        <Thread title={post.title} id={post._id} url={post.url} createdAt={post.createdAt}/>
                        {/* <Thread title={post.title} id={post._id} message={post.message} url={post.url} createdAt={post.createdAt}/> */}
                        <Link to={"/home"}>
                            <button onClick={() => handleClick(post._id)}>Delete</button>
                        </Link>
                        <Link to={"/updatepost/" + post._id}>
                            <button>Update</button>
                        </Link>
                        </div>
                })
            }
        </div>
        )
    }

export default ThreadsList;
