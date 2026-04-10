import { interests, activities } from '../data'
import { LeafCluster, TinyLeaf } from './Botanical'
import { useReveal } from '../hooks/useReveal'

export default function InterestsActivities() {
  useReveal()
  return (
    <>
      <section id="interests" style={{ position: 'relative', overflow: 'hidden' }}>
        <hr className="divider" />

        <div className="hide-mobile" style={{ position: 'absolute', top: 30, right: 0, pointerEvents: 'none' }}>
          <TinyLeaf opacity={0.28} floatClass="float-b"/>
        </div>

        <div className="section">
          <p className="section-tag reveal">Interests</p>
          <h2 className="reveal" style={{ fontSize: 34, marginBottom: 36, fontWeight: 'normal' }}>
            What I care about.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {interests.map((item, i) => (
              <span key={i}
                className={`reveal reveal-delay-${Math.min(i % 4 + 1, 4)}`}
                style={{
                  padding: '9px 20px',
                  border: '1px solid var(--cream-3)',
                  background: i % 3 === 0 ? 'var(--sage-pale)' : i % 3 === 1 ? 'var(--blush-light)' : 'var(--stone-light)',
                  fontSize: 15, color: 'var(--ink-3)', fontStyle: 'italic',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.target.style.borderColor = 'var(--stone)'}
                onMouseLeave={e => e.target.style.borderColor = 'var(--cream-3)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" style={{ position: 'relative', overflow: 'hidden' }}>
        <hr className="divider" />

        <div className="hide-mobile" style={{ position: 'absolute', bottom: 20, left: -20, pointerEvents: 'none' }}>
          <LeafCluster opacity={0.22} floatClass="float-c" style={{ width: 100, height: 120 }}/>
        </div>

        <div className="section">
          <p className="section-tag reveal">Activities</p>
          <h2 className="reveal" style={{ fontSize: 34, marginBottom: 48, fontWeight: 'normal' }}>
            Beyond code.
          </h2>

          {activities.map((act, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                display: 'grid', gridTemplateColumns: '155px 1fr', gap: '0 44px',
                padding: '28px 0',
                borderBottom: i < activities.length - 1 ? '1px solid var(--cream-3)' : 'none',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.07em', lineHeight: 1.6, paddingTop: 4 }}>
                  {act.period}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 4, fontWeight: 'normal' }}>{act.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sage)', letterSpacing: '0.06em', marginBottom: 10 }}>{act.role}</p>
                <p style={{ fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.75 }}>{act.description}</p>
              </div>
            </div>
          ))}
        </div>

        <style>{`@media(max-width:640px){#activities .section>div>div{grid-template-columns:1fr !important;gap:8px !important;}}`}</style>
      </section>
    </>
  )
}
