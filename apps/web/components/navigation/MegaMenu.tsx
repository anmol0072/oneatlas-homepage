"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Product", href: "#product" },
  { name: "Use Cases", href: "#use-cases" },
  {
    name: "Templates",
    href: "#templates",
    isMega: true,
  },
  { 
    name: "Enterprise", 
    href: "#enterprise" 
  },
  { 
    name: "Security", 
    href: "#security",
    hasDropdown: true
  },
  { name: "Pricing", href: "#pricing" },
  {
    name: "Resources",
    href: "#resources",
    hasDropdown: true,
  },
  {
    name: "Community",
    href: "#community",
  },
];

export function MegaMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
              OneAtlas
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-foreground-body hover:text-foreground-heading transition-colors"
                >
                  {item.name}
                  {(item.isMega || item.hasDropdown) && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Templates Mega Menu */}
                {item.isMega && hoveredItem === item.name && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white border border-border-light shadow-xl rounded-xl p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {/* Column 1 */}
                        <div>
                          <h3 className="text-sm font-bold text-foreground-heading mb-4 uppercase tracking-wider">Internal Tools</h3>
                          <ul className="space-y-3">
                            <li><Link href="/feature/admin-dashboards" className="text-sm text-foreground-body hover:text-brand-primary">Admin Dashboards</Link></li>
                            <li><Link href="/feature/crm-interfaces" className="text-sm text-foreground-body hover:text-brand-primary">CRM Interfaces</Link></li>
                            <li><Link href="/feature/inventory-management" className="text-sm text-foreground-body hover:text-brand-primary">Inventory Management</Link></li>
                          </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                          <h3 className="text-sm font-bold text-foreground-heading mb-4 uppercase tracking-wider">Workflows</h3>
                          <ul className="space-y-3">
                            <li><Link href="/feature/approval-pipelines" className="text-sm text-foreground-body hover:text-brand-primary">Approval Pipelines</Link></li>
                            <li><Link href="/feature/automated-reporting" className="text-sm text-foreground-body hover:text-brand-primary">Automated Reporting</Link></li>
                            <li><Link href="/feature/onboarding-flows" className="text-sm text-foreground-body hover:text-brand-primary">Onboarding Flows</Link></li>
                          </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="bg-background-secondary p-4 rounded-lg">
                          <h3 className="text-sm font-bold text-brand-primary mb-2">Featured Template</h3>
                          <p className="text-xs text-foreground-muted mb-4">Launch a fully functional CRM connected to your Postgres DB in seconds.</p>
                          <Link href="/templates" className="text-sm font-medium text-brand-primary flex items-center hover:underline">
                            Explore Template <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Standard Dropdowns for Security & Resources */}
                {item.hasDropdown && hoveredItem === item.name && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 bg-white border border-border-light shadow-xl rounded-xl p-4"
                    >
                      {item.name === "Security" && (
                        <ul className="space-y-3">
                          <li><Link href="/feature/soc2-compliance" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">SOC2 Compliance <span className="block text-xs text-foreground-muted font-normal mt-0.5">View our certifications</span></Link></li>
                          <li><Link href="/feature/data-privacy" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">Data Privacy <span className="block text-xs text-foreground-muted font-normal mt-0.5">How we handle your data</span></Link></li>
                          <li><Link href="/feature/infrastructure" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">Infrastructure <span className="block text-xs text-foreground-muted font-normal mt-0.5">Isolated VPCs & networking</span></Link></li>
                        </ul>
                      )}
                      
                      {item.name === "Resources" && (
                        <ul className="space-y-3">
                          <li><Link href="/feature/documentation" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">Documentation <span className="block text-xs text-foreground-muted font-normal mt-0.5">Guides and tutorials</span></Link></li>
                          <li><Link href="/feature/api-reference" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">API Reference <span className="block text-xs text-foreground-muted font-normal mt-0.5">REST API endpoints</span></Link></li>
                          <li><Link href="/feature/blog" className="block text-sm font-medium text-foreground-heading hover:text-brand-primary">Blog <span className="block text-xs text-foreground-muted font-normal mt-0.5">Latest news and updates</span></Link></li>
                        </ul>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-foreground-heading hover:text-brand-primary">
              Login
            </Link>
            <Link
              href="/builder"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-200"
            >
              Start Building
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-foreground-muted hover:text-foreground-heading hover:bg-background-secondary"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border-light"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground-body hover:text-foreground-heading hover:bg-background-secondary"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border-light flex flex-col space-y-2">
                <Link href="/login" className="block px-3 py-2 text-base font-medium text-foreground-body hover:text-foreground-heading">
                  Login
                </Link>
                <Link
                  href="/builder"
                  className="block px-3 py-2 text-center text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primaryHover"
                >
                  Start Building
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
