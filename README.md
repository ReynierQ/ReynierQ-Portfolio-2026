# Reynier Querijero — Portfolio

A personal developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a dark/light theme toggle, smooth scroll-reveal animations, and sections covering an introduction, work experience, education, and skills.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Enter the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, CSS variables, light/dark theme tokens
│   ├── layout.tsx         # Root layout with ThemeProvider
│   └── page.tsx           # Main page — composes all sections
│
├── components/
│   ├── Navbar.tsx         # Fixed navbar with theme toggle and mobile menu
│   ├── Hero.tsx           # Full-screen hero with typewriter role animation
│   ├── Introduction.tsx   # Personal intro, quick-facts card, highlight cards
│   ├── About.tsx          # Bio and stats overview
│   ├── Experience.tsx     # Tabbed work experience timeline
│   ├── Education.tsx      # Academic background with vertical timeline
│   ├── Skills.tsx         # Skill categories in a card grid
│   ├── Contact.tsx        # Contact CTA and social links
│   └── Footer.tsx         # Footer with credits
│
├── context/
│   └── ThemeContext.tsx   # Light/dark theme context + localStorage persistence
│
├── hooks/
│   └── useReveal.ts       # IntersectionObserver hook for scroll-reveal animations
│
├── public/                # Static assets (add your profile photo here)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌗 Light / Dark Mode | Toggle in the navbar; preference saved to `localStorage` |
| 🎞️ Scroll Reveal | Sections animate into view using `IntersectionObserver` |
| ⌨️ Typewriter Effect | Hero cycles through roles with a typing/deleting animation |
| 📱 Responsive | Mobile-first layout with a collapsible hamburger menu |
| 🎨 Design Tokens | All colors defined as CSS variables — easy to retheme |
| ⚡ Performance | No external UI libraries; pure Tailwind + CSS animations |

---

## 🎨 Theming

Colors are controlled by CSS variables in `app/globals.css`. To change the palette, update the values under `[data-theme="dark"]` and `[data-theme="light"]`:

```css
[data-theme="dark"] {
  --bg: #0a0a0f;
  --surface: #111118;
  --accent: #7c6aff;
  --accent-2: #00d4aa;
  --text: #e8e8f0;
  --muted: #5a5a7a;
  /* ...more tokens */
}

[data-theme="light"] {
  --bg: #f5f4ff;
  --surface: #ffffff;
  --accent: #5b47e0;
  /* ...more tokens */
}
```

---

## 🖊️ Customization Guide

### Update personal info
Most content is hardcoded in the component files. Here's where to find each section:

| What to update | File |
|---|---|
| Name, tagline, CTA links | `components/Hero.tsx` |
| Bio, stats, social links | `components/About.tsx` |
| Contact details, quick facts | `components/Introduction.tsx` |
| Work history | `components/Experience.tsx` |
| Education history | `components/Education.tsx` |
| Skills list | `components/Skills.tsx` |
| Email & social links | `components/Contact.tsx` |
| Nav links | `components/Navbar.tsx` |

### Add a profile photo
Place your image in the `public/` folder (e.g., `public/avatar.jpg`) and reference it in any component:

```tsx
import Image from "next/image";

<Image src="/avatar.jpg" alt="Reynier Querijero" width={200} height={200} />
```

### Add a new section
1. Create `components/YourSection.tsx`
2. Use the `useReveal` hook for the scroll animation
3. Import and add it to `app/page.tsx`

---

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Syne](https://fonts.google.com/specimen/Syne)** — Display font
- **[DM Sans](https://fonts.google.com/specimen/DM+Sans)** — Body font
- **[DM Mono](https://fonts.google.com/specimen/DM+Mono)** — Monospace font

---

## 🌐 Deployment

The easiest way to deploy is via **[Vercel](https://vercel.com)** (the team behind Next.js):

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**

Alternatively, deploy to any Node.js-compatible host using:

```bash
npm run build
npm start
```

---

## 📄 License

This project is open-source and free to use as a personal portfolio template. If you build on it, a credit or shoutout is always appreciated but not required.

---

<p align="center">Designed & built by <strong>Reynier Querijero</strong> · Rodriguez, Rizal, Philippines 🇵🇭</p>
