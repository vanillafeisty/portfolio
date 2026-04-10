import { useState } from 'react'
import { profile } from '../data'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px',
    background: 'var(--cream)', border: '1px solid var(--cream-border)',
    fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--ink)',
    outline: 'none', transition: 'border-color 0.2s',
    display: 'block',
  }

  const labelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--ink-muted)',
    display: 'block', marginBottom: 8,
  }

  return (
    <section id="contact">
      <hr className="divider" />
      <div className="section">
        <p className="section-label">Contact</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          <div>
            <h2 style={{ fontSize: 32, marginBottom: 20, color: 'var(--ink)' }}>
              Let's talk.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-light)', marginBottom: 40 }}>
              Whether you have a project in mind, a question, or just want to say hello —
              I'd love to hear from you.
            </p>

            {[
              { icon: '✉', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: '↗', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
              { icon: '◎', label: 'Location', value: profile.location },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                marginBottom: 24,
              }}>
                <span style={{ fontSize: 18, color: 'var(--ink-muted)', minWidth: 20 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 16, color: 'var(--accent)' }}>{item.value}</a>
                    : <span style={{ fontSize: 16, color: 'var(--ink-light)' }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input
                name="name" type="text" required value={form.name} onChange={handleChange}
                placeholder="Your full name"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--cream-border)'}
              />
            </div>

            <div>
              <label style={labelStyle}>Email *</label>
              <input
                name="email" type="email" required value={form.email} onChange={handleChange}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--cream-border)'}
              />
            </div>

            <div>
              <label style={labelStyle}>Phone (optional)</label>
              <input
                name="phone" type="tel" value={form.phone} onChange={handleChange}
                placeholder="+91 00000 00000"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--cream-border)'}
              />
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                name="message" required value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--cream-border)'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                padding: '13px 32px', alignSelf: 'flex-start',
                background: status === 'sending' ? 'var(--ink-muted)' : 'var(--ink)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                border: '1px solid transparent', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--green)' }}>
                ✓ Message sent. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#b05050' }}>
                ✗ Something went wrong. Please email me directly.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact .section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--ink-muted); }
      `}</style>
    </section>
  )
}
