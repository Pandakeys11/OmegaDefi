"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "default" | "neon-samurai" | "quantum-labs" | "solar-temple" | "matrix" | "cyber-core" | "holographic" | "neon-void" | "quantum-synth" | "omega-pulse" | "solar-flux" | "dragon-ball" | "naruto" | "one-piece" | "attack-titan" | "demon-slayer" | "jujutsu-kaisen" | "my-hero-academia" | "spider-verse" | "avatar" | "rick-morty";

interface ThemeData {
  name: string;
  bg: string;
  description: string;
  accent: string;
  overlay: string;
}

const themes: Record<ThemeType, ThemeData> = {
  default: {
    name: "Omega Core",
    bg: "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900",
    description: "The foundational Omega Network experience",
    accent: "text-blue-400",
    overlay: "bg-black/20",
  },
  "neon-samurai": {
    name: "Neon Protocol",
    bg: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0c29] via-[#302b63] to-[#24243e]",
    description: "Cyberpunk protocol layer with neon-lit blockchain towers",
    accent: "text-cyan-400",
    overlay: "bg-black/30 backdrop-blur-sm",
  },
  "quantum-labs": {
    name: "Quantum Network",
    bg: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#2c3e50] via-[#3b6978] to-[#204051]",
    description: "Quantum computing meets blockchain technology",
    accent: "text-emerald-300",
    overlay: "bg-black/40 backdrop-blur-sm",
  },
  "solar-temple": {
    name: "Omega Blossom",
    bg: "bg-gradient-to-bl from-[#654ea3] via-[#eaafc8] to-[#fbc2eb]",
    description: "Renewable energy powered blockchain infrastructure",
    accent: "text-pink-300",
    overlay: "bg-black/25 backdrop-blur-sm",
  },
  matrix: {
    name: "Matrix Mode",
    bg: "bg-black",
    description: "Enter the digital realm of the Matrix",
    accent: "text-green-400",
    overlay: "bg-green-900/10 backdrop-blur-sm",
  },
  "cyber-core": {
    name: "Cyber Core",
    bg: "bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]",
    description: "Core cyberpunk aesthetic with deep blues",
    accent: "text-cyan-300",
    overlay: "bg-black/35 backdrop-blur-md",
  },
  "holographic": {
    name: "Holographic",
    bg: "bg-gradient-to-br from-[#ff006e] via-[#8338ec] to-[#3a86ff]",
    description: "Authentic holographic interface",
    accent: "text-cyan-300",
    overlay: "bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm",
  },
  "neon-void": {
    name: "Neon Void",
    bg: "bg-gradient-to-br from-[#000000] via-[#1a0033] to-[#330033]",
    description: "Deep void with neon purple highlights",
    accent: "text-purple-400",
    overlay: "bg-purple-900/25 backdrop-blur-md",
  },
  "quantum-synth": {
    name: "Quantum Synth",
    bg: "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]",
    description: "Synthetic quantum environment",
    accent: "text-teal-300",
    overlay: "bg-teal-900/20 backdrop-blur-sm",
  },
  "omega-pulse": {
    name: "Omega Pulse",
    bg: "bg-gradient-to-br from-[#1e1e1e] via-[#2d1b69] to-[#1e1e1e]",
    description: "Pulsing Omega energy",
    accent: "text-purple-300",
    overlay: "bg-purple-900/30 backdrop-blur-md",
  },
  "solar-flux": {
    name: "Solar Flux",
    bg: "bg-gradient-to-br from-white via-yellow-100 to-orange-200",
    description: "Radiant solar energy",
    accent: "text-red-600",
    overlay: "bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm",
  },
  "dragon-ball": {
    name: "Dragon Ball",
    bg: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Dragon Ball Z aesthetic",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "naruto": {
    name: "Naruto",
    bg: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Hidden village aesthetic",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "one-piece": {
    name: "One Piece",
    bg: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Pirate adventure theme",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "attack-titan": {
    name: "Attack on Titan",
    bg: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Military and titan theme",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "demon-slayer": {
    name: "Demon Slayer",
    bg: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Japanese folklore theme",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "jujutsu-kaisen": {
    name: "Jujutsu Kaisen",
    bg: "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Modern supernatural theme",
    accent: "text-orange-400",
    overlay: "bg-gradient-to-br from-orange-500/15 via-red-500/20 to-yellow-500/15 backdrop-blur-md",
  },
  "my-hero-academia": {
    name: "My Hero Academia",
    bg: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#1a0f2e] via-[#2d1b4a] to-[#4a1f6b]",
    description: "Hero and villain theme",
    accent: "text-blue-400",
    overlay: "bg-gradient-to-br from-blue-500/15 via-red-500/20 to-green-500/15 backdrop-blur-md",
  },
  "spider-verse": {
    name: "Spider-Verse",
    bg: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]",
    description: "Multiverse theme",
    accent: "text-red-400",
    overlay: "bg-gradient-to-br from-red-500/15 via-blue-500/20 to-purple-500/15 backdrop-blur-md",
  },
  "avatar": {
    name: "Avatar",
    bg: "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#0f2e1a] via-[#1b4a2d] to-[#1f6b4a]",
    description: "Element bending theme",
    accent: "text-green-400",
    overlay: "bg-gradient-to-br from-green-500/15 via-blue-500/20 to-red-500/15 backdrop-blur-md",
  },
  "rick-morty": {
    name: "Rick & Morty",
    bg: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0f2e] via-[#2d1b4a] to-[#4a1f6b]",
    description: "Portal and dimension theme",
    accent: "text-green-400",
    overlay: "bg-gradient-to-br from-green-500/15 via-purple-500/20 to-blue-500/15 backdrop-blur-md",
  },
};

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isThemeActive: boolean;
  themeData: ThemeData;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("default");
  const [isThemeActive, setIsThemeActive] = useState(false);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    setIsThemeActive(theme !== "default");
    
    const body = document.body;
    body.classList.remove(
      'theme-neon-samurai', 'theme-quantum-labs', 'theme-solar-temple', 'theme-matrix',
      'theme-cyber-core', 'theme-holographic', 'theme-neon-void', 'theme-quantum-synth',
      'theme-omega-pulse', 'theme-solar-flux', 'theme-dragon-ball', 'theme-naruto',
      'theme-one-piece', 'theme-attack-titan', 'theme-demon-slayer', 'theme-jujutsu-kaisen',
      'theme-my-hero-academia', 'theme-spider-verse', 'theme-avatar', 'theme-rick-morty'
    );
    
    if (theme !== "default") {
      body.classList.add(`theme-${theme}`);
    }
    
    localStorage.setItem("omega-theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("omega-theme") as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  const themeData = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isThemeActive, themeData }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 