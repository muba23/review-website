import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Homepage.css'

const leftQuote = <FontAwesomeIcon icon={faQuoteLeft} />
const rightQuote = <FontAwesomeIcon icon={faQuoteRight} />

const Homepage = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./homeService.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
            <div className="home">
            <h1 style={{color:"orange"}}>Our Services</h1>
            <p>Our university provides a wide range of services and resources to assist you in attaining your educational goals.We strive to give our students the best experience possible—which is why we offer a wide range of services to support you from enrollment through graduation. Whether you need career guidance, veteran services, tutoring information, or help adjusting to our rigorous one-course-per-month format, our knowledgeable and caring staff is readily available to assist you. We understand the demands of student life, and we’ll do everything possible to ensure a smooth and rewarding journey.</p>
          </div>
        <div className="home-container">
          <Row xs={1} md={2} className="g-4">
               {
                  services.map(service => <SingleService
                  key = {service._id}
                  service = {service}
                  ></SingleService>) 
               }
          </Row>
         </div>
         <div className="sayings">
             <h1 style={{color:"black"}}>What Our Students Say</h1>
             <div style={{width:"50%"},{textAlign:"center"}}>
               <h2>{leftQuote}</h2>
             <p style={{padding:"10px 50px"}}>While many consider attending university a way to leverage promising career prospects, university is also a unique opportunity where you can look at yourself and think about how you can benefit and grow personally from the experience.</p>
             <h2>{rightQuote}</h2>
             </div>
         </div>
    </div>
    );
};

export default Homepage;