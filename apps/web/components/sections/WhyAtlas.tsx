"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    icon: Zap,
    title: "Serverless by Default",
    description: "No servers to provision or manage. Scale instantly from zero to thousands of users without DevOps overhead."
  },
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    description: "Built for B2B. Organizations, workspaces, and isolated schemas come out of the box."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC2 ready infrastructure, audit logs, RBAC, and granular permissions baked in."
  }
];

const FAQS = [
  {
    question: "Do I own the generated code?",
    answer: "Yes. You can eject the Next.js and Prisma source code at any time. There is no vendor lock-in."
  },
  {
    question: "Which AI models do you use?",
    answer: "We use a proprietary routing gateway that selects the best model for the task—from Claude 3.5 for complex reasoning to cheaper models for simple CRUD boilerplate."
  },
  {
    question: "Can I connect to my own database?",
    answer: "Absolutely. You can provide your own Postgres connection string, or let us provision a serverless Neon database for you instantly."
  },
  {
    question: "Is it secure for enterprise data?",
    answer: "Yes. Data is isolated per tenant, encrypted at rest, and all connections are over TLS. We offer dedicated instances for enterprise customers."
  }
];

export function WhyAtlas() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Atlas */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground-heading mb-4">Why OneAtlas?</h2>
            <p className="text-lg text-foreground-body max-w-2xl mx-auto">
              We built the infrastructure you'd eventually build yourself, saving you months of engineering time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {REASONS.map((reason, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-border-light text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto bg-soft-green rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-bold text-foreground-heading mb-3">{reason.title}</h3>
                <p className="text-foreground-body">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground-heading mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-border-light rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-foreground-heading">{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-foreground-muted transition-transform duration-200", openFaq === idx && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-foreground-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
