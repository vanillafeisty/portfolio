import { profile } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', paddingTop:1 }}>
      {/* Gradient top bar */}
      <div style={{ height:2, background:'var(--grad)' }}/>
      <div className="wrap" style={{ padding:'36px 40px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
        <div>
          <p style={{ fontSize:13, color:'var(--gray3)' }}>
            © {new Date().getFullYear()} <span style={{ color:'var(--white)', fontWeight:600 }}>{profile.name}</span>
          </p>
          <p style={{ fontSize:11, color:'var(--gray3)', marginTop:4, letterSpacing:'0.04em' }}>
            Built with React · Vite · Express · SQLite
          </p>
        </div>
        <div style={{ display:'flex', gap:24 }}>
          {[
            { label:'GitHub',   href: profile.github },
            { label:'LinkedIn', href: profile.linkedin },
            { label:'Email',    href:`mailto:${profile.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ fontSize:12, color:'var(--gray3)', letterSpacing:'0.07em', fontWeight:500, transition:'color 0.2s' }}
              onMouseEnter={e=>e.target.style.color='var(--cyan)'}
              onMouseLeave={e=>e.target.style.color='var(--gray3)'}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
