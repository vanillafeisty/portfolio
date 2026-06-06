import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'

const ICONS = { 'AI · Healthcare':'🧠', 'AI Agents · LLMs':'🤖', 'Full Stack':'⚡', 'Enterprise · Systems':'🏭' }

function ProjectCard({ proj, large }) {
  return (
    <div className="card" style={{
      position:'relative', overflow:'hidden',
      padding: large ? '36px 36px' : '28px 28px',
      display:'flex', flexDirection:'column',
      minHeight: large ? 320 : 260,
    }}>
      {/* Background glow */}
      <div style={{
        position:'absolute', top:-60, right:-60,
        width:200, height:200, borderRadius:'50%',
        background: proj.featured ? 'radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%)' : 'none',
        pointerEvents:'none',
      }}/>

      {/* Top row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{
            width: large ? 44 : 38, height: large ? 44 : 38,
            borderRadius:12, background:'rgba(0,212,255,0.08)',
            border:'1px solid rgba(0,212,255,0.15)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize: large ? 22 : 18,
          }}>
            {ICONS[proj.tag] || '⚡'}
          </div>
          <div>
            <span style={{ fontFamily:'var(--mono)', fontSize:10, color:'var(--cyan)', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600 }}>
              {proj.tag}
            </span>
            {proj.period && (
              <p style={{ fontSize:11, color:'var(--gray3)', marginTop:2 }}>{proj.period}</p>
            )}
          </div>
        </div>
        <div style={{ display:'flex', gap:12 }}>
          {proj.github && (
            <a href={proj.github} target="_blank" rel="noreferrer" style={{
              display:'flex', alignItems:'center', gap:5,
              fontSize:12, color:'var(--gray3)', fontWeight:500, letterSpacing:'0.04em',
              padding:'5px 12px', borderRadius:8,
              background:'rgba(255,255,255,0.04)', border:'1px solid var(--border)',
              transition:'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,212,255,0.3)';e.currentTarget.style.color='var(--cyan)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--gray3)'}}
            >
              GitHub ↗
            </a>
          )}
          {proj.live && (
            <a href={proj.live} target="_blank" rel="noreferrer" style={{
              fontSize:12, color:'var(--white)', fontWeight:600,
              padding:'5px 12px', borderRadius:8,
              background:'var(--grad)', transition:'opacity 0.2s',
            }}>
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3 style={{ fontSize: large ? 24 : 19, color:'var(--white)', fontWeight:700, marginBottom:6 }}>
        {proj.title}
      </h3>
      <p style={{ fontSize:13, color:'var(--gray3)', marginBottom:12, fontStyle:'italic' }}>{proj.subtitle}</p>
      <p style={{ fontSize:14.5, color:'var(--gray)', lineHeight:1.78, flexGrow:1, marginBottom:20 }}>
        {proj.description}
      </p>

      {/* Impact */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:8, marginBottom:16,
        padding:'5px 12px', borderRadius:8,
        background:'rgba(20,184,166,0.08)', border:'1px solid rgba(20,184,166,0.2)',
        alignSelf:'flex-start',
      }}>
        <span style={{ fontSize:10, color:'var(--teal)' }}>◆</span>
        <span style={{ fontSize:12, color:'var(--teal)', fontWeight:500 }}>{proj.impact}</span>
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
        {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  useReveal()
  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)
  return (
    <section id="projects" className="section">
      <hr className="divider"/>
      <div className="wrap" style={{ paddingTop:100 }}>
        <p className="sec-label reveal">Work</p>
        <h2 className="sec-title reveal">Featured <span className="grad-text">Projects</span></h2>

        {/* Featured — 2 col large */}
        <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:18 }}>
          {featured.map((p,i) => (
            <div key={p.title} className={`reveal d${i+1}`}>
              <ProjectCard proj={p} large/>
            </div>
          ))}
        </div>

        {/* Others */}
        {rest.length > 0 && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18 }}>
            {rest.map((p,i) => (
              <div key={p.title} className={`reveal d${i+1}`}>
                <ProjectCard proj={p} large={false}/>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`@media(max-width:640px){#projects .wrap>div{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
