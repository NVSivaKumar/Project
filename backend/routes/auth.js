import express from 'express'
import { nanoid } from 'nanoid'
import bcrypt from 'bcryptjs'
import { db } from '../db.js'
import { validateEmail, validatePhone, validateName, validatePassword } from '../utils/validators.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create transporter if SMTP is configured
let mailTransporter = null
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  try {
    mailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  } catch (err) {
    console.warn('Failed to create mail transporter:', err.message)
    mailTransporter = null
  }
}

const router = express.Router()

// POST /api/auth/send-code
router.post('/send-code', async (req, res) => {
  const { target } = req.body // email or phone
  if (!target) return res.status(400).json({ error: 'target required' })

  // Accept either email or phone
  let type = 'email'
  if (validatePhone(target)) type = 'phone'
  else if (!validateEmail(target)) return res.status(400).json({ error: 'invalid target' })

  const code = nanoid(6)
  db.data.codes.push({ id: nanoid(), target, code, createdAt: Date.now() })
  await db.write()
  // If SMTP is configured and target is an email, send the code via email
  if (mailTransporter && type === 'email') {
    try {
      const from = process.env.EMAIL_FROM || `no-reply@${req.hostname}`
      const mailOptions = {
        from,
        to: target,
        subject: 'Your HireSphere verification code',
        text: `Your verification code is: ${code}`,
        html: `<p>Your verification code is: <strong>${code}</strong></p>`,
      }
      await mailTransporter.sendMail(mailOptions)
      // Do not return the code in production responses
      return res.json({ ok: true, message: 'Verification code sent' })
    } catch (err) {
      console.error('Failed to send verification email:', err.message)
      // fallback: return the code in response for debugging
      return res.json({ ok: true, code, warning: 'Failed to send email; returning code for debugging' })
    }
  }

  // Default behavior for dev: return the code in the response
  return res.json({ ok: true, code })
})

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  console.log('[auth] POST /signup', { body: req.body });
  const { fullName, email, phoneNumber, password, code } = req.body
  if (!validateName(fullName)) return res.status(400).json({ error: 'invalid name' })
  if (!validateEmail(email)) return res.status(400).json({ error: 'invalid email' })
  if (!validatePhone(phoneNumber)) return res.status(400).json({ error: 'invalid phone' })
  if (!validatePassword(password)) return res.status(400).json({ error: 'invalid password (min 8 chars)' })

  // optional: check code. Skip verification in development by default
  const skipVerificationEnv = process.env.SKIP_VERIFICATION === 'true'
  const isProd = process.env.NODE_ENV === 'production'
  const skipVerification = skipVerificationEnv || !isProd
  if (!skipVerification) {
    const matched = db.data.codes.find((c) => c.target === (email || phoneNumber) && c.code === code)
    if (!matched) return res.status(400).json({ error: 'invalid or missing verification code' })
  }

  // Check existing
  const exists = db.data.users.find((u) => u.email === email || u.phoneNumber === phoneNumber)
  if (exists) return res.status(409).json({ error: 'user already exists' })

  const hashed = await bcrypt.hash(password, 8)
  const user = {
    id: nanoid(),
    fullName,
    email,
    phoneNumber,
    password: hashed,
    createdAt: Date.now(),
  }
  db.data.users.push(user)
  await db.write()

  return res.json({ ok: true, id: user.id })
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  console.log('[auth] POST /login', { body: req.body });
  const { email, password } = req.body
  if (!validateEmail(email) || !password) return res.status(400).json({ error: 'invalid credentials' })

  const user = db.data.users.find((u) => u.email === email)
  if (!user) return res.status(401).json({ error: 'invalid credentials' })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(401).json({ error: 'invalid credentials' })

  // Return a mock token (in production use JWT)
  return res.json({ ok: true, token: `mock-token-${user.id}`, user: { id: user.id, fullName: user.fullName, email: user.email } })
})

export default router
