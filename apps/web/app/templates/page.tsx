import Link from "next/link";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { Templates as TemplatesSection } from "@/components/sections/Templates";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background-main pb-24">
      {/* Header */}
      <header className="bg-white border-b border-border-light pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-foreground-muted hover:text-foreground-heading mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground-heading mb-4">Template Library</h1>
              <p className="text-xl text-foreground-body">
                Start with a pre-configured architecture and customize it with AI.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                <input 
                  type="text" 
                  placeholder="Search templates..." 
                  className="pl-10 pr-4 py-2 border border-border-light rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary outline-none"
                />
              </div>
              <button className="p-2 border border-border-light rounded-lg shadow-sm text-foreground-muted hover:bg-background-secondary transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* We reuse the existing Templates component from the homepage for the grid */}
      <div className="-mt-16">
        <TemplatesSection />
      </div>
    </div>
  );
}
