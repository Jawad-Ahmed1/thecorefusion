import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    label: 'Step 1.',
    title: 'User Experience & Brand Strategy',
    description:
      'Our focus is on creating seamless user experiences that leave a lasting impression on your audience while strategically positioning your brand for market domination. We enhance user satisfaction and drive your business towards unparalleled success.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=700&h=480&fit=crop&q=90',
    color: '#06b6d4',
  },
  {
    number: '02',
    label: 'Step 2.',
    title: 'Website Development & Launch Readiness',
    description:
      'Our dedicated team crafts an exceptional website tailored to your needs, ensuring a smooth user experience and captivating design. With meticulous attention to detail, we prepare for a seamless post-launch phase, guaranteeing your website\'s optimal performance and success in the digital realm.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=480&fit=crop&q=90',
    color: '#a855f7',
  },
  {
    number: '03',
    label: 'Step 3.',
    title: 'Strategic Marketing Beyond Launch',
    description:
      'After your website launch, we don\'t stop there. With a keen eye on data-driven insights, we manage your digital presence with precision, ensuring your brand continues to thrive and evolve in the competitive landscape — setting the stage for sustained growth and continued success.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=700&h=480&fit=crop&q=90',
    color: '#3b82f6',
  },
]

const ExploreRange = () => {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Tag + heading + sub stagger
      gsap.fromTo([tagRef.current, headingRef.current, subRef.current],
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: tagRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Each step animates alternately
      stepsRef.current.forEach((step, i) => {
        if (!step) return
        const fromLeft = i % 2 === 0
        gsap.fromTo(step,
          { opacity: 0, x: fromLeft ? -60 : 60, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 82%', toggleActions: 'play none none none' }
          }
        )

        // Image scale-in
        const img = step.querySelector('.step-image')
        if (img) {
          gsap.fromTo(img,
            { scale: 1.08, opacity: 0 },
            {
              scale: 1, opacity: 1, duration: 1, ease: 'power2.out',
              scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none none' }
            }
          )
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="explore-range"
      style={{
        backgroundColor: '#0a0e17',
        padding: '110px 16px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.05), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p ref={tagRef} style={{
            fontSize: '11px', fontWeight: '700', letterSpacing: '3px',
            color: '#06b6d4', textTransform: 'uppercase',
            marginBottom: '16px', opacity: 0
          }}>
            INNOVATE. INSPIRE. GROW
          </p>

          <h2 ref={headingRef} style={{
            fontSize: 'clamp(28px, 5vw, 54px)',
            fontWeight: '800', lineHeight: '1.2',
            marginBottom: '20px', opacity: 0
          }}>
            Explore Our{' '}
            <span className="gradient-text">Range of Solutions</span>
          </h2>

          <p ref={subRef} style={{
            color: '#9ca3af', fontSize: '17px',
            maxWidth: '680px', margin: '0 auto',
            lineHeight: '1.75', opacity: 0
          }}>
            At TheCoreFusion, we bring a dynamic range of capabilities to the table,
            fueling your business growth with the latest technologies and innovative
            strategies — from brand identity to data-driven marketing campaigns.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {steps.map((step, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                ref={el => stepsRef.current[i] = el}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '70px',
                  alignItems: 'center',
                  direction: isEven ? 'ltr' : 'rtl',
                  opacity: 0
                }}
                className="step-row"
              >
                {/* Text Side */}
                <div style={{ direction: 'ltr' }}>
                  {/* Step label */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    marginBottom: '20px'
                  }}>
                    <span style={{
                      fontSize: '11px', fontWeight: '700', letterSpacing: '2.5px',
                      color: step.color, textTransform: 'uppercase'
                    }}>
                      {step.label}
                    </span>
                    <div style={{
                      height: '1px', width: '40px',
                      background: `linear-gradient(to right, ${step.color}, transparent)`
                    }} />
                  </div>

                  {/* Big step number watermark */}
                  <div style={{
                    fontSize: '120px', fontWeight: '900', lineHeight: 1,
                    color: 'rgba(255,255,255,0.03)',
                    marginBottom: '-20px', userSelect: 'none',
                    fontFamily: 'monospace'
                  }}>
                    {step.number}
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(22px, 3vw, 34px)',
                    fontWeight: '800', lineHeight: '1.25',
                    color: '#fff', marginBottom: '20px'
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    color: '#9ca3af', fontSize: '15px',
                    lineHeight: '1.8', marginBottom: '32px'
                  }}>
                    {step.description}
                  </p>

                  {/* Step indicator dots */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {steps.map((_, di) => (
                      <div key={di} style={{
                        width: di === i ? '28px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: di === i ? step.color : '#374151',
                        transition: 'all 0.3s ease'
                      }} />
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div style={{ direction: 'ltr', position: 'relative' }}>
                  <div style={{
                    borderRadius: '16px', overflow: 'hidden',
                    height: '380px', position: 'relative',
                    boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`,
                  }}>
                    <img
                      className="step-image"
                      src={step.image}
                      alt={step.title}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block'
                      }}
                    />
                    {/* Color tint overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${step.color}18, transparent 60%)`,
                      mixBlendMode: 'screen'
                    }} />
                    {/* Bottom fade */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(180deg, transparent 60%, rgba(10,14,23,0.6) 100%)'
                    }} />
                  </div>

                  {/* Step number badge on image */}
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    right: isEven ? '-16px' : 'auto',
                    left: isEven ? 'auto' : '-16px',
                    width: '56px', height: '56px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', fontWeight: '800', color: '#fff',
                    boxShadow: `0 8px 24px ${step.color}55`,
                    zIndex: 5
                  }}>
                    {i + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '90px' }}>
          <Link
            to="/services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 40px',
              background: 'linear-gradient(to right, #06b6d4, #2563eb)',
              color: '#fff', fontWeight: '700', fontSize: '15px',
              borderRadius: '8px', textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(6,182,212,0.3)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(6,182,212,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,182,212,0.3)'
            }}
          >
            Explore All Services <FiArrowRight size={18} />
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .step-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ExploreRange
