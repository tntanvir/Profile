import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { Github, Linkedin, Mail, Code, BookOpen, Layers, Laptop } from 'lucide-react';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col items-center justify-center mb-16 pt-10 text-center">
        {/* <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-500 uppercase mb-3">01. About Me</span> */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">A brief <span className="text-emerald-500 font-serif italic">introduction.</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 max-w-5xl mx-auto px-4 sm:px-0">

        {/* Left Card: Profile Details */}
        <div className="group border border-border/20 rounded-3xl p-8 bg-zinc-950/50 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Tanvir"
                alt="MD. Tanvir Rahaman Fuad"
                className="size-16 rounded-full border border-border/20 bg-zinc-900"
              />
              <div>
                <h3 className="font-bold text-xl text-foreground">MD. Tanvir Rahaman Fuad</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">tntanvir2382018@gmail.com</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-4 mb-8 leading-relaxed">
              <p>
                Junior Django backend developer with hands-on experience in Django REST Framework, PostgreSQL, and Docker.
              </p>
              <p>
                Passionate about building scalable APIs and clean backend systems. Seeking a remote opportunity to contribute to real-world projects while continuously improving my technical and problem-solving skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4">
            <div className="flex gap-3">
              <a href="https://github.com/tntanvir" target="_blank" rel="noopener noreferrer" className="border border-border/20 size-10 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                <Github className="size-4" />
              </a>
              <a href="https://linkedin.com/in/tntanvir/" target="_blank" rel="noopener noreferrer" className="border border-border/20 size-10 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                <Linkedin className="size-4" />
              </a>
              <a href="mailto:tntanvir2382018@gmail.com" className="border border-border/20 size-10 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                <Mail className="size-4" />
              </a>
            </div>
            <a href="https://forms.gle/afCNPxNvB4cKD2YP6" target="_blank" rel="noopener noreferrer" className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-black transition-all">
              Hire me
            </a>
          </div>
        </div>

        {/* Right Side: 2x2 Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group border border-border/20 rounded-3xl p-6 bg-zinc-950/50 flex flex-col hover:border-emerald-500/30 transition-colors">
            <Layers className="size-5 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-foreground mb-2">Full Stack Experience</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Experience in building secure web applications with React, Django, Django REST Framework, MySQL.</p>
          </div>

          <div className="group border border-border/20 rounded-3xl p-6 bg-zinc-950/50 flex flex-col hover:border-emerald-500/30 transition-colors">
            <BookOpen className="size-5 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-foreground mb-2">Educational Background</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Currently pursuing a degree in Computer Science and Engineering.</p>
          </div>

          <div className="group border border-border/20 rounded-3xl p-6 bg-zinc-950/50 flex flex-col hover:border-emerald-500/30 transition-colors">
            <Laptop className="size-5 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-foreground mb-2">Modern Front-End Skills</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Focused on modern frontend development with React, Tailwind CSS, Docker and Nextjs.</p>
          </div>

          <div className="group border border-border/20 rounded-3xl p-6 bg-zinc-950/50 flex flex-col hover:border-emerald-500/30 transition-colors">
            <Code className="size-5 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-foreground mb-2">Continuous Learner</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Moving forward, I aim to master modern technologies like PostgreSQL, Prisma, GraphQL, and Docker.</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
