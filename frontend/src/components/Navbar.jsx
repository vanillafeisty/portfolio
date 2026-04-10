import { useState, useEffect } from 'react'
import { profile } from '../data'

const links = ['About','Skills','Experience','Projects','Interests','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('')
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      const found = sections.findLast(s => s && s.getBoundingClientRect().top < 120)
      setActive(found?.id || '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(250,248,244,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--cream-3)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto',
        padding: '0 40px', height: 58,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-serif)', fontSize: 19,
          color: 'var(--ink)', letterSpacing: '0.01em',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="3.5" stroke="var(--sage)" strokeWidth="1"/>
            <path d="M9 2 C9 6 12 8 9 12 C6 8 9 6 9 2Z" stroke="var(--accent)" strokeWidth="0.8" fill="none"/>
          </svg>
          {profile.name.split(' ')[0]}
          <span style={{ color: 'var(--stone)' }}>.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desk-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: active === l.toLowerCase() ? 'var(--ink)' : 'var(--ink-4)',
              borderBottom: active === l.toLowerCase() ? '1px solid var(--sage)' : '1px solid transparent',
              paddingBottom: 2,
              transition: 'color 0.2s, border-color 0.2s',
            }}>
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="ham-btn" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--ink)', padding: 4,
        }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            {open
              ? <path d="M2 2L20 16M20 2L2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              : <>
                  <line x1="2" y1="3" x2="20" y2="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="2" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="2" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--cream)', borderTop: '1px solid var(--cream-3)',
          padding: '8px 40px 20px',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '11px 0',
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink-3)',
              borderBottom: '1px solid var(--cream-3)',
            }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desk-nav { display: none !important; }
          .ham-btn  { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
