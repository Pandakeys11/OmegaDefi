'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProvider } from './contexts/ThemeContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextThemeProvider>
  )
} 