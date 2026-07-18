import React, { useState, useEffect, useRef } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiArrowRight } from 'react-icons/fi'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactDetails = [
  { icon: FiMail,   color: '#06b6d4', title: 'Email Us',      value: 'thecorefusion.tech@gmail.com', link: 'mailto:hello@thecorefusion.com', sub: 'We reply within 24 hours' },
  { icon: FiPhone,  color: '#a855f7', title: 'Call Us',       value: '+1 (555) 123-4567',         link: 'tel:+15551234567',              sub: 'Mon–Fri, 9am–6pm PST' },
  { icon: FiMapPin, color: '#10b981', title: 'Our Location',  value: 'San Francisco, CA, USA',    link: '#',                             sub: 'Remote-first agency' },
  { icon: FiClock,  color: '#f97316', title: 'Office Hours',  value: 'Mon–Fri: 9am – 6pm',       link: '#',                             sub: 'Sat: 10am – 4pm · Sun: Closed' },
]

const socialLinks = [
  { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/the-core-fusion-66a916422/', label: 'LinkedIn',  color: '#0077b5' },
  // { icon: FaTwitter,    url: '#', label: 'Twitter',   color: '#1da1f2' },
  { icon: FaInstagram,  url: 'https://www.instagram.com/thecorefusion?igsh=aGY3MG5kZXg4aml4', label: 'Instagram', color: '#e1306c' },
  { icon: FaFacebookF,  url: 'https://www.facebook.com/share/1BPnFdVt3e/', label: 'Facebook',  color: '#1877f2' },
]

const services = [
  'Social Media Marketing', 'Shopify Store Development',
  'WordPress Development',  'SEO Optimization',
  'Custom Web Development', 'Graphic Designing',
  'Packaging Design',       'Other',
]

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const heroRef   = useRef(null)
  const leftRef   = useRef(null)
  const rightRef  = useRef(null)
  const cardsRef  = useRef(null)

  useEffect(() => {
    emailjs.init('CJbF724rXVDJjU7M4')

    // Hero stagger
    gsap.fromTo(heroRef.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
    )

    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      )
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 84%', toggleActions: 'play none none none' } }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const result = await emailjs.send('service_j14xmef', 'template_liacd3q', {
        from_name:    formData.name,
        from_email:   formData.email,
        phone:        formData.phone,
        service:      formData.service,
        budget:       formData.budget,
        message:      formData.message,
        to_email:     'hello@thecorefusion.com',
      })
      if (result.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const inp = (extra = {}) => ({
    width: '100%', padding: '14px 18px',
    backgroundColor: 'rgba(17,24,39,0.8)',
    border: '1px solid #1e2d40',
    borderRadius: '10px', color: '#f3f4f6',
    fontSize: '15px', outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontFamily: 'inherit',
    ...extra,
  })

  const focusStyle  = e => { e.target.style.borderColor = '#06b6d4'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.12)' }
  const blurStyle   = e => { e.target.style.borderColor = '#1e2d40'; e.target.style.boxShadow = 'none' }

  return (
    <div style={{ backgroundColor: '#07090f', paddingTop: '64px', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{
        textAlign: 'center', padding: '110px 24px 80px',
        borderBottom: '1px solid #1a2234', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.08), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div ref={heroRef}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '16px', opacity: 0 }}>GET IN TOUCH</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: '800', lineHeight: '1.1',
            marginBottom: '20px', opacity: 0 }}>
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '540px', margin: '0 auto',
            lineHeight: '1.75', opacity: 0 }}>
            Ready to transform your digital presence? Tell us about your project
            and we'll craft a strategy built specifically for your goals.
          </p>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '90px 48px' }} className="contact-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '72px', alignItems: 'flex-start' }} className="contact-grid">

          {/* ── LEFT — INFO PANEL ── */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
              textTransform: 'uppercase', marginBottom: '14px' }}>CONTACT INFORMATION</p>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: '800', lineHeight: '1.25',
              marginBottom: '16px' }}>
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.8', marginBottom: '48px', maxWidth: '400px' }}>
              Whether you have a project in mind, a question about our services, or just want
              to say hello — our team is here and ready to help.
            </p>

            {/* Contact detail cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {contactDetails.map((item, i) => (
                <a key={i} href={item.link} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '18px',
                  padding: '20px 22px',
                  backgroundColor: 'rgba(17,24,39,0.7)',
                  border: '1px solid #1e2d40', borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = item.color
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.boxShadow = `0 6px 24px ${item.color}18`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e2d40'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
                    backgroundColor: `${item.color}15`, border: `1px solid ${item.color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={20} color={item.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px',
                      color: item.color, textTransform: 'uppercase', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ color: '#f3f4f6', fontWeight: '600', fontSize: '15px', marginBottom: '3px' }}>{item.value}</p>
                    <p style={{ color: '#6b7280', fontSize: '12px' }}>{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#9ca3af',
                textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} title={s.label} style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    backgroundColor: 'rgba(17,24,39,0.8)', border: '1px solid #1e2d40',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9ca3af', textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = s.color
                      e.currentTarget.style.borderColor = s.color
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                      e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}44`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(17,24,39,0.8)'
                      e.currentTarget.style.borderColor = '#1e2d40'
                      e.currentTarget.style.color = '#9ca3af'
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — FORM ── */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <div style={{
              backgroundColor: 'rgba(17,24,39,0.6)', border: '1px solid #1e2d40',
              borderRadius: '20px', padding: '48px 44px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
            }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>Send Us a Message</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '36px' }}>
                Fill in the details below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div style={{
                  textAlign: 'center', padding: '60px 20px',
                  animation: 'popIn 0.5s ease',
                }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 24px',
                    backgroundColor: 'rgba(16,185,129,0.15)', border: '2px solid #10b981',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '32px',
                  }}>✓</div>
                  <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#10b981', marginBottom: '10px' }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.7' }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                        color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Full Name *
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}
                        required placeholder="Your name" style={inp()}
                        onFocus={focusStyle} onBlur={blurStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                        color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Email Address *
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        required placeholder="Your working email" style={inp()}
                        onFocus={focusStyle} onBlur={blurStyle} />
                    </div>
                  </div>

                  {/* Phone + Service row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                        color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Phone Number
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="Your actual phone number" style={inp()}
                        onFocus={focusStyle} onBlur={blurStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                        color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Service Needed
                      </label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        style={{ ...inp(), cursor: 'pointer' }}
                        onFocus={focusStyle} onBlur={blurStyle}>
                        <option value="" style={{ backgroundColor: '#111827' }}>Select a service</option>
                        {services.map((s, i) => (
                          <option key={i} value={s} style={{ backgroundColor: '#111827' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                      color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Estimated Budget
                    </label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      style={{ ...inp(), cursor: 'pointer' }}
                      onFocus={focusStyle} onBlur={blurStyle}>
                      <option value="" style={{ backgroundColor: '#111827' }}>Select budget range</option>
                      {['Under $500','$500 – $1,000','$1,000 – $2,500','$2,500 – $5,000','$5,000 – $10,000','$10,000+'].map((b, i) => (
                        <option key={i} value={b} style={{ backgroundColor: '#111827' }}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600',
                      color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Your Message *
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                      required rows="5" placeholder="Tell us about your project, goals, and timeline..."
                      style={{ ...inp({ resize: 'none' }) }}
                      onFocus={focusStyle} onBlur={blurStyle} />
                  </div>

                  {/* Error */}
                  {error && (
                    <div style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444',
                      color: '#ef4444', padding: '14px 18px', borderRadius: '10px',
                      fontSize: '14px', animation: 'slideDown 0.3s ease' }}>
                      ✗ {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={isLoading} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: '16px 28px', width: '100%',
                    background: 'linear-gradient(to right, #06b6d4, #2563eb)',
                    color: '#fff', fontWeight: '700', fontSize: '16px',
                    borderRadius: '10px', border: 'none',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.65 : 1,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(6,182,212,0.25)',
                    letterSpacing: '0.3px',
                  }}
                    onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(6,182,212,0.4)' }}}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,182,212,0.25)' }}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <FiSend size={18} style={{ animation: isLoading ? 'sendPulse 0.6s ease infinite alternate' : 'none' }} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM CARDS ── */}
      <div style={{ borderTop: '1px solid #1a2234', padding: '80px 48px' }} className="contact-wrap2">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '14px', textAlign: 'center' }}>WHY WORK WITH US</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: '800',
            marginBottom: '56px' }}>
            What Happens <span className="gradient-text">Next?</span>
          </h2>
          <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="next-grid">
            {[
              { step: '01', color: '#06b6d4', title: 'We Review Your Brief', desc: 'Our team reviews your message within 24 hours and prepares a tailored response based on your specific goals and budget.' },
              { step: '02', color: '#a855f7', title: 'Discovery Call',        desc: 'We schedule a free 30-minute call to dive deeper into your project, ask the right questions, and align on expectations.' },
              { step: '03', color: '#10b981', title: 'Custom Proposal',       desc: 'You receive a detailed proposal with scope, timeline, and pricing — no templates, no surprises. Just a plan built for you.' },
            ].map((item, i) => (
              <div key={i} style={{
                opacity: 0, padding: '36px 32px', borderRadius: '16px',
                backgroundColor: 'rgba(17,24,39,0.6)', border: '1px solid #1e2d40',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${item.color}18` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e2d40'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '42px', fontWeight: '900', lineHeight: 1, marginBottom: '20px',
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.75' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sendPulse { from{transform:translateX(0)} to{transform:translateX(4px)} }
        @keyframes popIn     { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @media(max-width:900px){
          .contact-grid { grid-template-columns:1fr !important; gap:48px !important; }
          .contact-wrap { padding:60px 20px !important; }
          .contact-wrap2 { padding:60px 20px !important; }
          .next-grid    { grid-template-columns:1fr !important; }
        }
        @media(max-width:560px){
          .form-row { grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default ContactPage
