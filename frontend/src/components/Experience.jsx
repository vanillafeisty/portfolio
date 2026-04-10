import { experience } from '../data'
import { Berries } from './Botanical'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  useReveal()
  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
      <hr className="divider" />

      <div className="hide-mobile" style={{ position: 'absolute', top: 40, right: -10, pointerEvents: 'none' }}>
        <Berries opacity={0.32} floatClass="float-a"/>
      </div>

      <div className="section">
        <p className="section-tag reveal">Experience</p>
        <h2 className="reveal" style={{ fontSize: 34, marginBottom: 52, fontWeight: 'normal' }}>
          Where I've worked.
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8,
            width: 1, background: 'linear-gradient(to bottom, var(--sage-light), var(--blush-light))',
          }} className="hide-mobile"/>

          {experience.map((job, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: '0 48px', padding: '32px 0 32px 0',
                borderBottom: i < experience.length - 1 ? '1px solid var(--cream-3)' : 'none',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div className="hide-mobile" style={{
                position: 'absolute', left: -5, top: 40,
                width: 10, height: 10, borderRadius: '50%',
                background: 'var(--cream)', border: '1.5px solid var(--sage)',
                zIndex: 1,
              }}/>

              <div style={{ paddingLeft: 12 }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10.5,
                  color: 'var(--ink-4)', letterSpacing: '0.07em',
                  lineHeight: 1.7, paddingTop: 4,
                }}>
                  {job.period}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 4, fontWeight: 'normal' }}>
                  {job.role}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: 14 }}>
                  {job.company}
                </p>
                <p style={{ fontSize: 15.5, color: 'var(--ink-3)', marginBottom: 18, lineHeight: 1.75 }}>
                  {job.description}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {job.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:640px){#experience .section > div > div{grid-template-columns:1fr !important;gap:8px !important;}}`}</style>
    </section>
  )
}
