'use client';

import React, { useState } from 'react';
import { SectionWrapper } from './section-wrapper';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const certifications = [
  {
    id: "icpc",
    title: "ICPC Dhaka 2024",
    date: "2024",
    description: "Participated in the ICPC Dhaka Regional Contest 2024, showcasing problem-solving and algorithmic skills.",
    imageSrc: "/certification/icpc.jpg"
  },
  {
    id: "phitron",
    title: "Phitron Batch-4",
    date: "2025",
    description: "Complete DAS,OOP,MySql,Django with Phitron",
    imageSrc: "/certification/phitron.jpg"
  },
  {
    id: "skill",
    title: "Skill Competition",
    date: "2025",
    description: "Participation in the 2025 Skills Competition at the Institute Level",
    imageSrc: "/certification/skill.jpg"
  }
];

export function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper>
      <div className="section-title text-center text-3xl sm:text-5xl font-bold mb-4 pt-10">
        Certifications
      </div>
      <p className="text-center text-sm text-muted-foreground mb-16 max-w-2xl mx-auto px-4">
        These certificates are just pieces of paper. Their real value lies
        in what I can do with the skills they represent.
      </p>
      
      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-2 sm:px-4 relative pb-20">
        {certifications.map((cert, index) => (
          <motion.div 
            key={cert.id} 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 backdrop-blur-md border border-border/40 bg-background md:p-6 p-4 rounded-xl shadow-lg sticky"
            style={{ top: `calc(8rem + ${index * 1.5}rem)` }}
          >
            {/* Image Left */}
            <div className="w-full md:w-5/12 shrink-0">
              <img 
                src={cert.imageSrc} 
                alt={cert.title} 
                className="w-full h-48 md:h-64 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity border border-border/20"
                onClick={() => setSelectedImage(cert.imageSrc)}
              />
            </div>
            
            {/* Text Right */}
            <div className="w-full md:w-7/12 text-center md:text-left flex flex-col justify-center h-full md:pt-4">
              <h3 className="font-bold text-2xl mb-2">{cert.title}</h3>
              <p className="text-base text-muted-foreground mb-4">
                {cert.description}
              </p>
              <span className="text-sm font-mono text-emerald-500 mt-auto">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-emerald-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="size-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Certificate"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
