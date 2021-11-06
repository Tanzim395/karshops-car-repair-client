import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Ticker from '../Ticker/Ticker';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Ticker></Ticker>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;