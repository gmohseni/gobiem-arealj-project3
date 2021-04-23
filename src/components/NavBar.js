import React, { useState, useEffect } from 'react';
import {useDispatch} from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons'
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
        <nav className="nav-bar navbar navbar-expand-lg">
                <div className="container-fluid">
                <FontAwesomeIcon icon={faTheaterMasks} size="4x"/>
                    <h2 className="title text-center">Theatrical Updates</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true: false} aria-label="Toggle navigation" onClick={handleNavCollapse}> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse': ''}navbar-collapse text-center`} id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-center" style={{flex: 1}}>
                            <li className="nav-item">
                                <Link to={"/home"} style={{textDecoration: "none"}}>
                                    <button className="nav-link buttons text-white"><b>Home</b></button>
                                </Link>
                            </li>
                            { user?.result ? (
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/createpost"} style={{textDecoration: "none"}}>
                                    <button className="nav-link text-white"><b>CreatePost</b></button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => logout()}><b>Logout</b></button>
                            </li>
                            <li className="nav-item">
                                <button className="text-white user-profile"><b>{user?.result?.username}</b></button>
                            </li>
                        </ul>
                            ):(
                                <>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to={"/signin"} style={{textDecoration: "none"}}>
                                                <button className="nav-link text-white"><b>Login</b></button>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/signup"} style={{textDecoration: "none"}}>
                                                <button className="nav-link text-white"><b>SignUp</b></button>
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
    )
};
export default Navbar;
