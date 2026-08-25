import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiJest,
  SiMongoose,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiNotion,
  SiPostman
} from 'react-icons/si';

const tools = [
  { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Nextjs', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'NodeJs', icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwindcss', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
  { name: 'ExpressJs', icon: SiExpress, color: '#ffffff' },
  { name: 'PostgresSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Notion', icon: SiNotion, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

export function ToolsSection() {
  return (
    <SectionWrapper>
      <h2 className="text-xl font-semibold mb-6">Goto Tools</h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center justify-center p-4 border border-border/20 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] transition-colors gap-3 group">
            <tool.icon 
              className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
              style={{ color: tool.color }}
            />
            <span className="text-[10px] text-muted-foreground">{tool.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
