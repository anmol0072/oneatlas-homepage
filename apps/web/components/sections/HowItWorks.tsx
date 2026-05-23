"use client";

import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "1. Prompt",
    description: "Describe the internal tool you need. 'I need a CRM for our sales team with a Postgres database.'",
    color: "bg-soft-orange text-accent-peach",
  },
  {
    icon: LayoutTemplate,
    title: "2. Generate",
    description: "Our AI gateway selects the best model, generating the database schema, API routes, and React UI instantly.",
    color: "bg-soft-pink text-accent-pink",
  },
  {
    icon: Rocket,
    title: "3. Deploy",
    description: "One click to deploy to a custom subdomain on our serverless edge infrastructure. Zero DevOps required.",
    color: "bg-soft-green text-accent-teal",
  },
];

export function HowItWorks() {
  return (
    <section id="use-cases" className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground-heading mb-4">How OneAtlas Works</h2>
          <p className="text-lg text-foreground-body max-w-2xl mx-auto">
            From idea to deployed application in three simple steps. We handle the complexity so you can focus on your business logic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border-light -translate-y-1/2 z-0"></div>

          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative z-10 bg-white p-8 rounded-2xl border border-border-light shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color} mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground-heading mb-3">{step.title}</h3>
              <p className="text-foreground-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
