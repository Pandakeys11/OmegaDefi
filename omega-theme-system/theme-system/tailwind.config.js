/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.5s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.5s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "spin-slow": "spin-slow 3s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 3s linear infinite",
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #98d8c8)",
        "gradient-rainbow": "linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)",
        "gradient-fire": "linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f, #f7931e, #ff6b35)",
        "gradient-ocean": "linear-gradient(45deg, #667eea, #764ba2, #667eea)",
        "gradient-sunset": "linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef, #ff9a9e)",
        "gradient-aurora": "linear-gradient(45deg, #a8edea, #fed6e3, #a8edea)",
        "gradient-neon": "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #ff006e)",
        "gradient-cyber": "linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e, #0a0a0a)",
        "gradient-matrix": "linear-gradient(45deg, #000000, #00ff00, #000000)",
        "gradient-holographic": "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #ff006e)",
        "gradient-void": "linear-gradient(45deg, #000000, #1a0033, #330033, #000000)",
        "gradient-quantum": "linear-gradient(45deg, #0f2027, #203a43, #2c5364, #0f2027)",
        "gradient-omega": "linear-gradient(45deg, #1e1e1e, #2d1b69, #1e1e1e)",
        "gradient-solar": "linear-gradient(45deg, #ffffff, #fef3c7, #fed7aa, #ffffff)",
        "gradient-dragon": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-naruto": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-one-piece": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-attack-titan": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-demon-slayer": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-jujutsu": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-my-hero": "linear-gradient(45deg, #1a0f2e, #2d1b4a, #4a1f6b, #1a0f2e)",
        "gradient-spider": "linear-gradient(45deg, #1a0f0f, #2d1b1b, #4a1f1f, #1a0f0f)",
        "gradient-avatar": "linear-gradient(45deg, #0f2e1a, #1b4a2d, #1f6b4a, #0f2e1a)",
        "gradient-rick-morty": "linear-gradient(45deg, #1a0f2e, #2d1b4a, #4a1f6b, #1a0f2e)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.7)",
        "glow-xl": "0 0 60px rgba(59, 130, 246, 0.9)",
        "neon": "0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3), 0 0 15px rgba(0, 255, 255, 0.1)",
        "neon-lg": "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)",
        "neon-xl": "0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.7), 0 0 45px rgba(0, 255, 255, 0.5)",
        "matrix": "0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3), 0 0 15px rgba(0, 255, 0, 0.1)",
        "matrix-lg": "0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.3)",
        "matrix-xl": "0 0 15px rgba(0, 255, 0, 0.9), 0 0 30px rgba(0, 255, 0, 0.7), 0 0 45px rgba(0, 255, 0, 0.5)",
      },
      textShadow: {
        "glow": "0 0 10px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 20px rgba(59, 130, 246, 0.7)",
        "glow-xl": "0 0 30px rgba(59, 130, 246, 0.9)",
        "neon": "0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)",
        "neon-lg": "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)",
        "neon-xl": "0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.7)",
        "matrix": "0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3)",
        "matrix-lg": "0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5)",
        "matrix-xl": "0 0 15px rgba(0, 255, 0, 0.9), 0 0 30px rgba(0, 255, 0, 0.7)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.line-clamp-4': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        '.line-clamp-5': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '5',
        },
        '.line-clamp-6': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '6',
        },
      }
      addUtilities(newUtilities)
    },
  ],
} 