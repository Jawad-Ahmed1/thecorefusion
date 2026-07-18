import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import logo from '../assets/thecorefusion.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const menuItemsRef = useRef([])
  const btnRef = useRef(null)
  const servicesRef = useRef(null)
  const location = useLocation()

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Entrance animation on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(menuItemsRef.current.filter(Boolean),
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
      '-=0.3'
    )
    .fromTo(btnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' },
      '-=0.2'
    )
  }, [])

  // GSAP hover for Services
  const handleServicesHover = () => {
    if (!servicesRef.current) return
    gsap.to(servicesRef.current, {
      color: '#06b6d4',
      textShadow: '0 0 20px rgba(6,182,212,0.8)',
      scale: 1.12,
      rotation: 2,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleServicesHoverEnd = () => {
    if (!servicesRef.current) return
    gsap.to(servicesRef.current, {
      color: '#d1d5db',
      textShadow: 'none',
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
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: scrolled
          ? 'rgba(17,24,39,0.98)'
          : 'rgba(17,24,39,0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        borderBottom: '1px solid #374151',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none'
      }}
    >
      <div className="container-custom" style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <div ref={logoRef} style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <img
                src={logo}
                alt="TheCoreFusion Logo"
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.5))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(34,211,238,0.9))'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(34,211,238,0.5))'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'none', gap: '4px' }} className="desktop-menu">
            {menuItems.map((item, i) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={el => {
                    menuItemsRef.current[i] = el
                    if (item.label === 'Services') servicesRef.current = el
                  }}
                  style={{
                    padding: '8px 16px',
                    color: isActive ? '#22d3ee' : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    display: 'inline-block',
                    textDecoration: 'none',
                    position: 'relative',
                    fontWeight: isActive ? '600' : '400'
                  }}
                  onMouseEnter={e => {
                    if (item.label === 'Services') handleServicesHover()
                    else e.currentTarget.style.color = '#22d3ee'
                  }}
                  onMouseLeave={e => {
                    if (item.label === 'Services') handleServicesHoverEnd()
                    else e.currentTarget.style.color = isActive ? '#22d3ee' : '#d1d5db'
                  }}
                >
                  {item.label}
                  {/* Active underline */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '16px',
                      right: '16px',
                      height: '2px',
                      background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                      borderRadius: '2px',
                      animation: 'underlineIn 0.3s ease'
                    }} />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div ref={btnRef} style={{ display: 'none' }} className="desktop-button">
            {/* <Link to="/contact" className="btn-primary" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              Get Started
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#d1d5db',
              cursor: 'pointer',
              fontSize: '24px',
              transition: 'color 0.3s ease, transform 0.3s ease'
            }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#22d3ee'
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#d1d5db'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            backgroundColor: 'rgba(31,41,55,0.98)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #374151',
            animation: 'mobileMenuIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px' }}>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      color: isActive ? '#22d3ee' : '#d1d5db',
                      cursor: 'pointer',
                      display: 'block',
                      padding: '10px 12px',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      backgroundColor: isActive ? 'rgba(6,182,212,0.1)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#22d3ee'
                      e.currentTarget.style.backgroundColor = 'rgba(6,182,212,0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = isActive ? '#22d3ee' : '#d1d5db'
                      e.currentTarget.style.backgroundColor = isActive ? 'rgba(6,182,212,0.1)' : 'transparent'
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                className="btn-primary"
                style={{ cursor: 'pointer', textAlign: 'center', display: 'block', textDecoration: 'none', marginTop: '8px' }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-button { display: block !important; }
          nav button { display: none !important; }
        }
        @keyframes underlineIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
