'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, FileText, Download, Facebook, Plus } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Spotlight } from './ui/spotlight';

function SocialLink({ href, tooltip, icon, rotation, className = '' }: { href: string, tooltip: string, icon: React.ReactNode, rotation: string, className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <div className="group relative flex items-center justify-center -space-x-2">
        <div className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 flex-col items-center rounded-md bg-slate-900 dark:bg-white px-3 py-1 text-xs group-hover:flex" style={{ transform: `translateX(0px) rotate(${rotation}deg)` }}>
          <p className="whitespace-nowrap text-sm text-white dark:text-slate-900">{tooltip}</p>
        </div>
        <div className="border hover:bg-gray-900/5 group duration-500 cursor-pointer rounded-full border-slate-900/20 dark:border-white/20 size-10 grid place-items-center dark:hover:bg-white/10 dark:hover:text-white bg-background/50 backdrop-blur-sm">
          {icon}
        </div>
      </div>
    </a>
  );
}

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] py-20 sm:py-32 border-x border-t border-border screen-line-before">
        <div className="absolute bottom-full left-[-1px] w-[1px] h-[32px] sm:h-[64px] bg-border pointer-events-none z-[-1]" />
        <div className="absolute bottom-full right-[-1px] w-[1px] h-[32px] sm:h-[64px] bg-border pointer-events-none z-[-1]" />
        <Plus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 bg-background z-20" />
        <Plus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 bg-background z-20" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_10%,var(--color-background)_100%)]"></div>

        <Spotlight
          className="top-[-10%] sm:-top-20 left-[-10%] sm:left-0 md:left-60 md:-top-20"
          fill="rgba(16, 185, 129, 0.5)"
        />

        <motion.div 
          className="relative z-10 flex flex-col items-center text-center px-4 mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-mono mb-4 text-muted-foreground">
            <span>Hello</span>
            <span className="text-emerald-500">!</span>
            <span>I'm</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
            Tanvir Rahman
          </h1>
          
          <h2 className="text-3xl sm:text-5xl text-emerald-500 font-mono flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Django developer',
                2000,
                'MERN Stack developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
            <span className="w-[3px] h-8 sm:h-12 bg-emerald-500 ml-1 animate-pulse"></span>
          </h2>
        </motion.div>

        <div className="absolute bottom-8 left-0 w-full flex flex-col sm:flex-row items-center justify-between px-8 sm:px-12 gap-6">
          <div className="flex gap-4">
            <SocialLink href="https://github.com/tntanvir" tooltip="GitHub" icon={<Github className="size-4" />} rotation="-10" />
            <SocialLink href="https://www.facebook.com/tntanvirr/" tooltip="Facebook" icon={<Facebook className="size-4" />} rotation="5" />
            <SocialLink href="https://www.linkedin.com/in/tntanvir" tooltip="LinkedIn" icon={<Linkedin className="size-4" />} rotation="10" />
            <SocialLink href="#" tooltip="Twitter" icon={<Twitter className="size-4" />} rotation="-5" />
          </div>
          <div>
            <a href="#" className="flex items-center gap-2 border border-border/40 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 bg-background/50 backdrop-blur-sm">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
