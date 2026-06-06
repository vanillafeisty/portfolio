import { currentFocus, interests, activities } from '../data'
import { useReveal } from '../hooks/useReveal'

const COLORS = ['var(--cyan)','var(--purple)','var(--teal)','var(--green)','#F59E0B','#EF4444']

export default function Focus() {
  useReveal()
  return (
    <>
      {/* Current Focus */}
      <section id="focus" className="section">
        <hr className="divider"/>
        <div className="wrap" style={{ paddingTop:100 }}>
          <p className="sec-label reveal">Research</p>
          <h2 className="sec-title reveal">Current <span className="grad-text">Focus</span></h2>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14 }}>
            {currentFocus.map((item,i) => (
              <div key={item.title}
                className={`card reveal d${Math.min(i%3+1,4)}`}
                style={{ borderTop:`2px solid ${COLORS[i%COLORS.length]}`, position:'relative', overflow:'hidden' }}
              >
                <div style={{
                  position:'absolute', top:-30, right:-30, width:80, height:80, borderRadius:'50%',
                  background:`radial-gradient(circle, ${COLORS[i%COLORS.length]}15, transparent 70%)`,
                  pointerEvents:'none',
                }}/>
                <div style={{ fontSize:26, marginBottom:14 }}>{item.icon}</div>
                <h3 style={{ fontSize:16, color:'var(--white)', fontWeight:700, marginBottom:8 }}>{item.title}</h3>
                <p style={{ fontSize:13.5, color:'var(--gray)', lineHeight:1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="section" style={{ paddingTop:0 }}>
        <div className="wrap">
          <p className="sec-label reveal">Beyond Code</p>
          <h2 className="sec-title reveal">Interests & <span className="grad-text">Activities</span></h2>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:52 }}>
            {interests.map((item,i) => (
              <span key={item}
                className={`reveal d${Math.min(i%4+1,4)}`}
                style={{
                  padding:'9px 20px', borderRadius:24,
                  border:'1px solid var(--border)',
                  background:'var(--card)',
                  fontSize:14, color:'var(--gray)', fontWeight:500,
                  transition:'border-color 0.2s, color 0.2s',
                  cursor:'default',
                }}
                onMouseEnter={e=>{e.target.style.borderColor='rgba(0,212,255,0.3)';e.target.style.color='var(--white)'}}
                onMouseLeave={e=>{e.target.style.borderColor='var(--border)';e.target.style.color='var(--gray)'}}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {activities.map((act,i) => (
              <div key={act.title} className={`card reveal d${i+1}`}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12, flexWrap:'wrap', gap:8 }}>
                  <h3 style={{ fontSize:16, color:'var(--white)', fontWeight:700 }}>{act.title}</h3>
                  <span style={{ fontFamily:'var(--mono)', fontSize:10.5, color:'var(--gray3)', letterSpacing:'0.06em' }}>{act.period}</span>
                </div>
                <p style={{ fontFamily:'var(--mono)', fontSize:11, color:'var(--teal)', letterSpacing:'0.06em', marginBottom:10, textTransform:'uppercase' }}>{act.role}</p>
                <p style={{ fontSize:14, color:'var(--gray)', lineHeight:1.75 }}>{act.description}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){#interests .wrap>div:last-child{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  )
}
