import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)',
        overflow: 'hidden'
      }}
    >
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: '0', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '384px',
          height: '384px',
          backgroundColor: '#06b6d4',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(96px)',
          opacity: '0.2',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          width: '384px',
          height: '384px',
          backgroundColor: '#9333ea',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(96px)',
          opacity: '0.2',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s',
          animationDelay: '2s'
        }}></div>
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: '10' }}>
        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.25'
          }}>
            Transforming Ideas into
            <span className="gradient-text" style={{ marginLeft: '8px' }}> Digital Success</span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            color: '#9ca3af',
            marginBottom: '48px',
            lineHeight: '1.625',
            maxWidth: '672px',
            margin: '0 auto 48px'
          }}>
            We're a team of digital innovators dedicated to propelling your business forward. With cutting-edge strategies and creative excellence, we turn visions into thriving digital experiences.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-primary"
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Get Started
              <FiArrowRight />
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-secondary"
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Learn More
            </ScrollLink>
          </div>

          {/* Trust Section */}
          <div style={{
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid #374151'
          }}>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              marginBottom: '24px'
            }}>Trusted by leading brands worldwide</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '128px',
                    height: '48px',
                    background: 'linear-gradient(to right, #374151, #4b5563)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontWeight: '600'
                  }}
                >
                  Client {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
