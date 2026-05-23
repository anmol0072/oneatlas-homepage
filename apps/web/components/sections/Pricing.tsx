"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Developer",
    price: "Free",
    description: "Perfect for testing and building your first internal tools.",
    features: [
      "2 Generated Applications",
      "Shared Edge Runtime",
      "Standard AI Models",
      "Community Support",
    ],
    buttonText: "Start Building Free",
    isPopular: false,
  },
  {
    name: "Startup",
    price: "$29",
    period: "/mo",
    description: "For small teams that need to scale their operations quickly.",
    features: [
      "Unlimited Applications",
      "Custom Subdomains",
      "Advanced Reasoning Models",
      "RBAC & Permissions",
      "Email Support",
    ],
    buttonText: "Upgrade to Startup",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring custom infrastructure and SLA.",
    features: [
      "Dedicated Edge Instances",
      "Custom Auth (SSO, SAML)",
      "Audit Logging",
      "VPC Peering",
      "24/7 Phone Support",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground-heading mb-4">Transparent, usage-based pricing</h2>
          <p className="text-lg text-foreground-body max-w-2xl mx-auto">
            Start for free and pay only for the compute and AI generation you actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 border ${
                plan.isPopular ? "border-brand-primary shadow-xl scale-105 bg-white z-10" : "border-border-light bg-white shadow-sm"
              } flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground-heading mb-2">{plan.name}</h3>
              <p className="text-foreground-body text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground-heading">{plan.price}</span>
                {plan.period && <span className="text-foreground-muted font-medium">{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-teal mr-2 flex-shrink-0" />
                    <span className="text-foreground-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                  plan.isPopular
                    ? "bg-brand-primary text-white hover:bg-brand-primaryHover"
                    : "bg-background-secondary text-foreground-heading hover:bg-border-light"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
