import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions that set your brand apart.',
    },
    {
      title: 'Data-Driven Strategy',
      description: 'Every decision is backed by analytics and insights to maximize your ROI and growth.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We partner with you every step of the way.',
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience across all digital disciplines.',
    },
  ]

  return (
    <section id="about" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 6vw, 48px)',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            About <span className="gradient-text">TheCoreFusion</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: '18px',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Empowering businesses with digital solutions since 2020
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid-2" style={{ marginBottom: '64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Who We Are</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>
              TheCoreFusion is a forward-thinking digital agency specializing in transforming businesses through strategic digital solutions. We combine creativity, technology, and strategic thinking to deliver results that matter.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>
              With a team of 50+ professionals across development, design, marketing, and strategy, we've successfully delivered 300+ projects for clients in 15+ countries.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))',
            borderRadius: '8px',
            padding: '32px',
            border: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { number: '150+', label: 'Projects Completed', desc: 'Across various industries' },
                { number: '100+', label: 'Happy Clients', desc: 'Worldwide partnerships' },
                { number: '90%', label: 'Client Satisfaction', desc: 'Proven track record' }
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#06b6d4' }}>{stat.number}</div>
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
        <div className="grid-2" style={{ marginBottom: '64px' }}>
          {[
            { title: 'Our Mission', content: 'To empower businesses of all sizes with innovative digital solutions that drive growth, enhance brand presence, and create meaningful customer connections in the digital world.' },
            { title: 'Our Vision', content: 'To be the most trusted digital partner for businesses globally, recognized for innovation, excellence, and delivering transformative results that exceed expectations.' }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              border: '1px solid #374151',
              borderRadius: '8px',
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#22d3ee' }}>
                {item.title}
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.625' }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
