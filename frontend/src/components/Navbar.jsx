import { useState, useEffect } from 'react'
import { profile } from '../data'

const LINKS = ['About','Skills','Experience','Projects','Focus','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = ['about','skills','experience','projects','focus','contact']
      const hit = ids.findLast(id => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top < 140
      })
      setActive(hit || '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nameInitials = profile.name.split(' ').map(w => w[0]).join('')

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      background: scrolled ? 'rgba(11,16,32,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:64 }}>

        {/* Logo */}
        <a href="#hero" style={{
          display:'flex', alignItems:'center', gap:10,
          color:'var(--white)', fontSize:16, fontWeight:700, letterSpacing:'0.02em',
        }}>
          <div style={{
            width:34, height:34, borderRadius:10,
            background:'var(--grad)', display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:13, fontWeight:800, color:'#fff',
          }}>
            {nameInitials}
          </div>
          {profile.name.split(' ')[0]} <span style={{ color:'var(--gray3)' }}>{profile.name.split(' ')[1]}</span>
        </a>

        {/* Desktop */}
        <div style={{ display:'flex', alignItems:'center', gap:36 }} className="desk-nav">
          {LINKS.map(l => {
            const id = l.toLowerCase()
            const isActive = active === id
            return (
              <a key={l} href={`#${id}`} style={{
                fontSize:13, fontWeight:500, letterSpacing:'0.04em',
                color: isActive ? 'var(--cyan)' : 'var(--gray2)',
                position:'relative', transition:'color 0.2s',
                paddingBottom:2,
              }}>
                {l}
                {isActive && (
                  <span style={{
                    position:'absolute', bottom:-2, left:0, right:0, height:1,
                    background:'var(--grad)', borderRadius:1,
                  }}/>
                )}
              </a>
            )
          })}
          <a href={profile.resume} download target="_blank" rel="noreferrer" style={{
            padding:'8px 18px', borderRadius:8,
            background:'var(--grad)', color:'#fff',
            fontSize:12, fontWeight:600, letterSpacing:'0.04em',
            transition:'opacity 0.2s', whiteSpace:'nowrap',
          }}
          onMouseEnter={e=>e.target.style.opacity='0.85'}
          onMouseLeave={e=>e.target.style.opacity='1'}
          >
            Resume ↗
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={()=>setOpen(o=>!o)} className="ham-btn"
          style={{ display:'none', background:'none', border:'none', color:'var(--white)', cursor:'none', padding:4 }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            {open
              ? <path d="M2 2L20 16M20 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              : <>
                  <line x1="2" y1="3"  x2="20" y2="3"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="9"  x2="20" y2="9"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', padding:'12px 20px 20px' }}>
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} style={{
              display:'block', padding:'12px 0',
              fontSize:14, color:'var(--gray)', letterSpacing:'0.04em',
              borderBottom:'1px solid var(--border)',
            }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:640px){ .desk-nav{display:none !important;} .ham-btn{display:block !important;} }
      `}</style>
    </nav>
  )
}
