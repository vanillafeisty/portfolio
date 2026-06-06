import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = e => { mouse.current = { x: e.clientX, y: e.clientY } }

    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (dotRef.current) {
        dotRef.current.style.left = mouse.current.x + 'px'
        dotRef.current.style.top  = mouse.current.y + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }

    const onEnter = () => document.body.classList.add('cursor-expand')
    const onLeave = () => document.body.classList.remove('cursor-expand')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,.card,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    raf.current = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div id="cursor">
      <div id="cursor-dot"  ref={dotRef}/>
      <div id="cursor-ring" ref={ringRef}/>
    </div>
  )
}
