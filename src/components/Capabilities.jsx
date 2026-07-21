import capabilitiesImg from '../assets/website images/comprehensive service,creative branding,stunning ui ux design.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiLayers, FiPenTool, FiTrendingUp } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    icon: FiLayers,
    tag: 'COMPREHENSIVE SERVICES',
    title: 'Full-Spectrum Digital Solutions',
    description:
      'Unleash the full potential of your business with our wide range of services — web development, Shopify stores, SEO, social media marketing, and custom applications — all tailored to your unique goals.',
    color: '#06b6d4',
  },
  {
    icon: FiPenTool,
    tag: 'CREATIVE BRANDING',
    title: 'Branding & Graphic Design',
    description:
      'Stand out in a competitive market with innovative branding strategies. From logos to complete brand identities, we craft visuals that create a lasting impact and build real customer loyalty.',
    color: '#a855f7',
  },
  {
    icon: FiTrendingUp,
    tag: 'STUNNING UI/UX DESIGN',
    title: 'User Experience & Interface Design',
    description:
      'Captivate your audience with visually stunning, user-friendly designs. We build interfaces that feel intuitive and look amazing — turning visitors into loyal customers.',
    color: '#3b82f6',
  },
]

const Capabilities = () => {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const cardsRef = useRef([])
  const imageRef = useRef(null)
  const badgeRef = useRef(null)
  const imgWrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Tag + heading + sub
      gsap.fromTo([tagRef.current, headingRef.current, subRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Cards stagger from left
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

      // Image slides from right
      gsap.fromTo(imgWrapRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imgWrapRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Badge pops in
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.6)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      )

      // Scroll-triggered parallax on image
      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      // Floating badge loop
      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      style={{
        backgroundColor: '#0d1117',
        padding: '100px 16px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-100px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-80px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom">

        {/* Section Label */}
        <div ref={tagRef} style={{ marginBottom: '12px', opacity: 0 }}>
          <span style={{
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '3px',
            color: '#06b6d4',
            textTransform: 'uppercase'
          }}>
            CAPABILITIES
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: '60px' }}>
          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '16px',
              opacity: 0
            }}
          >
            Creative studio with{' '}
            <span className="gradient-text">art & technology.</span>
          </h2>
          <p
            ref={subRef}
            style={{
              color: '#9ca3af',
              fontSize: '17px',
              maxWidth: '540px',
              lineHeight: '1.7',
              opacity: 0
            }}
          >
            Empower your digital journey with TheCoreFusion — combining strategy,
            design, and development to deliver real, measurable results.
          </p>
        </div>

        {/* Main Layout: Cards Left | Image Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}
          className="capabilities-grid"
        >
          {/* LEFT — Capability Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '28px',
                    borderRadius: '12px',
                    border: '1px solid #1f2d3d',
                    backgroundColor: 'rgba(17, 24, 39, 0.6)',
                    backdropFilter: 'blur(8px)',
                    transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                    opacity: 0
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = cap.color
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.boxShadow = `0 8px 32px ${cap.color}22`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1f2d3d'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: `${cap.color}18`,
                    border: `1px solid ${cap.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease'
                  }}>
                    <Icon size={24} color={cap.color} />
                  </div>

                  {/* Text */}
                  <div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '2px',
                      color: cap.color,
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px'
                    }}>
                      {cap.tag}
                    </span>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      marginBottom: '8px',
                      color: '#f3f4f6'
                    }}>
                      {cap.title}
                    </h3>
                    <p style={{
                      color: '#9ca3af',
                      fontSize: '14px',
                      lineHeight: '1.65'
                    }}>
                      {cap.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT — HD Image with floating badge */}
          <div ref={imgWrapRef} style={{ position: 'relative', opacity: 0 }}>

            {/* Image frame */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #1f2d3d',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              height: '580px',
              position: 'relative'
            }} className="cap-img-frame">
              <img
                ref={imageRef}
                src={capabilitiesImg}
                alt="Creative team collaborating"
                style={{
                  width: '100%',
                  height: '115%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
              {/* Image overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(13,17,23,0.7) 100%)'
              }} />
            </div>

            {/* Floating Stats Badge — Top Left */}
            <div
              ref={badgeRef}
              className="cap-badge"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '14px',
                padding: '20px 24px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                opacity: 0,
                zIndex: 10,
                minWidth: '160px'
              }}
            >
              <div style={{
                fontSize: '36px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1
              }}>
                100+
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', marginTop: '4px', lineHeight: '1.4' }}>
                Projects Delivered<br />Worldwide
              </div>
            </div>

            {/* Floating Stats Badge — Bottom Right */}
            <div className="cap-badge" style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-10px',
              backgroundColor: '#111827',
              border: '1px solid #374151',
              borderRadius: '14px',
              padding: '18px 22px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              zIndex: 10,
              minWidth: '150px',
              animation: 'floatBadge2 3s ease-in-out infinite'
            }}>
              <div style={{
                fontSize: '30px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1
              }}>
                90%
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', marginTop: '4px', lineHeight: '1.4' }}>
                Client Satisfaction<br />Rate
              </div>
            </div>

            {/* Decorative ring */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '1px dashed rgba(6,182,212,0.3)',
              animation: 'spinSlow 20s linear infinite',
              pointerEvents: 'none'
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatBadge2 {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
          .cap-img-frame { height: 340px !important; }
        }
        @media (max-width: 640px) {
          .capabilities-grid > div:last-child .cap-badge { display: none !important; }
          .cap-img-frame { height: 260px !important; }
        }
      `}</style>
    </section>
  )
}

export default Capabilities
