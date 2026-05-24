"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, MessageSquare, ShoppingCart, LayoutTemplate } from "lucide-react";
import Link from "next/link";

const TEMPLATES = [
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with auth and billing",
    badge: "Popular",
    icon: BarChart,
    mockup: (
      <div className="w-full h-full bg-background-main flex p-2 gap-2">
        {/* Sidebar */}
        <div className="w-1/4 h-full bg-white rounded flex flex-col p-1 space-y-1">
          <div className="w-full h-2 bg-brand-primary/20 rounded" />
          <div className="w-2/3 h-2 bg-border-light rounded" />
          <div className="w-3/4 h-2 bg-border-light rounded" />
        </div>
        {/* Main Content */}
        <div className="w-3/4 h-full flex flex-col gap-2">
          {/* Header */}
          <div className="w-full h-4 bg-white rounded" />
          {/* Chart */}
          <div className="w-full flex-1 bg-white rounded p-2 flex items-end gap-1">
            <div className="w-1/5 h-1/3 bg-brand-primary/40 rounded-t" />
            <div className="w-1/5 h-2/3 bg-brand-primary/60 rounded-t" />
            <div className="w-1/5 h-1/2 bg-brand-primary/80 rounded-t" />
            <div className="w-1/5 h-full bg-brand-primary rounded-t" />
            <div className="w-1/5 h-3/4 bg-brand-primary/90 rounded-t" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "AI Chat App",
    description: "Chat application with real-time messaging",
    badge: "New",
    icon: MessageSquare,
    mockup: (
      <div className="w-full h-full bg-background-main flex flex-col p-2 gap-2 justify-end relative">
        <div className="w-2/3 h-4 bg-white rounded-2xl rounded-tl-none self-start shadow-sm" />
        <div className="w-1/2 h-4 bg-brand-primary/90 rounded-2xl rounded-tr-none self-end shadow-sm" />
        <div className="w-3/4 h-6 bg-white rounded-2xl rounded-tl-none self-start shadow-sm" />
        <div className="w-full h-4 bg-white border border-border-light rounded mt-1" />
      </div>
    )
  },
  {
    title: "E-commerce Store",
    description: "Full-featured store with payments",
    badge: "Popular",
    icon: ShoppingCart,
    mockup: (
      <div className="w-full h-full bg-background-main flex flex-col p-2 gap-2">
        <div className="w-full h-4 bg-white rounded flex items-center justify-between px-1">
          <div className="w-4 h-1 bg-border-light rounded" />
          <div className="w-2 h-2 bg-border-light rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-white rounded overflow-hidden flex flex-col">
            <div className="h-2/3 bg-accent-peach/30" />
            <div className="h-1/3 p-1 flex flex-col justify-center gap-1">
              <div className="w-full h-1 bg-border-light rounded" />
              <div className="w-1/2 h-1 bg-brand-primary/30 rounded" />
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden flex flex-col">
            <div className="h-2/3 bg-accent-teal/30" />
            <div className="h-1/3 p-1 flex flex-col justify-center gap-1">
              <div className="w-full h-1 bg-border-light rounded" />
              <div className="w-1/2 h-1 bg-brand-primary/30 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Landing Page",
    description: "Modern landing page that converts",
    badge: "New",
    icon: LayoutTemplate,
    mockup: (
      <div className="w-full h-full bg-brand-dark rounded flex flex-col items-center justify-center p-2 gap-2 relative overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-brand-gradient opacity-20 blur-xl" />
        <div className="w-1/2 h-2 bg-white/20 rounded z-10" />
        <div className="w-3/4 h-1 bg-white/10 rounded z-10" />
        <div className="w-1/3 h-3 bg-brand-primary rounded-full mt-1 z-10" />
      </div>
    )
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-24 bg-white relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-foreground-heading mb-2">Start with a template</h2>
            <p className="text-foreground-body text-lg">
              Launch faster with production-ready full-stack architectures.
            </p>
          </div>
          <Link href="/templates" className="hidden md:inline-flex items-center text-brand-primary font-bold hover:underline mt-4 md:mt-0">
            View all templates <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATES.map((template, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border-light overflow-hidden bg-white hover:shadow-xl hover:border-brand-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Visual Mockup Area */}
              <div className="h-40 bg-background-secondary p-4 flex items-center justify-center border-b border-border-light relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
                
                {/* Embedded Mockup */}
                <div className="w-full h-full rounded-xl border border-border-light shadow-sm overflow-hidden bg-white transform group-hover:scale-105 group-hover:shadow-md transition-all duration-500">
                  {template.mockup}
                </div>
              </div>
              
              {/* Text Area */}
              <div className="p-5 flex-1 flex flex-col relative">
                {template.badge && (
                  <span className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${template.badge === 'Popular' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-accent-cyan/10 text-accent-cyan'}`}>
                    {template.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground-heading mb-1 pr-16">{template.title}</h3>
                <p className="text-sm text-foreground-muted mb-4 line-clamp-2">{template.description}</p>
                <div className="mt-auto">
                  <Link href="#" className="text-xs font-bold text-foreground-heading group-hover:text-brand-primary flex items-center transition-colors">
                    Use Template <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/templates" className="inline-flex items-center text-brand-primary font-bold hover:underline">
            View all templates <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
