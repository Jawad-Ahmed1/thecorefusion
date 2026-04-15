import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import showcaseImage from '../assets/1.jpg'

gsap.registerPlugin(ScrollTrigger)

const ZoomShowcase = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    // Create scroll-triggered zoom animation
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1, // Smooth scrubbing
        markers: false,
        onUpdate: (self) => {
          // Zoom from 1 to 1.3 as you scroll through the section
        }
      },
      scale: 1.3,
      ease: 'none',
      overwrite: 'auto'
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="zoom-showcase"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#111827',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '48px'
      }}
    >
      {/* Background Image with Zoom Effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden'
        }}
      >
        <img
          ref={imageRef}
          src={showcaseImage}
          alt="Showcase"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transformOrigin: 'center center',
            scale: 1
          }}
        />
      </div>
    </section>
  )
}

export default ZoomShowcase
