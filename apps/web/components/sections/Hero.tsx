"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, Mic, Send, LayoutTemplate, Database, Users, Briefcase, Zap, Settings, ChevronDown, Check, Code, BarChart3, FileText, FolderOpen, Cloud } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FloatingDots } from "./FloatingDots";

const APP_TYPES = [
  { icon: LayoutTemplate, label: "Internal Tool", color: "text-brand-primary" },
  { icon: Database, label: "Dashboard", color: "text-accent-peach" },
  { icon: Users, label: "Client Portal", color: "text-accent-teal" },
  { icon: Briefcase, label: "CRM App", color: "text-accent-pink" },
  { icon: Zap, label: "AI Workflow", color: "text-accent-green" },
  { icon: Settings, label: "Admin Panel", color: "text-accent-yellow" },
];

const EXAMPLES = [
  "Sales CRM", "KPI Dashboard", "Employee onboarding app",
  "Customer support portal", "Inventory tracker", "Approval Workflow"
];

const MODELS = [
  { id: "gemini-pro", name: "Gemini 3.1 Pro", provider: "Google" },
  { id: "gemini-flash", name: "Gemini 3 Flash", provider: "Google" },
  { id: "deepseek", name: "DeepSeek V4", provider: "DeepSeek" },
  { id: "llama", name: "Llama 4 Scout", provider: "Meta" },
  { id: "mistral", name: "Mistral Small", provider: "Mistral AI" }
];

export function Hero() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"build" | "plan">("build");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[1]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      router.push("/builder");
    }, 1500);
  };

  const handleQuickTemplate = (templateName: string) => {
    setPrompt(`Build a new ${templateName} that helps me track...`);
    setIsGenerating(true);
    setTimeout(() => {
      router.push("/builder");
    }, 1500);
  };

  const handleAttachClick = (type: string) => {
    setIsAttachOpen(false);
    if (type === "file" || type === "folder") {
      fileInputRef.current?.click();
    } else {
      // Simulate connecting to a drive
      alert(`Connecting to ${type}...`);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-main min-h-screen flex items-center">
      <FloatingDots />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-border-light rounded-full px-4 py-1.5 mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
          <span className="text-sm font-medium text-brand-primary">Now in public beta</span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground-heading mb-6">
            Where ideas become <span className="text-transparent bg-clip-text bg-brand-gradient">tools</span>
          </h1>
          <p className="text-xl text-foreground-body mb-16 max-w-3xl mx-auto font-medium">
            Describe what your team needs. OneAtlas generates a production-ready internal tool and deploys it instantly.
          </p>
        </motion.div>

        {/* Centerpiece: AI Prompt Box + Floating Sides */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Left Floating Element (Fills empty side) */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex absolute -left-12 top-4 flex-col bg-white/80 backdrop-blur-xl border border-border-light shadow-2xl rounded-2xl p-4 w-64 z-0"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Code className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-bold text-foreground-heading">Postgres Schema</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-border-light rounded w-full" />
              <div className="h-2 bg-border-light rounded w-4/5" />
              <div className="h-2 bg-brand-primary/20 rounded w-full" />
              <div className="h-2 bg-border-light rounded w-2/3" />
            </div>
          </motion.div>

          {/* Right Floating Element (Fills empty side) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:flex absolute -right-12 top-12 flex-col bg-white/80 backdrop-blur-xl border border-border-light shadow-2xl rounded-2xl p-4 w-64 z-0"
          >
            <div className="flex items-center space-x-2 mb-3">
              <BarChart3 className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-bold text-foreground-heading">Live Preview</span>
            </div>
            <div className="flex space-x-2 mb-2">
              <div className="h-8 w-8 bg-border-light rounded-full" />
              <div className="flex-1 space-y-1">
                <div className="h-3 bg-border-light rounded w-full" />
                <div className="h-2 bg-border-light rounded w-1/2" />
              </div>
            </div>
            <div className="h-16 bg-accent-teal/10 rounded-lg border border-accent-teal/20" />
          </motion.div>

          {/* AI Prompt Box (Main) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 max-w-4xl mx-auto bg-white/85 backdrop-blur-2xl border-2 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-2 focus-within:ring-4 focus-within:ring-brand-primary/20 focus-within:border-brand-primary/30 transition-all duration-300"
          >
            <div className="p-5">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the internal tool your team needs..."
                className="w-full h-28 bg-transparent border-none resize-none focus:ring-0 text-xl text-foreground-heading placeholder:text-foreground-muted/50 font-medium"
              />
            </div>
            
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 pb-3 pt-2 border-t border-border-light/50 relative">
              <div className="flex items-center space-x-4">
                
                {/* Interactive Attachment Dropdown */}
                <div className="relative">
                  <input type="file" ref={fileInputRef} className="hidden" multiple />
                  <button 
                    onClick={() => setIsAttachOpen(!isAttachOpen)}
                    className="p-2 text-foreground-muted hover:bg-background-secondary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <AnimatePresence>
                    {isAttachOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full mb-2 left-0 w-56 bg-white border border-border-light shadow-2xl rounded-xl p-2 z-50 text-left"
                      >
                        <div className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-2 px-3 pt-2">Attach Files</div>
                        
                        <button onClick={() => handleAttachClick("file")} className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-background-secondary rounded-lg transition-colors group">
                          <FileText className="w-4 h-4 text-brand-primary" />
                          <span className="text-sm font-bold text-foreground-heading group-hover:text-brand-primary">Upload Document</span>
                        </button>
                        
                        <button onClick={() => handleAttachClick("folder")} className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-background-secondary rounded-lg transition-colors group">
                          <FolderOpen className="w-4 h-4 text-accent-yellow" />
                          <span className="text-sm font-bold text-foreground-heading group-hover:text-brand-primary">Upload Folder</span>
                        </button>

                        <div className="h-px bg-border-light my-1 mx-2" />
                        
                        <button onClick={() => handleAttachClick("Google Drive")} className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-background-secondary rounded-lg transition-colors group">
                          <Cloud className="w-4 h-4 text-accent-cyan" />
                          <span className="text-sm font-bold text-foreground-heading group-hover:text-brand-primary">Google Drive</span>
                        </button>
                        
                        <button onClick={() => handleAttachClick("Cloud Storage")} className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-background-secondary rounded-lg transition-colors group">
                          <Database className="w-4 h-4 text-accent-purpleLight" />
                          <span className="text-sm font-bold text-foreground-heading group-hover:text-brand-primary">Cloud Storage</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Interactive Toggle */}
                <div className="flex bg-background-secondary rounded-lg p-1">
                  <button 
                    onClick={() => setMode("build")}
                    className={`px-4 py-1.5 text-sm font-bold rounded-md shadow-sm transition-all ${mode === "build" ? "bg-white text-brand-primary" : "text-foreground-muted hover:text-foreground-heading"}`}
                  >
                    Build
                  </button>
                  <button 
                    onClick={() => setMode("plan")}
                    className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${mode === "plan" ? "bg-white text-brand-primary shadow-sm" : "text-foreground-muted hover:text-foreground-heading"}`}
                  >
                    Plan
                  </button>
                </div>

                {/* Interactive Model Selector Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 px-4 py-1.5 border border-border-light bg-white rounded-lg text-sm font-bold text-foreground-heading hover:bg-background-secondary transition-colors"
                  >
                    <span className="flex text-accent-cyan"><Zap className="w-4 h-4 fill-current" /></span>
                    <span>{selectedModel.name}</span>
                    <ChevronDown className="w-4 h-4 text-foreground-muted" />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full mb-2 left-0 w-64 bg-white border border-border-light shadow-2xl rounded-xl p-2 z-50 text-left"
                      >
                        <div className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-2 px-3 pt-2">Select Model</div>
                        {MODELS.map(model => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 hover:bg-background-secondary rounded-lg transition-colors group"
                          >
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-foreground-heading group-hover:text-brand-primary">{model.name}</span>
                              <span className="text-[10px] text-foreground-muted uppercase">{model.provider}</span>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="w-4 h-4 text-accent-green" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-foreground-muted hover:bg-background-secondary rounded-full transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="bg-brand-primary hover:bg-brand-primaryHover text-white p-3 rounded-full shadow-lg shadow-brand-primary/30 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center"
                >
                  {isGenerating ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Settings className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4 relative z-10"
        >
          {APP_TYPES.map((type, i) => (
            <button 
              key={i} 
              onClick={() => handleQuickTemplate(type.label)}
              className="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-md border border-white shadow-xl hover:shadow-2xl rounded-2xl w-32 h-32 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-xl bg-white shadow-sm mb-3 ${type.color} group-hover:scale-110 transition-transform`}>
                <type.icon className="w-7 h-7" />
              </div>
              <span className="text-sm font-bold text-foreground-heading text-center leading-tight">
                {type.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 relative z-10"
        >
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="text-sm font-bold text-foreground-muted flex items-center bg-white/50 px-3 py-1.5 rounded-full border border-border-light">
              <Zap className="w-4 h-4 mr-1.5 text-accent-yellow fill-accent-yellow" /> Try an example
            </span>
            {EXAMPLES.map((example, i) => (
              <button 
                key={i} 
                onClick={() => handleQuickTemplate(example)}
                className="px-4 py-2 bg-white/80 border border-border-light hover:border-brand-primary/50 text-foreground-body hover:text-brand-primary text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                {example}
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
