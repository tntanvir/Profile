import React from 'react';
import { GiBullseye } from "react-icons/gi";
import { FaLightbulb, FaGraduationCap, FaReact, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt, FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { Spinner } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { CiSaveDown1 } from "react-icons/ci";
const About = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/tntanvir/repos`)
            .then(res => res.json())
            .then(data => setData(data.length))
    }, [])
    return (
        <section className='min-h-screen pt-20 flex flex-col items-center md:px-28 p-4 '>
            <div className='text-center flex flex-col gap-7'>
                <div>
                    <h1 className='md:text-5xl text-3xl '>About Me</h1>
                </div>
                <p className='md:text-xl dark:text-gray-300 text-gray-600'>I enjoy developing simple, clean websites that provide real value to the end user.Fullstack development using react js, node js, express js, mongodb, Django.To upgrade my skill I love to face new technologies and new targets. currently i'm learning Data Structures and Algorithms (DSA). </p>
            </div>
            <div className='lg:flex justify-between'>
                <fieldset className="border border-solid border-gray-300 rounded p-4 m-4 w-72 min-h-80">
                    <legend className="text-4xl text-dkText font-bold mb-2">
                        <FaLightbulb />
                    </legend>
                    <div className="text-2xl  flex flex-wrap gap-3 justify-center">

                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><FaHtml5 /><span className='text-sm'>HTML </span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><FaCss3Alt /><span className='text-sm'>CSS</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><IoLogoJavascript /><span className='text-sm'>JavaScript</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><FaReact /><span className='text-sm'>React Js</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><TbBrandNextjs /><span className='text-sm'>Next Js</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><SiTailwindcss /><span className='text-sm'>Tailwindcss</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><FaNode /><span className='text-sm'>Node Js</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><DiDjango /><span className='text-sm'>Django</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><BiLogoMongodb /><span className='text-sm'>Mongodb</span></div>
                        <div className='dark:text-white  border w-28 rounded-sm p-2 flex gap-3 items-center '><SiMysql /><span className='text-sm'>MySQL</span></div>

                    </div>
                </fieldset>
                <fieldset className="border border-solid border-gray-300 rounded p-4 m-4 w-72 min-h-80">
                    <legend className="text-4xl text-dkText font-bold mb-2">
                        <FaGraduationCap />
                    </legend>
                    <div className="text-sm flex flex-col gap-3">
                        <div>
                            <h1 className='text-xl'>SSC</h1>
                            <p>City Residential Model School & Collage.</p>
                            <p className='text-end'>Chirirbndar, Dinajpur.</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Diploma</h1>
                            <p>Rangpur Polytechnic Institute</p>
                            <p className='text-end'>Rangpur.</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>BSC</h1>
                            <Spinner />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="border border-solid border-gray-300 rounded p-4 m-4 w-72 min-h-80">
                    <legend className="text-4xl text-dkText font-bold mb-2">
                        <GiBullseye />
                    </legend>
                    <div className="text-lg">
                        Successfully completed over {data ? data : 14}+ projects, showcasing a proven track record of delivering high-quality web solutions and demonstrating proficiency across various technologies and platforms.
                    </div>
                </fieldset>

            </div>
            <div className='flex justify-end mt-3 animate-bounce  w-full '>
                <Button className='flex gap-3 items-center  rounded-full bg-transparent border border-dkText opacity-100 text-black dark:text-white'><CiSaveDown1 className='text-xl' /> Get CV</Button>
            </div>
        </section>
    );
};

export default About;