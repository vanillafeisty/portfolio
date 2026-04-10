import { useState, useEffect } from 'react'
import { profile } from '../data'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Interests',  href: '#interests' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,248,243,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--cream-border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 56,
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-serif)', fontSize: 18,
          color: 'var(--ink)', borderBottom: 'none', letterSpacing: '0.01em',
        }}>
          {profile.name.split(' ')[0]}<span style={{ color: 'var(--ink-muted)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.08em', color: 'var(--ink-light)',
              borderBottom: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--ink)'}
            onMouseLeave={e => e.target.style.color = 'var(--ink-light)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 4, color: 'var(--ink)',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5"/>
              : <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                </>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--cream)', borderTop: '1px solid var(--cream-border)',
          padding: '12px 32px 20px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '10px 0',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                color: 'var(--ink-light)', borderBottom: 'none',
                borderBottom: '1px solid var(--cream-border)',
              }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
