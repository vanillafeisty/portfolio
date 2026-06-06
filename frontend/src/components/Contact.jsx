import { useState } from 'react'
import { profile } from '../data'
import { useReveal } from '../hooks/useReveal'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  useReveal()
  const [form,   setForm]   = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault(); setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success'); setForm({ name:'', email:'', phone:'', message:'' })
    } catch { setStatus('error') }
  }

  const inputSt = {
    width:'100%', padding:'13px 16px', borderRadius:10,
    background:'rgba(255,255,255,0.04)',
    border:'1px solid rgba(255,255,255,0.08)',
    color:'var(--white)', fontSize:15, fontFamily:'var(--font)',
    outline:'none', transition:'border-color 0.2s',
  }
  const labelSt = { fontSize:11.5, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--gray3)', display:'block', marginBottom:8, fontWeight:500 }
  const onF = e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'
  const onB = e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'

  return (
    <section id="contact" className="section">
      <hr className="divider"/>
      <div className="wrap" style={{ paddingTop:100 }}>

        {/* Big CTA heading */}
        <div className="reveal" style={{ textAlign:'center', marginBottom:72 }}>
          <p className="sec-label" style={{ justifyContent:'center' }}>Contact</p>
          <h2 style={{ fontSize:'clamp(32px,5vw,54px)', fontWeight:800, color:'var(--white)', lineHeight:1.15, marginBottom:16 }}>
            Let's Build Something<br/><span className="grad-text">Extraordinary</span>
          </h2>
          <p style={{ fontSize:17, color:'var(--gray)', maxWidth:480, margin:'0 auto' }}>
            Open to internships, collaborations, research opportunities, and interesting conversations.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>

          {/* Left info */}
          <div className="reveal">
            {[
              { icon:'✉', label:'Email', value: profile.email, href:`mailto:${profile.email}` },
              { icon:'↗', label:'Phone', value: profile.phone, href:`tel:${profile.phone}` },
              { icon:'◎', label:'Location', value: profile.location },
              { icon:'⬡', label:'GitHub', value: 'github.com/vanillafeisty', href: profile.github },
              { icon:'∿', label:'LinkedIn', value: 'linkedin.com/in/a-sonal-268ssb', href: profile.linkedin },
            ].map(item => (
              <div key={item.label} style={{
                display:'flex', gap:16, alignItems:'flex-start',
                padding:'18px 0', borderBottom:'1px solid var(--border)',
              }}>
                <div style={{
                  width:40, height:40, borderRadius:12,
                  background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:16, color:'var(--cyan)', flexShrink:0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize:10.5, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--gray3)', marginBottom:4, fontWeight:500 }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize:14.5, color:'var(--cyan)', fontWeight:500 }}>{item.value}</a>
                    : <span style={{ fontSize:14.5, color:'var(--gray)' }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Right form — glassmorphism */}
          <form onSubmit={submit} className="reveal d2"
            style={{
              background:'rgba(22,31,51,0.8)',
              backdropFilter:'blur(12px)',
              border:'1px solid rgba(0,212,255,0.12)',
              borderRadius:20, padding:'36px 32px',
              display:'flex', flexDirection:'column', gap:20,
            }}>
            <div>
              <label style={labelSt}>Full Name *</label>
              <input name="name" type="text" required value={form.name} onChange={handle} onFocus={onF} onBlur={onB} placeholder="Ardhi Sonal" style={inputSt}/>
            </div>
            <div>
              <label style={labelSt}>Email *</label>
              <input name="email" type="email" required value={form.email} onChange={handle} onFocus={onF} onBlur={onB} placeholder="you@example.com" style={inputSt}/>
            </div>
            <div>
              <label style={labelSt}>Phone <span style={{opacity:0.5}}>(optional)</span></label>
              <input name="phone" type="tel" value={form.phone} onChange={handle} onFocus={onF} onBlur={onB} placeholder="+91 00000 00000" style={inputSt}/>
            </div>
            <div>
              <label style={labelSt}>Message *</label>
              <textarea name="message" required value={form.message} rows={5} onChange={handle} onFocus={onF} onBlur={onB}
                placeholder="Tell me about your project, opportunity, or just say hi..."
                style={{ ...inputSt, resize:'vertical', lineHeight:1.7 }}/>
            </div>

            <button type="submit" disabled={status==='sending'}
              style={{
                padding:'14px', borderRadius:10,
                background: status==='sending' ? 'rgba(0,212,255,0.3)' : 'var(--grad)',
                color:'#fff', fontWeight:700, fontSize:14,
                letterSpacing:'0.04em', border:'none', cursor: status==='sending' ? 'not-allowed':'none',
                transition:'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e=>{ if(status!=='sending'){e.target.style.opacity='0.85';e.target.style.transform='translateY(-1px)'} }}
              onMouseLeave={e=>{ e.target.style.opacity='1'; e.target.style.transform='none' }}
            >
              {status==='sending' ? 'Sending…' : 'Send Message →'}
            </button>

            {status==='success' && (
              <div style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 16px', borderRadius:10, background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.25)' }}>
                <span style={{ color:'var(--green)', fontSize:14 }}>✓</span>
                <span style={{ fontSize:13, color:'var(--green)', fontWeight:500 }}>Sent! I'll get back to you soon.</span>
              </div>
            )}
            {status==='error' && (
              <p style={{ fontSize:13, color:'#EF4444' }}>Something went wrong — email me directly at {profile.email}</p>
            )}
          </form>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){ #contact .wrap>div:last-child{grid-template-columns:1fr !important;gap:32px !important;} }
        input::placeholder,textarea::placeholder{color:var(--gray3);}
      `}</style>
    </section>
  )
}
