# 🎨 Omega Network Theme System

A complete, production-ready theme system with 21+ beautiful themes for Next.js applications.

## ✨ Features

- **21+ Pre-built Themes** - From cyberpunk to anime-inspired
- **TypeScript Support** - Full type safety
- **Performance Optimized** - Hardware-accelerated animations
- **Responsive Design** - Works on all devices
- **Easy Integration** - Drop-in solution for any Next.js app
- **Local Storage Persistence** - Remembers user preferences
- **Matrix Mode** - Special cyberpunk mode with digital rain

## 🚀 Quick Start

1. **Install Dependencies**
```bash
npm install next-themes classnames framer-motion
```

2. **Copy Files**
   - Copy all files from this package to your project
   - Follow the file structure below

3. **Update Your Layout**
```typescript
// layout.tsx
import { Providers } from './providers'
import { ThemeOverlay } from './components/ThemeOverlay'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
}
```

4. **Add Theme Selector**
```typescript
// Any component
import ThemeSelector from './components/ThemeSelector'

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1>My Site</h1>
      <ThemeSelector />
    </header>
  )
}
```

## 📁 File Structure

```
theme-system/
├── README.md
├── package.json
├── contexts/
│   └── ThemeContext.tsx
├── components/
│   ├── ThemeSelector.tsx
│   └── ThemeOverlay.tsx
├── providers.tsx
├── globals.css
├── tailwind.config.js
└── example-usage.tsx
```

## 🎨 Available Themes

### Core Themes
- **Omega Core** (default) - Deep blues and purples
- **Neon Protocol** - Cyberpunk neon aesthetic
- **Quantum Network** - Quantum computing theme
- **Omega Blossom** - Renewable energy theme

### Special Modes
- **Matrix Mode** - Digital rain and green interface
- **Cyber Core** - Deep cyberpunk aesthetic
- **Holographic** - Iridescent effects
- **Neon Void** - Deep void with neon highlights
- **Quantum Synth** - Synthetic quantum environment
- **Omega Pulse** - Pulsing Omega energy
- **Solar Flux** - Radiant solar energy

### Anime/Entertainment
- **Dragon Ball** - Fiery orange and golden energy
- **Naruto** - Hidden village aesthetic
- **One Piece** - Pirate adventure theme
- **Attack on Titan** - Military and titan theme
- **Demon Slayer** - Japanese folklore theme
- **Jujutsu Kaisen** - Modern supernatural theme
- **My Hero Academia** - Hero and villain theme
- **Spider-Verse** - Multiverse theme
- **Avatar** - Element bending theme
- **Rick & Morty** - Portal and dimension theme

## 🔧 Usage

### Basic Theme Usage
```typescript
import { useTheme } from './contexts/ThemeContext'

export default function MyComponent() {
  const { currentTheme, themeData, setTheme } = useTheme()

  return (
    <div className="bg-card text-foreground border-border">
      <h1 className={themeData.accent}>Current Theme: {themeData.name}</h1>
      <p>{themeData.description}</p>
      <button onClick={() => setTheme('neon-samurai')}>
        Switch to Neon Samurai
      </button>
    </div>
  )
}
```

### Theme-Aware Components
```typescript
// Components automatically adapt to themes
<div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6">
  <h2 className="text-foreground font-bold">Theme-Aware Card</h2>
  <p className="text-muted-foreground">This adapts to any theme</p>
  <button className="bg-primary text-primary-foreground hover:bg-primary/90">
    Themed Button
  </button>
</div>
```

## 🎯 Customization

### Adding New Themes
1. Add to `ThemeType` in `ThemeContext.tsx`
2. Add theme data to `themes` object
3. Add CSS classes in `globals.css`
4. Add to theme selector array

### Theme Data Structure
```typescript
interface ThemeData {
  name: string;           // Display name
  bg: string;            // Background gradient/color
  description: string;   // Theme description
  accent: string;        // Accent color class
  overlay: string;       // Overlay styling
}
```

## ⚡ Performance Features

- CSS Custom Properties for dynamic theming
- Hardware-accelerated animations
- Backdrop blur effects
- Optimized transforms and transitions
- Lazy loading of theme assets

## 🔒 Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 📝 License

MIT License - Feel free to use in any project!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your theme or improvements
4. Submit a pull request

## 🆘 Support

For issues or questions:
1. Check the example usage
2. Review the TypeScript types
3. Ensure all dependencies are installed
4. Verify file paths are correct

---

**Made with ❤️ for the Omega Network community** 