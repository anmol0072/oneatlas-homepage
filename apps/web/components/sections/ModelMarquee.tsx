"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Zap, Network, Lightbulb, Box } from "lucide-react";

const MODELS = [
  { name: "OpenAI GPT-4o", icon: Brain },
  { name: "Anthropic Claude 3.5", icon: Cpu },
  { name: "Google Gemini 1.5", icon: Zap },
  { name: "DeepSeek Coder", icon: Network },
  { name: "Meta Llama 3", icon: Lightbulb },
  { name: "Mistral Large", icon: Box },
];

export function ModelMarquee() {
  return (
    <section className="py-12 border-y border-border-light bg-background-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-foreground-muted uppercase tracking-widest">
          Build with the latest reasoning models
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background-main to-transparent"></div>

        <motion.div
          className="flex whitespace-nowrap space-x-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* We duplicate the array to create the seamless infinite scroll effect */}
          {[...MODELS, ...MODELS, ...MODELS].map((model, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-foreground-muted hover:text-foreground-heading transition-colors cursor-default">
              <model.icon className="h-8 w-8 opacity-70" />
              <span className="text-xl font-bold tracking-tight opacity-70">{model.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background-main to-transparent"></div>
      </div>
    </section>
  );
}
