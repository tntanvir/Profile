// import { Github, Linkedin, Facebook, Twitter, ExternalLink, Box, BookOpen, GraduationCap } from "lucide-react"
// import myimg from "../assets/myimg.jpg"
// import Marquee from "react-fast-marquee"
// import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaPython } from "react-icons/fa"
// import { TbBrandNextjs } from "react-icons/tb"
// import { IoLogoJavascript } from "react-icons/io5"
// import { SiMysql, SiTailwindcss } from "react-icons/si"
// import { DiDjango } from "react-icons/di"
// import { BiLogoMongodb } from "react-icons/bi"

// const TechItem = ({ icon: Icon, name }) => (
//     <div className="dark:text-white border w-24 sm:w-28 rounded-md p-2 flex gap-2 items-center ml-2 border-[#00dc82]/20 hover:bg-[#00dc82]/10 transition-colors">
//         {Icon}
//         <span className="text-xs sm:text-sm whitespace-nowrap">{name}</span>
//     </div>
// )

// const About = () => {
//     const technologies = [
//         { icon: <FaHtml5 />, name: "HTML" },
//         { icon: <FaCss3Alt />, name: "CSS" },
//         { icon: <IoLogoJavascript />, name: "JavaScript" },
//         { icon: <FaReact />, name: "React Js" },
//         { icon: <TbBrandNextjs />, name: "Next Js" },
//         { icon: <SiTailwindcss />, name: "Tailwindcss" },
//         { icon: <FaNode />, name: "Node Js" },
//         { icon: <DiDjango />, name: "Django" },
//         { icon: <BiLogoMongodb />, name: "MongoDB" },
//         { icon: <FaPython />, name: "Python" },
//         { icon: <SiMysql />, name: "MySQL" },
//     ]

//     return (
//         <div className="min-h-screen bg-transparent dark:bg-[#020420] text-gray-800 dark:text-white px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
//             {/* Gradient Blur Background */}
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <div
//                     className="w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full filter blur-[80px] sm:blur-[120px] 
//                     bg-gradient-to-br from-[#00dc82]/30 via-[#00ff9d]/20 to-[#007a4b]/10 
//                     dark:from-[#00dc82]/20 dark:via-[#00ff9d]/15 dark:to-[#007a4b]/10"
//                 ></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative z-10 max-w-7xl mx-auto">
//                 {/* Main heading */}
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-900 dark:text-white">
//                     ABOUT ME
//                 </h1>

//                 <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
//                     {/* Left column - Profile section */}
//                     <div className="bg-transparent dark:bg-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-md border border-[#00dc82]/20 shadow-sm">
//                         <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
//                             <img
//                                 src={myimg || "/placeholder.svg"}
//                                 alt="Profile"
//                                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-[#00dc82]"
//                             />
//                             <div>
//                                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Tanvir Rahaman</h2>
//                                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">tntanvir2382018@gmail.com</p>
//                             </div>
//                         </div>

//                         <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
//                             <p className="leading-relaxed">
//                                 After more than a year of learning, I have built a strong foundation in Django development and have
//                                 experience in creating scalable and dynamic web applications. Over the next year, my goal is to deepen
//                                 my expertise in modern technologies such as PostgreSQL, GraphQL, Docker, and AWS to develop secure,
//                                 efficient, and future-proof solutions.
//                             </p>
//                             <p className="leading-relaxed">
//                                 Additionally, I plan to continuously learn and adapt to new technologies to stay aligned with industry
//                                 trends. Ultimately, I aspire to become a senior software developer within the next 2-4 years, equipped
//                                 with a comprehensive skill set and the confidence to lead projects effectively.
//                             </p>
//                         </div>

//                         <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
//                             {[
//                                 { icon: <Linkedin size={18} />, href: "#" },
//                                 { icon: <Github size={18} />, href: "#" },
//                                 { icon: <Facebook size={18} />, href: "#" },
//                                 { icon: <Twitter size={18} />, href: "#" },
//                             ].map((social, index) => (
//                                 <a
//                                     key={index}
//                                     href={social.href}
//                                     className="p-2 sm:p-3 bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white rounded-full hover:bg-[#00dc82] hover:text-white transition-all hover:scale-110"
//                                 >
//                                     {social.icon}
//                                 </a>
//                             ))}
//                             <a
//                                 href="#"
//                                 className="ml-auto inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00dc82] text-white dark:text-[#020420] rounded-full hover:bg-[#00b86c] transition-all hover:scale-105 shadow-lg font-semibold text-sm sm:text-base"
//                             >
//                                 View Resume
//                                 <ExternalLink size={16} />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Right column - Skills grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {[
//                             {
//                                 icon: <Box className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
//                                 title: "Full-Stack Expertise",
//                                 description: "Proficient in building end-to-end applications Typescript, Mongoose, Express.Js, React.",
//                             },
//                             {
//                                 icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
//                                 title: "English Proficiency",
//                                 description: "I have strong English communication skills, both written and verbal.",
//                             },
//                             {
//                                 icon: <Box className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
//                                 title: "Modern Front-End Skills",
//                                 description: "Focused on modern front-end development with React, Tailwind CSS, Redux and Next.js.",
//                             },
//                             {
//                                 icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
//                                 title: "Continuous Learner",
//                                 description:
//                                     "Moving forward, I aim to master modern technologies like PostgreSQL, Prisma, GraphQL, and Docker",
//                             },
//                         ].map((skill, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-transparent dark:bg-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-md border border-[#00dc82]/20 shadow-sm transition-all hover:scale-[1.02] dark:hover:bg-white/10"
//                             >
//                                 {skill.icon}
//                                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#00dc82]">{skill.title}</h3>
//                                 <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Technologies Marquee Section */}
//                 <div className="border border-[#00dc82]/20 shadow-sm rounded-2xl sm:rounded-3xl mt-6 sm:mt-10 min-h-[12rem] text-center p-4 sm:p-5 flex flex-col justify-start items-center gap-4">
//                     <h1 className="bgcolors text-white text-xl sm:text-2xl font-bold rounded-md px-3 py-1">My Strengths</h1>
//                     <div className="w-full overflow-hidden">
//                         <Marquee className="py-2" speed={40} gradient={false}>
//                             {technologies.map((tech, index) => (
//                                 <TechItem key={index} icon={tech.icon} name={tech.name} />
//                             ))}
//                         </Marquee>
//                         <Marquee className="py-2" speed={40} direction="right" gradient={false}>
//                             {technologies.map((tech, index) => (
//                                 <TechItem key={index} icon={tech.icon} name={tech.name} />
//                             ))}
//                         </Marquee>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About

import { Github, Linkedin, Facebook, Twitter, ExternalLink, Box, BookOpen, GraduationCap } from "lucide-react"
import myimg from "../assets/myimg.jpg"
import Marquee from "react-fast-marquee"
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaPython } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { IoLogoJavascript } from "react-icons/io5"
import { SiMysql, SiTailwindcss } from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { BiLogoMongodb } from "react-icons/bi"

const TechItem = ({ icon: Icon, name }) => (
    <div className="dark:text-white border w-24 sm:w-28 rounded-md p-2 flex gap-2 items-center ml-2 border-[#00dc82]/20 hover:bg-[#00dc82]/10 transition-colors">
        {Icon}
        <span className="text-xs sm:text-sm whitespace-nowrap">{name}</span>
    </div>
)

const About = () => {
    const technologies = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <FaReact />, name: "React Js" },
        { icon: <TbBrandNextjs />, name: "Next Js" },
        { icon: <SiTailwindcss />, name: "Tailwindcss" },
        { icon: <FaNode />, name: "Node Js" },
        { icon: <DiDjango />, name: "Django" },
        { icon: <BiLogoMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiMysql />, name: "MySQL" },
    ]

    return (
        <div className="min-h-screen bg-transparent dark:bg-[#020420] text-gray-800 dark:text-white px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
            {/* Gradient Blur Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full filter blur-[80px] sm:blur-[120px] 
                    bg-gradient-to-br from-[#00dc82]/30 via-[#00ff9d]/20 to-[#007a4b]/10 
                    dark:from-[#00dc82]/20 dark:via-[#00ff9d]/15 dark:to-[#007a4b]/10"
                ></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-900 dark:text-white">
                    ABOUT ME
                </h1>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left column - Profile section */}
                    <div className="bg-transparent dark:bg-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-md border border-[#00dc82]/20 shadow-sm">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <img
                                src={myimg || "/placeholder.svg"}
                                alt="Profile"
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-[#00dc82]"
                            />
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Tanvir Rahaman</h2>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">tntanvir2382018@gmail.com</p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            <p className="leading-relaxed">
                                I am a passionate Django developer currently pursuing a diploma at Rangpur Polytechnic. With more than a year of experience, I have built a strong foundation in Django and web development. I am eager to explore new technologies and techniques, and I aim to develop secure and scalable applications.
                            </p>
                            <p className="leading-relaxed">
                                Over the next year, I plan to focus on learning modern tools such as PostgreSQL, Docker, and AWS. My ultimate goal is to become a senior software developer, lead impactful projects, and work with teams to deliver high-quality solutions.
                            </p>
                        </div>

                        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                            {[
                                { icon: <Linkedin size={18} />, href: "#" },
                                { icon: <Github size={18} />, href: "#" },
                                { icon: <Facebook size={18} />, href: "#" },
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
                            <a
                                href="#"
                                className="ml-auto inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00dc82] text-white dark:text-[#020420] rounded-full hover:bg-[#00b86c] transition-all hover:scale-105 shadow-lg font-semibold text-sm sm:text-base"
                            >
                                View Resume
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right column - Skills grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <Box className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
                                title: "Full-Stack Expertise",
                                description: "Proficient in building end-to-end applications with React,Django Django REST framework, MySQL",
                            },
                            {
                                icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
                                title: "Educational Background ",
                                description: "Currently pursuing a diploma at Rangpur Polytechnic Institute.",
                            },
                            {
                                icon: <Box className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
                                title: "Modern Front-End Skills",
                                description: "Focused on modern front-end development with React, Tailwind CSS, Redux, and Next.js.",
                            },
                            {
                                icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#00dc82]" />,
                                title: "Continuous Learner",
                                description: "Moving forward, I aim to master modern technologies like PostgreSQL, Prisma, GraphQL, and Docker.",
                            },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-transparent dark:bg-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-md border border-[#00dc82]/20 shadow-sm transition-all hover:scale-[1.02] dark:hover:bg-white/10"
                            >
                                {skill.icon}
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#00dc82]">{skill.title}</h3>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies Marquee Section */}
                <div className="border border-[#00dc82]/20 shadow-sm rounded-2xl sm:rounded-3xl mt-6 sm:mt-10 min-h-[12rem] text-center p-4 sm:p-5 flex flex-col justify-start items-center gap-4">
                    <h1 className="bgcolors text-white text-xl sm:text-2xl font-bold rounded-md px-3 py-1">My Strengths</h1>
                    <div className="w-full overflow-hidden">
                        <Marquee className="py-2" speed={40} gradient={false}>
                            {technologies.map((tech, index) => (
                                <TechItem key={index} icon={tech.icon} name={tech.name} />
                            ))}
                        </Marquee>
                        <Marquee className="py-2" speed={40} direction="right" gradient={false}>
                            {technologies.map((tech, index) => (
                                <TechItem key={index} icon={tech.icon} name={tech.name} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
