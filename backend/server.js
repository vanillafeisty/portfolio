require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Database = require('better-sqlite3')
const rateLimit = require('express-rate-limit')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

// ─── Database Setup ───────────────────────────────────────────────────────────
const db = new Database(path.join(__dirname, 'contacts.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL,
    email     TEXT NOT NULL,
    phone     TEXT,
    message   TEXT NOT NULL,
    read      INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))

app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: { error: 'Too many requests. Try again in 15 minutes.' },
})

// ─── Email Transporter (optional — fill in .env to enable) ───────────────────
const transporter = process.env.EMAIL_USER
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,  // use Gmail App Password
      },
    })
  : null

// ─── Routes ──────────────────────────────────────────────────────────────────

// POST /api/contact — Save message + optionally send email alert
app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  if (message.trim().length > 5000) {
    return res.status(400).json({ error: 'Message too long.' })
  }

  const insert = db.prepare(
    `INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)`
  )
  const info = insert.run(name.trim(), email.trim(), phone?.trim() || null, message.trim())

  // Send email notification if configured
  if (transporter) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New portfolio contact from ${name}`,
      text: `
Name:    ${name}
Email:   ${email}
Phone:   ${phone || '—'}
Message: ${message}
      `.trim(),
    }
    transporter.sendMail(mailOptions).catch(err =>
      console.error('Email send error:', err.message)
    )
  }

  res.status(201).json({ success: true, id: info.lastInsertRowid })
})

// GET /api/contacts — View all messages (protect with a token in production)
app.get('/api/contacts', (req, res) => {
  const token = req.query.token
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const rows = db.prepare(`SELECT * FROM contacts ORDER BY created_at DESC`).all()
  res.json(rows)
})

// PATCH /api/contacts/:id/read — Mark as read
app.patch('/api/contacts/:id/read', (req, res) => {
  const token = req.query.token
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  db.prepare(`UPDATE contacts SET read = 1 WHERE id = ?`).run(req.params.id)
  res.json({ success: true })
})

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`\n  Portfolio backend running on http://localhost:${PORT}`)
  console.log(`  Database: contacts.db`)
  if (!transporter) console.log(`  Email notifications: disabled (set EMAIL_USER in .env to enable)\n`)
  else console.log(`  Email notifications: enabled → ${process.env.EMAIL_USER}\n`)
})
