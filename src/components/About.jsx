import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const missionRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading fade in
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Left text slide in
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Right stats slide in
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Counter number animation
      counterRefs.current.forEach((el, i) => {
        if (!el) return
        const targets = [150, 100, 90]
        const suffixes = ['+', '+', '%']
        const obj = { val: 0 }
        gsap.to(obj, {
          val: targets[i],
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.floor(obj.val) + suffixes[i] },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })

      // Mission/Vision cards stagger
      gsap.fromTo(missionRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: missionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: '150+', label: 'Projects Completed', desc: 'Across various industries' },
    { number: '100+', label: 'Happy Clients', desc: 'Worldwide partnerships' },
    { number: '90%', label: 'Client Satisfaction', desc: 'Proven track record' }
  ]

  return (
    <section ref={sectionRef} id="about" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '64px', opacity: 0 }}>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '16px' }}>
            About <span className="gradient-text">TheCoreFusion</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
            Empowering businesses with digital solutions since 2020
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid-2" style={{ marginBottom: '64px', alignItems: 'center' }}>
          <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px', opacity: 0 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Who We Are</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>
              TheCoreFusion is a forward-thinking digital agency specializing in transforming businesses through strategic digital solutions. We combine creativity, technology, and strategic thinking to deliver results that matter.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>
              With a team of 50+ professionals across development, design, marketing, and strategy, we've successfully delivered 300+ projects for clients in 15+ countries.
            </p>
          </div>

          <div ref={rightRef} style={{
            background: 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))',
            borderRadius: '8px',
            padding: '32px',
            border: '1px solid #374151',
            opacity: 0
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    ref={el => counterRefs.current[i] = el}
                    style={{ fontSize: '36px', fontWeight: 'bold', color: '#06b6d4', minWidth: '80px' }}
                  >
                    0
                  </div>
                  <div>
                    <p style={{ fontWeight: '600' }}>{stat.label}</p>
                    <p style={{ fontSize: '14px', color: '#9ca3af' }}>{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="grid-2" style={{ marginBottom: '64px' }}>
          {[
            { title: 'Our Mission', content: 'To empower businesses of all sizes with innovative digital solutions that drive growth, enhance brand presence, and create meaningful customer connections in the digital world.' },
            { title: 'Our Vision', content: 'To be the most trusted digital partner for businesses globally, recognized for innovation, excellence, and delivering transformative results that exceed expectations.' }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid #374151',
                borderRadius: '8px',
                padding: '32px',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#06b6d4'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(6,182,212,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#374151'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
                {item.title}
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>{item.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
