# Athlete ID India — Backend REST API

Node.js + Express REST API service for the **Athlete ID India** digital sports identity and opportunity matching platform.

## Architecture

```
backend/
├── src/
│   ├── controllers/         # Business logic handlers
│   │   ├── analyticsController.js
│   │   ├── athletesController.js
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   ├── opportunitiesController.js
│   │   └── verificationController.js
│   ├── data/                # Mock DB & dataset seeds
│   │   └── mockData.js
│   ├── middleware/          # Express middleware
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/              # Express route modules
│   │   ├── analytics.js
│   │   ├── athletes.js
│   │   ├── auth.js
│   │   ├── contact.js
│   │   ├── opportunities.js
│   │   └── verification.js
│   └── server.js            # Main application entrypoint
├── .env.example             # Environment template
├── .env                     # Local environment settings
└── package.json             # Backend dependencies & scripts
```

## Getting Started

### 1. Installation

```bash
cd backend
npm install
```

### 2. Run in Development Mode

```bash
npm run dev
```

Server will start on `http://localhost:5000`.

## API Endpoints

### 🩺 System & Health
- `GET /api/health` — Service health check & uptime status

### 🏃 Athletes
- `GET /api/athletes` — List athletes (supports `?sport=...&verified=true&search=...`)
- `GET /api/athletes/:id` — Get single athlete by database ID or Athlete ID (e.g. `AID-IN-2024-00847`)
- `POST /api/athletes` — Create new athlete profile
- `PUT /api/athletes/:id` — Update athlete profile

### 🛂 Verification (KYC & Digital Passports)
- `POST /api/verification/verify` — Submit verification request with Aadhaar / federation credential
- `GET /api/verification/status/:id` — Get credential verification status

### 🎯 Opportunities & AI Matching
- `GET /api/opportunities` — List opportunities (supports `?type=scholarship|trial|sponsor|university`)
- `GET /api/opportunities/matching` — AI opportunity matching algorithm output
- `GET /api/opportunities/:id` — Single opportunity details

### 📊 Analytics & Dashboard
- `GET /api/analytics/dashboard` — Main athlete dashboard metrics (Win rate, KPIs, Performance index)
- `GET /api/analytics/leaderboard` — National athlete ranking leaderboard

### 🔐 Authentication
- `POST /api/auth/register` — Register new athlete/coach/academy user
- `POST /api/auth/login` — Authenticate user and issue session token

### ✉️ Contact & Newsletter
- `POST /api/contact` — Submit general contact / partnership inquiry
- `POST /api/newsletter/subscribe` — Subscribe email to newsletter

## Example Requests (cURL)

```bash
# Health check
curl http://localhost:5000/api/health

# Get all verified athletes
curl http://localhost:5000/api/athletes?verified=true

# Get AI matching opportunities
curl http://localhost:5000/api/opportunities/matching?sport=Athletics
```
