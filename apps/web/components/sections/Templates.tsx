"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, ShieldAlert, BarChart } from "lucide-react";
import Link from "next/link";

const TEMPLATES = [
  {
    title: "Admin Dashboard",
    description: "A complete CRUD interface for your Postgres database with charts and tables.",
    icon: BarChart,
    color: "text-brand-primary",
    bgColor: "bg-brand-primary/10",
  },
  {
    title: "Customer CRM",
    description: "Manage leads, track pipelines, and integrate with Stripe out of the box.",
    icon: Database,
    color: "text-accent-teal",
    bgColor: "bg-accent-teal/10",
  },
  {
    title: "Content Moderation",
    description: "AI-assisted moderation queue for user-generated content.",
    icon: ShieldAlert,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground-heading mb-4">Start from an architecture, not a blank page</h2>
            <p className="text-lg text-foreground-body">
              Our AI doesn't just write code; it orchestrates pre-built, production-ready modules to give you a massive head start.
            </p>
          </div>
          <Link href="/templates" className="hidden md:inline-flex items-center text-brand-primary font-medium hover:underline mt-4 md:mt-0">
            View All Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEMPLATES.map((template, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border-light overflow-hidden hover:border-brand-primary transition-colors duration-300"
            >
              <div className="h-48 bg-background-secondary p-6 flex items-center justify-center border-b border-border-light relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className={`w-16 h-16 rounded-full ${template.bgColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <template.icon className={`w-8 h-8 ${template.color}`} />
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-foreground-heading mb-2">{template.title}</h3>
                <p className="text-foreground-body mb-4">{template.description}</p>
                <Link href="#" className="text-sm font-medium text-brand-primary flex items-center group-hover:underline">
                  Use Template <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/templates" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            View All Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
