import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section
      id="hero"
      className="banner-style-one"
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Circular Gradient Element - Right Side */}
      <div style={{
        position: 'absolute',
        right: '-150px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)',
        filter: 'blur(80px)',
        opacity: '0.3',
        animation: 'float 6s ease-in-out infinite'
      }}></div>

      {/* Blue Gradient Dot - Left Side Near DIGITAL */}
      <div style={{
        position: 'absolute',
        left: '1%',
        top: '10%',
        width: '400px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        filter: 'blur(60px)', 
        opacity: '0.25',
        zIndex: '1'
      }}></div>

      <div className="container-custom" style={{ position: 'relative', zIndex: '10', width: '100%' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Left Content */}
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: '800',
              marginBottom: '48px',
              paddingLeft: '40px',
              paddingTop: '120px',
              lineHeight: '1.1',
              letterSpacing: '-2px',
              color: '#ffffff'
            }}>
              DIGITAL<br />
              EXCELLENCE<br />
              <span style={{
                WebkitTextStroke: '2px #ffffff',
                color: 'transparent',
                display: 'inline-block'
              }}>DELIVERED</span>
            </h1>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
            </div>
          </div>

          {/* Right Content - Circular Badge */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '206px',
              height: '206px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(6, 182, 212, 0.3)',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <div style={{
                position: 'relative',
                width: '185px',
                height: '185px',
                borderRadius: '50%',
                background: '#001a33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>+100</div>
                <div style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  textAlign: 'center',
                  maxWidth: '200px'
                }}>Projects Delivered<br />Successfully</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%); }
          50% { transform: translateY(calc(-50% + 20px)); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}

export default Hero
