import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
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
                                    <button  className="nav-link">Home</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/login"}>
                                    <button  className="nav-link">Login</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"}>
                                    <button  className="nav-link">SignUp</button>
                                </Link>
    
                            </li>
                            <li className="nav-item">
                                <Link to={"/createpost"}>
                                    <button  className="nav-link">CreatePost</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
