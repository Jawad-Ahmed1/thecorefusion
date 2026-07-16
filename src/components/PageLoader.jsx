import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../assets/thecorefusion.png'

const PageLoader = ({ onComplete }) => {
  const overlayRef = useRef(null)
  const logoRef = useRef(null)
  const progressRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // 1. Logo fades + scales in
    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.6, filter: 'blur(12px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    )

    // 2. Progress bar fills
    .fromTo(progressBarRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' },
      '-=0.2'
    )

    // 3. Logo pulses once
    .to(logoRef.current,
      { scale: 1.08, duration: 0.25, ease: 'power1.inOut', yoyo: true, repeat: 1 },
      '-=0.1'
    )

    // 4. Logo fades up and out
    .to(logoRef.current,
      { opacity: 0, y: -30, scale: 1.1, filter: 'blur(8px)', duration: 0.5, ease: 'power3.in' },
      '+=0.15'
    )

    // 5. Progress bar fades
    .to(progressRef.current,
      { opacity: 0, duration: 0.3 },
      '-=0.4'
    )

    // 6. Overlay slides up to reveal page
    .to(overlayRef.current,
      {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          if (onComplete) onComplete()
        }
      },
      '-=0.1'
    )

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#060810',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
      }}
    >
      {/* Ambient glow behind logo */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div ref={logoRef} style={{ opacity: 0, position: 'relative', zIndex: 1 }}>
        <img
          src={logo}
          alt="TheCoreFusion"
          style={{
            height: '90px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 24px rgba(6,182,212,0.6))',
          }}
        />
      </div>

      {/* Progress bar */}
      <div
        ref={progressRef}
        style={{
          width: '180px',
          height: '2px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: '100%',
            background: 'linear-gradient(to right, #06b6d4, #a855f7)',
            borderRadius: '2px',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
          }}
        />
      </div>
    </div>
  )
}

export default PageLoader
