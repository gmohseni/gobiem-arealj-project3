import React, { useEffect, useState }  from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import ThreadsList from './ThreadsList';


const HomePage  = () => {
  const [rerenderFlag, setRerenderFlag] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, rerenderFlag]);

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>Recent News</h3>
            <ThreadsList rerenderFlag={rerenderFlag} setRerenderFlag={setRerenderFlag}/>
        </div>
    )
}

export default HomePage;
