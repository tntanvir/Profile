import { Button } from '@material-tailwind/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='h-[88vh] hero flex justify-center flex-col lg:px-28 md:gap-7 gap-2 px-2 items-center relative'>
            <h1 className='text-2xl'>Hello <span className='text-dkText mr-3'>!</span>   i'm</h1>
            <h1 className='md:text-7xl text-3xl font-bold tracking-[0.3rem] '>Tanvir Rahman</h1>
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
            <div className='flex justify-between  w-full items-center absolute bottom-6 md:px-28 px-6'>
                <div className='flex md:gap-5 md:text-3xl gap-2 text-2xl '>
                    <FaFacebook className='hover:text-dkText cursor-pointer duration-100' />
                    <FaInstagram className='hover:text-dkText cursor-pointer duration-100' />
                    <FaGithub className='hover:text-dkText cursor-pointer duration-100' />
                </div>
                <div>
                    <Button className='bg-transparent border border-dkText opacity-100 dark:text-white text-black' >Contect</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;