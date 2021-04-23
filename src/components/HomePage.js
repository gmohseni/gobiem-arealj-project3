import React, { useEffect }  from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { clearCreatedPost, getPosts } from '../actions/posts';
import ThreadsList from './ThreadsList';
import '../styles/style.css';


const HomePage  = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCreatedPost());
  });

    return (
        <div>
          <NavBar/>
          <div className="container-fluid background">
            <h3>Recent Updates</h3>
            <ThreadsList/>
          </div>
        </div>
    )
}

export default HomePage;
