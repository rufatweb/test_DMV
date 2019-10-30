"use strict"

import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item"> 
                <Link to="/" className="navbar-brand">
                    <img width="90px" height="30px" src="./images/dmv_logo.jpg" /> 
                </Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/" replace>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/All People" replace>All People</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Searcher" replace>Search</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Creator" replace>Create</Link></li>
        </ul>
    );
}