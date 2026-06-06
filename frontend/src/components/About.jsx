import { profile } from '../data'
import { useReveal } from '../hooks/useReveal'

const highlights = [
  { icon:'◎', label:'AI Research',        color:'var(--cyan)' },
  { icon:'⬡', label:'LLM Engineering',    color:'var(--purple)' },
  { icon:'∿', label:'Neural Networks',    color:'var(--teal)' },
  { icon:'↗', label:'Full Stack Dev',     color:'var(--green)' },
  { icon:'⬕', label:'Cybersecurity',      color:'#F59E0B' },
  { icon:'✦', label:'Data Analytics',     color:'var(--cyan)' },
]

export default function About() {
  useReveal()
  return (
    <section id="about" className="section">
      <hr className="divider" style={{ marginBottom:100 }}/>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'start' }}>

          <div>
            <p className="sec-label reveal">About Me</p>
            <h2 className="sec-title reveal" style={{ marginBottom:24 }}>
              Building the <span className="grad-text">Future</span> with AI
            </h2>
            {profile.bio.trim().split('\n\n').map((p,i) => (
              <p key={i} className="reveal" style={{ color:'var(--gray)', fontSize:16, lineHeight:1.85, marginBottom:16 }}>
                {p.trim()}
              </p>
            ))}

            {/* Info rows */}
            <div className="reveal" style={{ marginTop:32, display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { k:'University', v: profile.university + ' — ' + profile.degree },
                { k:'GPA',        v: profile.gpa },
                { k:'Graduation', v: profile.gradYear },
                { k:'Location',   v: profile.location },
              ].map(row => (
                <div key={row.k} style={{ display:'flex', gap:16, alignItems:'center' }}>
                  <span style={{ fontFamily:'var(--mono)', fontSize:10.5, color:'var(--gray3)', letterSpacing:'0.1em', textTransform:'uppercase', minWidth:90 }}>{row.k}</span>
                  <span style={{ fontSize:14, color:'var(--gray)' }}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Highlights grid */}
            <div className="reveal d1" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:28 }}>
              {highlights.map((h,i) => (
                <div key={h.label}
                  className={`card reveal d${Math.min(i+1,4)}`}
                  style={{ padding:'20px 22px', display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontSize:20, color:h.color }}>{h.icon}</span>
                  <span style={{ fontSize:13.5, color:'var(--gray)', fontWeight:500 }}>{h.label}</span>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="card reveal d2" style={{ borderLeft:'3px solid', borderLeftColor:'transparent', backgroundImage:'linear-gradient(var(--card),var(--card)), var(--grad)', backgroundOrigin:'border-box', backgroundClip:'padding-box, border-box' }}>
              <p style={{ fontFamily:'var(--mono)', fontSize:10.5, color:'var(--cyan)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>Education</p>
              <p style={{ fontSize:17, fontWeight:700, color:'var(--white)', marginBottom:4 }}>{profile.university}</p>
              <p style={{ fontSize:14, color:'var(--gray)' }}>{profile.degree}</p>
              <p style={{ fontSize:13, color:'var(--gray3)', marginTop:6 }}>GPA {profile.gpa} · Graduating {profile.gradYear}</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:720px){#about .wrap>div{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
    </section>
  )
}
