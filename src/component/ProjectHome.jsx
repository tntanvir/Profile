

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import redDrop from '../project/redDrop.png'

const projects = [
    {
        title: "Furry Cares",
        icon: "🐾",
        image: redDrop,
        description: "A web application allowing pet owners to access & share valuable pet care tips and stories.",
        liveUrl: "#",
        techStack: ["Tailwind", "TypeScript", "Next.js", "Prisma", "Vercel", "Express"],
    },
    {
        title: "Rideflow",
        icon: "🚲",
        image: redDrop,
        description: "A platform for renting bikes, managing bookings, and handling payments seamlessly.",
        liveUrl: "#",
        techStack: ["React", "Redux", "TypeScript", "Vercel", "Express", "Tailwind"],
    },
    {
        title: "Sportify",
        icon: "🏀",
        image: redDrop,
        description: "An e-commerce platform offering various sporting equipment and accessories.",
        liveUrl: "#",
        techStack: ["React", "Redux", "TypeScript", "Node.js", "Vercel", "Express"],
    },
    {
        title: "TechBlog",
        icon: "💻",
        image: redDrop,
        description: "A dynamic blog platform for tech enthusiasts to share and discuss the latest in technology.",
        liveUrl: "#",
        techStack: ["Vue.js", "Nuxt.js", "MongoDB", "Node.js", "Netlify", "Sass"],
    },
    {
        title: "EcoTrack",
        icon: "🌿",
        image: redDrop,
        description: "An app for tracking and reducing personal carbon footprint through daily activities.",
        liveUrl: "#",
        techStack: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
    },
    {
        title: "CodeCollab",
        icon: "👥",
        image: redDrop,
        description: "A real-time collaborative coding platform for remote teams and pair programming.",
        liveUrl: "#",
        techStack: ["Socket.io", "Express", "MongoDB", "React", "Docker", "AWS"],
    },
]

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
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-32 sm:h-40 object-cover"
                            />
                        </div>

                        {/* Project Title & Live Link */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold dark:text-white flex items-center gap-2">
                                <span className="text-xl sm:text-2xl">{project.icon}</span> {project.title}
                            </h3>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-700 rounded-full text-xs sm:text-sm dark:text-white transition hover:bg-zinc-600"
                            >
                                Live <ExternalLink size={14} />
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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

