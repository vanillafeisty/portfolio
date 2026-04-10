import { profile } from '../data'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
    }}>
      <div className="section" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <p className="fade-up-delay-1" style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: '0.14em', color: 'var(--ink-muted)',
          textTransform: 'uppercase', marginBottom: 20,
        }}>
          {profile.location}
        </p>

        <h1 className="fade-up-delay-2" style={{
          fontSize: 'clamp(42px, 7vw, 72px)',
          lineHeight: 1.1, letterSpacing: '-0.02em',
          color: 'var(--ink)', marginBottom: 16,
        }}>
          {profile.name}
        </h1>

        <h2 className="fade-up-delay-3" style={{
          fontSize: 'clamp(20px, 3vw, 26px)',
          fontWeight: 'normal', color: 'var(--ink-light)',
          marginBottom: 28,
        }}>
          {profile.title}
        </h2>

        <p className="fade-up-delay-3" style={{
          fontSize: 18, color: 'var(--ink-light)',
          maxWidth: 480, marginBottom: 44, lineHeight: 1.7,
          fontStyle: 'italic',
        }}>
          {profile.tagline}
        </p>

        <div className="fade-up-delay-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '11px 28px',
            background: 'var(--ink)', color: 'var(--cream)',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: 'none', border: '1px solid var(--ink)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--ink)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--cream)' }}
          >
            Get in touch
          </a>

          <a href={profile.resume} target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            padding: '11px 28px',
            background: 'transparent', color: 'var(--ink)',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: 'none', border: '1px solid var(--cream-border)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.target.style.borderColor = 'var(--ink)'}
          onMouseLeave={e => e.target.style.borderColor = 'var(--cream-border)'}
          >
            View résumé
          </a>
        </div>

        <div style={{ display: 'flex', gap: 20, marginTop: 52 }}>
          {[
            { label: 'GitHub', href: profile.github },
            { label: 'LinkedIn', href: profile.linkedin },
            { label: profile.email, href: `mailto:${profile.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--ink-muted)', letterSpacing: '0.06em',
              borderBottom: '1px solid transparent',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--ink)'; e.target.style.borderBottomColor = 'var(--ink)' }}
            onMouseLeave={e => { e.target.style.color = 'var(--ink-muted)'; e.target.style.borderBottomColor = 'transparent' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
