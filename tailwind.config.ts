import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:   '#030508',
        deep:   '#070b12',
        panel:  '#0c1219',
        edge:   '#111b26',
        wire:   '#1a2a3a',
        cyan:   '#00f5ff',
        'cyan-dim': '#00b8c0',
        'cyan-ghost': 'rgba(0,245,255,0.08)',
        steel:  '#8baab8',
        ghost:  '#3d5466',
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body:    ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        dataScroll: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        borderTrace: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        counterUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        scanline:   'scanline 8s linear infinite',
        glowPulse:  'glowPulse 2s ease-in-out infinite',
        fadeUp:     'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        fadeIn:     'fadeIn 0.6s ease forwards',
        slideRight: 'slideRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        dataScroll: 'dataScroll 20s linear infinite',
        counterUp:  'counterUp 0.6s ease forwards',
      },
      boxShadow: {
        'glow-sm':  '0 0 10px rgba(0,245,255,0.3)',
        'glow-md':  '0 0 20px rgba(0,245,255,0.4), 0 0 40px rgba(0,245,255,0.15)',
        'glow-lg':  '0 0 30px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2), 0 0 100px rgba(0,245,255,0.1)',
        'inset-glow': 'inset 0 0 20px rgba(0,245,255,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
