import { useState } from 'react'
import { skills } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  useReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="section">
      <hr className="divider"/>
      <div className="wrap" style={{ paddingTop:100 }}>
        <p className="sec-label reveal">Technical Stack</p>
        <h2 className="sec-title reveal">Skills & <span className="grad-text">Expertise</span></h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16 }}>
          {skills.map((group,gi) => (
            <div key={group.category}
              className={`card reveal d${Math.min(gi%3+1,4)}`}
              style={{
                position:'relative', overflow:'hidden',
                borderColor: active===gi ? group.color+'55' : 'var(--border)',
                boxShadow: active===gi ? `0 0 32px ${group.color}22` : 'none',
              }}
              onMouseEnter={()=>setActive(gi)} onMouseLeave={()=>setActive(null)}
            >
              {/* Glow blob */}
              <div style={{
                position:'absolute', top:-40, right:-40,
                width:100, height:100, borderRadius:'50%',
                background:`radial-gradient(circle, ${group.color}22, transparent 70%)`,
                transition:'opacity 0.3s',
                opacity: active===gi ? 1 : 0,
                pointerEvents:'none',
              }}/>

              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:group.color, boxShadow:`0 0 8px ${group.color}` }}/>
                <p style={{ fontFamily:'var(--mono)', fontSize:10.5, letterSpacing:'0.14em', textTransform:'uppercase', color:group.color, fontWeight:600 }}>
                  {group.category}
                </p>
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontSize:12.5, padding:'5px 12px', borderRadius:16,
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.07)',
                    color:'var(--gray)', transition:'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e=>{ e.target.style.borderColor=group.color+'66'; e.target.style.color='var(--white)' }}
                  onMouseLeave={e=>{ e.target.style.borderColor='rgba(255,255,255,0.07)'; e.target.style.color='var(--gray)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
