import { projects } from '../data'
import { CornerLeaves } from './Botanical'
import { useReveal } from '../hooks/useReveal'

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ display: 'inline', marginLeft: 3, verticalAlign: 'middle' }}>
      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  useReveal()
  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      <hr className="divider" />

      <div className="hide-mobile" style={{ position: 'absolute', bottom: 0, left: -10, pointerEvents: 'none' }}>
        <CornerLeaves opacity={0.28}/>
      </div>

      <div className="section">
        <p className="section-tag reveal">Projects</p>
        <h2 className="reveal" style={{ fontSize: 34, marginBottom: 48, fontWeight: 'normal' }}>
          Things I've built.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 16,
        }}>
          {projects.map((proj, i) => (
            <div key={i}
              className={`card reveal reveal-delay-${Math.min(i % 2 + 1, 2)}`}
              style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
            >
              {/* Tiny sage dot accent */}
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: i % 2 === 0 ? 'var(--sage-light)' : 'var(--blush-light)',
                border: `1.5px solid ${i % 2 === 0 ? 'var(--sage)' : 'var(--blush)'}`,
                marginBottom: 18,
              }}/>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontSize: 19, color: 'var(--ink)', fontWeight: 'normal' }}>{proj.title}</h3>
                <div style={{ display: 'flex', gap: 14, flexShrink: 0, marginLeft: 12 }}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.07em' }}>
                      Code<Arrow/>
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: '0.07em' }}>
                      Live<Arrow/>
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 15, color: 'var(--ink-3)', flexGrow: 1, marginBottom: 22, lineHeight: 1.75 }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:480px){#projects .section>div:last-child{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
