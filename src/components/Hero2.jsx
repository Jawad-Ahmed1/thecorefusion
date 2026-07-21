import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import heroImage from '../assets/img.png'

const Hero2 = () => {
  const tagRef   = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const ctaRef   = useRef(null)
  const imgRef   = useRef(null)
  const subRef   = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(tagRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo([line1Ref.current, line2Ref.current, line3Ref.current],
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
      '-=0.2'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.5'
    )
    .fromTo(imgRef.current,
      { opacity: 0, scale: 0.8, rotation: -6 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.3, ease: 'elastic.out(1, 0.65)' },
      0.3
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.5'
    )

    // Continuous float
    gsap.to(imgRef.current, {
      y: -20, rotation: 3,
      duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5
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

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Ambient glow left */}
      <div style={{
        position: 'absolute', left: '-100px', top: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-custom hero2-grid" style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
        padding: '80px 64px',
      }}>

        {/* ── LEFT ── */}
        <div style={{ paddingRight: '40px' }}>

          {/* Tag */}
          <p ref={tagRef} style={{
            fontSize: '13px', fontWeight: '500',
            color: '#9ca3af', marginBottom: '40px',
            display: 'flex', alignItems: 'center', gap: '10px',
            opacity: 0, letterSpacing: '0.5px',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: '#06b6d4', display: 'inline-block', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(6,182,212,0.2)',
              animation: 'heroDot 2s ease-in-out infinite',
            }} />
            Aspire to Inspire
          </p>

          {/* Big heading — each word on own line */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ overflow: 'hidden' }}>
              <h1 ref={line1Ref} style={{
                fontSize: 'clamp(64px, 10vw, 128px)',
                fontWeight: '900', lineHeight: '0.95',
                letterSpacing: '-4px', color: '#ffffff',
                margin: 0, opacity: 0,
              }}>Crafting</h1>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <h1 ref={line2Ref} style={{
                fontSize: 'clamp(64px, 10vw, 128px)',
                fontWeight: '900', lineHeight: '0.95',
                letterSpacing: '-4px', color: '#ffffff',
                margin: 0, opacity: 0,
              }}>Amazing</h1>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <h1 ref={line3Ref} style={{
                fontSize: 'clamp(64px, 10vw, 128px)',
                fontWeight: '900', lineHeight: '0.95',
                letterSpacing: '-4px',
                WebkitTextStroke: '2px rgba(255,255,255,0.6)',
                color: 'transparent',
                margin: 0, opacity: 0,
              }}>Work.</h1>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontSize: '15px', fontWeight: '600', color: '#d1d5db',
              textDecoration: 'none', letterSpacing: '0.3px',
              transition: 'color 0.3s, gap 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#06b6d4'; e.currentTarget.style.gap = '20px' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#d1d5db'; e.currentTarget.style.gap = '12px' }}
            >
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Blob image */}
          <img
            ref={imgRef}
            src={heroImage}
            alt="CoreFusion creative"
            style={{
              width: '100%', maxWidth: '580px',
              height: 'auto', display: 'block',
              opacity: 0,
              filter: 'drop-shadow(0 40px 80px rgba(168,85,247,0.35)) drop-shadow(0 0 60px rgba(6,182,212,0.2))',
            }}
          />

          {/* Sub text — bottom, same position as reference */}
          <div ref={subRef} style={{
            marginTop: '32px', opacity: 0,
          }}>
            <p style={{
              fontSize: '13px', fontWeight: '500',
              color: '#6b7280', marginBottom: '6px', letterSpacing: '0.3px',
            }}>
              We're Mavericks:
            </p>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              fontWeight: '800', color: '#fff', lineHeight: '1.4',
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
        @keyframes heroDot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(6,182,212,0.2); }
          50%       { box-shadow: 0 0 0 6px rgba(6,182,212,0.4); }
        }
        @media (max-width: 900px) {
          .hero2-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 24px 48px !important;
            gap: 40px !important;
          }
          .hero2-grid > div:first-child { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero2
