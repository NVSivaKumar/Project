import express from 'express'
import { db } from '../db.js'
const router = express.Router()

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  const user = db.data.users.find((u) => u.id === id)
  if (!user) return res.status(404).json({ error: 'not found' })
  const { password, ...rest } = user
  return res.json({ ok: true, user: rest })
})

export default router
