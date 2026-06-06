# ✨ Personal Portfolio

A polished developer portfolio built with React + Vite for the frontend and Node.js + SQLite for the backend.

> Beautiful, minimal, and easy to customize for your own skills, projects, and contact form.

---

## 🚀 Live Preview

Start the frontend and open this URL:

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```
portfolio/
├── frontend/          # React + Vite portfolio site
│   ├── public/            # static assets and resume.pdf
│   ├── src/
│   │   ├── components/    # page sections and reusable UI pieces
│   │   ├── data.js        # main content source for your portfolio
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/           # Express API and SQLite persistence
│   ├── server.js
│   ├── contacts.db    # created automatically on first run
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## ⚡ Quick Start

Install both frontend and backend dependencies from the project root:

```bash
npm run install:all
```

Run the frontend:

```bash
npm run dev:frontend
```

Run the backend:

```bash
npm run dev:backend
```

Then open:

```bash
http://localhost:5173
```

---

## 🎨 Customize Your Portfolio

All portfolio content is configured in:

```bash
frontend/src/data.js
```

Update these exports to personalize your site:

- `profile` — name, title, bio, contact info, social links
- `skills` — categories and skill items
- `experience` — work history and achievements
- `projects` — projects, tech stack, links
- `interests` — hobbies and passions
- `activities` — events, clubs, volunteering

Add your resume here:

```bash
frontend/public/resume.pdf
```

---

## 🛠️ Available Scripts

From the root project folder:

```bash
npm run install:all    # install frontend + backend dependencies
npm run dev:frontend   # launch frontend app
npm run dev:backend    # launch backend server
npm run build          # build frontend for production
```

From inside `frontend/`:

```bash
npm run dev
npm run build
npm run preview
```

---

## 🔌 Backend Contact Form

The backend stores contact submissions in `backend/contacts.db`.

Create your `.env` file:

```bash
cd backend
copy .env.example .env
```

Set these values in `backend/.env`:

- `ADMIN_TOKEN`
- `EMAIL_USER` (optional)
- `EMAIL_PASS` (optional)

### View messages

API:

```bash
GET http://localhost:3001/api/contacts?token=YOUR_ADMIN_TOKEN
```

SQLite query:

```bash
cd backend
npx better-sqlite3 contacts.db "SELECT * FROM contacts ORDER BY created_at DESC;"
```

---

## ☁️ Deployment

### Frontend

- Vercel (recommended)
- GitHub Pages
- Netlify

### Backend

- Render
- Railway
- Heroku

### Vercel setup

1. Push the repo to GitHub
2. Import the project in Vercel
3. Set root directory to `frontend`
4. Add `VITE_BACKEND_URL` if your backend is deployed separately
5. Deploy

---

## 💻 Tech Stack

- Frontend: React 18, Vite, CSS
- Backend: Node.js, Express
- Database: SQLite
- Email: Nodemailer

---

## 📄 License

MIT — free to use and adapt.
