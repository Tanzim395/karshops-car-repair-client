import React from 'react';
import { Link } from 'react-router-dom';
import err from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h3>Sorry, The Page your are looking for Not Found</h3>
            <img style={{ width: '100%', }} src={err} alt="" />
            <Link to='/'><button style={{ backgroundColor: 'orangered', color: 'white' }}>Go Back</button></Link>
        </div>
    );
};

export default NotFound;