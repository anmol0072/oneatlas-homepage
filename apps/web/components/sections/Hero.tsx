"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-brand-gradient blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-background-secondary border border-border-light rounded-full px-3 py-1 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
            <span className="text-xs font-medium text-foreground-body">OneAtlas MVP is now live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground-heading mb-6">
            Build internal tools{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              at the speed of thought.
            </span>
          </h1>

          <p className="text-xl text-foreground-body mb-10 max-w-2xl mx-auto leading-relaxed">
            The AI-native platform for generating, deploying, and managing business applications. Serverless, multi-tenant, and instantly scalable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/builder"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-lg text-white bg-brand-primary hover:bg-brand-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-200 transform hover:-translate-y-1"
            >
              Start Building Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center px-8 py-4 border border-border-light text-lg font-medium rounded-lg text-foreground-heading bg-white hover:bg-background-secondary transition-all duration-200"
            >
              <Terminal className="mr-2 h-5 w-5 text-foreground-muted" /> Read the Docs
            </Link>
          </div>
        </motion.div>

        {/* Mockup / Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-border-light bg-white shadow-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Fake Browser Header */}
            <div className="h-12 border-b border-border-light bg-background-secondary flex items-center px-4 space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1 flex justify-center">
                <div className="bg-white border border-border-light rounded-md px-3 py-1 text-xs text-foreground-muted w-64 text-center">
                  crm.oneatlas.app
                </div>
              </div>
            </div>
            {/* Fake App Body */}
            <div className="flex-1 bg-background-main p-8 flex">
              <div className="w-64 border-r border-border-light pr-8 hidden md:block">
                <div className="h-8 bg-border-light rounded w-3/4 mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-border-light rounded w-full"></div>
                  <div className="h-4 bg-border-light rounded w-5/6"></div>
                  <div className="h-4 bg-border-light rounded w-4/6"></div>
                </div>
              </div>
              <div className="flex-1 md:pl-8">
                <div className="h-10 bg-border-light rounded w-1/3 mb-8"></div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="h-24 bg-white border border-border-light rounded-lg"></div>
                  <div className="h-24 bg-white border border-border-light rounded-lg"></div>
                  <div className="h-24 bg-white border border-border-light rounded-lg"></div>
                </div>
                <div className="h-64 bg-white border border-border-light rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
