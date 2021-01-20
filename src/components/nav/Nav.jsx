import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/addpost" exact className="nav-link">Add Post</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;