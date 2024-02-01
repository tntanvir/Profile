import React from 'react';
import Hero from './Hero';
import Skill from './Skill';
import About from './About';

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <About />
            <Skill />
        </div>
    );
};

export default Home;