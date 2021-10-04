import React from 'react';
import image from '../../images/404-page-not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="card">
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;