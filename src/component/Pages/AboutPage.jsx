import React from 'react';
import About from '../About';
import GItDetails from '../GItDetails';
import Cartificate from '../Cartificate';

const AboutPage = () => {
    return (
        <div>
            <About />
            <div className='p-10'>

                <GItDetails />
                <div className='pt-10'>

                    <Cartificate />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;