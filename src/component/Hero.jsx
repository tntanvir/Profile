import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='h-screen hero flex justify-center flex-col lg:px-28 gap-7'>
            <h1 className='text-2xl'>Hello  ! i'm</h1>
            <h1 className='text-7xl font-bold'>Tanvir Rahman</h1>
            <div className='text-dkText'>
                <TypeAnimation
                    sequence={[
                        'Software Engineer  &',
                        1000,

                        'Web developer .',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                // cursor={false}

                />
            </div>

        </div>
    );
};

export default Hero;