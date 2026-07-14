import React, { useEffect, useRef } from 'react'
import { FiZap, FiAward, FiTrendingUp, FiShield } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    icon: FiZap,
    title: 'Unmatched Expertise',
    description:
      'Our team comprises seasoned professionals with a wealth of experience in their respective fields, ensuring you receive the highest level of service and strategic guidance.',
    color: '#06b6d4',
  },
  {
    icon: FiAward,
    title: 'Proven Results',
    description:
      'We have a track record of delivering tangible results and driving success for our clients, making us a trusted partner to propel your business forward.',
    color: '#a855f7',
  },
  {
    icon: FiTrendingUp,
    title: 'Data-Driven Approach',
    description:
      'Every strategy we build is backed by real data and analytics, ensuring your investment drives measurable growth and maximum ROI.',
    color: '#3b82f6',
  },
  {
    icon: FiShield,
    title: 'End-to-End Support',
    description:
      'From the first discovery call to post-launch growth, we stand by your side at every stage — transparent, responsive, and fully committed.',
    color: '#10b981',
  },
]

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const cardsRef = useRef([])
  const imageWrapRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Tag + heading + body
      gsap.fromTo([tagRef.current, headingRef.current, bodyRef.current],
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Reason cards stagger up
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.65, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: card, start: 'top 86%', toggleActions: 'play none none none' }
          }
        )
      })

      // Image slides in from right
      gsap.fromTo(imageWrapRef.current,
        { opacity: 0, x: 70, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: imageWrapRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      )

      // Badge pop
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.5, rotation: 8 },
        {
          opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: 'elastic.out(1, 0.6)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 88%', toggleActions: 'play none none none' }
        }
      )

      // Parallax on image
      gsap.to(imageWrapRef.current?.querySelector('img'), {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top bottom', end: 'bottom top',
          scrub: 1.5
        }
      })

      // Badge float loop
      gsap.to(badgeRef.current, {
        y: -10, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      style={{
        backgroundColor: '#080c14',
        padding: '110px 16px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '15%', left: '-60px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-60px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom">

        {/* Section label */}
        <p ref={tagRef} style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '3px',
          color: '#06b6d4', textTransform: 'uppercase',
          marginBottom: '16px', opacity: 0, textAlign: 'center'
        }}>
          WHY CHOOSE OUR SERVICES?
        </p>

        <h2 ref={headingRef} style={{
          fontSize: 'clamp(28px, 5vw, 54px)',
          fontWeight: '800', lineHeight: '1.15',
          color: '#fff', marginBottom: '16px',
          textAlign: 'center', opacity: 0
        }}>
          We Solve <span className="gradient-text">Problems.</span>
        </h2>

        <p ref={bodyRef} style={{
          color: '#9ca3af', fontSize: '17px',
          lineHeight: '1.75', maxWidth: '640px',
          margin: '0 auto 72px', textAlign: 'center', opacity: 0
        }}>
          Reduction in operating costs for the whole product team — we create amazing
          opportunities by crafting top-notch user experiences. Choose TheCoreFusion and
          experience unparalleled excellence as we elevate your business to new heights.
        </p>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '72px',
          alignItems: 'center'
        }} className="why-grid">

          {/* LEFT — Reason cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  style={{
                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                    padding: '28px',
                    backgroundColor: 'rgba(17,24,39,0.6)',
                    border: '1px solid #1e2a3a',
                    borderRadius: '14px',
                    backdropFilter: 'blur(8px)',
                    transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                    cursor: 'default', opacity: 0
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = reason.color
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.boxShadow = `0 8px 32px ${reason.color}22`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e2a3a'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    borderRadius: '12px',
                    backgroundColor: `${reason.color}18`,
                    border: `1px solid ${reason.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon size={22} color={reason.color} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#f3f4f6', marginBottom: '8px' }}>
                      {reason.title}
                    </h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7' }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT — Image */}
          <div ref={imageWrapRef} style={{ position: 'relative', opacity: 0 }}>

            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              height: '560px', position: 'relative',
              boxShadow: '0 40px 100px rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1100&fit=crop&q=90"
                alt="Expert team working"
                style={{
                  width: '100%', height: '115%',
                  objectFit: 'cover', objectPosition: 'center top', display: 'block'
                }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 45%, rgba(8,12,20,0.7) 100%)'
              }} />
            </div>

            {/* Floating badge — top right */}
            <div
              ref={badgeRef}
              style={{
                position: 'absolute', top: '-20px', right: '-24px',
                backgroundColor: '#0d1117',
                border: '1px solid rgba(168,85,247,0.35)',
                borderRadius: '14px', padding: '20px 24px',
                boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
                opacity: 0, zIndex: 10, minWidth: '155px'
              }}
            >
              <div style={{
                fontSize: '38px', fontWeight: '800', lineHeight: 1,
                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                150+
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', marginTop: '5px', lineHeight: '1.4' }}>
                Projects Delivered<br />Successfully
              </div>
            </div>

            {/* Bottom-left badge */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-24px',
              backgroundColor: '#0d1117',
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '14px', padding: '18px 22px',
              boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
              zIndex: 10, minWidth: '145px',
              animation: 'whyFloat2 3.5s ease-in-out infinite'
            }}>
              <div style={{
                fontSize: '32px', fontWeight: '800', lineHeight: 1,
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                100+
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', marginTop: '5px', lineHeight: '1.4' }}>
                Happy Clients<br />Worldwide
              </div>
            </div>

            {/* Decorative ring */}
            <div style={{
              position: 'absolute', bottom: '-50px', right: '-50px',
              width: '130px', height: '130px', borderRadius: '50%',
              border: '1px dashed rgba(168,85,247,0.25)',
              animation: 'spinRing 25s linear infinite',
              pointerEvents: 'none'
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes whyFloat2 {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
