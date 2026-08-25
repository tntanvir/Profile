'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function GithubContributionsSection() {
  const { theme, systemTheme } = useTheme();
  
  // Determine if we should show dark mode calendar
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <section className="border-x border-border/40">
      <h2 className="sr-only">GitHub Contributions</h2>
      <div className="p-4 py-8 overflow-hidden flex justify-center">
        <GitHubCalendar 
          username="ehmasuk" 
          colorScheme={isDark ? "dark" : "light"}
          fontSize={14}
          blockSize={11}
          blockMargin={4}
          theme={{
            light: ['#ebedf0', '#e5e5e5', '#a3a3a3', '#525252', '#171717'],
            dark: ['#161b22', '#3f3f46', '#71717a', '#a1a1aa', '#f4f4f5'],
          }}
        />
      </div>
    </section>
  );
}
