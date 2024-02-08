import React from 'react';
import redDrop from '../project/redDrop.png';
import tawheed from '../project/tawheed.png'
import flowershop from '../project/flowershop.png'
import proedu from '../project/proedu.png'
import gituser from '../project/gituser.png'
import { FaChevronRight, FaChevronLeft, FaGithub, FaEye } from "react-icons/fa";
// ..................
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { Button } from '@material-tailwind/react';
const ProjectHome = () => {
    const project = [
        {
            "id": 1,
            "img": redDrop,
            "live": "https://red-drop-4d803.web.app/",
            "git": "https://github.com/tntanvir/RedDrop",
            "dis": "Help & save Life By Donating Blood",
        },
        {
            "id": 2,
            "img": tawheed,
            "live": "https://taw-heed.netlify.app/",
            "git": "https://github.com/tntanvir/Tawheed",
            "dis": "Digital home for all things Muslim",
        },
        {
            "id": 3,
            "img": flowershop,
            "live": "https://flower-shops.vercel.app/",
            "git": "https://github.com/tntanvir/flower-shop",
            "dis": "Flower Shop UI",
        },
        {
            "id": 4,
            "img": proedu,
            "live": "https://proedu.vercel.app/",
            "git": "https://github.com/tntanvir/pro-edu",
            "dis": "Education UI",
        },
        {
            "id": 5,
            "img": gituser,
            "live": "https://user-git.netlify.app/",
            "git": "https://github.com/tntanvir/user-git",
            "dis": "Find GitHub User",
        },
    ]
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    className: "center",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    };
    const arrowRef = useRef(null);
    return (

        <section className='min-h-screen py-20 flex flex-col justify-center items-center md:px-28 px-2 project'>
            <div className='text-center flex flex-col gap-7'>
                <div>
                    <h1 className='md:text-5xl text-3xl '>Project</h1>
                </div>
                <p className='md:text-xl dark:text-gray-300 text-gray-600'> </p>
            </div>
            <div className='md:w-11/12 w-full relative'>
                <div className='w-full absolute top-[40%]  flex justify-between'>
                    <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickPrev()}><FaChevronLeft /></button>
                    <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickNext()}><FaChevronRight /> </button>
                </div>
                <Slider ref={arrowRef} {...settings}>

                    {
                        project.map((e) => (
                            <div key={e.id} className='md:w-96 md:p-2 '>
                                <div className="relative w-full  md:mx-0 px-2.5 py-2.5 flex flex-col gap-2.5 border  rounded-xl hover:shadow-sm group md:h-80 ">
                                    <img src={e.img} alt="thumbnail" className="rounded-md" />
                                    <div className="absolute top-0 left-0 w-full h-full p-10 flex justify-center items-end gap-2.5 backdrop-blur-sm text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <a
                                            href={e.live}
                                            target="_black"
                                            className="hidden group-hover:block p-3 bg-neutral-700 cursor-pointer rounded-xl hover:scale-105 transition-all duration-300 bg-blue-gray-800/50  hover:text-dkText"
                                        >
                                            <FaEye className=' text-2xl' />
                                        </a>
                                        <a
                                            href={e.git}
                                            target="_black"
                                            className="hidden group-hover:block p-3 bg-neutral-700 cursor-pointer rounded-xl hover:scale-105 transition-all duration-300 bg-blue-gray-800/50 hover:text-dkText"
                                        >
                                            <FaGithub className=' text-2xl' />
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-base md:text-xl">{e.dis}</p>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <div className='flex justify-center'>
                    <Button className='bg-transparent border border-dkText opacity-100 dark:text-white text-black' >Show more</Button>
                </div>
            </div>

        </section>

    );
};

export default ProjectHome;
