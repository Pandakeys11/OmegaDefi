"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeOverlay() {
  const { currentTheme, isThemeActive, themeData } = useTheme();

  if (!isThemeActive || currentTheme === "default") {
    return null;
  }

  const getBackgroundStyle = () => {
    const bg = themeData.bg;
    const gradientMap: Record<string, string> = {
      'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900': 'linear-gradient(to bottom right, #111827, #1e3a8a, #7c3aed)',
      'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0c29] via-[#302b63] to-[#24243e]': 'radial-gradient(ellipse at center, #0f0c29, #302b63, #24243e)',
      'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#2c3e50] via-[#3b6978] to-[#204051]': 'conic-gradient(at top right, #2c3e50, #3b6978, #204051)',
      'bg-gradient-to-bl from-[#654ea3] via-[#eaafc8] to-[#fbc2eb]': 'linear-gradient(to bottom left, #654ea3, #eaafc8, #fbc2eb)',
      'bg-black': '#000000',
      'bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]': 'linear-gradient(to bottom right, #0a0a0a, #1a1a2e, #16213e)',
      'bg-gradient-to-br from-[#ff006e] via-[#8338ec] to-[#3a86ff]': 'linear-gradient(to bottom right, #ff006e, #8338ec, #3a86ff)',
      'bg-gradient-to-br from-[#000000] via-[#1a0033] to-[#330033]': 'linear-gradient(to bottom right, #000000, #1a0033, #330033)',
      'bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]': 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
      'bg-gradient-to-br from-[#1e1e1e] via-[#2d1b69] to-[#1e1e1e]': 'linear-gradient(to bottom right, #1e1e1e, #2d1b69, #1e1e1e)',
      'bg-gradient-to-br from-white via-yellow-100 to-orange-200': 'linear-gradient(to bottom right, #ffffff, #fef3c7, #fed7aa)',
      'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'radial-gradient(ellipse at center, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'conic-gradient(at bottom left, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'radial-gradient(circle at top, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'conic-gradient(at top right, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'radial-gradient(ellipse at bottom, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'conic-gradient(at bottom right, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#1a0f2e] via-[#2d1b4a] to-[#4a1f6b]': 'conic-gradient(at top left, #1a0f2e, #2d1b4a, #4a1f6b)',
      'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0f0f] via-[#2d1b1b] to-[#4a1f1f]': 'radial-gradient(circle at center, #1a0f0f, #2d1b1b, #4a1f1f)',
      'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#0f2e1a] via-[#1b4a2d] to-[#1f6b4a]': 'conic-gradient(at bottom right, #0f2e1a, #1b4a2d, #1f6b4a)',
      'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0f2e] via-[#2d1b4a] to-[#4a1f6b]': 'radial-gradient(ellipse at bottom, #1a0f2e, #2d1b4a, #4a1f6b)',
    };
    return gradientMap[bg] || bg;
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: getBackgroundStyle(),
        opacity: 0.8,
      }}
    />
  );
} 