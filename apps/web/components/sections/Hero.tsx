"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, Mic, Send, LayoutTemplate, Database, Users, Briefcase, Zap, Settings, ChevronDown, Check, Code, BarChart3, FileText, FolderOpen, Cloud, Sparkles, Activity, PieChart, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
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

const MODELS = [
  { id: "gemini-pro", name: "Gemini 3.1 Pro", provider: "Google" },
  { id: "gemini-flash", name: "Gemini 3 Flash", provider: "Google" },
  { id: "deepseek", name: "DeepSeek V4", provider: "DeepSeek" },
];

export function Hero() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[1]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Simulated chart data points
  const [chartBars, setChartBars] = useState([40, 70, 45, 90, 65, 85, 100, 50, 75]);

  // Animate the chart bars randomly to look alive
  useEffect(() => {
    const interval = setInterval(() => {
      setChartBars(prev => prev.map(val => Math.max(20, Math.min(100, val + (Math.random() * 20 - 10)))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      router.push("/builder");
    }, 1500);
  };

  const handleAttachClick = (type: string) => {
    setIsAttachOpen(false);
    if (type === "file" || type === "folder") {
      fileInputRef.current?.click();
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-main min-h-screen flex items-center">
      <FloatingDots />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-border-light rounded-full px-4 py-1.5 mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
              <span className="text-sm font-medium text-brand-primary">Antigravity Engine 2.0</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground-heading mb-6 leading-[1.1]">
                Command your <br/>
                <span className="text-transparent bg-clip-text bg-brand-gradient">software empire.</span>
              </h1>
              <p className="text-xl text-foreground-body mb-10 font-medium leading-relaxed max-w-lg">
                Stop copying templates. Type what you need, and OneAtlas writes the code, spins up the database, and deploys a completely bespoke application in seconds.
              </p>
            </motion.div>

            {/* Quick App Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 max-w-lg"
            >
              {APP_TYPES.map((type, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setPrompt(`Initialize a ${type.label} tailored for...`);
                  }}
                  className="flex flex-col items-start p-3 bg-white/50 backdrop-blur-sm border border-border-light hover:border-brand-primary/50 shadow-sm hover:shadow-md rounded-xl transition-all group"
                >
                  <type.icon className={`w-5 h-5 mb-2 ${type.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-bold text-foreground-heading text-left leading-tight">
                    {type.label}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right Interface Column (The Unique Custom Dashboard) */}
          <div className="lg:col-span-7 relative z-20 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative w-full"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-primary opacity-5 blur-[100px] rounded-full" />
              
              {/* The Studio Window */}
              <div className="relative bg-white/80 backdrop-blur-3xl border border-white shadow-[0_30px_100px_-15px_rgba(99,91,255,0.2)] rounded-3xl overflow-hidden flex flex-col">
                
                {/* Mac Header */}
                <div className="h-12 bg-white/50 border-b border-border-light/50 flex items-center px-4 justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20" />
                  </div>
                  <div className="flex bg-white/60 px-3 py-1 rounded-md border border-border-light text-[10px] font-bold text-foreground-muted tracking-widest uppercase">
                    OneAtlas Studio
                  </div>
                  <div className="w-12" /> {/* Spacer for flex centering */}
                </div>

                {/* The Integrated Dashboard UI */}
                <div className="p-6 bg-gradient-to-br from-background-secondary/50 to-white/50 flex flex-col gap-6">
                  
                  {/* Top Metric Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white border border-border-light rounded-2xl p-4 shadow-sm flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">Total Revenue</span>
                        <DollarSign className="w-4 h-4 text-accent-green" />
                      </div>
                      <span className="text-2xl font-black text-foreground-heading">$124,500</span>
                      <div className="mt-2 text-xs font-medium text-accent-green flex items-center bg-accent-green/10 w-fit px-2 py-0.5 rounded-full">
                        <TrendingUp className="w-3 h-3 mr-1" /> +14.2%
                      </div>
                    </div>
                    <div className="bg-white border border-border-light rounded-2xl p-4 shadow-sm flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">Active Users</span>
                        <Users className="w-4 h-4 text-brand-primary" />
                      </div>
                      <span className="text-2xl font-black text-foreground-heading">8,234</span>
                      <div className="mt-2 text-xs font-medium text-brand-primary flex items-center bg-brand-primary/10 w-fit px-2 py-0.5 rounded-full">
                        <Activity className="w-3 h-3 mr-1" /> Stable
                      </div>
                    </div>
                    <div className="bg-brand-dark rounded-2xl p-4 shadow-lg text-white flex flex-col relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary blur-3xl opacity-30 rounded-full" />
                      <div className="flex items-center justify-between mb-2 relative z-10">
                        <span className="text-xs font-bold text-white/70 uppercase tracking-wider">System Load</span>
                        <Zap className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                      </div>
                      <span className="text-2xl font-black relative z-10">24%</span>
                      <div className="mt-auto h-1 w-full bg-white/20 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-accent-cyan w-1/4 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="bg-white border border-border-light rounded-2xl p-5 shadow-sm h-48 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-foreground-heading">Performance Analytics</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-primary" />
                        <div className="w-2 h-2 rounded-full bg-accent-teal" />
                      </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                      {chartBars.map((height, i) => (
                        <div key={i} className="w-full flex justify-center group relative cursor-pointer">
                          <motion.div 
                            animate={{ height: `${height}%` }}
                            transition={{ type: "spring", stiffness: 50 }}
                            className={`w-full max-w-[24px] rounded-t-sm transition-colors ${i % 3 === 0 ? 'bg-accent-teal/80 group-hover:bg-accent-teal' : 'bg-brand-primary/80 group-hover:bg-brand-primary'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Embedded AI Prompt Console */}
                  <div className="relative mt-2">
                    <div className="absolute -top-3 left-6 px-3 py-0.5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-full z-10 shadow-md border border-white/10 flex items-center">
                      <Sparkles className="w-3 h-3 mr-1 fill-current text-accent-yellow" /> Command Console
                    </div>
                    <div className="bg-white border-2 border-brand-primary/20 shadow-xl shadow-brand-primary/10 rounded-2xl p-2 focus-within:border-brand-primary/60 transition-colors relative z-0">
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Modify this dashboard by adding a Stripe revenue widget..."
                        className="w-full h-16 bg-transparent border-none resize-none focus:ring-0 text-lg text-foreground-heading placeholder:text-foreground-muted/60 font-medium px-2 pt-3"
                      />
                      
                      <div className="flex items-center justify-between px-2 pb-1 pt-2 border-t border-border-light/40">
                        <div className="flex items-center space-x-2">
                          <div className="relative">
                            <input type="file" ref={fileInputRef} className="hidden" multiple />
                            <button 
                              onClick={() => setIsAttachOpen(!isAttachOpen)}
                              className="p-1.5 text-foreground-muted hover:bg-background-secondary rounded-md transition-colors"
                            >
                              <Paperclip className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                              {isAttachOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 5 }}
                                  className="absolute bottom-full mb-1 left-0 w-48 bg-white border border-border-light shadow-xl rounded-xl p-1.5 z-50 text-left"
                                >
                                  <button onClick={() => handleAttachClick("file")} className="w-full flex items-center space-x-2 px-2 py-1.5 hover:bg-background-secondary rounded-lg text-sm font-bold">
                                    <FileText className="w-4 h-4 text-brand-primary" /> <span>Document</span>
                                  </button>
                                  <button onClick={() => handleAttachClick("Google Drive")} className="w-full flex items-center space-x-2 px-2 py-1.5 hover:bg-background-secondary rounded-lg text-sm font-bold">
                                    <Cloud className="w-4 h-4 text-accent-cyan" /> <span>Google Drive</span>
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <div className="relative">
                            <button 
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className="flex items-center space-x-1 px-3 py-1 bg-background-secondary hover:bg-border-light rounded-md text-xs font-bold text-foreground-heading transition-colors"
                            >
                              <span>{selectedModel.name}</span>
                              <ChevronDown className="w-3 h-3 text-foreground-muted" />
                            </button>
                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 5 }}
                                  className="absolute bottom-full mb-1 left-0 w-48 bg-white border border-border-light shadow-xl rounded-xl p-1.5 z-50 text-left"
                                >
                                  {MODELS.map(model => (
                                    <button
                                      key={model.id}
                                      onClick={() => { setSelectedModel(model); setIsDropdownOpen(false); }}
                                      className="w-full flex items-center justify-between px-2 py-1.5 hover:bg-background-secondary rounded-lg text-xs font-bold"
                                    >
                                      {model.name}
                                      {selectedModel.id === model.id && <Check className="w-3 h-3 text-brand-primary" />}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="bg-brand-dark hover:bg-black text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center"
                          >
                            {isGenerating ? (
                              <Settings className="w-4 h-4 animate-spin" />
                            ) : (
                              <>Execute <ArrowRight className="w-4 h-4 ml-1" /></>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
