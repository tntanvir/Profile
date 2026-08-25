import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pb-32 pt-0">
      <div className="max-w-5xl mx-auto  px-4 pt-0 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-14">

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
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="bg-zinc-950/30 border border-border/10 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <form className="flex flex-col gap-10 relative z-10">

              <div className="relative group pt-4">
                <input type="text" id="name" required className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Your Name" />
                <label htmlFor="name" className="absolute left-0 top-6 text-muted-foreground text-base transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-muted-foreground cursor-text font-medium">What's your name?</label>
              </div>

              <div className="relative group pt-4">
                <input type="email" id="email" required className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Your Email" />
                <label htmlFor="email" className="absolute left-0 top-6 text-muted-foreground text-base transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-muted-foreground cursor-text font-medium">What's your email address?</label>
              </div>

              <div className="relative group pt-4">
                <input type="text" id="subject" required className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-0 top-6 text-muted-foreground text-base transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-muted-foreground cursor-text font-medium">Subject</label>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-border/30 py-2 text-foreground focus:outline-none focus:border-emerald-500 transition-colors peer placeholder-transparent resize-none leading-relaxed" placeholder="Your Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-6 text-muted-foreground text-base transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-muted-foreground cursor-text font-medium">Tell me about your project...</label>
              </div>

              <button type="button" className="group mt-4 flex items-center justify-between gap-4 bg-foreground text-background px-8 py-5 rounded-full font-bold hover:bg-emerald-500 hover:text-black transition-all w-full sm:w-fit shadow-xl shadow-black/20">
                <span className="text-sm tracking-wide">Send Message</span>
                <div className="bg-background text-foreground rounded-full p-2 group-hover:bg-black group-hover:text-emerald-500 transition-colors">
                  <ArrowRight className="size-4 group-hover:-rotate-45 transition-transform" />
                </div>
              </button>

            </form>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
