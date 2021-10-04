import React from 'react';
import './SingleService.css'
import { Card, Col, Row } from 'react-bootstrap';

const SingleService = (props) => {
    const{img, name, details} = props.service;
    return (
        <div className="cards">
            <Col>
                <Card className="card">
                    <Card.Img variant="top" 
                     className="image" src={img} fluid />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        
    );
};

export default SingleService;