import React from 'react';

export function PatternDivider() {
  return (
    <div className="relative flex h-8 w-full border-x border-border screen-line-before screen-line-after">
      <div className="absolute inset-0 before:absolute before:-left-[50vw] before:-z-10 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-[size:20px_20px] before:[--pattern-foreground:theme(colors.black)]/5 dark:before:[--pattern-foreground:rgba(255,255,255,0.3)] before:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"></div>
    </div>
  );
}
