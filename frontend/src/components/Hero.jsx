import { profile } from '../data'
import { HeroBg, LeafCluster, FloralDots } from './Botanical'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Botanical background — top right */}
      <div className="drift-in hide-mobile" style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}>
        <HeroBg />
      </div>

      {/* Bottom left leaf cluster */}
      <div className="hide-mobile" style={{ position: 'absolute', bottom: 40, left: -20, pointerEvents: 'none' }}>
        <LeafCluster opacity={0.28} floatClass="float-b" style={{ width: 130, height: 150 }}/>
      </div>

      {/* Floating dots */}
      <FloralDots style={{ position: 'absolute', top: '30%', left: '42%', opacity: 0.25 }} />

      {/* Content */}
      <div className="section" style={{ paddingTop: 140, paddingBottom: 100, zIndex: 1 }}>

        <p className="hero-1" style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--sage)', marginBottom: 20,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--sage)' }}/>
          {profile.location}
        </p>

        <h1 className="hero-2" style={{
          fontSize: 'clamp(46px, 8vw, 78px)',
          lineHeight: 1.05, letterSpacing: '-0.025em',
          color: 'var(--ink)', marginBottom: 18,
          fontWeight: 'normal',
        }}>
          {profile.name}
        </h1>

        <h2 className="hero-3" style={{
          fontSize: 'clamp(18px, 2.8vw, 24px)',
          fontWeight: 'normal', color: 'var(--ink-3)',
          marginBottom: 30, letterSpacing: '0.01em',
        }}>
          {profile.title}
        </h2>

        <p className="hero-4" style={{
          fontStyle: 'italic', fontSize: 18,
          color: 'var(--ink-3)', maxWidth: 440,
          marginBottom: 52, lineHeight: 1.75,
          borderLeft: '2px solid var(--sage-light)',
          paddingLeft: 18,
        }}>
          {profile.tagline}
        </p>

        <div className="hero-5" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="#contact" style={{
            padding: '12px 30px',
            background: 'var(--ink)', color: 'var(--cream)',
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            border: '1px solid var(--ink)', transition: 'all 0.22s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--ink)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--cream)' }}
          >
            Get in touch
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" style={{
            padding: '12px 30px',
            background: 'transparent', color: 'var(--ink)',
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            border: '1px solid var(--cream-3)', transition: 'border-color 0.22s',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.target.style.borderColor = 'var(--stone)'}
          onMouseLeave={e => e.target.style.borderColor = 'var(--cream-3)'}
          >
            Résumé ↗
          </a>
        </div>

        {/* Social row */}
        <div className="hero-5" style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'GitHub', href: profile.github },
            { label: 'LinkedIn', href: profile.linkedin },
            { label: profile.email, href: `mailto:${profile.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--ink-4)', letterSpacing: '0.07em',
              transition: 'color 0.2s',
              display: 'flex', alignItems: 'center', gap: 5,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-4)'}
            >
              <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: 'var(--sage)', marginRight: 4 }}/>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        animation: 'fadeUp 1s ease 1.2s both',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--ink-4)', textTransform: 'uppercase' }}>scroll</span>
        <div style={{
          width: 1, height: 40, background: 'linear-gradient(to bottom, var(--stone), transparent)',
          animation: 'floatA 2.5s ease-in-out infinite',
        }}/>
      </div>
    </section>
  )
}
