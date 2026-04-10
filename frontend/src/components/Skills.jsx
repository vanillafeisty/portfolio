import { skills } from '../data'
import { TinyLeaf } from './Botanical'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  useReveal()
  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <hr className="divider" />

      <div className="hide-mobile" style={{ position: 'absolute', bottom: 30, left: 10, pointerEvents: 'none' }}>
        <TinyLeaf opacity={0.3} floatClass="float-c"/>
      </div>

      <div className="section">
        <p className="section-tag reveal">Skills</p>
        <h2 className="reveal" style={{ fontSize: 34, marginBottom: 48, fontWeight: 'normal' }}>
          Things I work with.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 1, background: 'var(--cream-3)',
          border: '1px solid var(--cream-3)',
        }}>
          {skills.map((group, i) => (
            <div key={group.category}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: 'var(--cream)',
                padding: '28px 26px',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--sage-pale)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage)', display: 'inline-block', flexShrink: 0 }}/>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
                  {group.category}
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {group.items.map(item => (
                  <li key={item} style={{ fontSize: 15.5, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--blush)', display: 'inline-block', flexShrink: 0 }}/>
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
