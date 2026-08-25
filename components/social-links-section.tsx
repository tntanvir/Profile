import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function SocialLinksSection() {
  const links = [
    {
      name: 'LinkedIn',
      username: 'ehmasuk',
      href: 'https://linkedin.com/in/ehmasuk',
      iconUrl: 'https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475'
    },
    {
      name: 'GitHub',
      username: 'ehmasuk',
      href: 'https://github.com/ehmasuk',
      iconUrl: 'https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475'
    },
    {
      name: 'X (Formerly Twitter)',
      username: '@eh_masuk',
      href: 'https://x.com/eh_masuk',
      iconUrl: 'https://assets.chanhdai.com/images/link-icons/x.webp?t=1759581475'
    },
    {
      name: 'daily.dev',
      username: '@ehmasuk',
      href: 'https://app.daily.dev/ehmasuk',
      iconUrl: 'https://assets.chanhdai.com/images/link-icons/dailydotdev.webp?t=1759581475'
    }
  ];

  return (
    <section className="border-x border-border/40">
      <h2 className="sr-only">Social Links</h2>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-border/40"></div>
          <div className="border-l border-border/40"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 relative">
          {links.map((link, idx) => (
            <a 
              key={link.name}
              className={`group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors select-none border-b border-border/40 hover:bg-muted/50 ${idx % 2 === 0 ? 'sm:border-r' : ''}`}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="relative size-12 shrink-0">
                <img 
                  alt={link.name} 
                  loading="lazy" 
                  width="48" 
                  height="48" 
                  decoding="async" 
                  className="rounded-xl" 
                  src={link.iconUrl} 
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10"></div>
              </div>
              <div className="flex-1">
                <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline text-foreground">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground mr-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
