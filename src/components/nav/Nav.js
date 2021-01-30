import React from 'react';
import { NavLink } from "react-router-dom";
import './NavStyle.css';
import logo from "../../assets/images/logo.png";
import pic2 from "../../assets/images/findDoc.png";
import pic3 from "../../assets/images/mediSrv.png";
import pic4 from "../../assets/images/heaTip.png";
import pic5 from "../../assets/images/treatment.png";
import pic6 from "../../assets/images/video-icon.png";
const Links = [
    {id:1, label:'Home Visit', route:'/homevisit', img:pic2},
    {id:2, label:'Nearby Medical Services', route:'/nms', img:pic3},
    {id:3, label:'Health Tips', route:'/healthtips', img:pic4},
    {id:4, label:'Cross Border Treatment', route:'/cbt', img:pic5},
    {id:5, label:'Tele Medicine', route:'/telemedicine', img:pic6},
];

const Nav = () => {
    return (
        <div className="menu-bar">
            <nav className="navbar navbar-expand py-0 sticky-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <NavLink className="navbar-brand" to="/" exact>
                            <img src={logo} alt="img"/>
                        </NavLink>
                        <ul className="navbar-nav ml-auto">
                            {Links.map(link=>
                                <li className="nav-item" key={link.id}>
                                    <NavLink to={link.route} exact className="nav-link">
                                        <img src={link.img} alt="img"/>
                                        <span>{link.label}</span>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;