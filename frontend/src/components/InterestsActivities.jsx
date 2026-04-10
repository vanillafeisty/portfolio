import { interests, activities } from '../data'

export default function InterestsActivities() {
  return (
    <>
      {/* Interests */}
      <section id="interests">
        <hr className="divider" />
        <div className="section">
          <p className="section-label">Interests</p>
          <h2 style={{ fontSize: 32, marginBottom: 40, color: 'var(--ink)' }}>
            What I care about.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {interests.map((item, i) => (
              <span key={i} style={{
                padding: '10px 20px',
                border: '1px solid var(--cream-border)',
                background: 'var(--cream-dark)',
                fontSize: 15, color: 'var(--ink-light)',
                fontStyle: 'italic',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities">
        <hr className="divider" />
        <div className="section">
          <p className="section-label">Activities</p>
          <h2 style={{ fontSize: 32, marginBottom: 48, color: 'var(--ink)' }}>
            Beyond code.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {activities.map((act, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '0 40px',
                padding: '28px 0',
                borderBottom: i < activities.length - 1 ? '1px solid var(--cream-border)' : 'none',
              }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: 'var(--ink-muted)', letterSpacing: '0.06em',
                    lineHeight: 1.6, paddingTop: 4,
                  }}>
                    {act.period}
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 4 }}>{act.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: 10,
                  }}>
                    {act.role}
                  </p>
                  <p style={{ fontSize: 15, color: 'var(--ink-light)' }}>{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          #activities .section > div > div {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </>
  )
}
