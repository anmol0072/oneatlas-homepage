"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Database, CreditCard, HardDrive, Code2, Calendar, Rocket, MoreHorizontal, X, CheckCircle2 } from "lucide-react";

const FEATURES = [
  { 
    id: "auth", icon: Lock, label: "Auth", color: "text-brand-primary", bgColor: "bg-brand-primary/10",
    desc: "Enterprise-grade authentication with email, social logins, and SSO built right in."
  },
  { 
    id: "db", icon: Database, label: "Database", sub: "(Supabase)", color: "text-accent-green", bgColor: "bg-accent-green/10",
    desc: "Fully managed PostgreSQL database with real-time subscriptions and row-level security."
  },
  { 
    id: "payments", icon: CreditCard, label: "Payments", sub: "(Stripe)", color: "text-brand-primary", bgColor: "bg-brand-primary/10",
    desc: "Accept global payments, handle subscriptions, and manage billing effortlessly."
  },
  { 
    id: "storage", icon: HardDrive, label: "Storage", sub: "(S3 Compatible)", color: "text-accent-yellow", bgColor: "bg-accent-yellow/10",
    desc: "Securely store and serve user-generated content, images, and large files globally."
  },
  { 
    id: "functions", icon: Code2, label: "Functions", sub: "(Edge)", color: "text-foreground-heading", bgColor: "bg-background-tertiary",
    desc: "Run custom backend logic at the edge for sub-millisecond latency worldwide."
  },
  { 
    id: "scheduling", icon: Calendar, label: "Scheduling", sub: "(Cal.com)", color: "text-accent-purpleLight", bgColor: "bg-accent-purpleLight",
    desc: "Integrated booking, calendar syncing, and automated scheduling workflows."
  },
  { 
    id: "deploy", icon: Rocket, label: "Deploy", sub: "(Vercel)", color: "text-foreground-heading", bgColor: "bg-background-tertiary",
    desc: "Instant CI/CD pipeline. Push your code and go live on a global CDN instantly."
  },
  { 
    id: "more", icon: MoreHorizontal, label: "More", color: "text-foreground-muted", bgColor: "bg-background-secondary",
    desc: "Plus 50+ other pre-configured integrations including Slack, GitHub, and SendGrid."
  },
];

export function FeaturesStrip() {
  const [activeFeature, setActiveFeature] = useState<typeof FEATURES[0] | null>(null);

  return (
    <section className="py-12 bg-white relative z-20 mt-12 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-foreground-heading mb-8">
          Everything you need, built-in
        </h3>
        
        <div className="bg-white border border-border-light shadow-xl shadow-brand-primary/5 rounded-[2rem] p-6 max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 relative">
          
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => setActiveFeature(feature)}
              className="flex flex-col items-center justify-center space-y-3 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bgColor} transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg ${activeFeature?.id === feature.id ? 'ring-2 ring-brand-primary shadow-lg -translate-y-2' : ''}`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <div className="text-center">
                <p className={`text-sm font-bold leading-none mb-1 transition-colors ${activeFeature?.id === feature.id ? 'text-brand-primary' : 'text-foreground-heading group-hover:text-brand-primary'}`}>
                  {feature.label}
                </p>
                {feature.sub && (
                  <p className="text-xs text-foreground-muted">{feature.sub}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Interactive Feature Modal / Tooltip */}
          <AnimatePresence>
            {activeFeature && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white border-2 border-border-light shadow-2xl rounded-2xl p-4 z-50 text-left"
              >
                <button 
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-3 right-3 text-foreground-muted hover:text-foreground-heading bg-background-secondary rounded-full p-1 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-xl ${activeFeature.bgColor}`}>
                    <activeFeature.icon className={`w-5 h-5 ${activeFeature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground-heading flex items-center">
                      {activeFeature.label} {activeFeature.sub && <span className="ml-1 text-foreground-muted font-normal text-sm">{activeFeature.sub}</span>}
                    </h4>
                    <p className="text-sm text-foreground-body mt-1 leading-snug">
                      {activeFeature.desc}
                    </p>
                    <div className="mt-2 flex items-center text-xs font-bold text-accent-green">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Ready to use
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
