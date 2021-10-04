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
            <div className="">
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