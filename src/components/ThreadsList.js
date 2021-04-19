import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { deletePost, getPosts } from '../actions/posts';
import Thread from './Thread';

const ThreadsList  = (props) => {
    const posts = useSelector((state) => state.posts);
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
        <div>
            {
                sortedPosts.map((post,i) => {
                    return <div key={i}>
                        <Thread title={post.title} id={post._id} url={post.url} createdAt={post.createdAt}/>
                        
                        {/* <Thread title={post.title} id={post._id} message={post.message} url={post.url} createdAt={post.createdAt}/> */}
                        {(user?.result?.username === post?.username) && (
                        <Link to={"/home"}>
                            <button onClick={() => handleClick(post._id)}>Delete</button>
                        </Link>
                         )} 
                        {(user?.result?.username === post?.username) && (
                            <Link to={"/updatepost/" + post._id}>
                                <button>Update</button>
                            </Link>
                     )} 
                        </div>
                })
            }
        </div>
        )
    }

export default ThreadsList;
