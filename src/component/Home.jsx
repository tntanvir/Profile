import React from 'react';
import Hero from './Hero';
import About from './About';
import ProjectHome from './ProjectHome';
import ContectHome from './ContectHome';

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <About />
            <ProjectHome />
            <ContectHome />
        </div>
    );
};

export default Home;