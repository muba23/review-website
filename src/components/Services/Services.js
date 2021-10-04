import React, { useEffect, useState } from 'react';
import './Services.css'
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./serviceData.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div className="cards-conatiner">
            <h2 style={{textAlign:"center"}}>Our Services</h2>
            <p style={{textAlign:"center"}}>Our services may include academic support services, academic advising, admissions, alcohol and drug education programs, career services, campus ministries, community service and service learning, counseling, financial aid, food services, fraternities and sororities, health centers, housing and residence life.</p>
            
            {/* showing all the services  */}
            <div className="services-container">
          <Row xs={1} md={1} className="g-4">
               {
                  services.map(service => <SingleService
                  key = {service._id}
                  service = {service}
                  ></SingleService>) 
               }
          </Row>
         </div>
        </div>
    );
};

export default Services;