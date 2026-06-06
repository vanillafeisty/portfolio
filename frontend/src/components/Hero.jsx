import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data'

/* ── Neural network canvas ── */
function NeuralCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.offsetWidth, H = canvas.offsetHeight
    canvas.width = W; canvas.height = H

    const nodes = Array.from({ length: 38 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
      r: Math.random()*2.5 + 1.2,
      hue: Math.random() > 0.5 ? 195 : 275,
    }))

    let raf
    function draw() {
      ctx.clearRect(0,0,W,H)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
      // connections
      for (let i=0; i<nodes.length; i++) {
        for (let j=i+1; j<nodes.length; j++) {
          const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y
          const dist = Math.sqrt(dx*dx+dy*dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            const alpha = (1-dist/110)*0.35
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      // dots
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2)
        ctx.fillStyle = n.hue === 195 ? 'rgba(0,212,255,0.7)' : 'rgba(124,58,237,0.7)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W; canvas.height = H
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={ref} style={{ width:'100%', height:'100%', display:'block' }}/>
}

/* ── Typewriter ── */
function Typewriter({ words }) {
  const [idx, setIdx]   = useState(0)
  const [text, setText] = useState('')
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t
    if (!del && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length+1)), 80)
    } else if (!del && text.length === word.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0,-1)), 45)
    } else {
      setDel(false); setIdx(i => (i+1)%words.length)
    }
    return () => clearTimeout(t)
  }, [text, del, idx, words])

  return (
    <span>
      <span style={{ background:'var(--grad)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
        {text}
      </span>
      <span style={{ animation:'blink 1s step-end infinite', color:'var(--cyan)' }}>|</span>
    </span>
  )
}

/* ── Stat counter ── */
function StatCard({ value, label, suffix, delay }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = () => {
          start += Math.ceil(value/40)
          if (start >= value) { setCount(value); return }
          setCount(start); requestAnimationFrame(step)
        }
        setTimeout(step, delay)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} style={{
      background:'var(--card)', border:'1px solid var(--border)',
      borderRadius:14, padding:'22px 28px', textAlign:'center',
      animation:`countUp 0.6s var(--ease) ${delay}ms both`,
      transition:'border-color 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,212,255,0.3)';e.currentTarget.style.boxShadow='0 0 20px rgba(0,212,255,0.1)'}}
    onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow='none'}}
    >
      <div style={{
        fontSize:36, fontWeight:800, color:'var(--white)',
        background:'var(--grad)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize:12, color:'var(--gray2)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:6, fontWeight:500 }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden' }}>

      {/* Background glow blobs */}
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div className="wrap" style={{ display:'grid', gridTemplateColumns:'1fr 420px', gap:60, alignItems:'center', paddingTop:100, paddingBottom:40, zIndex:1 }}>

        {/* Left */}
        <div>
          <div className="h1" style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:24, padding:'6px 14px', borderRadius:20, background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.2)' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--green)', animation:'pulse 2s ease-in-out infinite', display:'inline-block' }}/>
            <span style={{ fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--cyan)', fontWeight:600 }}>
              Available for opportunities
            </span>
          </div>

          <h1 className="h2" style={{ fontSize:'clamp(38px,5.5vw,62px)', fontWeight:800, color:'var(--white)', lineHeight:1.1, marginBottom:12 }}>
            Hi, I'm {profile.name.split(' ')[0]}.
          </h1>

          <h2 className="h3" style={{ fontSize:'clamp(28px,4vw,46px)', fontWeight:700, lineHeight:1.15, marginBottom:24 }}>
            <Typewriter words={['AI Engineer.','ML Developer.','Full Stack Dev.','Problem Solver.']}/>
          </h2>

          <p className="h4" style={{ fontSize:17, color:'var(--gray)', maxWidth:520, marginBottom:40, lineHeight:1.8 }}>
            Final-year CS student at <strong style={{color:'var(--white)'}}>NIST University</strong>, building intelligent systems with neural networks, LLMs, and full-stack engineering. Deloitte pathway intern. Emergency AI researcher.
          </p>

          <div className="h5" style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:48 }}>
            <a href="#projects" style={{
              padding:'12px 26px', borderRadius:10,
              background:'var(--grad)', color:'#fff',
              fontWeight:600, fontSize:14, letterSpacing:'0.03em',
              transition:'opacity 0.2s, transform 0.2s', display:'inline-block',
            }}
            onMouseEnter={e=>{e.target.style.opacity='0.85';e.target.style.transform='translateY(-1px)'}}
            onMouseLeave={e=>{e.target.style.opacity='1';e.target.style.transform='none'}}
            >
              View Projects →
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" style={{
              padding:'12px 26px', borderRadius:10,
              background:'transparent', color:'var(--white)',
              border:'1px solid rgba(255,255,255,0.15)',
              fontWeight:600, fontSize:14, letterSpacing:'0.03em',
              transition:'border-color 0.2s, background 0.2s', display:'inline-block',
            }}
            onMouseEnter={e=>{e.target.style.borderColor='rgba(0,212,255,0.4)';e.target.style.background='rgba(0,212,255,0.05)'}}
            onMouseLeave={e=>{e.target.style.borderColor='rgba(255,255,255,0.15)';e.target.style.background='transparent'}}
            >
              View Résumé
            </a>
          </div>

          {/* Socials */}
          <div className="h6" style={{ display:'flex', gap:20 }}>
            {[
              { label:'GitHub', href: profile.github },
              { label:'LinkedIn', href: profile.linkedin },
              { label: profile.email, href:`mailto:${profile.email}` },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize:12, color:'var(--gray3)', letterSpacing:'0.06em', transition:'color 0.2s', fontWeight:500 }}
              onMouseEnter={e=>e.target.style.color='var(--cyan)'}
              onMouseLeave={e=>e.target.style.color='var(--gray3)'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — neural net */}
        <div className="h3 hide-mob" style={{
          position:'relative', height:420, borderRadius:20,
          background:'var(--card)', border:'1px solid var(--border)',
          overflow:'hidden',
        }}>
          <NeuralCanvas/>
          {/* Overlay label */}
          <div style={{ position:'absolute', bottom:18, left:'50%', transform:'translateX(-50%)', whiteSpace:'nowrap' }}>
            <span style={{ fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gray3)', fontWeight:500 }}>
              Neural Network Visualization
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="wrap" style={{ paddingBottom:80, zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          {stats.map((s,i) => <StatCard key={s.label} {...s} delay={i*100+900}/>)}
        </div>
      </div>

      <style>{`@media(max-width:800px){#hero .wrap:first-of-type{grid-template-columns:1fr !important;} #hero .wrap:last-of-type > div{grid-template-columns:repeat(2,1fr) !important;}}`}</style>
    </section>
  )
}
