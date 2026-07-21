import passionImg from '../assets/website images/MADE WITH PASSION modern and cutting approach.png'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Words that cycle with the typewriter animation
const CYCLING_WORDS = [
  'brands,',
  'websites,',
  'stores,',
  'campaigns,',
  'identities,',
]

const useTypewriter = (words, trigger) => {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (trigger) setStarted(true)
  }, [trigger])

  useEffect(() => {
    if (!started) return

    const current = words[wordIndex]
    let timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1600)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, started])

  return displayed
}

const PassionStatement = () => {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const ctaRef = useRef(null)
  const imageCardRef = useRef(null)
  const [animTrigger, setAnimTrigger] = useState(false)

  const typedWord = useTypewriter(CYCLING_WORDS, animTrigger)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Image card slides in from left
      gsap.fromTo(imageCardRef.current,
        { opacity: 0, x: -70, rotation: -4 },
        {
          opacity: 1, x: 0, rotation: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            onEnter: () => setAnimTrigger(true)
          }
        }
      )

      // Tag fades in
      gsap.fromTo(tagRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Heading lines animate in
      gsap.fromTo([line1Ref.current, line2Ref.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: line1Ref.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      )

      // CTA slides up
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none none' }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#060810',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'stretch'
      }}
    >
      {/* Subtle texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6,182,212,0.04) 0%, transparent 60%),
                          radial-gradient(circle at 80% 50%, rgba(168,85,247,0.04) 0%, transparent 60%)`,
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '64px',
        paddingRight: '64px'
      }}
        className="passion-layout passion-container"
      >

        {/* LEFT — Image Card */}
        <div
          ref={imageCardRef}
          style={{
            position: 'relative',
            width: '300px',
            flexShrink: 0,
            opacity: 0,
            overflow: 'hidden'
          }}
          className="passion-image-col"
        >
          <img
            src={passionImg}
            alt="Creative work"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'saturate(1.4) contrast(1.05)'
            }}
          />
          {/* Gradient overlay on image */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(6,182,212,0.35) 0%, rgba(168,85,247,0.45) 100%)',
            mixBlendMode: 'multiply'
          }} />
          {/* Bottom label */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '24px 20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'
          }}>
            <p style={{
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '2.5px', color: '#fff',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>
              WHAT'S IN THE WORKS?
            </p>
            <p style={{
              fontSize: '11px', fontWeight: '600',
              letterSpacing: '2px', color: '#06b6d4',
              textTransform: 'uppercase', cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#a855f7'}
              onMouseLeave={e => e.currentTarget.style.color = '#06b6d4'}
            >
              EXPLORE PROJECTS
            </p>
          </div>
        </div>

        {/* RIGHT — Text Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          position: 'relative'
        }}
          className="passion-text-col"
        >

          {/* Tag */}
          <p ref={tagRef} style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '3px',
            color: '#6b7280',
            textTransform: 'uppercase',
            marginBottom: '28px',
            opacity: 0
          }}>
            MADE WITH PASSION
          </p>

          {/* Heading */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              ref={line1Ref}
              style={{
                fontSize: 'clamp(26px, 3.8vw, 52px)',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#ffffff',
                marginBottom: '4px',
                opacity: 0
              }}
            >
              Modern and cutting-edge approach<br />
              for creating digital and connected
            </h2>

            {/* Animated cycling words line */}
            <div
              ref={line2Ref}
              style={{
                fontSize: 'clamp(26px, 3.8vw, 52px)',
                fontWeight: '800',
                lineHeight: '1.2',
                opacity: 0,
                minHeight: '1.3em',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <span style={{
                background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {typedWord}
              </span>
              {/* Blinking cursor */}
              <span style={{
                display: 'inline-block',
                width: '3px',
                height: '0.85em',
                backgroundColor: '#06b6d4',
                borderRadius: '2px',
                animation: 'blink 0.75s step-end infinite',
                verticalAlign: 'middle',
                flexShrink: 0
              }} />

              {/* Second static word */}
              <span style={{
                background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                and services.
              </span>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.3px',
                transition: 'gap 0.3s ease, color 0.3s ease',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: '6px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.gap = '18px'
                e.currentTarget.style.color = '#06b6d4'
                e.currentTarget.style.borderBottomColor = '#06b6d4'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.gap = '10px'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)'
              }}
            >
              Our Services <FiArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (max-width: 768px) {
          .passion-layout    { flex-direction: column !important; }
          .passion-image-col { width: 100% !important; height: 260px !important; }
          .passion-text-col  { padding: 48px 24px !important; }
          .passion-container { padding-left: 0 !important; padding-right: 0 !important; }
        }
        @media (max-width: 1024px) {
          .passion-container { padding-left: 40px !important; padding-right: 40px !important; }
        }
        @media (max-width: 640px) {
          .passion-container { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  )
}

export default PassionStatement
