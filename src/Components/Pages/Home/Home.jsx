import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import Serve from './Serve/Serve';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Serve></Serve>
        </div>
    );
};

export default Home;