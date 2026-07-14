import React, { useState, useEffect, useRef } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const ctaRef = useRef(null)

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      description: 'Redesigned a Shopify store resulting in 45% increase in conversion rate and 200% revenue growth.',
      category: 'Shopify',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop',
      tags: ['Shopify', 'UI/UX', 'Optimization'],
    },
    {
      id: 2,
      title: 'Corporate Website Launch',
      description: 'Built a WordPress-based corporate website with custom plugins and integrations. Ranked #1 for 15 target keywords.',
      category: 'WordPress',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['WordPress', 'SEO', 'Web Development'],
    },
    {
      id: 3,
      title: 'SaaS Application Development',
      description: 'Developed a custom React-based SaaS platform with real-time analytics and user management system.',
      category: 'Custom Dev',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'Backend API', 'Database'],
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      description: 'Executed a multi-channel social media campaign that generated 2M impressions and 50K engagements.',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
      tags: ['Social Media', 'Marketing', 'Analytics'],
    },
    {
      id: 5,
      title: 'Search Engine Optimization',
      description: 'Implemented comprehensive SEO strategy improving organic traffic by 300% in 6 months.',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['SEO', 'Content', 'Technical SEO'],
    },
    {
      id: 6,
      title: 'Mobile App Landing Page',
      description: 'Created a high-converting landing page for a mobile app launch. Achieved 12% conversion rate.',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['Landing Page', 'Conversion', 'Mobile'],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      gsap.fromTo(gridRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '64px', opacity: 0 }}>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '16px' }}>
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
            Showcasing our latest projects and success stories
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid-3" style={{ marginBottom: '48px' }}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                backgroundColor: '#1f2937',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #374151',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              onMouseEnter={e => {
                setHoveredId(item.id)
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(6,182,212,0.2)'
                e.currentTarget.style.borderColor = '#06b6d4'
              }}
              onMouseLeave={e => {
                setHoveredId(null)
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#374151'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '224px', overflow: 'hidden', backgroundColor: '#4b5563' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredId === item.id ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, #111827, rgba(17,24,39,0.4), transparent)',
                  opacity: hoveredId === item.id ? '1' : '0',
                  transition: 'opacity 0.3s ease'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'rgba(6,182,212,0.2)',
                    color: '#22d3ee',
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}>
                    {item.category}
                  </span>
                  <FiExternalLink style={{ color: '#6b7280' }} />
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: hoveredId === item.id ? '#22d3ee' : 'white',
                  transition: 'color 0.3s ease'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      backgroundColor: 'rgba(75,85,99,0.5)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredId === item.id && (
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 20,
                  animation: 'fadeIn 0.2s ease'
                }}>
                  <button className="btn-primary">View Project</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} style={{ textAlign: 'center', opacity: 0 }}>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            Impressed? Let's create something amazing together.
          </p>
          <button className="btn-primary">View All Projects</button>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </section>
  )
}

export default Portfolio
