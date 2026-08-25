'use client';

import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { motion } from 'motion/react';
import Marquee from "react-fast-marquee";

export function StackSection() {
  const stack = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-dark.svg', lightIcon: 'https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-light.svg' },
    { name: 'Tailwind CSS', icon: 'https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Express', icon: 'https://assets.chanhdai.com/images/tech-stack-icons/express-dark.svg', lightIcon: 'https://assets.chanhdai.com/images/tech-stack-icons/express-light.svg' },
    { name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' }
  ];

  const firstRow = stack.slice(0, 10);
  const secondRow = stack.slice(10);

  const TechCard = ({ tech }: { tech: any }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full border border-border/20 bg-zinc-950/50 hover:border-emerald-500/30 transition-colors cursor-pointer group"
    >
      <div className="size-8 flex items-center justify-center shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
        {tech.lightIcon ? (
          <>
            <img alt={`${tech.name} icon`} loading="lazy" className="hidden dark:block w-full h-full object-contain" src={tech.icon} />
            <img alt={`${tech.name} icon`} loading="lazy" className="block dark:hidden w-full h-full object-contain" src={tech.lightIcon} />
          </>
        ) : (
          <img alt={`${tech.name} icon`} loading="lazy" className="w-full h-full object-contain" src={tech.icon} />
        )}
      </div>
      <span className="font-mono text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-emerald-500 transition-colors whitespace-nowrap">{tech.name}</span>
    </motion.div>
  );

  return (
    <SectionWrapper id="stack" className="pb-0">
      <div className="flex flex-col items-center justify-center mb-16 pt-10 text-center">
        {/* <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-500 uppercase mb-3">06. Skills</span> */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Tech <span className="text-emerald-500 font-serif italic">Stack.</span></h2>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto overflow-hidden px-4">
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="pb-4">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </Marquee>

        <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="pb-4">
          {secondRow.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
