// ─── ARDHI SONAL — Portfolio Data ───────────────────────────────────────────

export const profile = {
  name: "Ardhi Sonal",
  title: "AI Engineer",
  subtitle: "Machine Learning · Full Stack Development · Cybersecurity",
  tagline: "Building intelligent systems that solve real problems.",
  bio: `I'm a final-year Computer Science student at NIST University, specialising in Artificial Intelligence and Software Engineering. I build AI-powered systems at the intersection of neural networks, LLMs, and full-stack development.

From designing multi-model emergency response systems to building autonomous LinkedIn agents with Groq LLaMA 3.3, I approach every project with a research-oriented mindset and an obsession for practical, measurable impact.`,
  email: "sonalardhi@gmail.com",
  phone: "+91 82608 35353",
  location: "Bhubaneswar, Odisha, India",
  github: "https://github.com/vanillafeisty",
  linkedin: "https://www.linkedin.com/in/a-sonal-268ssb",
  resume: "/Ardhi%20Sonal.pdf",
  gpa: "3.5 / 4.0",
  university: "NIST University",
  degree: "B.Tech in Computer Science",
  gradYear: "April 2026",
}

export const stats = [
  { value: 4,  label: "Projects Built",    suffix: "+" },
  { value: 2,  label: "Internships",       suffix: "" },
  { value: 3,  label: "AI Models Built",   suffix: "+" },
  { value: 6,  label: "Technologies",      suffix: "+" },
]

export const skills = [
  {
    category: "AI & Machine Learning",
    color: "#00D4FF",
    items: ["Python", "CNN", "MLP", "Neural Networks", "LlamaIndex", "RAG", "LLMs", "Groq LLaMA 3.3", "DRNN", "TensorFlow"],
  },
  {
    category: "Web Development",
    color: "#7C3AED",
    items: ["React.js", "Node.js", "FastAPI", "JavaScript", "REST APIs", "SMTP Integration", "Authentication"],
  },
  {
    category: "Data & Analytics",
    color: "#14B8A6",
    items: ["Data Analysis", "Traffic Prediction", "Time Series", "Predictive Modeling", "Visualization"],
  },
  {
    category: "Infrastructure & Tools",
    color: "#22C55E",
    items: ["Docker", "Git", "GitHub", "Linux"],
  },
  {
    category: "Languages",
    color: "#F59E0B",
    items: ["Python", "JavaScript", "Java", "C"],
  },
  {
    category: "Cybersecurity",
    color: "#EF4444",
    items: ["VAPT", "Vulnerability Assessment", "Penetration Testing", "Network Security"],
  },
]

export const experience = [
  {
    role: "Associate Trainee — Web Development",
    company: "Cylicon Software Solutions",
    period: "Dec 2025 – Feb 2026",
    type: "Industry Internship",
    description: "Contributed to My Divine Wedding 2, a full-scale matrimony platform. Implemented user and admin authentication, SMTP-based email verification, profile management, event systems, and an intelligent matchmaking engine — enabling secure onboarding and rapid user connections at scale.",
    tech: ["React.js", "Node.js", "SMTP", "Authentication", "REST APIs", "MongoDB"],
    highlight: "Matchmaking platform with real active users",
  },
  {
    role: "Software Engineer Intern — Web Development",
    company: "RINL, Vizag (Rashtriya Ispat Nigam Ltd.)",
    period: "June 2025 – July 2025",
    type: "Government Internship",
    description: "Built the UPS Contract Management System — a centralised enterprise platform for complaint management, preventive maintenance tracking, and tool/component lifecycle management. Deployed at one of India's largest integrated steel plants, significantly improving operational efficiency and reducing manual reporting overhead.",
    tech: ["Web Development", "Database Design", "System Architecture", "Enterprise Software"],
    highlight: "Deployed at a national steel plant (RINL Vizag)",
  },
]

export const projects = [
  {
    title: "ATTER",
    subtitle: "AI-Driven Two-Tier Emergency Response System",
    period: "Sep 2025 – Apr 2026",
    description: "Engineered an intelligent emergency response system for remote and high-traffic areas using a three-model neural architecture: CNN for real-time terrain analysis, MLP for dynamic traffic prediction, and a custom Dynamic Rendezvous Neural Network (DRNN) to compute optimal meeting points. Directly minimises patient travel time in life-critical scenarios.",
    tech: ["CNN", "MLP", "DRNN", "Python", "TensorFlow", "Neural Networks", "Computer Vision"],
    github: "https://github.com/vanillafeisty",
    live: null,
    featured: true,
    impact: "Reduces emergency response travel time via multi-model AI",
    tag: "AI · Healthcare",
  },
  {
    title: "ASCENDRA",
    subtitle: "Zero-Effort LinkedIn Job Search Automation",
    period: "Apr 2026 – Present",
    description: "Building an autonomous AI agent that eliminates all manual effort from LinkedIn job hunting. Fully automates HR connection requests, personalised message generation, and post creation using Groq LLaMA 3.3 and LlamaIndex RAG pipelines — with intent detection and human-review safety controls ensuring responsible automation.",
    tech: ["LLMs", "Groq LLaMA 3.3", "LlamaIndex", "RAG", "Python", "AI Agents", "FastAPI"],
    github: "https://github.com/vanillafeisty",
    live: null,
    featured: true,
    impact: "Fully automated outreach pipeline — zero manual input",
    tag: "AI Agents · LLMs",
  },
  {
    title: "My Divine Wedding 2",
    subtitle: "Full-Stack Matrimony Platform",
    period: "Dec 2025 – Feb 2026",
    description: "Production matrimony platform with complete user/admin authentication, SMTP-based email verification, profile management, event systems, and AI-assisted matchmaking. Built for real-world scale with secure onboarding, fast user connections, and a clean admin dashboard.",
    tech: ["React.js", "Node.js", "SMTP", "Authentication", "MongoDB", "REST APIs"],
    github: "https://github.com/vanillafeisty",
    live: null,
    featured: false,
    impact: "Live platform with real users",
    tag: "Full Stack",
  },
  {
    title: "UPS Contract Management System",
    subtitle: "Enterprise Operations Platform — RINL Vizag",
    period: "Jun 2025 – Jul 2025",
    description: "Centralised complaint management and maintenance tracking system deployed at one of India's largest steel plants (RINL, Vizag). Manages tool/component lifecycle, preventive maintenance schedules, and multi-department operational reporting.",
    tech: ["Web Development", "Database Design", "System Architecture", "Enterprise"],
    github: null,
    live: null,
    featured: false,
    impact: "Deployed at national steel plant (RINL Vizag)",
    tag: "Enterprise · Systems",
  },
]

export const currentFocus = [
  { title: "Explainable AI",          desc: "Making neural network decisions transparent and interpretable for real-world critical systems.", icon: "◎", },
  { title: "LLM Engineering",         desc: "Building production-grade agents with LlamaIndex, RAG pipelines, and Groq-powered inference.", icon: "∿", },
  { title: "Edge AI",                 desc: "Deploying optimised ML models on resource-constrained edge and embedded devices.", icon: "⬡", },
  { title: "Generative AI",           desc: "Exploring diffusion models, multimodal architectures, and creative AI applications.", icon: "✦", },
  { title: "Time Series Forecasting", desc: "Applying deep learning to sequential data for predictive analytics and anomaly detection.", icon: "↗", },
  { title: "Cybersecurity + AI",      desc: "Integrating VAPT methodology with AI-driven threat detection and anomaly classification.", icon: "⬕", },
]

export const interests = [
  "Artificial Intelligence Research",
  "Explainable AI",
  "LLM Engineering",
  "Edge AI Systems",
  "British English & Literary Expression",
  "Astronomy & Astrophysics",
  "Cybersecurity / VAPT",
  "Open Source",
]

export const activities = [
  {
    title: "NIST University Astronomy Club",
    role: "Core Member",
    period: "2023 – Present",
    description: "Active core member of the university's Astronomy Club. Organise stargazing sessions, astrophysics workshops, and science outreach events for the campus community.",
  },
  {
    title: "VAPT Practice",
    role: "Independent Practitioner",
    period: "2024 – Present",
    description: "Self-directed vulnerability assessment and penetration testing across web applications and network infrastructure. Applying offensive security knowledge to build more resilient, secure software systems.",
  },
]
