import React from 'react';
import { SectionWrapper } from './section-wrapper';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    date: "Aug 12, 2026",
    category: "React",
    excerpt: "A deep dive into how Server Components change the way we build modern Next.js applications, improving performance and SEO.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Mastering Django ORM Queries",
    date: "Jul 28, 2026",
    category: "Django",
    excerpt: "Learn how to write efficient, optimized database queries using Django ORM to scale your backend seamlessly.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "The Future of Tailwind CSS",
    date: "Jun 15, 2026",
    category: "Styling",
    excerpt: "Exploring the new features in Tailwind CSS v4 and how it simplifies utility-first styling for frontend developers.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop"
  }
];

export function BlogSection() {
  return (
    <SectionWrapper id="blog">
      <div className="flex flex-col items-center justify-center mb-16 pt-10 text-center">
        {/* <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-500 uppercase mb-3">04. Articles</span> */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Latest <span className="text-emerald-500 font-serif italic">Blog.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-0 pb-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group flex flex-col rounded-3xl border border-border/20 bg-zinc-950/50 overflow-hidden hover:border-emerald-500/30 transition-colors cursor-pointer"
          >
            <div className="relative w-full h-56 overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 text-xs font-mono font-semibold text-emerald-500 bg-zinc-950/80 backdrop-blur-md rounded-full border border-border/20">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="text-xs text-emerald-500 font-mono mb-4 tracking-wider">
                {blog.date}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-emerald-500 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                Read Article
                <ArrowUpRight className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
