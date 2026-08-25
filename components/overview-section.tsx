import React from 'react';
import { CodeXml, MapPin, Phone, Mail, Globe, Mars } from 'lucide-react';

export function OverviewSection() {
  return (
    <section className="border-x border-border/40">
      <h2 className="sr-only">Overview</h2>
      <div className="p-4 space-y-2">
        
        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <CodeXml className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">
            Frontend Developer{' '}@<a className="ml-0.5 font-medium underline-offset-4 hover:underline text-foreground" href="#" target="_blank" rel="noopener">Upwork</a>
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <MapPin className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">Dhaka, Bangladesh</p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <Phone className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">
            <a className="underline-offset-4 hover:underline text-foreground" href="tel:+8801700000000" target="_blank" rel="noopener noreferrer">+8801700000000</a>
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <Mail className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">
            <a className="underline-offset-4 hover:underline text-foreground" href="mailto:ehmasuk@gmail.com" target="_blank" rel="noopener noreferrer">ehmasuk@gmail.com</a>
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <Globe className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">
            <a className="underline-offset-4 hover:underline text-foreground" href="https://emdadul.com" target="_blank" rel="noopener noreferrer">emdadul.com</a>
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-border/40 ring-offset-1 ring-offset-background" aria-hidden="true">
            <Mars className="pointer-events-none size-4 text-muted-foreground" />
          </div>
          <p className="text-balance">he/him</p>
        </div>

      </div>
    </section>
  );
}
