// import React from 'react';
// import {useSelector, useDispatch} from "react-redux";
// import {Link} from "react-router-dom";
// import {LOGIN_STATE} from "../reducers/storeConstants";
// import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

// export default function NavBar() {
//     const loginState = useSelector(state => state.login);

//     const dispatch = useDispatch();
//     const user = null;
    
//     const loggingOut = () => {
//         //dispatch(logout());
//     }

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                 <FontAwesomeIcon icon={faNewspaper} size="2x" />
//                     <h2>Hacker News</h2>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link to={"/home"}>
//                                     <button className="nav-link">Home</button>
//                                 </Link>
//                             </li>
//                             {
//                                 loginState !== LOGIN_STATE.LOGGED_IN ?
//                                     <ul className="navbar-nav">
//                                         <li className="nav-item">
//                                             <Link to={"/login"}>
//                                                 <button className="nav-link">Login</button>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to={"/signup"}>
//                                                 <button className="nav-link">SignUp</button>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 :
//                                 <>
//                                     <ul className="navbar-nav">
//                                         <li className="nav-item">
//                                             <Link to={"/createpost"}>
//                                                 <button className="nav-link">CreatePost</button>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <button className="nav-link" onClick={() => loggingOut()}>Logout</button>
//                                         </li>
//                                     </ul>
//                                 </>
//                             }
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';

import {useSelector, useDispatch} from "react-redux";

import { Link, useHistory, useLocation } from 'react-router-dom';
import {LOGIN_STATE} from "../reducers/storeConstants";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';

const Navbar = () => {
    const loginState = useSelector(state => state.login);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    
   



    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
         history.push('/');
    
         setUser(null);
       };

      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <FontAwesomeIcon icon={faNewspaper} size="2x" />
                    <h2>Hacker News</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/home"}>
                                    <button className="nav-link">Home</button>
                                </Link>
                            </li>
                            { user?.result ? (
                            
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/createpost"}>
                                    <button className="nav-link">CreatePost</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => logout()}>Logout</button>
                            </li>
                        </ul>
                            ):(
                                <>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to={"/signin"}>
                                                <button className="nav-link">Login</button>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/signup"}>
                                                <button className="nav-link">SignUp</button>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};
export default Navbar;