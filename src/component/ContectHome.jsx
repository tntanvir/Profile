import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Textarea } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { MdAddCall } from 'react-icons/md';
import { motion } from "framer-motion"

const ContectHome = () => {
    return (
        <div className='min-h-screen pt-20 flex flex-col  items-center gap-12 px-3 text-black dark:text-white relative overflow-hidden'>
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none "
                animate={{
                    y: [0, -20, 20, 0],
                    x: [0, 15, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >

                <div
                    className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[90px] 
                    bg-[#00dc82]/30 dark:bg-[#00dc82]/20"
                ></div>
            </motion.div>
            <div className='md:w-1/2 w-full flex items-center flex-col text-center gap-3'>
                <h1 className='text-4xl font-bold'>Let's get in touch</h1>
                <p> We are open for any suggestion or just to have a chat</p>
            </div>

            <div className='z-10'>
                <div className='flex justify-center flex-wrap gap-3'>
                    <div className='flex md:justify-center items-center gap-5 border p-2 md:w-96 w-full md:h-32 rounded-md border-[#00dc82]/20'>
                        <div>
                            <CiLocationOn className='text-4xl text-[#00dc82]' />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Our Address</h3>
                            <p>Mistiypara, Rangpur, Bangladesh,5290</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-5 border p-2 md:w-96 w-full md:h-32 rounded-md border-[#00dc82]/20'>
                        <div>
                            <IoCallOutline className='text-4xl text-[#00dc82]' />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Call Us</h3>
                            <p>+880 1307629936</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-5 border p-2 md:w-96 w-full md:h-32 rounded-md border-[#00dc82]/20'>
                        <div>
                            <HiOutlineMail className='text-4xl text-[#00dc82]' />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Email Us</h3>
                            <p>tntanvir2382018@gmail.com</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='flex md:flex-row flex-col  gap-2  w-full min-h-[60vh] pb-20 md:px-10 px-1 z-10'>
                <div className='flex justify-center md:w-1/2 w-full'>
                    <div className='flex flex-col  items-center w-full'>
                        <div className='w-full text-start pb-10 text-3xl font-semibold'>
                            Have any Questions?
                        </div>
                        <div className='flex flex-col gap-5 w-full md:p-3'>
                            <div className='flex md:flex-row flex-col  justify-between  gap-3 w-full'>
                                <div className=' md:w-1/2 w-full'>
                                    <Typography variant="h6" className="mb-3">
                                        Your Name
                                    </Typography>
                                    <Input placeholder="Enter name"
                                        className="bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100
                                         focus:!border-[#00dc82]/20
                                          focus:!border-t-[#00dc82]/30  bg-transparent  dark:text-white !border-[#00dc82]/20"
                                        labelProps={{
                                            className: "hidden",
                                        }}

                                        containerProps={{ className: "min-w-[100px]" }} />
                                </div>
                                <div className=' md:w-1/2 w-full'>
                                    <Typography variant="h6" className="mb-3">
                                        Your Email
                                    </Typography>
                                    <Input placeholder="Email Address"
                                        className="bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100
                                         focus:!border-[#00dc82]/20
                                          focus:!border-t-[#00dc82]/30  bg-transparent  dark:text-white !border-[#00dc82]/20"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }} />
                                </div>
                            </div>
                            <div className='w-full'>
                                <Typography variant="h6" className="mb-3">
                                    Subject
                                </Typography>
                                <Input placeholder="Subject "
                                    className="bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100
                                         focus:!border-[#00dc82]/20
                                          focus:!border-t-[#00dc82]/30  bg-transparent  dark:text-white !border-[#00dc82]/20"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    containerProps={{ className: "min-w-[100px]" }} />

                                <Typography variant="h6" className="mb-3">
                                    Your Message
                                </Typography>
                                <Textarea size="lg" label="Textarea Large" className="bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100
                                         focus:!border-[#00dc82]/20
                                          focus:!border-t-[#00dc82]/30  bg-transparent  dark:text-white !border-[#00dc82]/20"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    containerProps={{ className: "min-w-[100px]" }} placeholder='Message' />
                            </div>
                            <div>
                                <Button className='bg-[#00dc82]'>Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-0 w-full md:w-1/2 h-96 md:h-auto overflow-hidden rounded-3xl border-[#00dc82]/20 border'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.01853384991!2d89.22080933508498!3d25.749873663775865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1726395677662!5m2!1sen!2sbd"
                        width="600"
                        height=""
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='h-full w-full'></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContectHome;