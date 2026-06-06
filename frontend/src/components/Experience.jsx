import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  useReveal()
  return (
    <section id="experience" className="section">
      <hr className="divider"/>
      <div className="wrap" style={{ paddingTop:100 }}>
        <p className="sec-label reveal">Career</p>
        <h2 className="sec-title reveal">Work <span className="grad-text">Experience</span></h2>

        <div style={{ position:'relative' }}>
          {/* Vertical line */}
          <div className="hide-mob" style={{
            position:'absolute', left:28, top:12, bottom:12,
            width:1, background:'linear-gradient(to bottom, var(--cyan), var(--purple), transparent)',
            opacity:0.3,
          }}/>

          {experience.map((job,i) => (
            <div key={i} className={`reveal d${Math.min(i+1,4)}`}
              style={{ display:'flex', gap:40, marginBottom:i < experience.length-1 ? 48 : 0, position:'relative' }}>

              {/* Timeline node */}
              <div className="hide-mob" style={{ flexShrink:0, paddingTop:8 }}>
                <div style={{
                  width:56, height:56, borderRadius:16,
                  background:'var(--card2)', border:'1px solid var(--border)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:20, color:'var(--cyan)',
                  animation:'nodeGlow 3s ease-in-out infinite',
                  animationDelay: `${i*1.2}s`,
                }}>
                  {i === 0 ? '⚡' : '🏭'}
                </div>
              </div>

              {/* Card */}
              <div className="card" style={{ flex:1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12, flexWrap:'wrap', gap:8 }}>
                  <div>
                    <span style={{ fontFamily:'var(--mono)', fontSize:10.5, color:'var(--cyan)', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:600 }}>
                      {job.type}
                    </span>
                    <h3 style={{ fontSize:20, color:'var(--white)', fontWeight:700, marginTop:6, lineHeight:1.3 }}>{job.role}</h3>
                    <p style={{ fontSize:14, color:'var(--gray2)', marginTop:4, fontWeight:500 }}>{job.company}</p>
                  </div>
                  <span style={{
                    fontFamily:'var(--mono)', fontSize:11, color:'var(--gray3)',
                    background:'var(--card2)', border:'1px solid var(--border)',
                    padding:'5px 12px', borderRadius:8, whiteSpace:'nowrap', letterSpacing:'0.04em',
                  }}>
                    {job.period}
                  </span>
                </div>

                <p style={{ fontSize:15, color:'var(--gray)', lineHeight:1.8, marginBottom:18 }}>{job.description}</p>

                {/* Impact badge */}
                <div style={{
                  display:'inline-flex', alignItems:'center', gap:8, marginBottom:16,
                  padding:'6px 14px', borderRadius:8,
                  background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.2)',
                }}>
                  <span style={{ fontSize:12, color:'var(--green)' }}>✓</span>
                  <span style={{ fontSize:12, color:'var(--green)', fontWeight:500 }}>{job.highlight}</span>
                </div>

                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:4 }}>
                  {job.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
