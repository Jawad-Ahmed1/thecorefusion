import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const headlineRef = useRef(null)
  const badgeRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Headline letters animate in
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 80, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.2 }
    )
    .fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.5, rotation: -15 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.6)' },
      '-=0.6'
    )

    // Floating orb animation
    gsap.to(orb1Ref.current, {
      y: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
    gsap.to(orb2Ref.current, {
      y: -20,
      x: 15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    })

    // Particles floating
    particlesRef.current.forEach((p, i) => {
      if (!p) return
      gsap.to(p, {
        y: gsap.utils.random(-40, 40),
        x: gsap.utils.random(-20, 20),
        opacity: gsap.utils.random(0.2, 0.8),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      })
    })
  }, [])

  const particles = Array.from({ length: 8 })

  return (
    <section
      id="hero"
      className="banner-style-one"
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Floating Particles */}
      {particles.map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          style={{
            position: 'absolute',
            width: `${4 + (i % 3) * 4}px`,
            height: `${4 + (i % 3) * 4}px`,
            borderRadius: '50%',
            background: i % 2 === 0
              ? 'rgba(6, 182, 212, 0.6)'
              : 'rgba(168, 85, 247, 0.6)',
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
            opacity: 0.4,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      {/* Circular Gradient Orb - Right */}
      <div ref={orb1Ref} style={{
        position: 'absolute',
        right: '-150px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)',
        filter: 'blur(80px)',
        opacity: '0.3',
      }} />

      {/* Blue Gradient Orb - Left */}
      <div ref={orb2Ref} style={{
        position: 'absolute',
        left: '1%',
        top: '10%',
        width: '400px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        filter: 'blur(60px)',
        opacity: '0.25',
        zIndex: '1'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: '10', width: '100%' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Left Content */}
          <div ref={headlineRef} style={{ flex: '1', minWidth: '300px', opacity: 0 }}>
            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: '800',
              marginBottom: '48px',
              paddingLeft: '40px',
              paddingTop: '120px',
              lineHeight: '1.1',
              letterSpacing: '-2px',
              color: '#ffffff'
            }}>
              DIGITAL<br />
              EXCELLENCE<br />
              <span style={{
                WebkitTextStroke: '2px #ffffff',
                color: 'transparent',
                display: 'inline-block'
              }}>DELIVERED</span>
            </h1>
          </div>

          {/* Right Content - Circular Badge */}
          <div ref={badgeRef} style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0
          }}>
            <div style={{
              position: 'relative',
              width: '206px',
              height: '206px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(6, 182, 212, 0.4), 0 0 120px rgba(6, 182, 212, 0.15)',
              animation: 'heroPulse 3s ease-in-out infinite'
            }}>
              <div style={{
                width: '185px',
                height: '185px',
                borderRadius: '50%',
                background: '#001a33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>+100</div>
                <div style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  textAlign: 'center',
                  maxWidth: '200px'
                }}>Projects Delivered<br />Successfully</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(6,182,212,0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 80px rgba(6,182,212,0.6); }
        }
      `}</style>
    </section>
  )
}

export default Hero
