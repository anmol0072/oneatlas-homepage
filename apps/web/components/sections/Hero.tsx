"use client";

import { motion } from "framer-motion";
import { Paperclip, Mic, Send, LayoutTemplate, Database, Users, Briefcase, Zap, Settings, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FloatingDots } from "./FloatingDots";

const APP_TYPES = [
  { icon: LayoutTemplate, label: "Internal Tool", color: "text-brand-primary" },
  { icon: Database, label: "Dashboard", color: "text-accent-peach" },
  { icon: Users, label: "Client Portal", color: "text-accent-teal" },
  { icon: Briefcase, label: "CRM App", color: "text-accent-pink" },
  { icon: Zap, label: "AI Workflow", color: "text-accent-green" },
  { icon: Settings, label: "Admin Panel", color: "text-accent-yellow" },
];

const EXAMPLES = [
  "Sales CRM", "KPI Dashboard", "Employee onboarding app",
  "Customer support portal", "Inventory tracker", "Approval Workflow"
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-main min-h-screen flex items-center">
      <FloatingDots />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-border-light rounded-full px-4 py-1.5 mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
          <span className="text-sm font-medium text-brand-primary">Now in public beta</span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground-heading mb-6">
            Where ideas become <span className="text-transparent bg-clip-text bg-brand-gradient">tools</span>
          </h1>
          <p className="text-xl text-foreground-body mb-12 max-w-3xl mx-auto font-medium">
            Describe what your team needs. OneAtlas generates a production-ready internal tool and deploys it instantly.
          </p>
        </motion.div>

        {/* AI Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-2 focus-within:ring-4 focus-within:ring-brand-primary/20 transition-all duration-300"
        >
          <div className="p-4">
            <textarea
              placeholder="Describe the internal tool your team needs..."
              className="w-full h-24 bg-transparent border-none resize-none focus:ring-0 text-lg text-foreground-heading placeholder:text-foreground-muted/60"
            />
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 pb-3 pt-2 border-t border-border-light/50">
            <div className="flex items-center space-x-3">
              <button className="p-2 text-foreground-muted hover:bg-background-secondary rounded-full transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              
              <div className="flex bg-background-secondary rounded-lg p-1">
                <button className="px-3 py-1.5 bg-white text-brand-primary text-sm font-medium rounded-md shadow-sm">Build</button>
                <button className="px-3 py-1.5 text-foreground-muted text-sm font-medium rounded-md hover:text-foreground-heading">Plan</button>
              </div>

              <button className="flex items-center space-x-2 px-3 py-1.5 border border-border-light bg-white rounded-lg text-sm font-medium text-foreground-heading hover:bg-background-secondary transition-colors">
                <span className="flex text-accent-cyan"><Zap className="w-4 h-4 fill-current" /></span>
                <span>Gemini 3 Flash</span>
                <ChevronDown className="w-4 h-4 text-foreground-muted" />
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-foreground-muted hover:bg-background-secondary rounded-full transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button className="bg-brand-primary hover:bg-brand-primaryHover text-white p-3 rounded-full shadow-lg shadow-brand-primary/30 transition-transform hover:scale-105 active:scale-95">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* App Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {APP_TYPES.map((type, i) => (
            <button key={i} className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-md border border-white shadow-xl hover:shadow-2xl rounded-2xl w-28 h-28 hover:-translate-y-1 transition-all duration-300">
              <div className={`p-2 rounded-lg bg-white shadow-sm mb-3 ${type.color}`}>
                <type.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-foreground-heading text-center leading-tight">
                {type.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="text-sm font-medium text-foreground-muted flex items-center">
              <Zap className="w-4 h-4 mr-1" /> Try an example
            </span>
            {EXAMPLES.map((example, i) => (
              <button key={i} className="px-4 py-2 bg-white/80 border border-border-light hover:border-brand-primary/30 text-foreground-body hover:text-brand-primary text-sm font-medium rounded-full shadow-sm transition-colors">
                {example}
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
