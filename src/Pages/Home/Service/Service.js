import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            {/* <img src={img} alt="" /> */}
            <Col>
                <Image src={img} thumbnail />
            </Col>
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn-primary border border-primary rounded'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;