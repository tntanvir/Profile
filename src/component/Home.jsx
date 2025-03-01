import React from 'react';
import Hero from './Hero';
import ProjectHome from './ProjectHome';
import ContectHome from './ContectHome';
import About from './About';
import Cartificate from './Cartificate';



const Home = () => {
    return (
        <div className=''>
            <Hero />
            <About />
            <ProjectHome />

            <Cartificate />
            <ContectHome />

        </div>
    );
};

export default Home;