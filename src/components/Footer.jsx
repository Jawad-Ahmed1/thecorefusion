import { useEffect, useRef } from 'react'
import { FiArrowUp, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const colsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(colsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: colsRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  const quickLinks = [
    { label: 'Home',      path: '/' },
    { label: 'About',     path: '/about' },
    { label: 'Services',  path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact',   path: '/contact' },
  ]

  const services = [
    { label: 'Social Media Marketing',   path: '/services' },
    { label: 'Shopify Development',      path: '/services' },
    { label: 'WordPress Development',    path: '/services' },
    { label: 'SEO Optimization',         path: '/services' },
    { label: 'Custom Web Development',   path: '/services' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy',   url: '#' },
    { label: 'Terms of Service', url: '#' },
    { label: 'Cookie Policy',    url: '#' },
  ]

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '1.6',
    transition: 'color 0.25s ease',
    display: 'inline-block',
  }

  return (
    <footer ref={footerRef} style={{ backgroundColor: '#030712', borderTop: '1px solid #1f2937' }}>

      {/* ── Main footer body ── */}
      <div style={{ padding: '72px 0 56px' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 48px',
        }} className="footer-inner">

          {/* 4-column grid */}
          <div
            ref={colsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr',
              gap: '48px',
              marginBottom: '56px',
            }}
            className="footer-grid"
          >

            {/* Col 1 — Brand */}
            <div>
              <h2 className="gradient-text" style={{
                fontSize: '22px', fontWeight: '800',
                marginBottom: '14px', letterSpacing: '-0.3px',
              }}>
                TheCoreFusion
              </h2>
              <p style={{
                color: '#6b7280', fontSize: '14px',
                lineHeight: '1.75', marginBottom: '24px',
                maxWidth: '260px',
              }}>
                Transforming ideas into digital success. Your trusted partner for
                innovative web solutions and digital marketing.
              </p>
              {/* Social pills */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((s) => (
                  <a key={s} href="#" style={{
                    fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px',
                    color: '#6b7280', border: '1px solid #1f2937',
                    borderRadius: '6px', padding: '5px 10px',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#06b6d4'
                      e.currentTarget.style.borderColor = '#06b6d4'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#6b7280'
                      e.currentTarget.style.borderColor = '#1f2937'
                    }}
                  >{s}</a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h3 style={{
                fontSize: '13px', fontWeight: '700', letterSpacing: '2px',
                color: '#ffffff', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h3 style={{
                fontSize: '13px', fontWeight: '700', letterSpacing: '2px',
                color: '#ffffff', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map((s, i) => (
                  <li key={i}>
                    <Link
                      to={s.path}
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter */}
            <div>
              <h3 style={{
                fontSize: '13px', fontWeight: '700', letterSpacing: '2px',
                color: '#ffffff', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Stay Updated
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                Subscribe to our newsletter for the latest news and insights.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: '1', minWidth: 0,
                    padding: '10px 14px',
                    backgroundColor: '#0d1117',
                    border: '1px solid #1f2937',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#f3f4f6',
                    outline: 'none',
                    transition: 'border-color 0.25s',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#06b6d4'}
                  onBlur={e => e.currentTarget.style.borderColor = '#1f2937'}
                />
                <button
                  style={{
                    padding: '10px 14px', flexShrink: 0,
                    background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
                    color: '#fff', fontWeight: '700',
                    borderRadius: '8px', border: 'none',
                    cursor: 'pointer', transition: 'opacity 0.25s',
                    display: 'flex', alignItems: 'center',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #1f2937 15%, #1f2937 85%, transparent)',
            marginBottom: '32px',
          }} />

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}>

            {/* Left — copyright + legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ color: '#4b5563', fontSize: '13px' }}>
                &copy; {currentYear} TheCoreFusion. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {legalLinks.map((link, i) => (
                  <a key={i} href={link.url} style={{
                    color: '#4b5563', textDecoration: 'none',
                    fontSize: '13px', transition: 'color 0.25s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                    onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: '#4b5563', background: 'none', border: '1px solid #1f2937',
                borderRadius: '8px', padding: '8px 14px',
                fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#06b6d4'
                e.currentTarget.style.borderColor = '#06b6d4'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#4b5563'
                e.currentTarget.style.borderColor = '#1f2937'
              }}
            >
              Back to Top <FiArrowUp size={14} />
            </button>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-inner { padding: 0 32px !important; }
          .footer-grid  { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          .footer-inner { padding: 0 20px !important; }
          .footer-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
