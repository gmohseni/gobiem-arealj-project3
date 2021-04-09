import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import Thread from './Thread';

const ThreadsList  = () => {

const posts = useSelector((state) => state.posts);

    return(

        <div>
            {
                posts.map((post,i) => {
                    return <Thread key={i} title={post.title} id={post.id} message={post.message} url={post.url} createdAt={post.createdAt} />
                })
            }
        </div>
        )
    }

export default ThreadsList;