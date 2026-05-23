"use client";

import { motion } from "framer-motion";
import { Database, LayoutGrid, MessageSquare, CreditCard, Shield, Server, Box } from "lucide-react";

const INTEGRATIONS = [
  { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
  { name: "Slack", icon: MessageSquare, color: "text-purple-500" },
  { name: "Stripe", icon: CreditCard, color: "text-indigo-500" },
  { name: "GitHub", icon: Box, color: "text-gray-800" },
  { name: "Supabase", icon: Server, color: "text-emerald-500" },
  { name: "Notion", icon: LayoutGrid, color: "text-foreground-heading" },
  { name: "Auth0/SSO", icon: Shield, color: "text-orange-500" },
];

export function Integrations() {
  return (
    <section className="py-24 bg-white border-t border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-foreground-heading mb-4">Connects with your existing stack</h2>
        <p className="text-lg text-foreground-body max-w-2xl mx-auto mb-16">
          OneAtlas seamlessly integrates with the databases and APIs you already use, pulling data directly into your generated applications.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {INTEGRATIONS.map((integration, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-6 bg-background-main border border-border-light rounded-2xl w-32 h-32 hover:border-brand-primary hover:shadow-md transition-all duration-300 group"
            >
              <integration.icon className={`w-10 h-10 mb-3 ${integration.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-sm font-semibold text-foreground-heading">{integration.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
