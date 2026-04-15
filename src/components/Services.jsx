import React, { useEffect, useRef } from 'react'
import {
  FiShare2,
  FiShoppingCart,
  FiCode,
  FiSearch,
  FiGlobe,
  FiImage,
} from 'react-icons/fi'
import gsap from 'gsap'

const Services = () => {
  const scrollContainerRef = useRef(null)
  const autoScrollRef = useRef(null)
  const isUserInteractingRef = useRef(false)
  const iconRefsRef = useRef({})
  const lineRefsRef = useRef({})

  const handleMouseMove = (e, serviceId) => {
    const card = e.currentTarget
    const icon = iconRefsRef.current[serviceId]
    
    if (!icon) return

    // Get card boundaries
    const rect = card.getBoundingClientRect()
    const cardCenterX = rect.width / 2
    const cardCenterY = rect.height / 2

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left - cardCenterX
    const mouseY = e.clientY - rect.top - cardCenterY

    // Calculate movement (limit to 15px radius for smooth effect)
    const moveX = (mouseX / cardCenterX) * 15
    const moveY = (mouseY / cardCenterY) * 15

    // Animate icon to follow cursor
    gsap.to(icon, {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  }

  const handleMouseLeave = (serviceId) => {
    const icon = iconRefsRef.current[serviceId]
    if (!icon) return

    // Animate back to original position
    gsap.to(icon, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out',
      overwrite: 'auto'
    })

    // Animate line out
    const line = lineRefsRef.current[serviceId]
    if (line) {
      gsap.to(line, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }

  const handleMouseEnter = (serviceId) => {
    // Animate line in
    const line = lineRefsRef.current[serviceId]
    if (line) {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }

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
      description: '(Search Engine Optimization) Climb the rankings with our proven SEO strategies. Organic growth that lasts.',
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
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollAmount = container.scrollLeft
    let resumeTimer = null
    const scrollSpeed = 1

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isUserInteractingRef.current) {
          const maxScroll = container.scrollWidth - container.clientWidth
          scrollAmount = container.scrollLeft + scrollSpeed

          if (scrollAmount >= maxScroll) {
            scrollAmount = 0
          }

          container.scrollLeft = scrollAmount
        }
      }, 30)
    }

    const handleUserInteraction = () => {
      isUserInteractingRef.current = true

      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }

      if (resumeTimer) {
        clearTimeout(resumeTimer)
      }

      resumeTimer = setTimeout(() => {
        isUserInteractingRef.current = false
        startAutoScroll()
      }, 2000)
    }

    container.addEventListener('mousedown', handleUserInteraction)
    container.addEventListener('touchstart', handleUserInteraction)
    container.addEventListener('wheel', handleUserInteraction)

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
      if (resumeTimer) clearTimeout(resumeTimer)

      container.removeEventListener('mousedown', handleUserInteraction)
      container.removeEventListener('touchstart', handleUserInteraction)
      container.removeEventListener('wheel', handleUserInteraction)
    }
  }, [])

  return (
    <section id="services" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 6vw, 48px)',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: '18px',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Comprehensive digital solutions tailored to your business goals
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '12px',
            scrollBehavior: 'smooth'
          }}
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                style={{
                  background: 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  padding: '24px',
                  minWidth: '280px',
                  flex: '0 0 280px',
                  cursor: 'pointer',
                  transition: '0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                onMouseLeave={(e) => {
                  handleMouseLeave(service.id)
                  e.currentTarget.style.borderColor = '#374151'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                onMouseEnter={(e) => {
                  handleMouseEnter(service.id)
                  e.currentTarget.style.borderColor = '#06b6d4'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.2)'
                }}
              >
                {/* Animated Top Line */}
                <div
                  ref={(el) => {
                    if (el) lineRefsRef.current[service.id] = el
                  }}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    height: '3px',
                    width: '100%',
                    background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                    transformOrigin: 'left center',
                    transform: 'scaleX(0)',
                    zIndex: 5
                  }}
                ></div>
                <div
                  ref={(el) => {
                    if (el) iconRefsRef.current[service.id] = el
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px'
                  }}
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
                  <div key={i} style={{ fontSize: '12px', color: '#6b7280' }}>
                    • {f}
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center'
        }}>
          <button className="btn-primary">
            Schedule a Consultation
          </button>
        </div>

      </div>
    </section>
  )
}

export default Services