import React from 'react';
import './Footer.css'
import img from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <img classname="logo" style={{verticalAlign: "middle"}} src={img} alt="" />
                <p>2021 &copy; copyright. All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;