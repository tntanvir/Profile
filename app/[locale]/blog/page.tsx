import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import blogsData from '@/blogs.json';
import { useLocale, useTranslations } from 'next-intl';

export default function AllBlogsPage() {
  const locale = useLocale() as 'en' | 'bn';
  const t = useTranslations('Blog');

  return (
    <main className="max-w-screen overflow-x-clip px-4 py-12 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors mb-10 text-sm font-medium"
        >
          <ArrowLeft className="size-4" />
          {t('backToHome')}
        </Link>

        {/* Header */}
        <div className="flex flex-col mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            {t('all')} <span className="text-emerald-500 font-serif italic">{t('articles')}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {t('explore')}
          </p>
        </div>

        {/* All Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-10">
          {blogsData.map((blog) => (
            <Link
              href={`/${locale}/blog/${blog.id}`}
              key={blog.id}
              className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border/20 bg-zinc-950/50 overflow-hidden hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-zinc-900">
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
      </div>
    </main>
  );
}
