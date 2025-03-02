import { Button } from '@material-tailwind/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Github, Linkedin, Facebook, Twitter, ExternalLink, Box, BookOpen, GraduationCap, Instagram } from "lucide-react"
import { useContext } from 'react';
import { gitUser } from '../App';
import { Link } from 'react-router-dom'
const Hero = () => {
    const [gThem, setGThem] = useContext(gitUser);
    return (
        <div className={`h-screen ${gThem === "light" ? 'magicpattern-w' : 'magicpattern'} flex justify-center flex-col lg:px-28 md:gap-7 gap-2 px-2 items-center relative`}>
            {/* {gThem === "light" && <img src="/src/assets/1.png" alt="" className='w-24 absolute top-10 left-28  hidden md:block' />}
            {gThem === "light" && <img src="/src/assets/5.png" alt="" className='w-24 absolute top-10 right-28 hidden md:block' />}
            {gThem === "light" && <img src="/src/assets/3.png" alt="" className='w-24 absolute left-48 bottom-28 hidden md:block' />}
            {gThem === "light" && <img src="/src/assets/4.png" alt="" className='w-28 absolute right-48 bottom-24 hidden md:block ' />} */}
            <h1 className='text-2xl'>Hello <span className='text-dkText mr-3'>!</span>   i'm</h1>
            <h1 className='md:text-7xl text-3xl font-bold tracking-[0.3rem] z-10 '>Tanvir Rahman</h1>
            <div className='text-dkText '>
                <TypeAnimation
                    sequence={[
                        'Django Developer &',
                        1000,

                        'React Developer .',
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
            <div className='flex justify-between  w-full items-center absolute bottom-6 md:px-28 px-4'>
                <div className='flex md:gap-2 md:text-3xl gap-1 text-2xl '>
                    {[
                        { icon: <Github size={18} />, href: "https://github.com/tntanvir" },
                        { icon: <Facebook size={18} />, href: "https://www.facebook.com/tanvir.rahman.2382018" },
                        { icon: <Instagram size={18} />, href: "https://www.instagram.com/_tanvir_rahaman_/" },
                        { icon: <Linkedin size={18} />, href: "#" },
                        { icon: <Twitter size={18} />, href: "#" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="p-2 sm:p-3 bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <div>
                    <Link to='/contect'>
                        <Button className=' border border-dkText opacity-100 dark:text-white text-black bg-white/10 ' size='sm' >Contect</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;