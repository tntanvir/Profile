import React from 'react';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  showTopBorder?: boolean;
}

export function SectionWrapper({ children, className, showTopBorder = true, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative w-full max-w-6xl mx-auto border-x border-border px-6 sm:px-12 pb-10 pt-0",
        className
      )}
      {...props}
    >
      {showTopBorder && (
        <>
          <div className="absolute top-0 left-0 w-full screen-line-before"></div>
          <Plus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 bg-background" />
          <Plus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-muted-foreground size-5 stroke-1 bg-background" />
        </>
      )}
      {children}
    </section>
  );
}
