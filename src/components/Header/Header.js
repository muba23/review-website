import React from 'react';
import './Header.css'
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className="header">
         <div>
            <nav className="navbar">
                <h3><NavLink to="/home" className="navlink">Homepage</NavLink></h3>
                <h3><NavLink to="/about" className="navlink">About</NavLink></h3>
                <img classname="logo" style={{verticalAlign:"middle"}} src={img} alt="" />
                <h3><NavLink to="/services" className="navlink" style={{marginLeft:"45px"}}>Services</NavLink></h3>
                <h3><NavLink to="/contact" className="navlink">Contact</NavLink></h3>
               </nav>
        </div>
       </div>
    );
};

export default Header;