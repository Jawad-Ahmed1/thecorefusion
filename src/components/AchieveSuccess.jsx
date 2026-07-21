import achieveImg from '../assets/website images/Ignite Your Sales Growth..png'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AchieveSuccess = () => {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const statRef = useRef(null)
  const statNumRef = useRef(null)
  const imageRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Tag
      gsap.fromTo(tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      // Heading
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      )

      // Body text
      gsap.fromTo(bodyRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 84%', toggleActions: 'play none none none' } }
      )

      // CTA
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      )

      // Image slides from right
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      )

      // Counter animation
      const obj = { val: 0 }
      gsap.to(obj, {
        val: 65,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (statNumRef.current) statNumRef.current.textContent = Math.floor(obj.val) + '%'
        },
        scrollTrigger: { trigger: statRef.current, start: 'top 85%', toggleActions: 'play none none none' }
      })

      // Stat box pop
      gsap.fromTo(statRef.current,
        { opacity: 0, scale: 0.7, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: 'elastic.out(1, 0.6)',
          scrollTrigger: { trigger: statRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      // Parallax on image
      gsap.to(imageRef.current?.querySelector('img'), {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="achieve-success"
      style={{
        backgroundColor: '#080b12',
        padding: '110px 16px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="achieve-grid">

          {/* LEFT — Text */}
          <div>
            <p ref={tagRef} style={{
              fontSize: '11px', fontWeight: '700', letterSpacing: '3px',
              color: '#06b6d4', textTransform: 'uppercase',
              marginBottom: '20px', opacity: 0
            }}>
              ACHIEVE EXPONENTIAL SUCCESS
            </p>

            <h2 ref={headingRef} style={{
              fontSize: 'clamp(30px, 4.5vw, 58px)',
              fontWeight: '800', lineHeight: '1.15',
              color: '#ffffff', marginBottom: '24px', opacity: 0
            }}>
              Ignite Your{' '}
              <span className="gradient-text">Sales Growth.</span>
            </h2>

            <p ref={bodyRef} style={{
              color: '#9ca3af', fontSize: '16px',
              lineHeight: '1.8', marginBottom: '40px', opacity: 0,
              maxWidth: '500px'
            }}>
              Propel your business to new heights with our result-driven growth solutions.
              Our expert team of strategists and marketers is committed to accelerating your
              revenue and expanding your market reach. Harness the power of data-driven
              insights, cutting-edge technologies, and tailored strategies to unlock untapped
              opportunities and witness remarkable growth like never before.
            </p>

            <div ref={ctaRef} style={{ opacity: 0 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 32px',
                  background: 'linear-gradient(to right, #06b6d4, #2563eb)',
                  color: '#fff', fontWeight: '700', fontSize: '15px',
                  borderRadius: '8px', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(6,182,212,0.25)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(6,182,212,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,182,212,0.25)'
                }}
              >
                Get Started <FiArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT — Image + Stat Badge */}
          <div ref={imageRef} style={{ position: 'relative', opacity: 0 }}>

            {/* Main Image */}
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              height: '520px', position: 'relative',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <img
                src={achieveImg}
                alt="Business growth and success"
                style={{
                  width: '100%', height: '115%',
                  objectFit: 'cover', objectPosition: 'center top', display: 'block'
                }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(8,11,18,0.75) 100%)'
              }} />
            </div>

            {/* Floating Stat Badge */}
            <div
              ref={statRef}
              style={{
                position: 'absolute', bottom: '-24px', left: '-32px',
                backgroundColor: '#0d1117',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '16px', padding: '24px 28px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                opacity: 0, zIndex: 10, minWidth: '180px',
                animation: 'floatStat 3s ease-in-out infinite'
              }}
            >
              <div
                ref={statNumRef}
                style={{
                  fontSize: '48px', fontWeight: '800', lineHeight: 1,
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                0%
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', marginTop: '6px', lineHeight: '1.4' }}>
                Average Increase in<br />Client Revenue
              </div>
            </div>

            {/* Decorative dots grid */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '100px', height: '100px',
              backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.4) 1px, transparent 1px)',
              backgroundSize: '12px 12px',
              pointerEvents: 'none'
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatStat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @media (max-width: 900px) {
          .achieve-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

export default AchieveSuccess
