import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "bp-liberia",
    name: "BP Liberia",
    tagline: "Music and video streaming platform",
    description: "A scalable music and video streaming platform empowering artists to share content globally. Built with Django and AWS S3, featuring robust user authentication, a dedicated artist portal, and high-performance dynamic media distribution.",
    tech: ["Django", "DRF", "PostgreSQL", "AWS S3", "Redis", "Celery", "Docker"],
    imageSrc: "/image/1stproject/previews.png",
    source: "https://github.com/tntanvir",
    demo: "https://www.bpnations.com/"
  },
  {
    id: "tntvs",
    name: "TNTVs",
    tagline: "Free Live Sports on Your Device",
    description: "The ultimate Android application for live sports streaming. Watch live cricket, football, tennis, and premium sports channels in stunning HD. Features robust multi-server failover, real-time live scores, and seamless TV casting.",
    tech: ["Android", "Android TV", "Firestick", "Live Streaming", "Casting"],
    imageSrc: "/image/3rdproject/previews.png",
    source: null,
    demo: "https://tntv-s.web.app/"
  }
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col items-center justify-center mb-16 pt-10 text-center">
        {/* <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-500 uppercase mb-3">02. Selected Work</span> */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Featured <span className="text-emerald-500 font-serif italic">Projects.</span> </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
        {projects.map((project) => (
          <div key={project.id} className="group border border-border/20 rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950/50 flex flex-col hover:border-emerald-500/30 transition-colors">
            {/* Image Placeholder */}
            <div className="w-full h-40 sm:h-52 overflow-hidden bg-zinc-900 relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-4 sm:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-foreground group-hover:text-emerald-500 transition-colors">{project.name}</h3>
                <div className="flex gap-3">
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-500 transition-colors">
                      <Github className="size-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-500 transition-colors">
                      <ExternalLink className="size-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full border border-border/20 text-muted-foreground bg-zinc-900/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
