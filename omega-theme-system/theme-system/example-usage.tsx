"use client";

import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import ThemeSelector from "./components/ThemeSelector";

export default function ExamplePage() {
  const { currentTheme, themeData } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Theme Selector */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ThemeSelector />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to <span className={themeData.accent}>{themeData.name}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {themeData.description}
          </p>
        </section>

        {/* Theme Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 clickable-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Feature One</h3>
                <p className="text-sm text-muted-foreground">Amazing feature description</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              This card automatically adapts to the current theme with beautiful styling.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 clickable-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Feature Two</h3>
                <p className="text-sm text-muted-foreground">Lightning fast performance</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Optimized for performance with hardware-accelerated animations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 clickable-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Feature Three</h3>
                <p className="text-sm text-muted-foreground">Beautiful design system</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              21+ beautiful themes to choose from, each with unique aesthetics.
            </p>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Theme Demo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Theme Info */}
            <div>
              <h4 className="font-semibold mb-4">Current Theme</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{themeData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ID:</span>
                  <span className="font-mono text-sm">{currentTheme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accent Color:</span>
                  <span className={themeData.accent}>Sample Text</span>
                </div>
              </div>
            </div>

            {/* Theme Preview */}
            <div>
              <h4 className="font-semibold mb-4">Theme Preview</h4>
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-md transition-colors">
                  Secondary Button
                </button>
                <div className="bg-muted text-muted-foreground px-4 py-2 rounded-md">
                  Muted Background
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Demo */}
        <section className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Animation Demo</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-spin-slow">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-sm text-muted-foreground">Spin Slow</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse-slow">
                <span className="text-2xl">💫</span>
              </div>
              <p className="text-sm text-muted-foreground">Pulse Slow</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce-slow">
                <span className="text-2xl">🎈</span>
              </div>
              <p className="text-sm text-muted-foreground">Bounce Slow</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-float">
                <span className="text-2xl">🌊</span>
              </div>
              <p className="text-sm text-muted-foreground">Float</p>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">How to Use</h3>
          
          <div className="prose prose-invert max-w-none">
            <h4>1. Install Dependencies</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>npm install next-themes classnames framer-motion</code>
            </pre>
            
            <h4>2. Update Your Layout</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`// layout.tsx
import { Providers } from './providers'
import { ThemeOverlay } from './components/ThemeOverlay'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <ThemeOverlay />
          {children}
        </Providers>
      </body>
    </html>
  )
}`}</code>
            </pre>
            
            <h4>3. Add Theme Selector</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`// Any component
import ThemeSelector from './components/ThemeSelector'

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1>My Site</h1>
      <ThemeSelector />
    </header>
  )
}`}</code>
            </pre>
            
            <h4>4. Use Theme-Aware Classes</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`// Components automatically adapt to themes
<div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6">
  <h2 className="text-foreground font-bold">Theme-Aware Card</h2>
  <p className="text-muted-foreground">This adapts to any theme</p>
  <button className="bg-primary text-primary-foreground hover:bg-primary/90">
    Themed Button
  </button>
</div>`}</code>
            </pre>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ using the Omega Network Theme System
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Current theme: <span className={themeData.accent}>{themeData.name}</span>
          </p>
        </div>
      </footer>
    </div>
  );
} 