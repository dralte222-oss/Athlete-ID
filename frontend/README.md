# Athlete ID India — Frontend

Production-ready React 19 + TypeScript + Vite + Tailwind CSS v4 web application for **Athlete ID India**.

## Features

- **Modern Sports Tech Design**: Clean typography (Outfit, Inter, JetBrains Mono), glassmorphism cards, interactive 3D athlete card, and high-performance gradients.
- **Micro-interactions & Animations**: Animated statistics counters, responsive SVG ecosystem diagram, pulse-glow badges, and custom scroll reveal.
- **REST API Client**: Typed service layer in `src/services/api.ts` with mock fallback for seamless testing.
- **Mobile-First Responsive Layout**: Optimized for mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+).

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI sections & widgets
│   ├── hooks/           # Custom React hooks (e.g., useScrollReveal)
│   ├── services/        # API client for backend communication
│   ├── types/           # TypeScript interfaces and data models
│   ├── App.tsx          # Main application page
│   ├── index.css        # Tailwind v4 theme & custom animation tokens
│   ├── main.tsx         # React DOM entrypoint
│   └── vite-env.d.ts    # Vite environment declarations
├── index.html           # HTML shell with meta tags & Google fonts
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite bundler configuration
```

## Running the Frontend

Install dependencies and start development server:

```bash
cd frontend
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
