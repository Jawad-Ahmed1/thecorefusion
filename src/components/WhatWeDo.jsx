import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    label: 'STRATEGY',
    title: 'Insights & Strategy',
    description:
      'Strategy and insights are forward-looking plans for your brand that unlock real growth.',
    color: '#06b6d4',
    items: [
      'Research & Data',
      'Branding & Positioning',
      'Business Consulting',
      'Go To Market',
      'Innovation',
      'Market Research & Analysis',
      'Consumer Behavior Insights',
      'Competitive Analysis',
    ],
  },
  {
    label: 'SEO & SMM',
    title: 'SEO & Social Media',
    description:
      'Content helps your company to have the unique plan for your brand.',
    color: '#a855f7',
    items: [
      'Copywriting',
      'Technical SEO Audit',
      'Mobile SEO Optimization',
      'E-commerce SEO Solutions',
      'Local SEO Optimization',
      'Social Media Strategy',
      'Paid Social Advertising',
      'Community Management',
    ],
  },
  {
    label: 'DESIGN',
    title: 'Design & Animate',
    description:
      'UI/UX design gives the appearance above your brand\'s behavior.',
    color: '#3b82f6',
    items: [
      'User Research & Testing',
      'UX Design',
      'Visual Design',
      'Information Architecture',
      'Editorial Design',
      'Infographic Design',
      'Motion & Animation',
      'Packaging Design',
    ],
  },
  {
    label: 'SCALE',
    title: 'Advertising & Scale',
    description:
      'Advertising and scale help to have a unique plan for your brand\'s life.',
    color: '#10b981',
    items: [
      'Paid Search Advertising',
      'Display Advertising',
      'Social Media Advertising',
      'Video Advertising',
      'Native Advertising',
      'Programmatic Advertising',
      'Mobile Advertising',
      'Email Marketing',
    ],
  },
]

const WhatWeDo = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const colRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header fade in
      gsap.fromTo(headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Columns slide up with stagger
      colRefs.current.forEach((col, i) => {
        if (!col) return

        gsap.fromTo(col,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: col,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )

        // List items stagger in
        const items = col.querySelectorAll('.service-item')
        gsap.fromTo(items,
          { opacity: 0, x: -16 },
          {
            opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out',
            scrollTrigger: {
              trigger: col,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      style={{
        backgroundColor: '#07090f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          textAlign: 'center',
          padding: '100px 16px 72px',
          borderBottom: '1px solid #1a2234',
        }}
      >
        <p style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px',
          color: '#06b6d4', textTransform: 'uppercase',
          marginBottom: '16px', opacity: 0,
        }}>
          WHAT WE DO
        </p>

        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 54px)',
          fontWeight: '800', lineHeight: '1.15',
          marginBottom: '20px', opacity: 0,
        }}>
          Unleashing{' '}
          <span className="gradient-text">Digital Brilliance</span>
        </h2>

        <p style={{
          color: '#9ca3af', fontSize: '17px',
          maxWidth: '580px', margin: '0 auto',
          lineHeight: '1.75', opacity: 0,
        }}>
          Empowering your success with a comprehensive suite of digital solutions —
          from captivating brand identities to result-oriented marketing strategies.
        </p>
      </div>

      {/* 4-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        className="whatwedo-grid"
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            ref={el => colRefs.current[i] = el}
            style={{
              borderRight: i < categories.length - 1 ? '1px solid #1a2234' : 'none',
              borderTop: '1px solid #1a2234',
              padding: '44px 36px 60px',
              opacity: 0,
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {/* Small colored label */}
            <span style={{
              fontSize: '10px', fontWeight: '800',
              letterSpacing: '2.5px', color: cat.color,
              textTransform: 'uppercase',
              display: 'block', marginBottom: '18px',
            }}>
              {cat.label}
            </span>

            {/* Title */}
            <h3 style={{
              fontSize: '26px', fontWeight: '800',
              color: '#ffffff', marginBottom: '16px',
              lineHeight: '1.2',
            }}>
              {cat.title}
            </h3>

            {/* Description */}
            <p style={{
              color: '#6b7280', fontSize: '14px',
              lineHeight: '1.75', marginBottom: '36px',
            }}>
              {cat.description}
            </p>

            {/* Divider */}
            <div style={{
              height: '1px',
              marginBottom: '28px',
              background: `linear-gradient(to right, ${cat.color}44, transparent)`,
            }} />

            {/* Service list */}
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: '12px',
            }}>
              {cat.items.map((item, j) => (
                <li
                  key={j}
                  className="service-item"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    fontSize: '13.5px', color: '#9ca3af',
                    opacity: 0,
                    cursor: 'default',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#f3f4f6'
                    e.currentTarget.querySelector('span').style.color = cat.color
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#9ca3af'
                    e.currentTarget.querySelector('span').style.color = '#374151'
                  }}
                >
                  <span style={{
                    color: '#374151',
                    fontSize: '18px',
                    fontWeight: '300',
                    lineHeight: 1,
                    flexShrink: 0,
                    transition: 'color 0.2s ease',
                  }}>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .whatwedo-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .whatwedo-grid > div:nth-child(2) { border-right: none !important; }
          .whatwedo-grid > div:nth-child(3) { border-right: 1px solid #1a2234 !important; }
        }
        @media (max-width: 600px) {
          .whatwedo-grid { grid-template-columns: 1fr !important; }
          .whatwedo-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}

export default WhatWeDo
