import { Button } from '@material-tailwind/react';
import React from 'react';
import { Github, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Lastsection = () => {
    return (
        <div className='min-h-[70vh] patternbg flex gap-4 items-center justify-center flex-col relative overflow-hidden pb-4 px-4 text-center'>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full filter blur-[100px] 
                    bg-gradient-to-br from-[#00dc82]/30 via-[#00ff9d]/20 to-[#007a4b]/10 
                    dark:from-[#00dc82]/20 dark:via-[#00ff9d]/15 dark:to-[#007a4b]/10">
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-3 z-40'>
                <h1 className='md:text-4xl text-2xl font-bold capitalize text-center'>Hire The <span className='bgcolors px-2 rounded-md text-white'>Right Talent</span> to get the best results</h1>
                <p className='tracking-wide text-md '>If you want to hire the right talent, get in touch and let's make it happen.</p>
                <Button className='text-black dark:text-white hover:scale-105 duration-700 rounded-full border border-[#00dc82]/20 bg-white/10 ' variant='outlined'>Hire me</Button>

            </div>
            <div className='h-20  flex md:flex-row flex-col-reverse  items-center justify-evenly  md:justify-between md:px-10 px-1 absolute bottom-0  w-full'>
                <div className='flex justify-start items-center'>
                    <h1>Copyright © {new Date().getFullYear()} Tanvir Rahman</h1>
                </div>
                <div className='   '>
                    <div className=" flex items-center gap-4  justify-end">
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/tntanvir/"
                            className="md:p-3 p-2 border border-[#00dc82]/20  dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/tntanvir"
                            className="md:p-3 p-2 border border-[#00dc82]/20 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/tanvir.rahman.2382018"
                            className="md:p-3 p-2 border border-[#00dc82]/20 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/_tanvir_rahaman_/"
                            className="md:p-3 p-2 border border-[#00dc82]/20 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
                        >
                            <Instagram size={20} />
                        </a>
                        {/* <a
                            href="#"
                            className="md:p-3 p-2 border border-[#00dc82]/20 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110 hidden md:block"
                        >
                            <Twitter size={20} />
                        </a> */}

                        <div class="voltage-button dark:text-white text-black px-2 ">

                            <a href='https://docs.google.com/document/d/1fA90hvaEbYS3xcQDgdXDeMVvJg3riiu6WsPjFC8Dybg/edit?tab=t.0' target='_blank'>
                                <button className='px-2 py-2'>View my CV</button>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 234.6 61.3" preserveAspectRatio="none" xml:space="preserve">

                                    <filter id="glow">
                                        <feGaussianBlur class="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                                        <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence"></feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace"></feDisplacementMap>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="coloredBlur"></feMergeNode>
                                            <feMergeNode in="displace"></feMergeNode>
                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                        </feMerge>
                                    </filter>
                                    <path class="voltage line-1" d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z" fill="transparent" stroke="#fff"></path>
                                    <path class="voltage line-2" d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z" fill="transparent" stroke="#fff"></path>
                                </svg>
                                <div class="dots">
                                    <div class="dot dot-1"></div>
                                    <div class="dot dot-2"></div>
                                    <div class="dot dot-3"></div>
                                    <div class="dot dot-4"></div>
                                    <div class="dot dot-5"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Lastsection;
