import { profile } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--cream-3)', padding: '40px 0 32px' }}>
      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 40px',
      }}>
        {/* Botanical divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--cream-3)' }}/>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" aria-hidden="true">
            <path d="M16 18 C16 12 14 6 12 2" stroke="var(--sage)" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
            <path d="M12 10 C8 7 4 7 2 4 C6 3 10 5 12 8Z" stroke="var(--ink-4)" strokeWidth="0.7" fill="none" opacity="0.5"/>
            <path d="M13 7 C16 4 20 3 22 0 C19 1 15 4 13 7Z" stroke="var(--ink-4)" strokeWidth="0.7" fill="none" opacity="0.5"/>
          </svg>
          <div style={{ flex: 1, height: 1, background: 'var(--cream-3)' }}/>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-4)' }}>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'GitHub',   href: profile.github },
              { label: 'LinkedIn', href: profile.linkedin },
              { label: 'Email',    href: `mailto:${profile.email}` },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--ink-4)', letterSpacing: '0.08em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--ink-4)'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
