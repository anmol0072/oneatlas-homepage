"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Settings2, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "1.",
    title: "Describe",
    desc: "Tell AI what you want to build",
    icon: MessageSquare,
    color: "text-brand-primary",
    bgColor: "bg-brand-primary/10",
  },
  {
    number: "2.",
    title: "Generate",
    desc: "AI builds your app instantly",
    icon: Sparkles,
    color: "text-accent-blueLight",
    bgColor: "bg-accent-blueLight/10",
  },
  {
    number: "3.",
    title: "Customize",
    desc: "Edit, connect data, and refine",
    icon: Settings2,
    color: "text-accent-teal",
    bgColor: "bg-accent-teal/10",
  },
  {
    number: "4.",
    title: "Deploy",
    desc: "Go live with one click",
    icon: Rocket,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
  },
];

export function WorkflowSteps() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-foreground-heading mb-16 text-center lg:text-left">
          From idea to app in 4 simple steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border-light to-transparent" />
          
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${step.bgColor} mb-6 shadow-sm border border-white z-10 bg-white`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-[-10%] text-border-light">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}

              <h4 className="text-lg font-bold text-foreground-heading mb-2">
                <span className="text-foreground-muted mr-1">{step.number}</span> {step.title}
              </h4>
              <p className="text-sm text-foreground-body max-w-[200px] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
