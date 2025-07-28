# 🎨 Omega Theme System - Complete Guide

## Overview

The Omega Theme System is a comprehensive theming solution that provides 21+ beautiful themes for the Omega DeFi platform. It's designed to work seamlessly with HTML/CSS/JavaScript applications and provides a smooth, animated theme switching experience.

## Features

- **21+ Pre-built Themes** - From cyberpunk to anime-inspired
- **Real-time Theme Switching** - Instant theme changes with smooth animations
- **Local Storage Persistence** - Remembers user preferences
- **CSS Custom Properties** - Dynamic theming using CSS variables
- **Responsive Design** - Works on all devices
- **Easy Integration** - Drop-in solution for any HTML page

## Available Themes

### Core Omega Themes
1. **Omega Core** (default) - Deep blues and purples
2. **Neon Protocol** - Cyberpunk neon aesthetic
3. **Quantum Network** - Quantum computing theme
4. **Omega Blossom** - Renewable energy theme

### Special Modes
5. **Matrix Mode** - Digital rain and green interface
6. **Cyber Core** - Deep cyberpunk aesthetic
7. **Holographic** - Iridescent effects
8. **Neon Void** - Deep void with neon highlights
9. **Quantum Synth** - Synthetic quantum environment
10. **Omega Pulse** - Pulsing Omega energy
11. **Solar Flux** - Radiant solar energy

### Anime/Entertainment Themes
12. **Dragon Ball** - Fiery orange and golden energy
13. **Naruto** - Hidden village aesthetic
14. **One Piece** - Pirate adventure theme
15. **Attack on Titan** - Military and titan theme
16. **Demon Slayer** - Japanese folklore theme
17. **Jujutsu Kaisen** - Modern supernatural theme
18. **My Hero Academia** - Hero and villain theme
19. **Spider-Verse** - Multiverse theme
20. **Avatar** - Element bending theme
21. **Rick & Morty** - Portal and dimension theme

## Integration

### 1. Add Script to HTML

Include the theme system script in your HTML file:

```html
<script src="omega-theme-system.js"></script>
```

### 2. Theme Selector Placement

The theme selector automatically appears in the top-right corner of the page. It looks for these elements in order:
- `.wallet-panel` (preferred)
- `header`
- `body` (fallback)

### 3. CSS Variables

The theme system uses CSS custom properties that automatically update when themes change:

```css
:root {
  --bg-primary: #0a0a0a;        /* Main background */
  --bg-secondary: #1a1a1a;      /* Secondary background */
  --bg-card: rgba(26, 26, 26, 0.8); /* Card background */
  --text-primary: #ffffff;      /* Primary text */
  --text-secondary: #a0a0a0;    /* Secondary text */
  --accent-primary: #00ff88;    /* Primary accent */
  --accent-secondary: #00d4ff;  /* Secondary accent */
  --border-primary: rgba(0, 255, 136, 0.3); /* Borders */
  --button-bg: rgba(0, 255, 136, 0.1);      /* Button background */
  --button-hover: rgba(0, 255, 136, 0.2);   /* Button hover */
}
```

## Usage Examples

### Basic Theme-Aware Component

```html
<div class="theme-card">
  <h2>Theme-Aware Card</h2>
  <p>This card automatically adapts to any theme</p>
  <button class="theme-button">Themed Button</button>
</div>
```

```css
.theme-card {
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
  padding: 1rem;
  border-radius: 8px;
}

.theme-button {
  background: var(--accent-primary);
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
```

### Form Elements

```css
.theme-input {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
  padding: 0.5rem;
  border-radius: 4px;
}

.theme-input:focus {
  border-color: var(--accent-primary);
  outline: none;
}
```

### Status Indicators

```css
.status-operational {
  background: var(--accent-primary);
  color: #000;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}
```

## JavaScript API

### Accessing the Theme System

```javascript
// Get the theme system instance
const themeSystem = window.omegaThemeSystem;

// Get current theme
const currentTheme = themeSystem.currentTheme;

// Get theme data
const themeData = themeSystem.themes[currentTheme];
console.log(themeData.name); // Theme name
console.log(themeData.description); // Theme description
console.log(themeData.accent); // Accent color
```

### Programmatic Theme Switching

```javascript
// Switch to a specific theme
omegaThemeSystem.setTheme('matrix');

// Get all available themes
const availableThemes = Object.keys(omegaThemeSystem.themes);
```

### Theme Change Events

```javascript
// Listen for theme changes
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    // Theme changed, update your components
    updateMyComponents();
  });
  
  observer.observe(document.body, { 
    attributes: true, 
    attributeFilter: ['class'] 
  });
});
```

## File Structure

```
OmegaDefi/
├── omega-theme-system.js          # Main theme system
├── omega-theme-styles.css         # Additional theme styles
├── omega-theme-system/            # React version (for reference)
│   └── theme-system/
│       ├── components/
│       ├── contexts/
│       └── ...
├── theme-test.html                # Theme testing page
└── THEME_SYSTEM_GUIDE.md         # This guide
```

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## Performance Features

- **Hardware-accelerated animations** - Smooth theme transitions
- **CSS Custom Properties** - Efficient dynamic theming
- **Local Storage** - Fast theme persistence
- **Lazy Loading** - Minimal impact on page load

## Customization

### Adding New Themes

1. Add theme data to the `themes` object in `omega-theme-system.js`:

```javascript
"my-custom-theme": {
  name: "My Custom Theme",
  description: "A custom theme description",
  accent: "#ff6b35",
  bg: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
  card: "rgba(42, 42, 42, 0.8)",
  text: "#ffffff",
  muted: "#a0a0a0",
  border: "rgba(255, 107, 53, 0.3)",
  button: "rgba(255, 107, 53, 0.1)",
  buttonHover: "rgba(255, 107, 53, 0.2)"
}
```

2. Add an icon to the `getThemeIcon` function:

```javascript
getThemeIcon(themeName) {
  const icons = {
    // ... existing icons
    'my-custom-theme': '🎨'
  };
  return icons[themeName] || '🎨';
}
```

### Modifying Existing Themes

Edit the theme data in the `themes` object to customize colors, gradients, and other properties.

## Testing

Use the `theme-test.html` page to test all themes and verify they're working correctly. The test page includes:

- Theme information display
- Color palette visualization
- Component testing
- Form element testing
- Status indicator testing

## Troubleshooting

### Theme Selector Not Appearing

1. Ensure `omega-theme-system.js` is loaded
2. Check browser console for errors
3. Verify the script is loaded before other scripts

### Themes Not Switching

1. Check if CSS variables are being applied
2. Verify theme data is correct
3. Check for JavaScript errors in console

### Styling Issues

1. Ensure CSS variables are used instead of hardcoded colors
2. Check for conflicting CSS rules
3. Verify theme data includes all required properties

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all files are properly loaded
3. Test with the `theme-test.html` page
4. Review this guide for integration details

---

**Made with ❤️ for the Omega Network community** 