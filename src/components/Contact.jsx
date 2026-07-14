import React, { useState, useEffect, useRef } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    emailjs.init('CJbF724rXVDJjU7M4')

    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      gsap.fromTo(formRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Stagger info children
      gsap.fromTo(infoRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.5, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await emailjs.send(
        'service_j14xmef',
        'template_liacd3q',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hello@thecorefusion.com',
        }
      )

      if (result.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('Email sending error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: FiMail, title: 'Email', value: 'hello@thecorefusion.com', link: 'mailto:hello@thecorefusion.com' },
    { icon: FiPhone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: FiMapPin, title: 'Address', value: 'San Francisco, CA 94105, USA', link: '#' },
  ]

  const socialLinks = [
    { icon: FaLinkedinIn, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaFacebookF, url: '#', label: 'Facebook' },
  ]

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    color: '#f3f4f6',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
  }

  return (
    <section ref={sectionRef} id="contact" className="section" style={{ backgroundColor: '#111827' }}>
      <div className="container-custom">

        {/* Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '64px', opacity: 0 }}>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '16px' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
            Ready to start your digital transformation? Let's talk about your project.
          </p>
        </div>

        <div className="grid-2" style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Contact Form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#06b6d4'
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#374151'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#06b6d4'
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#374151'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => {
                    e.target.style.borderColor = '#06b6d4'
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.15)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#374151'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  background: 'linear-gradient(to right, #06b6d4, #2563eb)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.6 : 1,
                  transition: 'all 0.3s ease',
                  fontSize: '16px'
                }}
                onMouseEnter={e => {
                  if (!isLoading) {
                    e.currentTarget.style.transform = 'scale(1.03)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(6,182,212,0.4)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                <FiSend style={{ animation: isLoading ? 'sendPulse 0.6s ease infinite alternate' : 'none' }} />
              </button>

              {error && (
                <div style={{
                  backgroundColor: 'rgba(239,68,68,0.1)',
                  border: '1px solid #ef4444',
                  color: '#ef4444',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  animation: 'slideDown 0.3s ease'
                }}>
                  ✗ {error}
                </div>
              )}

              {submitted && (
                <div style={{
                  backgroundColor: 'rgba(16,185,129,0.1)',
                  border: '1px solid #10b981',
                  color: '#10b981',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  animation: 'slideDown 0.3s ease'
                }}>
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', gap: '32px', opacity: 0 }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '16px',
                      backgroundColor: 'rgba(31,41,55,0.5)',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#06b6d4'
                      e.currentTarget.style.transform = 'translateX(6px)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,182,212,0.15)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#374151'
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <IconComponent style={{ width: '24px', height: '24px', color: '#06b6d4', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>{info.title}</h3>
                      <p style={{ color: '#9ca3af', fontSize: '14px' }}>{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'white'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#06b6d4'
                        e.currentTarget.style.borderColor = '#06b6d4'
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(6,182,212,0.4)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#1f2937'
                        e.currentTarget.style.borderColor = '#374151'
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      title={social.label}
                    >
                      <IconComponent style={{ width: '20px', height: '20px' }} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(6,182,212,0.1), rgba(147,51,234,0.1))',
              border: '1px solid #374151',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Office Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#9ca3af' }}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                <p>Saturday: 10:00 AM - 4:00 PM (PST)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sendPulse {
          from { transform: translateX(0); }
          to   { transform: translateX(4px); }
        }
      `}</style>
    </section>
  )
}

export default Contact
