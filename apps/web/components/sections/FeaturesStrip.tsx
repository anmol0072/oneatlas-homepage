"use client";

import { motion } from "framer-motion";
import { Lock, Database, CreditCard, HardDrive, Code2, Calendar, Rocket, MoreHorizontal } from "lucide-react";

const FEATURES = [
  { icon: Lock, label: "Auth", color: "text-brand-primary", bgColor: "bg-brand-primary/10" },
  { icon: Database, label: "Database", sub: "(Supabase)", color: "text-accent-green", bgColor: "bg-accent-green/10" },
  { icon: CreditCard, label: "Payments", sub: "(Stripe)", color: "text-brand-primary", bgColor: "bg-brand-primary/10" },
  { icon: HardDrive, label: "Storage", sub: "(S3 Compatible)", color: "text-accent-yellow", bgColor: "bg-accent-yellow/10" },
  { icon: Code2, label: "Functions", sub: "(Edge)", color: "text-foreground-heading", bgColor: "bg-background-tertiary" },
  { icon: Calendar, label: "Scheduling", sub: "(Cal.com)", color: "text-accent-purpleLight", bgColor: "bg-accent-purpleLight" },
  { icon: Rocket, label: "Deploy", sub: "(Vercel)", color: "text-foreground-heading", bgColor: "bg-background-tertiary" },
  { icon: MoreHorizontal, label: "More", color: "text-foreground-muted", bgColor: "bg-background-secondary" },
];

export function FeaturesStrip() {
  return (
    <section className="py-12 bg-white relative z-20 mt-12 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-foreground-heading mb-8">
          Everything you need, built-in
        </h3>
        
        <div className="bg-white border border-border-light shadow-xl shadow-brand-primary/5 rounded-[2rem] p-6 max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center space-y-3 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bgColor} transition-transform group-hover:-translate-y-1`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-foreground-heading leading-none mb-1">{feature.label}</p>
                {feature.sub && (
                  <p className="text-xs text-foreground-muted">{feature.sub}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
