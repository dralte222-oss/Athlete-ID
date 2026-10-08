import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'

const PORT = parseInt(process.env.PORT || '5001', 10)
const NODE_ENV = process.env.NODE_ENV || 'development'

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`=========================================`)
  console.log(`🚀 Athlete ID India API Server running`)
  console.log(`📡 Environment: ${NODE_ENV}`)
  console.log(`📡 Port: ${PORT}`)
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health`)
  console.log(`=========================================`)
})

// Graceful shutdown handling
const gracefulShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down API server gracefully...`)
  server.close(() => {
    console.log('HTTP server closed cleanly. Exiting process.')
    process.exit(0)
  })

  // Force close after 10 seconds if hanging
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down.')
    process.exit(1)
  }, 10000)
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))
