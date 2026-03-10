# NEXUS UI — Next-Generation Interface Platform

Landing page completa em Next.js 14 + Tailwind CSS + TypeScript.

## Stack
- **Next.js 14** App Router
- **TypeScript** strict mode
- **Tailwind CSS** com design system customizado
- **Google Fonts** — Orbitron (display) + Space Grotesk (body)
- Zero dependências externas além das acima

## Design System
- **Background**: dot grid CSS (`radial-gradient` 28px)
- **Cor de destaque**: `#00f5ff` (ciano elétrico) com glow via `box-shadow`
- **Botões**: `clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)` — diagonal nos cantos
- **Panels/Cards**: corner notch via `::before/::after` pseudo-elements
- **Scroll reveal**: Intersection Observer nativo — classe `.reveal` → `.visible`
- **Progress bars**: animação via `.progress-fill.active` em `scaleX`
- **Cursor customizado**: `mix-blend-mode: screen` com lag suave via `requestAnimationFrame`
- **Scanline overlay**: animação CSS pura, 8s linear infinite

## Como rodar
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy no Vercel
```bash
npm i -g vercel && vercel
```
Ou conecte o repo em vercel.com — deploy automático a cada push.

## Customização rápida
- **Cores**: `tailwind.config.ts` → `theme.extend.colors`
- **Fontes**: `globals.css` → `@import` + variáveis CSS
- **Conteúdo**: cada seção tem seus dados em array no próprio componente
- **Preços**: `PricingSection.tsx` → array `plans`
