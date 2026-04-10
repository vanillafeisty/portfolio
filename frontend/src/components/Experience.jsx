import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <hr className="divider" />
      <div className="section">
        <p className="section-label">Experience</p>
        <h2 style={{ fontSize: 32, marginBottom: 48, color: 'var(--ink)' }}>
          Where I've worked.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map((job, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr', gap: '0 40px',
              padding: '32px 0',
              borderBottom: i < experience.length - 1 ? '1px solid var(--cream-border)' : 'none',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--ink-muted)', letterSpacing: '0.06em',
                  lineHeight: 1.6, paddingTop: 4,
                }}>
                  {job.period}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 4 }}>
                  {job.role}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: 14,
                }}>
                  {job.company}
                </p>
                <p style={{ fontSize: 16, color: 'var(--ink-light)', marginBottom: 16 }}>
                  {job.description}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {job.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      padding: '3px 10px',
                      background: 'var(--cream-dark)',
                      border: '1px solid var(--cream-border)',
                      color: 'var(--ink-muted)',
                      letterSpacing: '0.06em',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience .section > div > div {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
