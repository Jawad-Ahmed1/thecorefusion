import React from 'react'
import {
  FiShare2,
  FiShoppingCart,
  FiCode,
  FiSearch,
  FiGlobe,
} from 'react-icons/fi'

const Services = () => {
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
  ]

  return (
    <section id="services" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="grid-5" style={{ marginBottom: '48px' }}>
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
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#06b6d4'
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#374151'
                  e.currentTarget.style.backgroundColor = 'linear-gradient(to bottom right, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <IconComponent style={{
                    width: '48px',
                    height: '48px',
                    color: '#06b6d4',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                  marginBottom: '16px'
                }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#06b6d4',
                        borderRadius: '50%'
                      }}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div style={{
          background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))',
          border: '1px solid #374151',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>Ready to Get Started?</h3>
          <p style={{
            color: '#9ca3af',
            marginBottom: '24px',
            maxWidth: '672px',
            margin: '0 auto 24px'
          }}>
            Let's discuss which services are right for your business and create a customized plan to achieve your goals.
          </p>
          <button className="btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
