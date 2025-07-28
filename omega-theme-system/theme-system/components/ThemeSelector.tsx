"use client";

import React, { useState } from "react";
import { useTheme, ThemeType } from "../contexts/ThemeContext";
import classNames from "classnames";

export default function ThemeSelector() {
  const { currentTheme, setTheme, themeData } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: "default", name: "Omega Core", icon: "Ω" },
    { id: "neon-samurai", name: "Neon Protocol", icon: "⚡" },
    { id: "quantum-labs", name: "Quantum Network", icon: "🔬" },
    { id: "solar-temple", name: "Omega Blossom", icon: "🌸" },
    { id: "matrix", name: "Matrix Mode", icon: "🟢" },
    { id: "cyber-core", name: "Cyber Core", icon: "🤖" },
    { id: "holographic", name: "Holographic", icon: "🌈" },
    { id: "neon-void", name: "Neon Void", icon: "🌌" },
    { id: "quantum-synth", name: "Quantum Synth", icon: "⚛️" },
    { id: "omega-pulse", name: "Omega Pulse", icon: "💜" },
    { id: "solar-flux", name: "Solar Flux", icon: "☀️" },
    { id: "dragon-ball", name: "Dragon Ball", icon: "🐉" },
    { id: "naruto", name: "Naruto", icon: "🍃" },
    { id: "one-piece", name: "One Piece", icon: "🏴‍☠️" },
    { id: "attack-titan", name: "Attack on Titan", icon: "🗡️" },
    { id: "demon-slayer", name: "Demon Slayer", icon: "⚔️" },
    { id: "jujutsu-kaisen", name: "Jujutsu Kaisen", icon: "👻" },
    { id: "my-hero-academia", name: "My Hero Academia", icon: "🦸" },
    { id: "spider-verse", name: "Spider-Verse", icon: "🕷️" },
    { id: "avatar", name: "Avatar", icon: "🌊" },
    { id: "rick-morty", name: "Rick & Morty", icon: "🔬" },
  ];

  const currentThemeData = themes.find(t => t.id === currentTheme);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border transition-all duration-200 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white font-medium text-xs"
      >
        <span className="text-sm">{currentThemeData?.icon}</span>
        <span>{currentThemeData?.name || 'Theme'}</span>
        <svg className={classNames("w-3 h-3 transition-transform duration-200", { "rotate-180": isOpen })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50">
          <div className="p-3">
            <h3 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">Select Theme</h3>
            <div className="grid grid-cols-1 gap-1 max-h-64 overflow-y-auto">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id as ThemeType);
                    setIsOpen(false);
                  }}
                  className={classNames(
                    "w-full flex items-center space-x-2 px-2 py-1.5 rounded-md transition-all duration-200 hover:bg-white/10 text-left",
                    {
                      "bg-white/20 text-cyan-400": currentTheme === theme.id,
                      "text-white/80 hover:text-white": currentTheme !== theme.id,
                    }
                  )}
                >
                  <span className="text-sm">{theme.icon}</span>
                  <span className="text-xs font-medium flex-1">{theme.name}</span>
                  {currentTheme === theme.id && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t border-white/10">
              <div className="text-xs text-white/60 mb-1">Current Theme</div>
              <div className="text-xs text-white font-medium">{themeData.name}</div>
              <div className="text-xs text-white/70 mt-1 line-clamp-2">{themeData.description}</div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
} 