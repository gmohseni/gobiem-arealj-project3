import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { deletePost, getPosts } from '../actions/posts';
import Thread from './Thread';

const ThreadsList  = () => {
    const posts = useSelector((state) => state.posts.posts);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [sortedPosts, setSortedPosts] = useState([]);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(deletePost(id));
        dispatch(getPosts());
    }

    const sortPostDate = () =>{
        let postCopy = posts;
        let sorted = postCopy.sort((a,b) => Date.parse(new Date(b.createdAt)) - Date.parse(new Date(a.createdAt)));
        setSortedPosts(sorted);
    }

    useEffect(() =>{
        if (posts){
            sortPostDate();
        }
    },[sortPostDate])

    return(
        <div className="text-center">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    {
                        sortedPosts.map((post,i) => {
                            return <div className="thread" key={i}>
                                <Thread username={post.username} title={post.title} id={post._id} url={post.url} createdAt={post.createdAt}/>
                                {(user?.result?.username === post?.username) && (
                                <Link to={"/home"}>
                                    <button type="button" className="btn delete-button text-white" onClick={() => handleClick(post._id)}>Delete</button>
                                </Link>
                                )} 
                                {(user?.result?.username === post?.username) && (
                                    <Link to={"/updatepost/" + post._id}>
                                        <button type="button" className="btn update-button text-white">Update</button>
                                    </Link>
                                )} 
                                </div>
                        })
                    }
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
        )
    }

export default ThreadsList;
