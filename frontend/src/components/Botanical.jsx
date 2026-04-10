/* Reusable botanical SVG illustrations — inline, no external assets needed */

export function LeafCluster({ style, opacity = 0.55, floatClass = 'float-a', color = '#4a5a38' }) {
  return (
    <svg
      viewBox="0 0 120 140"
      style={{ width: 110, height: 130, ...style }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={floatClass}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path d="M60 130 C60 100 58 70 55 40" stroke={color} strokeWidth="1" opacity={opacity} strokeLinecap="round"/>
      {/* Left leaf 1 */}
      <path d="M55 90 C40 75 22 72 18 58 C30 55 46 62 55 80Z" stroke={color} strokeWidth="0.9" opacity={opacity} fill="none"/>
      <path d="M55 90 C50 77 45 68 42 60" stroke={color} strokeWidth="0.6" opacity={opacity * 0.6}/>
      {/* Right leaf 1 */}
      <path d="M57 72 C70 56 88 52 92 38 C80 38 65 46 57 62Z" stroke={color} strokeWidth="0.9" opacity={opacity} fill="none"/>
      <path d="M57 72 C62 59 68 51 72 44" stroke={color} strokeWidth="0.6" opacity={opacity * 0.6}/>
      {/* Left leaf 2 */}
      <path d="M56 52 C42 38 26 36 22 22 C35 20 50 28 56 44Z" stroke={color} strokeWidth="0.9" opacity={opacity} fill="none"/>
      {/* Small right bud */}
      <path d="M55 40 C62 30 72 26 76 18 C66 20 56 28 55 40Z" stroke={color} strokeWidth="0.8" opacity={opacity * 0.8} fill="none"/>
      {/* Tiny leaves at top */}
      <path d="M54 32 C50 22 52 14 55 10 C58 14 58 23 55 30Z" stroke={color} strokeWidth="0.7" opacity={opacity * 0.7} fill="none"/>
    </svg>
  )
}

export function LeafSprig({ style, opacity = 0.5, floatClass = 'float-b', color = '#4a5a38' }) {
  return (
    <svg viewBox="0 0 80 100" style={{ width: 72, height: 90, ...style }} fill="none" className={floatClass} aria-hidden="true">
      <path d="M40 95 C40 70 38 45 36 20" stroke={color} strokeWidth="1" opacity={opacity} strokeLinecap="round"/>
      <path d="M36 70 C24 57 10 54 6 42 C18 40 32 48 36 62Z" stroke={color} strokeWidth="0.85" opacity={opacity} fill="none"/>
      <path d="M36 48 C46 35 58 32 62 20 C52 20 40 28 36 42Z" stroke={color} strokeWidth="0.85" opacity={opacity} fill="none"/>
      <path d="M36 28 C28 18 22 14 18 6 C28 6 36 14 36 26Z" stroke={color} strokeWidth="0.8" opacity={opacity * 0.8} fill="none"/>
    </svg>
  )
}

export function TinyLeaf({ style, opacity = 0.4, floatClass = 'float-c', color = '#4a5a38' }) {
  return (
    <svg viewBox="0 0 50 60" style={{ width: 44, height: 54, ...style }} fill="none" className={floatClass} aria-hidden="true">
      <path d="M25 55 C25 38 24 22 22 8" stroke={color} strokeWidth="0.9" opacity={opacity} strokeLinecap="round"/>
      <path d="M22 40 C14 30 5 28 3 18 C12 17 20 24 22 35Z" stroke={color} strokeWidth="0.8" opacity={opacity} fill="none"/>
      <path d="M23 24 C30 16 38 13 40 5 C33 5 24 12 23 22Z" stroke={color} strokeWidth="0.8" opacity={opacity} fill="none"/>
    </svg>
  )
}

export function FloralDots({ style, opacity = 0.4 }) {
  return (
    <svg viewBox="0 0 60 60" style={{ width: 56, height: 56, ...style }} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="#7a9e7e" opacity={opacity} className="float-c"/>
      <circle cx="30" cy="8" r="1.8" fill="#c9a99a" opacity={opacity * 0.8}/>
      <circle cx="48" cy="16" r="3" fill="#b5a898" opacity={opacity * 0.7}/>
      <circle cx="20" cy="38" r="2" fill="#7a9e7e" opacity={opacity * 0.9}/>
      <circle cx="44" cy="40" r="2.5" fill="#c9a99a" opacity={opacity}/>
      <circle cx="8" cy="50" r="1.5" fill="#b5a898" opacity={opacity * 0.6}/>
      <circle cx="50" cy="54" r="2" fill="#7a9e7e" opacity={opacity * 0.5}/>
    </svg>
  )
}

export function Berries({ style, opacity = 0.45, floatClass = 'float-b', color = '#4a5a38' }) {
  return (
    <svg viewBox="0 0 90 100" style={{ width: 82, height: 92, ...style }} fill="none" className={floatClass} aria-hidden="true">
      <path d="M45 95 C45 75 44 55 42 30" stroke={color} strokeWidth="1" opacity={opacity} strokeLinecap="round"/>
      <path d="M42 75 C32 62 18 60 14 48 C26 46 38 54 42 66Z" stroke={color} strokeWidth="0.85" opacity={opacity} fill="none"/>
      <path d="M43 55 C52 42 64 39 68 27 C58 27 46 36 43 48Z" stroke={color} strokeWidth="0.85" opacity={opacity} fill="none"/>
      {/* Berries */}
      <circle cx="15" cy="47" r="4" fill="#c9a99a" opacity={opacity * 0.8}/>
      <circle cx="22" cy="42" r="3.5" fill="#c9a99a" opacity={opacity * 0.7}/>
      <circle cx="69" cy="26" r="4" fill="#7a9e7e" opacity={opacity * 0.7}/>
      <circle cx="62" cy="22" r="3" fill="#7a9e7e" opacity={opacity * 0.6}/>
      <circle cx="42" cy="28" r="3.5" fill="#b5a898" opacity={opacity * 0.6}/>
    </svg>
  )
}

export function CornerLeaves({ style, opacity = 0.38, color = '#4a5a38' }) {
  return (
    <svg viewBox="0 0 160 160" style={{ width: 140, height: 140, ...style }} fill="none" aria-hidden="true">
      <path d="M10 10 C10 50 30 80 60 90" stroke={color} strokeWidth="1" opacity={opacity} strokeLinecap="round"/>
      <path d="M30 20 C16 35 10 55 20 72 C35 58 40 38 30 22Z" stroke={color} strokeWidth="0.9" opacity={opacity} fill="none"/>
      <path d="M10 40 C28 38 42 48 44 64 C28 66 14 56 10 42Z" stroke={color} strokeWidth="0.9" opacity={opacity} fill="none"/>
      <path d="M20 72 C36 70 48 78 50 92 C34 94 22 84 20 74Z" stroke={color} strokeWidth="0.85" opacity={opacity * 0.8} fill="none"/>
      <circle cx="60" cy="92" r="3" fill="#c9a99a" opacity={opacity * 0.9}/>
      <circle cx="50" cy="94" r="2.2" fill="#7a9e7e" opacity={opacity * 0.7}/>
    </svg>
  )
}

export function HeroBg() {
  return (
    <svg
      viewBox="0 0 900 600"
      style={{
        position: 'absolute', top: 0, right: 0,
        width: '65%', height: '100%',
        opacity: 0.18, pointerEvents: 'none',
      }}
      fill="none"
      aria-hidden="true"
    >
      {/* Large arching botanical — top right */}
      <path d="M800 0 C780 80 740 140 680 170" stroke="#4a5a38" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M720 30 C700 60 690 100 700 130 C720 110 740 80 722 32Z" stroke="#4a5a38" strokeWidth="1" fill="none"/>
      <path d="M760 10 C740 40 730 80 740 110 C758 90 768 60 762 12Z" stroke="#4a5a38" strokeWidth="1" fill="none"/>
      <path d="M800 0 C820 40 830 90 820 120 C800 100 792 60 800 2Z" stroke="#4a5a38" strokeWidth="1" fill="none"/>
      {/* Berries */}
      <circle cx="680" cy="170" r="6" fill="#c9a99a" opacity="0.9"/>
      <circle cx="695" cy="162" r="4.5" fill="#c9a99a" opacity="0.8"/>
      <circle cx="668" cy="178" r="5" fill="#7a9e7e" opacity="0.8"/>
      {/* Trailing stem */}
      <path d="M680 170 C640 220 600 280 580 340" stroke="#4a5a38" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M630 220 C610 240 600 265 608 286 C624 268 632 244 632 222Z" stroke="#4a5a38" strokeWidth="0.85" fill="none"/>
      <path d="M608 284 C592 300 585 320 590 338 C604 322 612 302 610 286Z" stroke="#4a5a38" strokeWidth="0.8" fill="none"/>
      {/* Scattered dots */}
      <circle cx="850" cy="80" r="3" fill="#7a9e7e" opacity="0.7"/>
      <circle cx="870" cy="200" r="4" fill="#c9a99a" opacity="0.6"/>
      <circle cx="820" cy="300" r="2.5" fill="#b5a898" opacity="0.7"/>
      <circle cx="760" cy="400" r="3.5" fill="#7a9e7e" opacity="0.5"/>
    </svg>
  )
}
