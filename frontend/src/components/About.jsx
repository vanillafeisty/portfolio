import { useEffect } from 'react'
import { profile } from '../data'
import { LeafSprig, FloralDots } from './Botanical'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  useReveal()
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <hr className="divider" />

      {/* Decorative sprig — top right */}
      <div className="hide-mobile" style={{ position: 'absolute', top: 20, right: 20, pointerEvents: 'none', zIndex: 0 }}>
        <LeafSprig opacity={0.32} floatClass="float-a" />
      </div>

      <div className="section" style={{ zIndex: 1 }}>
        <p className="section-tag reveal">About</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div className="reveal">
            <h2 style={{ fontSize: 34, marginBottom: 24, color: 'var(--ink)', fontWeight: 'normal' }}>
              A bit about me.
            </h2>
            {profile.bio.trim().split('\n\n').map((para, i) => (
              <p key={i} style={{ color: 'var(--ink-3)', marginBottom: 16, fontSize: 17, lineHeight: 1.8 }}>
                {para.trim()}
              </p>
            ))}
          </div>

          <div className="reveal reveal-delay-2">
            {/* Info card with sage left border */}
            <div style={{
              background: 'var(--sage-pale)',
              border: '1px solid #d0dece',
              borderLeft: '3px solid var(--sage)',
              padding: '28px 30px',
            }}>
              {[
                { label: 'Location', value: profile.location },
                { label: 'Email',    value: profile.email,    href: `mailto:${profile.email}` },
                { label: 'Phone',    value: profile.phone,    href: `tel:${profile.phone}` },
                { label: 'GitHub',   value: 'github.com/' + profile.github.split('/').pop(), href: profile.github },
                { label: 'LinkedIn', value: 'linkedin.com/in/' + profile.linkedin.split('/').pop(), href: profile.linkedin },
              ].map((row, i, arr) => (
                <div key={row.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '10px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid #d8e4d6' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {row.label}
                  </span>
                  {row.href
                    ? <a href={row.href} style={{ fontSize: 14.5, color: 'var(--accent)' }}>{row.value}</a>
                    : <span style={{ fontSize: 14.5, color: 'var(--ink-3)' }}>{row.value}</span>
                  }
                </div>
              ))}
            </div>

            <FloralDots style={{ marginTop: 20, opacity: 0.35 }}/>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:640px){#about .section > div{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
    </section>
  )
}
