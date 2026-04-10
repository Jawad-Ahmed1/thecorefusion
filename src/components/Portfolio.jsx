import React, { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null)

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

  return (
    <section id="portfolio" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 6vw, 48px)',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: '18px',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Showcasing our latest projects and success stories
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
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
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
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
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, #111827, rgba(17, 24, 39, 0.4), transparent)',
                  opacity: hoveredId === item.id ? '1' : '0',
                  transition: 'opacity 0.3s ease'
                }}></div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
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

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        backgroundColor: 'rgba(75, 85, 99, 0.5)',
                        padding: '4px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Action */}
              {hoveredId === item.id && (
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 20
                }}>
                  <button className="btn-primary">
                    View Project
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: '#9ca3af',
            marginBottom: '24px'
          }}>Impressed? Let's create something amazing together.</p>
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
