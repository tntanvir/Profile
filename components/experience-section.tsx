'use client';

import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './section-wrapper';
import { Calendar, Network } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    role: "Junior Python Developer",
    company: "IT Bangla Ltd",
    type: "Remote",
    date: "May 2026 - Present",
    logo: "/image/job/IT Bangla Ltd.jpg",
    description: [
      "Developed and maintained RESTful APIs using Django and DRF / FastApi.",
      "Integrated Stripe, WebSocket, and Celery for real-time and asynchronous functionalities."
    ],
    tech: ['Django', 'DRF', 'FastAPI', 'Stripe', 'WebSocket', 'Celery']
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Join Venture Ai",
    type: "Onsite",
    date: "Sep 2025 - Feb 2026",
    logo: "/image/job/Join Venture Ai.jpg",
    description: [
      "Developed and maintained RESTful APIs using Django and DRF, integrating Stripe, WebSocket, and Celery for real-time and asynchronous functionalities.",
      "Implemented secure authentication and authorisation with OAuth2, JWT, and Django Allauth, ensuring reliable user management and access control.",
      "Optimised backend performance using Redis caching, query optimisation, and deployed production-ready apps with Nginx, Gunicorn, and Docker on Linux servers."
    ],
    tech: ['Django', 'DRF', 'OAuth2', 'JWT', 'Redis', 'Docker', 'Nginx']
  }
];

export function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState(experiences[0].company);

  useEffect(() => {
    const handleScroll = () => {
      const sections = experiences.map(exp => document.getElementById(`exp-${exp.id}`));

      let current = activeCompany;
      for (const section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        // Check if the section is in the upper half of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
          current = experiences.find(e => `exp-${e.id}` === section.id)?.company || current;
        }
      }
      setActiveCompany(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCompany]);

  return (
    <SectionWrapper id="experience" className="pt-0 pb-32">
      <div className="flex flex-col items-center justify-center mb-24 pt-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Where I've <span className="text-emerald-500 font-serif italic">Worked.</span></h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 md:gap-20 relative items-start">

          {/* Left Side: Sticky Company List */}
          <div className="md:sticky md:top-32 hidden md:block border-l-2 border-border/20">
            <ul className="flex flex-col">
              {experiences.map((exp) => {
                const isActive = activeCompany === exp.company;
                return (
                  <li key={exp.company}>
                    <a
                      href={`#exp-${exp.id}`}
                      className={`flex items-center gap-3 py-4 pl-6 -ml-[2px] border-l-2 transition-all duration-300 ${isActive
                        ? 'border-emerald-500 text-foreground font-bold bg-emerald-500/5'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border/50'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(`exp-${exp.id}`);
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                          setActiveCompany(exp.company);
                        }
                      }}
                    >
                      {isActive && <Network className="size-4 text-emerald-500 shrink-0" />}
                      <span className={isActive ? "" : "pl-7"}>{exp.company}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side: Scrollable Details */}
          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <div className="size-12 sm:size-14 relative rounded-full overflow-hidden border-2 border-border/50 shrink-0 bg-white/5">
                      <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.role} <br className="sm:hidden" />
                    <span className="text-emerald-500 font-normal sm:ml-2">@ {exp.company}</span>
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{exp.type}</p>

                <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono mb-6">
                  <Calendar className="size-4" />
                  <span>{exp.date}</span>
                </div>

                <div className="text-sm text-muted-foreground leading-relaxed mb-8 space-y-4">
                  {exp.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-pointer text-xs font-mono px-3 py-1 rounded-full border border-border/20 text-muted-foreground bg-zinc-900/50 hover:border-emerald-500/50 hover:text-emerald-500 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {index !== experiences.length - 1 && (
                  <div className="w-full h-px bg-border/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
