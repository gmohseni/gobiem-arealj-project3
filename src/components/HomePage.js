import React, { useEffect, useState }  from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
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
