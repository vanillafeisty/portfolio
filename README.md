# Personal Portfolio

A clean, minimal software developer portfolio built with React (Vite) + Node.js + SQLite.

---

## Project Structure

```
portfolio/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/    # Navbar, Hero, About, Skills, Experience,
│   │   │                  # Projects, InterestsActivities, Contact, Footer
│   │   ├── data.js        # ← Edit this to personalise everything
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/            # Place resume.pdf here
│   ├── index.html
│   ├── vite.config.js
│   └── .env.example
│
├── backend/           # Express + SQLite API
│   ├── server.js
│   ├── contacts.db    # Auto-created on first run (gitignored)
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## Quick Start (Local Development)

### 1. Clone & install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm run install:all
```

### 2. Configure environment

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env — set ADMIN_TOKEN and optionally EMAIL_USER/EMAIL_PASS

# Frontend
cp frontend/.env.example frontend/.env
# In dev, leave VITE_BACKEND_URL empty — Vite proxies /api automatically
```

### 3. Run both servers

Open two terminals:

```bash
# Terminal 1 — Backend (port 3001)
cd backend && npm run dev

# Terminal 2 — Frontend (port 5173)
cd frontend && npm run dev
```

Visit `http://localhost:5173`

---

## Personalise Your Portfolio

**All content lives in one file: `frontend/src/data.js`**

Edit the following exports:

| Export       | What to change                                      |
|--------------|-----------------------------------------------------|
| `profile`    | Name, title, tagline, bio, email, phone, links      |
| `skills`     | Categories and skill items                          |
| `experience` | Work history — role, company, period, description   |
| `projects`   | Projects — title, description, tech, GitHub, live   |
| `interests`  | Hobby/interest tags                                 |
| `activities` | Clubs, hackathons, volunteering                     |

Also drop your **resume PDF** at `frontend/public/resume.pdf`.

---

## View Contact Form Submissions

All messages submitted via the contact form are saved to `backend/contacts.db`.

**View via API:**
```
GET http://localhost:3001/api/contacts?token=YOUR_ADMIN_TOKEN
```

Or view directly with SQLite:
```bash
cd backend
npx better-sqlite3 contacts.db "SELECT * FROM contacts ORDER BY created_at DESC;"
```

**Email notifications:** Fill in `EMAIL_USER` and `EMAIL_PASS` in `backend/.env`
and every new contact form submission will be emailed to you instantly.
Use a Gmail App Password (not your real password).
Generate at: myaccount.google.com → Security → 2-Step Verification → App Passwords

---

## Deployment

### Frontend → GitHub Pages (free)

1. Install the deploy helper:
   ```bash
   cd frontend && npm install --save-dev gh-pages
   ```

2. Add to `frontend/package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Set your backend URL in `frontend/.env`:
   ```
   VITE_BACKEND_URL=https://your-backend.onrender.com
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Frontend → Vercel (recommended, free)

1. Push to GitHub
2. Go to vercel.com → Import project
3. Set **Root Directory** to `frontend`
4. Add environment variable: `VITE_BACKEND_URL=https://your-backend.onrender.com`
5. Deploy

### Backend → Render (free tier)

1. Push to GitHub
2. Go to render.com → New Web Service
3. Set **Root Directory** to `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables from `backend/.env.example`
7. Deploy

### Custom Domain

Point your domain's DNS to Vercel/GitHub Pages. Vercel handles HTTPS automatically.

---

## Tech Stack

| Layer     | Tech                              |
|-----------|-----------------------------------|
| Frontend  | React 18, Vite, CSS       |
| Backend   | Node.js, Express                  |
| Database  | SQLite (via better-sqlite3)       |
| Email     | Nodemailer + Gmail App Password   |
| Fonts     | Times New Roman, Courier New      |
| Deploy    | Vercel (frontend), Render (backend) |

---

## License

MIT — use freely, no attribution required.
