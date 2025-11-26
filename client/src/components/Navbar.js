import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <h1 className="logo">Resume Builder React App</h1>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Documentation'>Documentation</Link></li>
                <li><Link to='/Sources'>Sources</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;