import React from 'react';
import { NavLink } from "react-router-dom";
import './NavStyle.css';
import logo from "../../assets/images/logo.png";
import pic1 from "../../assets/images/calendar.svg";
import pic2 from "../../assets/images/findDoc.png";
import pic3 from "../../assets/images/mediSrv.png";
import pic4 from "../../assets/images/heaTip.png";
import pic5 from "../../assets/images/treatment.png";
import pic6 from "../../assets/images/video-icon.png";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand py-0">
            <div className="collapse navbar-collapse" id="navbarNav">
                <NavLink className="navbar-brand" to="/" exact>
                    <img src={logo} alt="img"/>
                </NavLink>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">
                            <img src={pic1} alt="img"/>
                            <span>Booking Appointment</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/addpost" exact className="nav-link">
                            <img src={pic2} alt="img"/>
                            <span>Home Visit</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">
                            <img src={pic3} alt="img"/>
                            <span>Nearby Medical Services</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/addpost" exact className="nav-link">
                            <img src={pic4} alt="img"/>
                            <span>Health Tips</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">
                            <img src={pic5} alt="img"/>
                            <span>Cross Border Treatment</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/addpost" exact className="nav-link">
                            <img src={pic6} alt="img"/>
                            <span>Tele Medicine</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;