import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiShare2,
  FiShoppingCart,
  FiCode,
  FiSearch,
  FiGlobe,
  FiImage,
  FiPackage,
  FiArrowRight,
} from 'react-icons/fi'
import gsap from 'gsap'

const Services = () => {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const isUserInteractingRef = useRef(false)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const resumeTimerRef = useRef(null)
  const iconRefsRef = useRef({})
  const lineRefsRef = useRef({})
  // Track pointer-down position to distinguish click vs drag
  const pointerDownX = useRef(0)

  const services = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Engage your audience with strategic campaigns across all major platforms. We create content that converts.',
      icon: FiShare2,
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    },
    {
      id: 2,
      title: 'Shopify Store Development',
      description: 'Build a powerful e-commerce presence. We create Shopify stores that are optimized for conversions.',
      icon: FiShoppingCart,
      features: ['Store Setup', 'Customization', 'Payment Integration', 'Performance Optimization'],
    },
    {
      id: 3,
      title: 'WordPress Website Development',
      description: 'Professional WordPress sites built for performance and SEO. Responsive, fast, and beautiful.',
      icon: FiGlobe,
      features: ['Custom Design', 'Plugin Development', 'SEO Optimization', 'Maintenance Support'],
    },
    {
      id: 4,
      title: 'SEO Optimization',
      description: 'Climb the rankings with our proven SEO strategies. Organic growth that truly lasts.',
      icon: FiSearch,
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
    },
    {
      id: 5,
      title: 'Custom Web Development',
      description: 'Bespoke web applications built with React, Node.js, and more. Tailored to your unique needs.',
      icon: FiCode,
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
    },
    {
      id: 6,
      title: 'Graphic Designing',
      description: 'Creative visual designs that make your brand stand out. From logos to complete brand identity.',
      icon: FiImage,
      features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Marketing Materials'],
    },
    {
      id: 7,
      title: 'Packaging Design',
      description: 'Eye-catching packaging that sells. We design product packaging that stands out on shelves and online.',
      icon: FiPackage,
      features: ['Product Packaging', 'Label Design', 'Box & Sleeve Design', 'Print-Ready Files'],
    },
  ]

  // GSAP card hover effects
  const handleMouseMove = (e, serviceId) => {
    const icon = iconRefsRef.current[serviceId]
    if (!icon) return
    const rect = e.currentTarget.getBoundingClientRect()
    const moveX = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15
    const moveY = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 15
    gsap.to(icon, { x: moveX, y: moveY, duration: 0.5, ease: 'power2.out', overwrite: 'auto' })
  }

  const handleMouseEnter = (e, serviceId) => {
    const line = lineRefsRef.current[serviceId]
    if (line) gsap.to(line, { scaleX: 1, duration: 0.4, ease: 'power2.out' })
    e.currentTarget.style.borderColor = '#06b6d4'
    e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.2)'
  }

  const handleMouseLeave = (e, serviceId) => {
    const icon = iconRefsRef.current[serviceId]
    if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out', overwrite: 'auto' })
    const line = lineRefsRef.current[serviceId]
    if (line) gsap.to(line, { scaleX: 0, duration: 0.3, ease: 'power2.in' })
    e.currentTarget.style.borderColor = '#374151'
    e.currentTarget.style.boxShadow = 'none'
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const CARD_WIDTH = 280
    const GAP = 24
    const ITEM_STEP = CARD_WIDTH + GAP
    const ORIGINAL_COUNT = services.length
    // We duplicate cards: original + clone.
    // Half-width = one full set of cards
    const HALF_WIDTH = ORIGINAL_COUNT * ITEM_STEP
    const SPEED = 0.6 // px per frame

    posRef.current = 0
    track.style.transform = `translateX(0px)`

    const tick = () => {
      if (!isUserInteractingRef.current) {
        posRef.current += SPEED

        // When we've scrolled exactly one full set, jump back silently
        if (posRef.current >= HALF_WIDTH) {
          posRef.current -= HALF_WIDTH
        }

        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const pauseScroll = () => {
      isUserInteractingRef.current = true
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        isUserInteractingRef.current = false
      }, 2000)
    }

    const wrapper = track.parentElement
    wrapper.addEventListener('mouseenter', pauseScroll)
    wrapper.addEventListener('mouseleave', () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        isUserInteractingRef.current = false
      }, 500)
    })
    wrapper.addEventListener('touchstart', pauseScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      wrapper.removeEventListener('mouseenter', pauseScroll)
      wrapper.removeEventListener('touchstart', pauseScroll)
    }
  }, [])

  // Render cards twice for seamless loop
  const allCards = [...services, ...services]

  return (
    <section id="services" style={{ backgroundColor: '#111827', padding: '80px 0' }}>
      <div className="container-custom">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '16px' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
            Comprehensive digital solutions tailored to your business goals
          </p>
        </div>

        {/* Slider Viewport — hides overflow */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>

          {/* Track — moves via transform, no scrollbar */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {allCards.map((service, idx) => {
              const IconComponent = service.icon
              const uid = `${service.id}-${idx}`
              return (
                <div
                  key={uid}
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(31,41,55,0.5), rgba(17,24,39,0.5))',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    padding: '24px',
                    width: '280px',
                    flex: '0 0 280px',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                    userSelect: 'none',
                  }}
                  onPointerDown={e => { pointerDownX.current = e.clientX }}
                  onPointerUp={e => {
                    // Only navigate if pointer moved less than 6px (a real click, not a drag)
                    if (Math.abs(e.clientX - pointerDownX.current) < 6) {
                      navigate('/services')
                    }
                  }}
                  onMouseMove={e => handleMouseMove(e, uid)}
                  onMouseEnter={e => handleMouseEnter(e, uid)}
                  onMouseLeave={e => handleMouseLeave(e, uid)}
                >
                  {/* Animated top line */}
                  <div
                    ref={el => { if (el) lineRefsRef.current[uid] = el }}
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      height: '3px', width: '100%',
                      background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                      transformOrigin: 'left center',
                      transform: 'scaleX(0)',
                      zIndex: 5
                    }}
                  />

                  {/* Icon */}
                  <div
                    ref={el => { if (el) iconRefsRef.current[uid] = el }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
                  >
                    <IconComponent size={40} color="#06b6d4" />
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '12px 0' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
                    {service.description}
                  </p>

                  {service.features.map((f, i) => (
                    <div key={i} style={{ fontSize: '12px', color: '#6b7280' }}>• {f}</div>
                  ))}

                  {/* Click hint */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    marginTop: '18px', color: '#06b6d4',
                    fontSize: '12px', fontWeight: '600',
                    opacity: 0.7,
                  }}>
                    Learn more <FiArrowRight size={12} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        {/* <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <button className="btn-primary">Schedule a Consultation</button>
        </div> */}

      </div>
    </section>
  )
}

export default Services
