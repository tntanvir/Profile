

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import redDrop from '../project/redDrop.png'
import phitbook from '../project/phitbook.png'
import style from '../project/style.png'
import { Link } from "react-router-dom";
import projects from '../data.json'

// const projectsd = [
//     {
//         id: 1,
//         title: "Phibook",
//         icon: "🐾",
//         image: phitbook,
//         description: "Connect, share, and engage with friends on our social media platform. Post updates, like, comment, and explore a vibrant community in real-time!",
//         liveUrl: "https://phibook1.web.app/",
//         client: '',
//         server: '',
//         techStack: ["React", "Tailwind", 'Django REST framework'],
//     },
//     {
//         id: 2,
//         title: "Style Swap",
//         icon: "🐾",
//         image: style,
//         description: "An interactive eCommerce platform offering a seamless shopping experience with a variety of products, secure checkout, and user-friendly navigation for buyers and sellers.",
//         liveUrl: "https://style-23.web.app/",
//         client: '',
//         server: '',
//         techStack: ["React", "Tailwind", 'Django REST framework'],
//     },
//     {
//         id: 3,
//         title: "Red Drop",
//         icon: "🐾",
//         image: redDrop,
//         description: "Save lives by connecting blood donors with those in need. Join our blood donation platform to make a difference and help patients in critical situations.",
//         liveUrl: "https://red-drop-4d803.web.app/",
//         client: '',
//         server: '',
//         techStack: ["React", "Tailwind", 'Django REST framework'],
//     },


// ]
const imageMap = {
    phitbook: phitbook,
    style: style,
    redDrop: redDrop
};

const ProjectHome = () => {
    return (
        <div className="min-h-screen bg-transparent dark:bg-[#020420] text-gray-800 dark:text-white p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* Gradient Blur Background */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
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

            {/* Animated Title */}
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-white relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                My Works in Code
            </motion.h1>

            {/* Animated Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/55 dark:bg-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 backdrop-blur-md border border-[#00dc82]/20 shadow-sm"
                    >
                        {/* Project Image */}
                        <div className="relative rounded-xl overflow-hidden mb-4 sm:mb-5 border border-zinc-700">
                            <img
                                src={imageMap[project.image] || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-32 sm:h-40 object-cover"
                            />
                        </div>

                        {/* Project Title & Live Link */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold dark:text-white flex items-center gap-2">
                                <span className="text-xl sm:text-2xl">{project.icon}</span> {project.title}
                            </h3>
                            <div className="flex justify-center items-center">
                                <Link
                                    to={`/porject/${project.id}`}

                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-700 rounded-full text-xs sm:text-sm dark:text-white transition hover:bg-white/10 "
                                >
                                    Details <ExternalLink size={14} />
                                </Link>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-700 rounded-full text-xs sm:text-sm dark:text-white transition hover:bg-white/10"
                                >
                                    Live <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2  ">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 sm:px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] sm:text-xs rounded-full shadow-sm border border-[#00dc82]/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ProjectHome

