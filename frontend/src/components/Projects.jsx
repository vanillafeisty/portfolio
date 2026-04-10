import { projects } from '../data'

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ display: 'inline', marginLeft: 4, verticalAlign: 'middle' }}>
      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <hr className="divider" />
      <div className="section">
        <p className="section-label">Projects</p>
        <h2 style={{ fontSize: 32, marginBottom: 48, color: 'var(--ink)' }}>
          Things I've built.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 1,
          background: 'var(--cream-border)',
          border: '1px solid var(--cream-border)',
        }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              background: 'var(--cream)',
              padding: '32px 32px',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, color: 'var(--ink)' }}>{proj.title}</h3>
                <div style={{ display: 'flex', gap: 12 }}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.06em' }}>
                      Source<ExternalIcon />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      Live<ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 15, color: 'var(--ink-light)', flexGrow: 1, marginBottom: 20 }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
                {proj.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    padding: '3px 10px',
                    background: 'var(--cream-dark)',
                    border: '1px solid var(--cream-border)',
                    color: 'var(--ink-muted)', letterSpacing: '0.06em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #projects .section > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
