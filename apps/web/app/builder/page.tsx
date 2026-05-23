import Link from "next/link";
import { ArrowLeft, Sparkles, LayoutTemplate, Database, Settings, ArrowRight } from "lucide-react";

export default function BuilderPlaceholderPage() {
  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      {/* Builder Top Nav Mock */}
      <header className="h-14 bg-white border-b border-border-light flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-foreground-muted hover:text-foreground-heading transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center space-x-2 border-l border-border-light pl-4">
            <span className="text-sm font-semibold text-foreground-heading">My Workspace</span>
            <span className="text-foreground-muted">/</span>
            <span className="text-sm text-foreground-muted">New Application</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-brand-primary hover:underline flex items-center">
            <Database className="w-4 h-4 mr-2" /> Connect DB
          </button>
          <button className="px-3 py-1.5 bg-foreground-heading text-white text-sm font-medium rounded-md shadow-sm hover:bg-black transition-colors">
            Publish
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        {/* Sidebar Mock */}
        <div className="w-64 bg-white border-r border-border-light hidden md:flex flex-col">
          <div className="p-4 border-b border-border-light">
            <h3 className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-3">Elements</h3>
            <div className="space-y-1">
              <div className="flex items-center px-2 py-1.5 text-sm text-foreground-body rounded-md hover:bg-background-secondary cursor-pointer">
                <LayoutTemplate className="w-4 h-4 mr-2 text-foreground-muted" /> Forms
              </div>
              <div className="flex items-center px-2 py-1.5 text-sm text-foreground-body rounded-md hover:bg-background-secondary cursor-pointer">
                <Database className="w-4 h-4 mr-2 text-foreground-muted" /> Tables
              </div>
              <div className="flex items-center px-2 py-1.5 text-sm text-foreground-body rounded-md hover:bg-background-secondary cursor-pointer">
                <Settings className="w-4 h-4 mr-2 text-foreground-muted" /> Settings
              </div>
            </div>
          </div>
        </div>

        {/* Center Canvas Mock */}
        <div className="flex-1 overflow-auto p-8 relative flex items-center justify-center bg-[url('https://transparenttextures.com/patterns/cubes.png')]">
          <div className="max-w-2xl w-full bg-white border border-border-light shadow-2xl rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gradient opacity-5" />
            <div className="relative z-10">
              <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-brand-primary" />
              </div>
              <h1 className="text-3xl font-extrabold text-foreground-heading mb-4">
                What would you like to build?
              </h1>
              <p className="text-foreground-body mb-8 max-w-lg mx-auto">
                Describe the internal tool you need in plain English, and our AI will generate the database schema, UI components, and API routes instantly.
              </p>
              
              <div className="relative max-w-xl mx-auto mb-6">
                <textarea 
                  className="w-full bg-background-main border border-border-light rounded-xl p-4 pr-16 resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-sm text-foreground-heading placeholder-foreground-muted"
                  rows={3}
                  placeholder="e.g. A CRM dashboard for tracking leads, with a table view and a form to add new entries..."
                />
                <button className="absolute bottom-4 right-4 p-2 bg-brand-primary text-white rounded-lg shadow hover:bg-brand-primaryHover transition-transform hover:scale-105">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-foreground-muted">
                <span>Or start from a</span>
                <Link href="/templates" className="text-brand-primary font-medium hover:underline">
                  pre-built template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
