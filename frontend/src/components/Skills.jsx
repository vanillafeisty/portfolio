import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <hr className="divider" />
      <div className="section">
        <p className="section-label">Skills</p>
        <h2 style={{ fontSize: 32, marginBottom: 48, color: 'var(--ink)' }}>
          Things I work with.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 1,
          border: '1px solid var(--cream-border)',
          background: 'var(--cream-border)',
        }}>
          {skills.map(group => (
            <div key={group.category} style={{
              background: 'var(--cream)',
              padding: '28px 28px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--ink-muted)', marginBottom: 16,
              }}>
                {group.category}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map(item => (
                  <li key={item} style={{ fontSize: 16, color: 'var(--ink-light)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
