import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import logo from '../assets/thecorefusion.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const servicesRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // GSAP animations for Services text
  const handleServicesHover = () => {
    if (!servicesRef.current) return

    // Pulse glow effect
    gsap.to(servicesRef.current, {
      color: '#06b6d4',
      textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)',
      duration: 0.3,
      ease: 'power2.out'
    })

    // Scale and rotate animation
    gsap.to(servicesRef.current, {
      scale: 1.15,
      rotation: 3,
      duration: 0.3,
      ease: 'elastic.out'
    })
  }

  const handleServicesHoverEnd = () => {
    if (!servicesRef.current) return

    // Reset glow
    gsap.to(servicesRef.current, {
      color: '#d1d5db',
      textShadow: 'none',
      duration: 0.3,
      ease: 'power2.out'
    })

    // Reset scale and rotation
    gsap.to(servicesRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'elastic.out'
    })
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 50,
      borderBottom: '1px solid #374151'
    }}>
      <div className="container-custom" style={{ padding: '0 16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>

          {/* Logo (Clickable) */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <img
                src={logo}
                alt="TheCoreFusion Logo"
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))'
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'none', gap: '4px' }} className="desktop-menu">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                ref={item.label === 'Services' ? servicesRef : null}
                style={{
                  padding: '8px 16px',
                  color: '#d1d5db',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  if (item.label === 'Services') {
                    handleServicesHover()
                  } else {
                    e.target.style.color = '#22d3ee'
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.label === 'Services') {
                    handleServicesHoverEnd()
                  } else {
                    e.target.style.color = '#d1d5db'
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'none' }} className="desktop-button">
            <Link
              to="/contact"
              className="btn-primary"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#d1d5db',
              cursor: 'pointer',
              fontSize: '24px'
            }}
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            backgroundColor: 'rgba(31, 41, 55, 0.95)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: '#d1d5db',
                    cursor: 'pointer',
                    display: 'block',
                    padding: '8px',
                    textDecoration: 'none'
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary"
                style={{ cursor: 'pointer', textAlign: 'center', display: 'block', textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-button { display: block !important; }
          nav button { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar