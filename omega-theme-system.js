// Omega Theme System - Vanilla JavaScript Version
// Adapted from the React theme system for HTML/CSS/JS projects

class OmegaThemeSystem {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'default';
    this.themes = {
      default: {
        name: "Omega Core",
        description: "The foundational Omega Network experience",
        accent: "#00ff88",
        bg: "linear-gradient(135deg, #0f0f23, #1a1a2e, #16213e)",
        card: "rgba(26, 26, 46, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(0, 255, 136, 0.3)",
        button: "rgba(0, 255, 136, 0.1)",
        buttonHover: "rgba(0, 255, 136, 0.2)"
      },
      "neon-samurai": {
        name: "Neon Protocol",
        description: "Cyberpunk protocol layer with neon-lit blockchain towers",
        accent: "#00ffff",
        bg: "radial-gradient(ellipse at center, #0f0c29, #302b63, #24243e)",
        card: "rgba(48, 43, 99, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(0, 255, 255, 0.3)",
        button: "rgba(0, 255, 255, 0.1)",
        buttonHover: "rgba(0, 255, 255, 0.2)"
      },
      "quantum-labs": {
        name: "Quantum Network",
        description: "Quantum computing meets blockchain technology",
        accent: "#10b981",
        bg: "conic-gradient(at top right, #2c3e50, #3b6978, #204051)",
        card: "rgba(59, 105, 120, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(16, 185, 129, 0.3)",
        button: "rgba(16, 185, 129, 0.1)",
        buttonHover: "rgba(16, 185, 129, 0.2)"
      },
      "solar-temple": {
        name: "Omega Blossom",
        description: "Renewable energy powered blockchain infrastructure",
        accent: "#ec4899",
        bg: "linear-gradient(to bottom left, #654ea3, #eaafc8, #fbc2eb)",
        card: "rgba(234, 175, 200, 0.8)",
        text: "#000000",
        muted: "#666666",
        border: "rgba(236, 72, 153, 0.3)",
        button: "rgba(236, 72, 153, 0.1)",
        buttonHover: "rgba(236, 72, 153, 0.2)"
      },
      "matrix": {
        name: "Matrix Mode",
        description: "Enter the digital realm of the Matrix",
        accent: "#00ff00",
        bg: "#000000",
        card: "rgba(0, 0, 0, 0.9)",
        text: "#00ff00",
        muted: "#00cc00",
        border: "rgba(0, 255, 0, 0.3)",
        button: "rgba(0, 255, 0, 0.1)",
        buttonHover: "rgba(0, 255, 0, 0.2)"
      },
      "cyber-core": {
        name: "Cyber Core",
        description: "Core cyberpunk aesthetic with deep blues",
        accent: "#00ffff",
        bg: "linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)",
        card: "rgba(26, 26, 46, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(0, 255, 255, 0.3)",
        button: "rgba(0, 255, 255, 0.1)",
        buttonHover: "rgba(0, 255, 255, 0.2)"
      },
      "holographic": {
        name: "Holographic",
        description: "Authentic holographic interface",
        accent: "#00ffff",
        bg: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)",
        card: "rgba(131, 56, 236, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(0, 255, 255, 0.3)",
        button: "rgba(0, 255, 255, 0.1)",
        buttonHover: "rgba(0, 255, 255, 0.2)"
      },
      "neon-void": {
        name: "Neon Void",
        description: "Deep void with neon purple highlights",
        accent: "#a855f7",
        bg: "linear-gradient(135deg, #000000, #1a0033, #330033)",
        card: "rgba(51, 0, 51, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(168, 85, 247, 0.3)",
        button: "rgba(168, 85, 247, 0.1)",
        buttonHover: "rgba(168, 85, 247, 0.2)"
      },
      "quantum-synth": {
        name: "Quantum Synth",
        description: "Synthetic quantum environment",
        accent: "#14b8a6",
        bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        card: "rgba(44, 83, 100, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(20, 184, 166, 0.3)",
        button: "rgba(20, 184, 166, 0.1)",
        buttonHover: "rgba(20, 184, 166, 0.2)"
      },
      "omega-pulse": {
        name: "Omega Pulse",
        description: "Pulsing Omega energy",
        accent: "#a855f7",
        bg: "linear-gradient(135deg, #1e1e1e, #2d1b69, #1e1e1e)",
        card: "rgba(45, 27, 105, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(168, 85, 247, 0.3)",
        button: "rgba(168, 85, 247, 0.1)",
        buttonHover: "rgba(168, 85, 247, 0.2)"
      },
      "solar-flux": {
        name: "Solar Flux",
        description: "Radiant solar energy",
        accent: "#dc2626",
        bg: "linear-gradient(135deg, #ffffff, #fef3c7, #fed7aa)",
        card: "rgba(254, 215, 170, 0.8)",
        text: "#000000",
        muted: "#666666",
        border: "rgba(220, 38, 38, 0.3)",
        button: "rgba(220, 38, 38, 0.1)",
        buttonHover: "rgba(220, 38, 38, 0.2)"
      },
      "dragon-ball": {
        name: "Dragon Ball",
        description: "Dragon Ball Z aesthetic",
        accent: "#fb923c",
        bg: "radial-gradient(ellipse at center, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "naruto": {
        name: "Naruto",
        description: "Hidden village aesthetic",
        accent: "#fb923c",
        bg: "conic-gradient(at bottom left, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "one-piece": {
        name: "One Piece",
        description: "Pirate adventure theme",
        accent: "#fb923c",
        bg: "radial-gradient(circle at top, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "attack-titan": {
        name: "Attack on Titan",
        description: "Military and titan theme",
        accent: "#fb923c",
        bg: "conic-gradient(at top right, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "demon-slayer": {
        name: "Demon Slayer",
        description: "Japanese folklore theme",
        accent: "#fb923c",
        bg: "radial-gradient(ellipse at bottom, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "jujutsu-kaisen": {
        name: "Jujutsu Kaisen",
        description: "Modern supernatural theme",
        accent: "#fb923c",
        bg: "conic-gradient(at bottom right, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(251, 146, 60, 0.3)",
        button: "rgba(251, 146, 60, 0.1)",
        buttonHover: "rgba(251, 146, 60, 0.2)"
      },
      "my-hero-academia": {
        name: "My Hero Academia",
        description: "Superhero academy theme",
        accent: "#3b82f6",
        bg: "conic-gradient(at top left, #1a0f2e, #2d1b4a, #4a1f6b)",
        card: "rgba(74, 31, 107, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(59, 130, 246, 0.3)",
        button: "rgba(59, 130, 246, 0.1)",
        buttonHover: "rgba(59, 130, 246, 0.2)"
      },
      "spider-verse": {
        name: "Spider-Verse",
        description: "Multiverse spider theme",
        accent: "#ef4444",
        bg: "radial-gradient(circle at center, #1a0f0f, #2d1b1b, #4a1f1f)",
        card: "rgba(74, 31, 31, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(239, 68, 68, 0.3)",
        button: "rgba(239, 68, 68, 0.1)",
        buttonHover: "rgba(239, 68, 68, 0.2)"
      },
      "avatar": {
        name: "Avatar",
        description: "Elemental bending theme",
        accent: "#22c55e",
        bg: "conic-gradient(at bottom right, #0f2e1a, #1b4a2d, #1f6b4a)",
        card: "rgba(31, 107, 74, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(34, 197, 94, 0.3)",
        button: "rgba(34, 197, 94, 0.1)",
        buttonHover: "rgba(34, 197, 94, 0.2)"
      },
      "rick-morty": {
        name: "Rick & Morty",
        description: "Interdimensional adventure theme",
        accent: "#22c55e",
        bg: "radial-gradient(ellipse at bottom, #1a0f2e, #2d1b4a, #4a1f6b)",
        card: "rgba(74, 31, 107, 0.8)",
        text: "#ffffff",
        muted: "#a0a0a0",
        border: "rgba(34, 197, 94, 0.3)",
        button: "rgba(34, 197, 94, 0.1)",
        buttonHover: "rgba(34, 197, 94, 0.2)"
      }
    };

    this.init();
  }

  getStoredTheme() {
    return localStorage.getItem('omega-theme') || 'default';
  }

  setStoredTheme(theme) {
    localStorage.setItem('omega-theme', theme);
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.createThemeSelector();
  }

  applyTheme(themeName) {
    const theme = this.themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--bg-primary', theme.bg);
    root.style.setProperty('--bg-secondary', theme.card);
    root.style.setProperty('--text-primary', theme.text);
    root.style.setProperty('--text-secondary', theme.muted);
    root.style.setProperty('--accent-primary', theme.accent);
    root.style.setProperty('--border-primary', theme.border);
    root.style.setProperty('--button-bg', theme.button);
    root.style.setProperty('--button-hover', theme.buttonHover);

    // Apply background to body
    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;

    // Update theme class on body
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${themeName}`);

    this.currentTheme = themeName;
    this.setStoredTheme(themeName);
  }

  createThemeSelector() {
    // Remove existing theme selector if it exists
    const existingSelector = document.getElementById('omega-theme-selector');
    if (existingSelector) {
      existingSelector.remove();
    }

    const selector = document.createElement('div');
    selector.id = 'omega-theme-selector';
    selector.innerHTML = `
      <div class="theme-selector-container">
        <button class="theme-selector-btn" onclick="omegaThemeSystem.toggleThemeDropdown()">
          <span class="theme-icon">${this.getThemeIcon(this.currentTheme)}</span>
          <span class="theme-name">${this.themes[this.currentTheme].name}</span>
          <span class="theme-arrow">▼</span>
        </button>
        <div class="theme-dropdown" id="theme-dropdown" style="display: none;">
          <div class="theme-dropdown-content">
            ${Object.entries(this.themes).map(([key, theme]) => `
              <button class="theme-option ${key === this.currentTheme ? 'active' : ''}" 
                      onclick="omegaThemeSystem.setTheme('${key}')">
                <span class="theme-option-icon">${this.getThemeIcon(key)}</span>
                <span class="theme-option-name">${theme.name}</span>
                ${key === this.currentTheme ? '<span class="theme-check">✓</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Add to page
    const header = document.querySelector('.wallet-panel') || document.querySelector('header') || document.body;
    header.appendChild(selector);

    // Add styles
    this.addThemeSelectorStyles();
  }

  getThemeIcon(themeName) {
    const icons = {
      'default': 'Ω',
      'neon-samurai': '⚡',
      'quantum-labs': '🔬',
      'solar-temple': '🌸',
      'matrix': '🟢',
      'cyber-core': '🤖',
      'holographic': '🌈',
      'neon-void': '🌌',
      'quantum-synth': '⚛️',
      'omega-pulse': '💜',
      'solar-flux': '☀️',
      'dragon-ball': '🐉',
      'naruto': '🍃',
      'one-piece': '🏴‍☠️',
      'attack-titan': '🗡️',
      'demon-slayer': '⚔️',
      'jujutsu-kaisen': '👻',
      'my-hero-academia': '🦸',
      'spider-verse': '🕷️',
      'avatar': '🌊',
      'rick-morty': '🔬'
    };
    return icons[themeName] || '🎨';
  }

  toggleThemeDropdown() {
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) {
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
  }

  setTheme(themeName) {
    this.applyTheme(themeName);
    this.createThemeSelector(); // Recreate selector with new theme
    this.toggleThemeDropdown(); // Close dropdown
  }

  addThemeSelectorStyles() {
    if (document.getElementById('omega-theme-styles')) return;

    const style = document.createElement('style');
    style.id = 'omega-theme-styles';
    style.textContent = `
      .theme-selector-container {
        position: relative;
        display: inline-block;
      }

      .theme-selector-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: var(--text-primary);
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(10px);
      }

      .theme-selector-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .theme-icon {
        font-size: 16px;
      }

      .theme-arrow {
        font-size: 12px;
        transition: transform 0.2s ease;
      }

      .theme-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 4px;
        background: rgba(0, 0, 0, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        backdrop-filter: blur(10px);
        z-index: 1000;
        min-width: 200px;
      }

      .theme-dropdown-content {
        padding: 8px;
        max-height: 300px;
        overflow-y: auto;
      }

      .theme-option {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 8px 12px;
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.2s ease;
        text-align: left;
      }

      .theme-option:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .theme-option.active {
        background: rgba(255, 255, 255, 0.2);
        color: var(--accent-primary);
      }

      .theme-option-icon {
        font-size: 16px;
        width: 20px;
        text-align: center;
      }

      .theme-option-name {
        flex: 1;
      }

      .theme-check {
        color: var(--accent-primary);
        font-weight: bold;
      }

      /* Theme-specific styles */
      .theme-matrix .theme-selector-btn {
        border-color: rgba(0, 255, 0, 0.3);
        background: rgba(0, 255, 0, 0.1);
      }

      .theme-matrix .theme-selector-btn:hover {
        background: rgba(0, 255, 0, 0.2);
        border-color: rgba(0, 255, 0, 0.5);
      }
    `;

    document.head.appendChild(style);
  }
}

// Initialize theme system
let omegaThemeSystem;
document.addEventListener('DOMContentLoaded', () => {
  omegaThemeSystem = new OmegaThemeSystem();
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.theme-selector-container')) {
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) {
      dropdown.style.display = 'none';
    }
  }
}); 