import React from 'react';

const data = {
    "certificates": [
        {
            "title": "ICPC Dhaka 2024",
            "description": "Participated in the ICPC Dhaka Regional Contest 2024, showcasing problem-solving and algorithmic skills.",
            "date": "2024",
            "image": "icpc"
        },
        {
            "title": "Skill Competition",
            "description": "Achieved top ranking in a national skill competition, demonstrating expertise in full-stack web development.",
            "date": "2025",
            "image": "skill"
        }
    ]
}



const images = import.meta.glob("../certification/*.jpg", { eager: true });

const getImagePath = (imageName) => images[`../certification/${imageName}.jpg`]?.default || "/placeholder.svg";



const Cartificate = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full filter blur-[80px] sm:blur-[120px] 
                    bg-gradient-to-br from-[#00dc82]/30 via-[#00ff9d]/20 to-[#007a4b]/10 
                    dark:from-[#00dc82]/20 dark:via-[#00ff9d]/15 dark:to-[#007a4b]/10"
                ></div>
            </div>
            <div className='min-h-screen flex flex-col justify-center items-center '>

                <div className='text-center mb-8 sm:mb-16 text-gray-900 dark:text-white'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Certifications
                    </h1>
                    <p>These certificates are just pieces of paper. Their real value lies in what I can do with the skills they represent.</p>
                </div>
                <div className='px-20 w-full space-y-8'>
                    {data.certificates.map((e, i) => (
                        <div key={i} className='flex items-center backdrop-blur-md border border-[#00dc82]/20 m-1 sticky top-40 bg-white dark:bg-white/5 p-4 rounded-lg shadow-lg'>
                            {/* Left Side: Image */}
                            <div className='w-1/3'>
                                <img src={getImagePath(e.image)} alt={e.title} className='w-full h-60 object-cover rounded-md' />
                            </div>
                            {/* Right Side: Text */}
                            <div className='w-2/3 pl-6'>
                                <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>{e.title}</h2>
                                <p className='text-gray-700 dark:text-gray-300'>{e.description}</p>
                                <p className='text-gray-500 text-sm mt-1'>{e.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cartificate;
