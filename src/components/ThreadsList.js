import React from 'react';
import { useSelector } from 'react-redux';
import Thread from './Thread';

const ThreadsList  = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
        <div>
            {
                posts.map((post,i) => {
                    return <Thread key={i} title={post.title} id={post._id} message={post.message} url={post.url} createdAt={post.createdAt} />
                })
            }
        </div>
        )
    }

export default ThreadsList;
