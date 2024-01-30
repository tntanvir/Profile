import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='h-screen hero flex justify-center flex-col lg:px-28 md:gap-7 gap-2 px-2'>
            <h1 className='text-2xl'>Hello  ! i'm</h1>
            <h1 className='md:text-7xl text-3xl font-bold'>Tanvir Rahman</h1>
            <div className='text-dkText'>
                <TypeAnimation
                    sequence={[
                        'Software Engineer ',
                        1000,

                        'Web developer .',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '2em', display: 'inline-block' }}
                    className='text-2xl inline-block md:text-5xl'
                    repeat={Infinity}
                // cursor={false}

                />
            </div>

        </div>
    );
};

export default Hero;