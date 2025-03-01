import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import data from '../../data.json'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom'
const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setSetdetails] = useState(null)
    useEffect(() => {
        if (id) {
            const moredata = data.find((p) => p.id == id);
            if (moredata) {
                setSetdetails(moredata);
            }
        }
    }, [id]);


    const images = import.meta.glob("../../project/*.png", { eager: true });

    const getImagePath = (imageName) => {
        if (!imageName) return "/placeholder.svg"; // ✅ Handle undefined images
        return images[`../../project/${imageName}.png`]?.default || "/placeholder.svg";
    };


    const HighlightAfterColon = ({ text }) => {
        const [before, after] = text.split(":").map(part => part.trim()); // Splits text and trims spaces

        return (
            <p className='p-0.5'>
                <strong>{before}</strong> : {after}
            </p>
        );
    };

    return (
        <div className='min-h-screen'>
            {details ? (
                <div className='p-10'>
                    <img
                        src={getImagePath(details?.image)}
                        alt={details?.title || "Project Image"}
                        className="w-full  object-cover overflow-hidden rounded-3xl"
                    />
                    <div className='pt-3'>
                        <div className='flex items-center gap-4'>
                            <a href={details.client} target='_blank'><Button variant='outlined' size='sm' className='dark:text-white border-green-500'>Clint</Button></a>

                            <a href={details.server} target='_blank'>  <Button variant='outlined' size='sm' className='dark:text-white border-green-500'>Server</Button>
                            </a>
                            <a href={details.liveUrl} target='_blank' >
                                <Button variant='outlined' size='sm' className='dark:text-white border-green-500'>Live</Button> </a>
                        </div>
                        <div className='py-3 px-10 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-4xl'>Overview 📖</h1>
                                <p>{details?.description}</p>
                            </div>

                            <div >
                                <h1 className='text-4xl'>Features ✨</h1>
                                <div className='py-3'>
                                    {
                                        (details?.features)?.map((e, i) => (

                                            <HighlightAfterColon key={i} text={e} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div >
                                <h1 className='text-4xl'>Tech Stack 🛠️</h1>
                                <div className='py-3'>
                                    {
                                        (details?.techstack)?.map((e, i) => (
                                            <HighlightAfterColon key={i} text={e} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                                {
                                    (details?.techStack)?.map((e, i) => (
                                        <span
                                            key={i}
                                            className="px-2 sm:px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] sm:text-xs rounded-full shadow-sm border border-[#00dc82]/20"
                                        >
                                            {e}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
};

export default ProjectDetails;