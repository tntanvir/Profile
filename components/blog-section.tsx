import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { ArrowUpRight } from 'lucide-react';

import Link from 'next/link';
import blogsData from '@/blogs.json';
import { useLocale, useTranslations } from 'next-intl';

export function BlogSection() {
  const locale = useLocale() as 'en' | 'bn';
  const t = useTranslations('Blog');

  return (
    <SectionWrapper id="blog">
      <div className="flex flex-col items-center justify-center mb-16 pt-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t('latest')} <span className="text-emerald-500 font-serif italic">{t('blog')}</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0 pb-10">
        {blogsData.slice(0, 3).map((blog) => (
          <Link
            href={`/${locale}/blog/${blog.id}`}
            key={blog.id}
            className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border/20 bg-zinc-950/50 overflow-hidden hover:border-emerald-500/30 transition-colors cursor-pointer"
          >
            <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={blog.image}
                alt={blog.title[locale]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 text-xs font-mono font-semibold text-emerald-500 bg-zinc-950/80 backdrop-blur-md rounded-full border border-border/20">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 flex flex-col flex-1">
              <div className="text-xs text-emerald-500 font-mono mb-4 tracking-wider">
                {blog.date}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-emerald-500 transition-colors line-clamp-2">
                {blog.title[locale]}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                {blog.excerpt[locale]}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                {t('readArticle')}
                <ArrowUpRight className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {blogsData.length > 3 && (
        <div className="flex justify-center mt-4">
          <Link
            href={`/${locale}/blog`}
            className="group flex items-center gap-2 border border-border/40 px-8 py-3 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 bg-background/50 backdrop-blur-sm"
          >
            {t('viewAll')}
            <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
}
