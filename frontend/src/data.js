// ─── EDIT THIS FILE TO PERSONALISE YOUR PORTFOLIO ───────────────────────────

export const profile = {
  name: "Your Name",
  title: "Software Developer",
  tagline: "I build clean, purposeful software.",
  bio: `I'm a software developer with a passion for crafting elegant solutions to
  complex problems. I enjoy working across the full stack, with a particular
  interest in backend architecture and developer tooling.
  
  Currently open to new opportunities — feel free to reach out.`,
  email: "you@example.com",
  phone: "+91 00000 00000",
  location: "Bhubaneswar, Odisha, India",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/resume.pdf",      // place resume.pdf inside /frontend/public/
}

export const skills = [
  { category: "Languages",   items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
  { category: "Frontend",    items: ["React", "HTML/CSS", "Next.js", "Tailwind CSS"] },
  { category: "Backend",     items: ["Node.js", "Express", "Django", "REST APIs"] },
  { category: "Databases",   items: ["PostgreSQL", "MongoDB", "SQLite", "Redis"] },
  { category: "Tools",       items: ["Git", "Docker", "Linux", "VS Code", "Postman"] },
]

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Company Name",
    period: "Jan 2024 – Present",
    description: "Built and maintained features for a SaaS product used by 10k+ users. Improved API response time by 40% through query optimisation.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2022 – 2023",
    description: "Delivered 6 client projects including e-commerce sites, dashboards, and REST APIs. Managed end-to-end development and deployment.",
    tech: ["React", "Django", "MongoDB"],
  },
]

export const projects = [
  {
    title: "Project One",
    description: "A full-stack web application that does something interesting. Built with React and Node.js, deployed on Render.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description: "A CLI tool that automates repetitive developer tasks. Written in Python with a clean, composable API.",
    tech: ["Python", "Click", "SQLite"],
    github: "https://github.com/yourusername/project-two",
    live: null,
  },
  {
    title: "Project Three",
    description: "An open-source library for something useful. Used by 200+ developers on GitHub.",
    tech: ["TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project-three",
    live: null,
  },
  {
    title: "Project Four",
    description: "A real-time dashboard visualising IoT sensor data with WebSocket connections and live charts.",
    tech: ["React", "WebSockets", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project-four",
    live: "https://project-four.vercel.app",
  },
]

export const interests = [
  "Open source contribution",
  "Systems programming",
  "Competitive programming",
  "Technical writing",
  "Reading (sci-fi & philosophy)",
  "Chess",
]

export const activities = [
  {
    title: "Google Developer Student Club",
    role: "Technical Lead",
    period: "2023 – Present",
    description: "Organise workshops, hackathons, and coding sessions for 150+ members.",
  },
  {
    title: "Hackathon — Smart India Hackathon",
    role: "Finalist",
    period: "2023",
    description: "Reached national finals with a solution for real-time traffic management using ML.",
  },
  {
    title: "College Tech Fest — DevSprint",
    role: "Organiser & Mentor",
    period: "2022 – 2023",
    description: "Mentored 30+ teams through a 24-hour hackathon focused on social impact projects.",
  },
]
