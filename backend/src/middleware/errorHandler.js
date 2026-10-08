export function errorHandler(err, req, res, next) {
  const statusCode = err.status || err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  console.error(`[ERROR] ${req.method} ${req.originalUrl} - ${statusCode}: ${message}`)
  if (err.stack && process.env.NODE_ENV !== 'production') {
    console.error(err.stack)
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
    },
  })
}
