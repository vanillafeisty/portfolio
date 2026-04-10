import { useState } from 'react'
import { profile } from '../data'
import { LeafSprig, FloralDots } from './Botanical'
import { useReveal } from '../hooks/useReveal'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  useReveal()
  const [form, setForm]   = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

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
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const input = {
    width: '100%', padding: '12px 14px',
    background: 'var(--cream)',
    border: '1px solid var(--cream-3)',
    fontFamily: 'var(--font-serif)', fontSize: 16,
    color: 'var(--ink)', outline: 'none',
    transition: 'border-color 0.2s',
    display: 'block',
  }
  const label = {
    fontFamily: 'var(--font-mono)', fontSize: 10.5,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--ink-4)', display: 'block', marginBottom: 8,
  }
  const focus = e => e.target.style.borderColor = 'var(--sage)'
  const blur  = e => e.target.style.borderColor = 'var(--cream-3)'

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <hr className="divider" />

      <div className="hide-mobile" style={{ position: 'absolute', top: 30, right: 10, pointerEvents: 'none' }}>
        <LeafSprig opacity={0.25} floatClass="float-b"/>
      </div>

      <div className="section">
        <p className="section-tag reveal">Contact</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          <div className="reveal">
            <h2 style={{ fontSize: 34, marginBottom: 20, fontWeight: 'normal' }}>Let's talk.</h2>
            <p style={{ fontSize: 16.5, color: 'var(--ink-3)', marginBottom: 44, lineHeight: 1.8 }}>
              Whether you have a project in mind, a question, or just want to say hello — I'd love to hear from you.
            </p>

            {[
              { emoji: '✉', label: 'Email',    value: profile.email, href: `mailto:${profile.email}` },
              { emoji: '↗', label: 'Phone',    value: profile.phone, href: `tel:${profile.phone}` },
              { emoji: '◎', label: 'Location', value: profile.location },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--sage-pale)', border: '1px solid #d0dece',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: 'var(--accent)', flexShrink: 0,
                }}>
                  {item.emoji}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                    {item.label}
                  </p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 15.5, color: 'var(--accent)' }}>{item.value}</a>
                    : <span style={{ fontSize: 15.5, color: 'var(--ink-3)' }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <FloralDots style={{ marginTop: 20 }} opacity={0.3}/>
          </div>

          <form onSubmit={handleSubmit} className="reveal reveal-delay-2"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div>
              <label style={label}>Name *</label>
              <input name="name" type="text" required value={form.name}
                onChange={handleChange} onFocus={focus} onBlur={blur}
                placeholder="Your full name" style={input}/>
            </div>

            <div>
              <label style={label}>Email *</label>
              <input name="email" type="email" required value={form.email}
                onChange={handleChange} onFocus={focus} onBlur={blur}
                placeholder="your@email.com" style={input}/>
            </div>

            <div>
              <label style={label}>Phone <span style={{ opacity: 0.5 }}>(optional)</span></label>
              <input name="phone" type="tel" value={form.phone}
                onChange={handleChange} onFocus={focus} onBlur={blur}
                placeholder="+91 00000 00000" style={input}/>
            </div>

            <div>
              <label style={label}>Message *</label>
              <textarea name="message" required value={form.message} rows={5}
                onChange={handleChange} onFocus={focus} onBlur={blur}
                placeholder="Tell me about your project or just say hi..."
                style={{ ...input, resize: 'vertical', lineHeight: 1.7 }}/>
            </div>

            <button type="submit" disabled={status === 'sending'}
              style={{
                padding: '13px 32px', alignSelf: 'flex-start',
                background: status === 'sending' ? 'var(--stone)' : 'var(--ink)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                border: '1px solid transparent',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'all 0.22s',
              }}
              onMouseEnter={e => { if (status !== 'sending') { e.target.style.background = 'var(--accent)' } }}
              onMouseLeave={e => { if (status !== 'sending') { e.target.style.background = 'var(--ink)' } }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message →'}
            </button>

            {status === 'success' && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--sage)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--sage)', display: 'inline-block' }}/>
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--blush)' }}>
                Something went wrong — please email me directly.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){#contact .section>div{grid-template-columns:1fr !important;gap:40px !important;}}
        input::placeholder,textarea::placeholder{color:var(--ink-4);}
      `}</style>
    </section>
  )
}
