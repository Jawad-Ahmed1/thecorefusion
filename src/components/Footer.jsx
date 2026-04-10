import React from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'services' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'Contact', to: 'contact' },
  ]

  const services = [
    'Social Media Marketing',
    'Shopify Development',
    'WordPress Development',
    'SEO Optimization',
    'Custom Web Development',
  ]

  const legalLinks = [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' },
    { label: 'Cookie Policy', url: '#' },
  ]

  return (
    <footer style={{ backgroundColor: '#030712', borderTop: '1px solid #374151' }}>
      {/* Main Footer */}
      <div className="section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container-custom">
          <div className="grid-4" style={{ marginBottom: '48px' }}>
            {/* Company Info */}
            <div>
              <h2 className="gradient-text" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                TheCoreFusion
              </h2>
              <p style={{
                color: '#9ca3af',
                fontSize: '14px',
                lineHeight: '1.625'
              }}>
                Transforming ideas into digital success. Your trusted partner for innovative web solutions and digital marketing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Quick Links</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      style={{
                        color: '#9ca3af',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Services</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      style={{
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Stay Updated</h3>
              <p style={{
                color: '#9ca3af',
                fontSize: '14px',
                marginBottom: '16px'
              }}>
                Subscribe to our newsletter for latest news and insights.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: '1',
                    padding: '8px 12px',
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#f3f4f6',
                    outline: 'none'
                  }}
                />
                <button
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#06b6d4',
                    color: '#111827',
                    fontWeight: '600',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0891b2'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#06b6d4'}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #374151', margin: '32px 0' }}></div>

          {/* Bottom Footer */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            {/* Copyright */}
            <div style={{
              color: '#9ca3af',
              fontSize: '14px'
            }}>
              <p>&copy; {currentYear} TheCoreFusion. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', flexWrap: 'wrap' }}>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#9ca3af',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                marginLeft: 'auto'
              }}
              onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              <span>Back to Top</span>
              <FiArrowUp style={{ width: '16px', height: '16px' }} />
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Minimal Footer Strip */}
      <div style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        paddingTop: '16px',
        paddingBottom: '16px',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '12px',
        borderTop: '1px solid #374151'
      }}>
        <p>Made with ❤️ for innovative businesses worldwide</p>
      </div>
    </footer>
  )
}

export default Footer
