"use client";

import { motion } from "framer-motion";

export function FloatingDots() {
  const dots = [
    { size: 8, color: "bg-accent-teal", top: "10%", left: "15%", delay: 0 },
    { size: 12, color: "bg-brand-primary", top: "25%", left: "80%", delay: 1 },
    { size: 6, color: "bg-accent-pink", top: "40%", left: "10%", delay: 2 },
    { size: 10, color: "bg-accent-yellow", top: "60%", left: "85%", delay: 1.5 },
    { size: 14, color: "bg-accent-cyan", top: "75%", left: "20%", delay: 0.5 },
    { size: 8, color: "bg-brand-primary", top: "85%", left: "70%", delay: 2.5 },
    { size: 6, color: "bg-accent-peach", top: "15%", left: "60%", delay: 0.8 },
    { size: 10, color: "bg-accent-teal", top: "50%", left: "50%", delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-60 blur-[2px] ${dot.color}`}
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
          }}
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["0%", "20%", "0%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
      
      {/* Soft large background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-purpleLight rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-soft-orange rounded-full blur-[120px] opacity-40 mix-blend-multiply" />
    </div>
  );
}
