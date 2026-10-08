# Athlete ID India — Full-Stack Platform

> **One Athlete. One Identity. Unlimited Opportunities.**  
> India's verified digital sports identity and opportunity matching platform.

---

## 📁 Project Structure

The project is organized into dedicated `frontend` and `backend` workspaces with complete production containerization:

```
.
├── frontend/                     # React 19 + TypeScript + Vite + Tailwind CSS v4 UI
│   ├── src/
│   │   ├── components/           # UI Components (Hero, Features, Dashboard, CreateAthleteModal, etc.)
│   │   ├── hooks/                # Custom React hooks (useScrollReveal, etc.)
│   │   ├── services/             # API client service layer with fallback resilience
│   │   ├── types/                # TypeScript data contracts & models
│   │   ├── App.tsx               # Primary landing application & modal controls
│   │   ├── index.css             # Tailwind v4 theme styling & animations
│   │   └── main.tsx              # React entrypoint
│   ├── Dockerfile                # Production multi-stage Docker build
│   ├── vercel.json               # SPA routing & deployment configuration
│   ├── package.json              # Frontend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│   └── vite.config.ts            # Frontend Vite configuration (with /api proxy to 5001)
│
├── backend/                      # Node.js + Express REST API Server
│   ├── src/
│   │   ├── controllers/          # Business logic handlers
│   │   ├── data/                 # Seed database (Athletes, Opportunities, Stats)
│   │   ├── middleware/           # Express middleware (Logger, ErrorHandler)
│   │   ├── routes/               # API route definitions
│   │   ├── app.js                # Express app configuration & security headers
│   │   └── server.js             # Express server setup, graceful shutdown & listener
│   ├── Dockerfile                # Production Alpine Dockerfile
│   ├── test-api.js               # Automated 11-point API integration test suite
│   ├── .env.example              # Environment variable template
│   ├── .env                      # Local environment configuration
│   └── package.json              # Backend dependencies
│
├── src/                          # Root application source for Figma Make preview
├── docker-compose.yml            # Multi-container orchestration
├── vercel.json                   # Root Vercel deployment configuration
└── README.md                     # Monorepo documentation
```

---

## 🚀 Quick Start Guide

### Running the Backend API
```bash
cd backend
npm install
npm run dev
# or: node src/server.js
```
> The backend server runs on `http://localhost:5001` (health check: `http://localhost:5001/api/health`).

### Running the Automated API Tests
```bash
node backend/test-api.js
```
> Runs 11 end-to-end integration tests validating health, athlete CRUD, KYC verification, AI matching, auth, and inquiries.

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```
> The frontend runs on `http://localhost:5173` with automatic reverse proxy to `http://localhost:5001` for `/api/*` calls.

---

## 🐳 Docker Deployment

To launch both frontend and backend in isolated production containers:
```bash
docker-compose up --build
```
- **Frontend**: `http://localhost:8080`
- **Backend**: `http://localhost:5001`

---

## ☁️ Cloud Deployment Guidelines

### Frontend (Vercel / Netlify / Cloudflare Pages)
- **Framework Preset**: Vite
- **Root Directory**: `frontend` (or root `.`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variable**: `VITE_API_URL=https://your-backend-api-url/api`

### Backend (Render / Railway / AWS ECS / Google Cloud Run / Heroku)
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `node src/server.js`
- **Environment Variables**:
  - `PORT`: (provided automatically by host)
  - `NODE_ENV`: `production`
  - `CLIENT_ORIGIN`: `https://your-frontend-domain.com`

---

## 📡 API Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status check & uptime |
| `GET` | `/api/athletes` | List all verified and registered athletes |
| `GET` | `/api/athletes/:id` | Get athlete profile details and stats |
| `POST` | `/api/athletes` | Create a new athlete digital profile |
| `POST` | `/api/verification/verify` | Submit KYC & masked credential verification |
| `GET` | `/api/opportunities` | List scholarships, trials, and sponsorships |
| `GET` | `/api/opportunities/matching` | AI opportunity matching recommendations |
| `GET` | `/api/analytics/dashboard` | Main analytics dashboard KPIs and records |
| `POST` | `/api/auth/register` | Register new athlete or scout user account |
| `POST` | `/api/auth/login` | Authenticate user & issue session token |
| `POST` | `/api/contact` | Submit contact / partnership inquiries |
| `POST` | `/api/newsletter/subscribe`| Newsletter subscription with validation |
