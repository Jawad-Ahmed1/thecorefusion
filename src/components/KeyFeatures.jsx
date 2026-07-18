import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    color: '#06b6d4',
    title: 'Strategy',
    description:
      'We craft data-driven digital strategies that align with your business goals and drive measurable growth across every channel.',
    icon: (color) => (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        {/* Concentric rings — Strategy / target */}
        <circle cx="21" cy="21" r="18" stroke={color} strokeWidth="1.4" opacity="0.25" />
        <circle cx="21" cy="21" r="12" stroke={color} strokeWidth="1.4" opacity="0.5" />
        <circle cx="21" cy="21" r="6"  stroke={color} strokeWidth="1.8" />
        <circle cx="21" cy="21" r="2"  fill={color} />
        {/* Top tick */}
        <line x1="21" y1="3"  x2="21" y2="7"  stroke={color} strokeWidth="2" strokeLinecap="round" />
        {/* Right tick */}
        <line x1="39" y1="21" x2="35" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: '#a855f7',
    title: 'Synchronize',
    description:
      'We synchronize every moving part of your digital presence — design, development, SEO, and marketing working as one.',
    icon: (color) => (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        {/* Clock / sync icon */}
        <circle cx="21" cy="21" r="17" stroke={color} strokeWidth="1.6" opacity="0.35" />
        <circle cx="21" cy="21" r="11" stroke={color} strokeWidth="1.6" />
        {/* Clock hands */}
        <line x1="21" y1="21" x2="21" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="21" x2="27" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="21" r="1.8" fill={color} />
        {/* Sync arrow arc hint */}
        <path d="M33 10 Q38 21 33 32" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.45" />
      </svg>
    ),
  },
  {
    color: '#3b82f6',
    title: 'Control',
    description:
      'Full transparency and control over your campaigns — real-time dashboards, detailed reporting, and direct communication at every step.',
    icon: (color) => (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        {/* Gear / settings */}
        <circle cx="21" cy="21" r="7" stroke={color} strokeWidth="1.8" />
        {/* Gear teeth */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = 21 + 10 * Math.cos(rad)
          const y1 = 21 + 10 * Math.sin(rad)
          const x2 = 21 + 14 * Math.cos(rad)
          const y2 = 21 + 14 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        })}
        <circle cx="21" cy="21" r="2.5" fill={color} />
      </svg>
    ),
  },
  {
    color: '#10b981',
    title: 'Education',
    description:
      'We keep you informed every step of the way — educating clients on strategies, tools, and best practices so you can make confident decisions.',
    icon: (color) => (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        {/* Open book */}
        <path d="M8 12 Q21 8 21 12 L21 32 Q8 28 8 32 Z"  stroke={color} strokeWidth="1.6" fill="none" />
        <path d="M34 12 Q21 8 21 12 L21 32 Q34 28 34 32 Z" stroke={color} strokeWidth="1.6" fill="none" />
        {/* Lines on pages */}
        <line x1="11" y1="18" x2="18" y2="17" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="11" y1="22" x2="18" y2="21" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="11" y1="26" x2="18" y2="25" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="24" y1="17" x2="31" y2="18" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="24" y1="21" x2="31" y2="22" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="24" y1="25" x2="31" y2="26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
]

const KeyFeatures = () => {
  const sectionRef  = useRef(null)
  const tagRef      = useRef(null)
  const headingRef  = useRef(null)
  const dividerRef  = useRef(null)
  const cardsRef    = useRef([])
  const iconRefs    = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Tag line fades up
      gsap.fromTo(tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      )

      // Heading slides up
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      )

      // Divider line draws in
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 90%', toggleActions: 'play none none none' } }
      )

      // Cards stagger up
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.75, ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Icons spin-in
      iconRefs.current.forEach((icon, i) => {
        if (!icon) return
        gsap.fromTo(icon,
          { rotation: -30, scale: 0.4, opacity: 0 },
          {
            rotation: 0, scale: 1, opacity: 1,
            duration: 0.9, ease: 'elastic.out(1, 0.55)',
            delay: i * 0.12 + 0.15,
            scrollTrigger: { trigger: icon, start: 'top 90%', toggleActions: 'play none none none' }
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#07090f',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1a2234',
        borderBottom: '1px solid #1a2234',
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p
            ref={tagRef}
            style={{
              fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px',
              color: '#06b6d4', textTransform: 'uppercase',
              marginBottom: '16px', opacity: 0,
            }}
          >
            WHY IT WORKS
          </p>
          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(26px, 4.5vw, 50px)',
              fontWeight: '800', lineHeight: '1.2',
              marginBottom: '0', opacity: 0,
            }}
          >
            The Pillars of Our{' '}
            <span className="gradient-text">Approach</span>
          </h2>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          style={{
            height: '1px', margin: '48px 0 64px',
            background: 'linear-gradient(to right, transparent, #1a2234 20%, #1a2234 80%, transparent)',
          }}
        />

        {/* 4-column feature grid */}
        <div className="kf-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }}>
          {features.map((feat, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              style={{
                padding: '40px 36px 44px',
                borderRight: i < features.length - 1 ? '1px solid #1a2234' : 'none',
                opacity: 0,
                position: 'relative',
                transition: 'background-color 0.35s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = `${feat.color}06`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {/* Hover top accent line */}
              <div
                className={`kf-accent-${i}`}
                style={{
                  position: 'absolute', top: 0, left: '36px', right: '36px',
                  height: '2px',
                  background: `linear-gradient(to right, ${feat.color}, ${feat.color}44)`,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left center',
                  transition: 'transform 0.4s ease',
                  borderRadius: '2px',
                }}
              />

              {/* Icon circle */}
              <div
                ref={el => iconRefs.current[i] = el}
                style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  backgroundColor: `${feat.color}12`,
                  border: `1px solid ${feat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px', opacity: 0,
                  transition: 'background-color 0.3s, border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = `${feat.color}22`
                  e.currentTarget.style.borderColor = `${feat.color}60`
                  e.currentTarget.style.transform = 'scale(1.08) rotate(5deg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = `${feat.color}12`
                  e.currentTarget.style.borderColor = `${feat.color}30`
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                }}
              >
                {feat.icon(feat.color)}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '20px', fontWeight: '800',
                color: '#ffffff', marginBottom: '14px',
                letterSpacing: '-0.2px',
              }}>
                {feat.title}
              </h3>

              {/* Description */}
              <p style={{
                color: '#6b7280', fontSize: '14px',
                lineHeight: '1.8',
              }}>
                {feat.description}
              </p>

              {/* Subtle color dot */}
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                backgroundColor: feat.color,
                marginTop: '24px',
                opacity: 0.6,
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .kf-grid > div:hover > div:first-child {
          transform: scaleX(1) !important;
        }
        @media (max-width: 1024px) {
          .kf-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .kf-grid > div:nth-child(2) { border-right: none !important; }
          .kf-grid > div:nth-child(3) { border-right: 1px solid #1a2234 !important; border-top: 1px solid #1a2234; }
          .kf-grid > div:nth-child(4) { border-top: 1px solid #1a2234; }
        }
        @media (max-width: 600px) {
          .kf-grid { grid-template-columns: 1fr !important; }
          .kf-grid > div { border-right: none !important; border-top: 1px solid #1a2234; }
          .kf-grid > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  )
}

export default KeyFeatures
