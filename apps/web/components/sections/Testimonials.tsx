"use client";

import { Sparkles, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "OneAtlas cut our development time from weeks to hours. Incredible!",
    name: "Sarah Chen",
    title: "Founder",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The best no-code platform I've used. So powerful yet so easy.",
    name: "Michael Rodriguez",
    title: "CTO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Finally, a platform that gives you production-ready apps.",
    name: "David Kim",
    title: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 bg-white border-t border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-8 bg-white border border-border-light shadow-sm rounded-3xl p-4 overflow-hidden">
          
          {/* Left Hero Box */}
          <div className="bg-brand-gradient rounded-2xl p-6 flex flex-col justify-center text-white min-w-[280px] flex-shrink-0">
            <Sparkles className="w-8 h-8 mb-4 text-white/90" />
            <h3 className="text-xl font-bold leading-tight">
              Loved by builders<br />and entrepreneurs
            </h3>
          </div>

          {/* Testimonials Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-2">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col space-y-3 border-l-2 border-border-light pl-6 md:border-l-0 md:pl-0 md:border-r-2 md:last:border-r-0 pr-6 last:pr-0">
                <p className="text-sm font-medium text-foreground-heading line-clamp-2">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-3 mt-auto pt-2">
                  <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full border border-border-light object-cover" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground-heading">{t.name}</span>
                    <span className="text-[10px] text-foreground-muted uppercase tracking-wide">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Stars Box */}
          <div className="bg-background-secondary rounded-2xl p-6 flex flex-col justify-center min-w-[200px] flex-shrink-0 border border-border-light">
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
              ))}
            </div>
            <div className="text-sm font-bold text-foreground-heading">4.9/5 <span className="font-normal text-foreground-muted">from 2,500+ users</span></div>
            <p className="text-xs text-foreground-muted mt-1">Join thousands of happy builders</p>
          </div>

        </div>
      </div>
    </section>
  );
}
