

import React from "react";



const data = {
    certificates: [
        {
            title: "ICPC Dhaka 2024",
            description:
                "Participated in the ICPC Dhaka Regional Contest 2024, showcasing problem-solving and algorithmic skills.",
            date: "2024",
            image: "icpc",
        },
        {
            title: "Skill Competition",
            description:
                "Achieved top ranking in a national skill competition, demonstrating expertise in full-stack web development.",
            date: "2025",
            image: "skill",
        },
    ],
};



import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const Cartificate = () => {
    const images = import.meta.glob("../certification/*.jpg", { eager: true });

    const getImagePath = (imageName) => {
        return images[`../certification/${imageName}.jpg`]?.default || "/placeholder.svg";
    }
    const [open, setOpen] = useState(false);

    const [img, setImg] = useState(null);

    const handleOpen = (e) => {


        setImg(e)
        setOpen(!open)

    }


    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full filter blur-[80px] sm:blur-[120px] 
                    bg-gradient-to-br from-[#00dc82]/30 via-[#00ff9d]/20 to-[#007a4b]/10 
                    dark:from-[#00dc82]/20 dark:via-[#00ff9d]/15 dark:to-[#007a4b]/10"
                ></div>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center ">
                <div className="text-center mb-8 sm:mb-16 text-gray-900 dark:text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Certifications
                    </h1>
                    <p>
                        These certificates are just pieces of paper. Their real value lies
                        in what I can do with the skills they represent.
                    </p>

                </div>
                <div className="md:px-6 px-1 sm:px-20 w-full space-y-8">
                    {data.certificates.map((e, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row items-center md:items-start gap-6 backdrop-blur-md border border-[#00dc82]/20 bg-white dark:bg-white/5 md:p-4 p-1 rounded-lg shadow-lg sticky top-40"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/3">
                                <img
                                    src={getImagePath(e.image)}
                                    alt={e.title}
                                    className="w-full h-60 object-cover rounded-md cursor-pointer"
                                    // onClick={() => console.log(e?.image)}
                                    onClick={() => handleOpen(e.image)}
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {e.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">{e.description}</p>
                                <p className="text-gray-500 text-sm mt-1">{e.date}</p>

                            </div>
                        </div>
                    ))}
                </div>
                <>

                    <Dialog
                        open={open}
                        handler={handleOpen}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                        size="lg"
                        className="bg-transparent shadow-none w-fit"
                        onClick={handleOpen}
                    >

                        <DialogBody className="flex justify-center items-center  p-0">

                            <img
                                src={getImagePath(img)}
                                alt={img}
                                className="h-full object-cover rounded-md cursor-pointer"
                                // onClick={() => console.log(e?.image)}
                                width={780}

                            />

                        </DialogBody>
                        {/* <DialogFooter className="p-0 bg-black">
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter> */}
                    </Dialog>
                </>
            </div>
        </div>
    );
};

export default Cartificate;
