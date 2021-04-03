import React from 'react';
import {Link} from "react-router-dom";
import NavBar from './NavBar';

export default function HomePage() {

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <h3>Recent News</h3>
        </div>
    )

}