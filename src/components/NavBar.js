import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <FontAwesomeIcon icon={faNewspaper} size="2x" />
                    <h2>Hacker News</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/home"}>
                                    <a  class="nav-link">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/login"}>
                                    <a  class="nav-link">Login</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/signup"}>
                                    <a  class="nav-link">SignUp</a>
                                </Link>
    
                            </li>
                            <li class="nav-item">
                                <Link to={"/createpost"}>
                                    <a  class="nav-link">CreatePost</a>
                                </Link>
    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
