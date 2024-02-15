import React from 'react';
import Carousel from './Carousel';
import Offer from './Offer';
import Products from './Products';
import Partner from './Partner';
import Client from './Client';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Offer/>
            <Products/>
            <Partner/>
            <Client/>
        </div>
    );
};

export default Home;