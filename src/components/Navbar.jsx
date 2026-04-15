import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
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
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'services' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'Contact', to: 'contact' },
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

          {/* ✅ Logo (Clickable) */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-64}
              style={{ cursor: 'pointer' }}
            >
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
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'none', gap: '4px' }} className="desktop-menu">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                ref={item.label === 'Services' ? servicesRef : null}
                style={{
                  padding: '8px 16px',
                  color: '#d1d5db',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  display: 'inline-block'
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
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'none' }} className="desktop-button">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              Get Started
            </ScrollLink>
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
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  style={{
                    color: '#d1d5db',
                    cursor: 'pointer',
                    display: 'block',
                    padding: '8px'
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="btn-primary"
                style={{ cursor: 'pointer', textAlign: 'center', display: 'block' }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </ScrollLink>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-button { display: block !important; }
          button { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar