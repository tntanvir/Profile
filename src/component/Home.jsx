import React from 'react';
import Hero from './Hero';
import ProjectHome from './ProjectHome';
import ContectHome from './ContectHome';
import About from './About';


const Home = () => {
    return (
        <div className=''>
            <Hero />
            <About />
            <ProjectHome />

            {/* <ContectHome /> */}

        </div>
    );
};

export default Home;