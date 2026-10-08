import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import athletesRouter from './routes/athletes.js'
import verificationRouter from './routes/verification.js'
import opportunitiesRouter from './routes/opportunities.js'
import analyticsRouter from './routes/analytics.js'
import authRouter from './routes/auth.js'
import contactRouter from './routes/contact.js'

import { errorHandler } from './middleware/errorHandler.js'
import { requestLogger } from './middleware/logger.js'

// Load environment variables
dotenv.config()

const app = express()

// Dynamic CORS configuration
const allowedOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:5173', 'http://localhost:8443', 'http://127.0.0.1:5173']

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true)
    if (process.env.CLIENT_ORIGIN === '*' || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    // Allow localhost/127.0.0.1 during development
    if (process.env.NODE_ENV !== 'production' && (origin.includes('localhost') || origin.includes('127.0.0.1'))) {
      return callback(null, true)
    }
    return callback(new Error(`CORS policy does not allow access from origin: ${origin}`), false)
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
}))

// Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }
  next()
})

// Body Parsers with safe payload limits
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true, limit: '1mb' }))

// Request logging
app.use(requestLogger)

// Health Check / Root endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    platform: 'Athlete ID India Backend API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  })
})

// Route Registration
app.use('/api/athletes', athletesRouter)
app.use('/api/verification', verificationRouter)
app.use('/api/opportunities', opportunitiesRouter)
app.use('/api/analytics', analyticsRouter)
app.use('/api/auth', authRouter)
app.use('/api/contact', contactRouter)
app.use('/api/newsletter', contactRouter)

// 404 handler for unmatched routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`,
  })
})

// Global Error Handler
app.use(errorHandler)

export default app
