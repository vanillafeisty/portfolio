import { profile } from '../data'

export default function About() {
  return (
    <section id="about">
      <hr className="divider" />
      <div className="section">
        <p className="section-label">About</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 32, marginBottom: 24, color: 'var(--ink)' }}>
              A bit about me.
            </h2>
            {profile.bio.trim().split('\n\n').map((para, i) => (
              <p key={i} style={{ color: 'var(--ink-light)', marginBottom: 16, fontSize: 17 }}>
                {para.trim()}
              </p>
            ))}
          </div>

          <div style={{ paddingTop: 8 }}>
            <div style={{
              background: 'var(--cream-dark)',
              border: '1px solid var(--cream-border)',
              padding: '28px 32px',
            }}>
              {[
                { label: 'Location', value: profile.location },
                { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
                { label: 'GitHub', value: 'github.com/yourusername', href: profile.github },
                { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: profile.linkedin },
              ].map((row, i, arr) => (
                <div key={row.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '10px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--cream-border)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em' }}>
                    {row.label}
                  </span>
                  {row.href
                    ? <a href={row.href} style={{ fontSize: 15, color: 'var(--accent)' }}>{row.value}</a>
                    : <span style={{ fontSize: 15, color: 'var(--ink-light)' }}>{row.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #about .section > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
