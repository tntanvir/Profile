import React from 'react';
import About from '../About';
import GItDetails from '../GItDetails';
import Cartificate from '../Cartificate';

const AboutPage = () => {
    return (
        <div>
            <About />


            <GItDetails />

            <div className=' py-10'>

                <Cartificate />
            </div>
        </div>
    );
};

export default AboutPage;