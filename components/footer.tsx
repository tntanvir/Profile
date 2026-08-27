import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { Github, Linkedin, Mail, Plus, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <>
      <SectionWrapper className="pb-24 relative">
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-0 mt-0 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight pt-10">
            Ready to build <br /> something <span className="text-emerald-500 font-serif italic">amazing?</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-10 leading-relaxed">
            I'm currently available for remote or onsite roles. If you're looking for a passionate backend developer to join your team, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:tntanvir2382018@gmail.com" className="group flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-8 py-4 rounded-full font-bold hover:bg-emerald-500 hover:text-black transition-all">
              Let's Get In Touch
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://forms.gle/afCNPxNvB4cKD2YP6" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 border border-border/40 px-8 py-4 rounded-full font-bold hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all bg-background/50 backdrop-blur-sm">
              Fill Google Form
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper showTopBorder={false} className="py-1 border-t border-x border-border relative">
        {/* Infinite horizontal line at the top */}
        <div className="absolute top-[-1px] left-[-50vw] w-[200vw] h-[1px] bg-border pointer-events-none z-[-1]" />

        {/* Plus signs perfectly aligned with the 1px border edge */}
        <Plus className="absolute top-[-1px] left-[-1px] -translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 z-20" />
        <Plus className="absolute top-[-1px] right-[-1px] translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 z-20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          <div className="text-xs font-mono text-muted-foreground text-center md:text-left whitespace-nowrap">
            © {new Date().getFullYear()} <span className="text-emerald-500">MD. Tanvir Rahaman Fuad.</span> All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/tntanvir" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-500 transition-colors">
              <Github className="size-[18px] stroke-[1.5]" />
            </a>
            <a href="https://linkedin.com/in/tntanvir/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-500 transition-colors">
              <Linkedin className="size-[18px] stroke-[1.5]" />
            </a>
            <a href="mailto:tntanvir2382018@gmail.com" className="text-muted-foreground hover:text-emerald-500 transition-colors">
              <Mail className="size-[18px] stroke-[1.5]" />
            </a>
          </div>
        </div>

        {/* Vertical lines going down matching the exact bottom padding of the page */}
        <div className="absolute top-full left-[-1px] w-[1px] h-[32px] sm:h-[64px] bg-border pointer-events-none z-[-1]" />
        <div className="absolute top-full right-[-1px] w-[1px] h-[32px] sm:h-[64px] bg-border pointer-events-none z-[-1]" />
      </SectionWrapper>
    </>
  );
}
