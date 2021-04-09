import React, { useEffect }  from 'react';
// import {Link} from "react-router-dom";
import NavBar from './NavBar';
import Post from './Post';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
// import { useSelector } from 'react-redux';
// import CreatePost from './CreatePost';
import ThreadsList from './ThreadsList';


const HomePage  = () => {



const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>Recent News</h3>
            <ThreadsList/>
        </div>
    )

}

export default HomePage;
