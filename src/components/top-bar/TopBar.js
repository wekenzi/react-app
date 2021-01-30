import React from 'react'
import { NavLink } from "react-router-dom";
import './TopBar.css';
const TopBar = () => {
    return (
        <div className="top-bar">
            <nav className="navbar navbar-expand py-0">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <NavLink to="/" exact>
                            <i className="fas fa-phone-alt mr-1"></i>
                            <span>Contact Us</span>
                        </NavLink>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link lang">
                                    <span>ع</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" exact className="nav-link doc">
                                    <i className="fas fa-user-md mr-1"></i>
                                    <span>You are a Doctor? Join Us</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" exact className="nav-link">
                                    <span>Login</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" exact className="nav-link">
                                    <span>Register</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar;
