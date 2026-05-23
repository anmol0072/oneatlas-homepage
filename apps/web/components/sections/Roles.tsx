"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, Settings2 } from "lucide-react";

const ROLES = [
  {
    id: "product",
    name: "Product Managers",
    icon: Briefcase,
    title: "Ship features, not tickets.",
    description: "Stop waiting weeks for engineering bandwidth to build a simple admin panel. Describe what you need, and generate a fully functional tool instantly connected to your data.",
    metrics: ["10x Faster Time to Market", "Zero Engineering Dependency"],
    image: "bg-soft-pink",
  },
  {
    id: "engineering",
    name: "Engineers",
    icon: Code,
    title: "Focus on core infrastructure.",
    description: "Offload the boring CRUD apps. OneAtlas generates clean, maintainable Next.js and Prisma code that you can eject or customize at any time.",
    metrics: ["100% TypeScript", "No Vendor Lock-in"],
    image: "bg-soft-green",
  },
  {
    id: "operations",
    name: "Operations",
    icon: Settings2,
    title: "Automate manual workflows.",
    description: "Replace messy spreadsheets with dedicated web apps. Build workflow automations and data entry portals customized exactly to your company's processes.",
    metrics: ["Reduce Human Error", "Streamline Processes"],
    image: "bg-soft-orange",
  }
];

export function Roles() {
  const [activeRole, setActiveRole] = useState(ROLES[0]?.id || "");

  return (
    <section className="py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground-heading mb-4">Atlas for Every Role</h2>
          <p className="text-lg text-foreground-body max-w-2xl mx-auto">
            Whether you code every day or have never written a line, OneAtlas empowers you to build exactly what you need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col space-y-2">
            {ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 text-left ${
                  activeRole === role.id
                    ? "bg-background-secondary border border-border-light shadow-sm"
                    : "hover:bg-background-main border border-transparent"
                }`}
              >
                <div className={`p-3 rounded-lg ${activeRole === role.id ? "bg-brand-primary text-white" : "bg-border-light text-foreground-muted"}`}>
                  <role.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-bold ${activeRole === role.id ? "text-foreground-heading" : "text-foreground-body"}`}>{role.name}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3 bg-background-main rounded-2xl border border-border-light p-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {ROLES.map((role) => 
                activeRole === role.id && (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-foreground-heading mb-4">{role.title}</h3>
                      <p className="text-lg text-foreground-body mb-8 leading-relaxed">
                        {role.description}
                      </p>
                      
                      <div className="flex space-x-4 mb-8">
                        {role.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white border border-border-light px-4 py-2 rounded-full text-sm font-semibold text-brand-primary">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Placeholder for role-specific dashboard image */}
                    <div className={`w-full h-64 rounded-xl border border-border-light ${role.image} flex items-center justify-center`}>
                       <span className="text-foreground-muted opacity-50 font-medium">Interactive Preview Area</span>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
