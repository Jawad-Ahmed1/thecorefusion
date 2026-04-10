import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="gradient-text" style={{ fontSize: '24px', fontWeight: 'bold' }}>
              TheCoreFusion
            </div>
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
                style={{
                  padding: '8px 16px',
                  color: '#d1d5db',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
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
