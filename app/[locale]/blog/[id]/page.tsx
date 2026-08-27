import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, ArrowUpRight } from 'lucide-react';
import blogsData from '@/blogs.json';
import { getTranslations, getLocale } from 'next-intl/server';

// In Next.js App Router, dynamic params are passed as props
export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const locale = (await getLocale()) as 'en' | 'bn';
  const t = await getTranslations('Blog');

  // Await the params object before accessing properties
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = blogsData.find((b) => b.id === blogId);

  if (!blog) {
    notFound();
  }

  // Get other blogs for the "More Blogs" section
  const otherBlogs = blogsData.filter((b) => b.id !== blogId).slice(0, 3);

  return (
    <main className="max-w-screen overflow-x-clip px-4 py-12 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors mb-10 text-sm font-medium"
        >
          <ArrowLeft className="size-4" />
          {t('backToHome')}
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs font-mono font-semibold text-emerald-500 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              {blog.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <Calendar className="size-4" />
              {blog.date}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            {blog.title[locale]}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {blog.excerpt[locale]}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[40vh] sm:h-[60vh] rounded-3xl overflow-hidden mb-16 border border-border/20">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img 
            src={blog.image} 
            alt={blog.title[locale]} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-emerald max-w-none mb-24 prose-lg md:prose-xl">
          {blog.content[locale].split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-foreground">{paragraph.replace('### ', '')}</h3>;
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-6 list-disc mb-2">{paragraph.replace('- ', '')}</li>;
            } else if (paragraph.trim() === '') {
              return <br key={index} />;
            } else {
              // Parse basic bold markdown
              const boldRegex = /\*\*(.*?)\*\*/g;
              const formattedParagraph = paragraph.split(boldRegex).map((part, i) => {
                if (i % 2 === 1) {
                  return <strong key={i} className="text-foreground">{part}</strong>;
                }
                return part;
              });

              return <p key={index} className="text-muted-foreground leading-relaxed mb-6">{formattedParagraph}</p>;
            }
          })}
        </article>

        {/* More Blogs Section */}
        {otherBlogs.length > 0 && (
          <div className="border-t border-border/20 pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-10">
              {t('more')} <span className="text-emerald-500 font-serif italic">{t('articles')}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {otherBlogs.map((otherBlog) => (
                <Link
                  href={`/${locale}/blog/${otherBlog.id}`}
                  key={otherBlog.id}
                  className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border/20 bg-zinc-950/50 overflow-hidden hover:border-emerald-500/30 transition-colors cursor-pointer"
                >
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={otherBlog.image}
                      alt={otherBlog.title[locale]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-mono font-semibold text-emerald-500 bg-zinc-950/80 backdrop-blur-md rounded-full border border-border/20">
                        {otherBlog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-emerald-500 font-mono mb-3 tracking-wider">
                      {otherBlog.date}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors line-clamp-2">
                      {otherBlog.title[locale]}
                    </h3>
                    <div className="mt-auto flex items-center text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors pt-4 border-t border-border/10">
                      {t('readArticle')}
                      <ArrowUpRight className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
