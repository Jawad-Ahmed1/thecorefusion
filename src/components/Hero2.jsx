import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import heroImage from '../assets/image.jpeg'

const Hero2 = () => {
  const tagRef    = useRef(null)
  const titleRef  = useRef(null)
  const ctaRef    = useRef(null)
  const imgRef    = useRef(null)
  const subRef    = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Tag slides down
    tl.fromTo(tagRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    // Title lines stagger up
    .fromTo(titleRef.current?.children || [],
      { opacity: 0, y: 60, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 },
      '-=0.3'
    )
    // CTA fades up
    .fromTo(ctaRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    // Sub text fades in
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.5'
    )
    // Image scales in with rotation
    .fromTo(imgRef.current,
      { opacity: 0, scale: 0.75, rotation: -8 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.7)' },
      '-=0.9'
    )

    // Continuous float on the blob image
    gsap.to(imgRef.current, {
      y: -18, rotation: 4,
      duration: 5, repeat: -1, yoyo: true,
      ease: 'sine.inOut', delay: 1.2
    })

    // Particles float
    particlesRef.current.forEach((p, i) => {
      if (!p) return
      gsap.to(p, {
        y: gsap.utils.random(-30, 30),
        x: gsap.utils.random(-15, 15),
        rotation: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(3, 6),
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      })
    })
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#060810',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '64px',
    }}>

      {/* Subtle background grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} ref={el => particlesRef.current[i] = el} style={{
          position: 'absolute', pointerEvents: 'none',
          width: `${6 + i * 3}px`, height: `${6 + i * 3}px`,
          borderRadius: '50%',
          background: i % 2 === 0
            ? 'rgba(6,182,212,0.5)'
            : 'rgba(168,85,247,0.4)',
          left: `${8 + i * 12}%`,
          top: `${20 + (i % 3) * 22}%`,
          filter: 'blur(1px)',
        }} />
      ))}

      <div style={{
        maxWidth: '1400px', width: '100%',
        margin: '0 auto', padding: '0 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
      }} className="hero2-grid">

        {/* ── LEFT — Text ── */}
        <div style={{ zIndex: 2 }}>

          {/* Tag */}
          <p ref={tagRef} style={{
            fontSize: '13px', fontWeight: '600', letterSpacing: '2px',
            color: '#9ca3af', marginBottom: '32px',
            display: 'flex', alignItems: 'center', gap: '10px',
            opacity: 0,
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: '#06b6d4', display: 'inline-block',
              boxShadow: '0 0 8px rgba(6,182,212,0.8)',
              animation: 'dotPulse 1.5s ease-in-out infinite',
            }} />
            Aspire to Inspire
          </p>

          {/* Main heading — split into lines like the reference */}
          <div ref={titleRef} style={{ marginBottom: '52px', overflow: 'hidden' }}>
            {['Crafting', 'Amazing', 'Work.'].map((word, i) => (
              <div key={i} style={{ overflow: 'hidden', lineHeight: '1.0' }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(52px, 9vw, 110px)',
                  fontWeight: '900',
                  letterSpacing: '-3px',
                  lineHeight: '1.05',
                  color: i === 2 ? 'transparent' : '#ffffff',
                  WebkitTextStroke: i === 2 ? '2px #ffffff' : 'none',
                  opacity: 0,
                }}>
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontSize: '15px', fontWeight: '700', color: '#9ca3af',
                textDecoration: 'none', letterSpacing: '0.5px',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
                paddingBottom: '6px',
                transition: 'color 0.3s ease, border-color 0.3s ease, gap 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#06b6d4'
                e.currentTarget.style.borderBottomColor = '#06b6d4'
                e.currentTarget.style.gap = '18px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#9ca3af'
                e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.gap = '10px'
              }}
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── RIGHT — Blob image + sub text ── */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center', zIndex: 2 }}>

          {/* Blob image */}
          <div ref={imgRef} style={{
            width: '100%', maxWidth: '520px',
            margin: '0 auto 0 auto',
            position: 'relative', opacity: 0,
          }}>
            <img
              src={heroImage}
              alt="Creative abstract"
              style={{
                width: '100%', height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 30px 80px rgba(168,85,247,0.3)) drop-shadow(0 0 40px rgba(6,182,212,0.2))',
              }}
            />
          </div>

          {/* Sub text — bottom left of right column, like the reference */}
          <div ref={subRef} style={{
            marginTop: '32px', paddingLeft: '8px', opacity: 0,
          }}>
            <p style={{
              fontSize: '13px', fontWeight: '500', color: '#6b7280',
              marginBottom: '6px', letterSpacing: '0.5px',
            }}>
              We're Mavericks:
            </p>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: '800', color: '#fff',
              lineHeight: '1.35',
            }}>
              See Our Space<br />
              <span style={{
                background: 'linear-gradient(to right, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                We Love Our Customers.
              </span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(6,182,212,0.8); transform: scale(1); }
          50%       { box-shadow: 0 0 16px rgba(6,182,212,1); transform: scale(1.3); }
        }
        @media (max-width: 768px) {
          .hero2-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero2
