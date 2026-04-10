import { profile } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--cream-border)', padding: '32px 0' }}>
      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)' }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'GitHub', href: profile.github },
            { label: 'LinkedIn', href: profile.linkedin },
            { label: 'Email', href: `mailto:${profile.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--ink-muted)', letterSpacing: '0.08em',
            }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
