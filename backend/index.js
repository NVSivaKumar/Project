import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { init } from './db.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const API_PREFIX = process.env.API_PREFIX || '/api'

app.use(cors())
app.use(express.json())

// Simple request logger to show incoming requests in backend terminal
app.use((req, res, next) => {
  try {
    const bodyPreview = req.method === 'GET' ? '' : ` body=${JSON.stringify(req.body)}`;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}${bodyPreview}`);
  } catch (err) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} (body preview error)`);
  }
  next();
})

app.get(`${API_PREFIX}/health`, (req, res) => res.json({ ok: true }))

// Provide a friendly API root response so visiting /api in the browser is useful
app.get(API_PREFIX, (req, res) => {
  return res.json({
    ok: true,
    message: 'HireSphere API',
    available: [
      `${API_PREFIX}/health`,
      `${API_PREFIX}/auth/send-code`,
      `${API_PREFIX}/auth/signup`,
      `${API_PREFIX}/auth/login`,
      `${API_PREFIX}/users/:id`,
    ],
  })
})

app.use(`${API_PREFIX}/auth`, authRoutes)
app.use(`${API_PREFIX}/users`, userRoutes)

async function start() {
  await init()
  app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}${API_PREFIX}`))
}

start()
