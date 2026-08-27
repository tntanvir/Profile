import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pb-32 pt-0">
      <div className="max-w-5xl mx-auto  px-4 pt-0 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 pt-14">

          {/* Left Column: Big Typography & Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                Let's work <br />
                <span className="text-emerald-500 font-serif italic">together.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-sm mb-16 leading-relaxed">
                I'm currently available to take on new projects. Let's discuss your ideas and bring them to life.
              </p>
            </div>

            <div className="space-y-10">
              <div className="group">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Email</p>
                <a href="mailto:tntanvir2382018@gmail.com" className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-emerald-500 transition-colors flex items-center gap-4 w-fit">
                  tntanvir2382018@gmail.com
                  <ArrowRight className="size-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div className="group">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Phone</p>
                <a href="https://wa.me/8801307629936" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-emerald-500 transition-colors flex items-center gap-4 w-fit">
                  (+880) 1307629936
                  <ArrowRight className="size-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Location</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="pt-4">
                <a href="https://forms.gle/afCNPxNvB4cKD2YP6" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-8 py-4 rounded-full font-bold hover:bg-emerald-500 hover:text-black transition-all w-fit">
                  <span className="text-sm tracking-wide">Fill out Google Form</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <a 
            href="https://forms.gle/afCNPxNvB4cKD2YP6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-zinc-950/30 border border-border/10 p-5 sm:p-12 rounded-3xl sm:rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm hover:border-emerald-500/50 transition-all cursor-pointer group/card"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-8 sm:gap-10 relative z-10 pointer-events-none">

              <div className="relative group pt-4">
                <input type="text" id="name" readOnly className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Your Name" />
                <label htmlFor="name" className="absolute left-0 top-6 text-muted-foreground text-base transition-all">What's your name?</label>
              </div>

              <div className="relative group pt-4">
                <input type="email" id="email" readOnly className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Your Email" />
                <label htmlFor="email" className="absolute left-0 top-6 text-muted-foreground text-base transition-all">What's your email address?</label>
              </div>

              <div className="relative group pt-4">
                <input type="text" id="subject" readOnly className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-0 top-6 text-muted-foreground text-base transition-all">Subject</label>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" readOnly rows={4} className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent resize-none leading-relaxed" placeholder="Your Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-6 text-muted-foreground text-base transition-all">Tell me about your project...</label>
              </div>

              <div className="group/btn mt-4 flex items-center justify-between gap-4 bg-foreground text-background px-8 py-5 rounded-full font-bold group-hover/card:bg-emerald-500 group-hover/card:text-black transition-all w-full sm:w-fit shadow-xl shadow-black/20 pointer-events-auto">
                <span className="text-sm tracking-wide">Fill Google Form</span>
                <div className="bg-background text-foreground rounded-full p-2 group-hover/card:bg-black group-hover/card:text-emerald-500 transition-colors">
                  <ArrowRight className="size-4 group-hover/card:-rotate-45 transition-transform" />
                </div>
              </div>

            </div>
          </a>

        </div>
      </div>
    </SectionWrapper>
  );
}
