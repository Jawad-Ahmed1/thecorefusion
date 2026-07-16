import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiShare2, FiShoppingCart, FiGlobe, FiSearch,
  FiCode, FiImage, FiPackage, FiArrowRight, FiCheck
} from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: FiShare2,
    color: '#06b6d4',
    tag: 'SOCIAL MEDIA',
    title: 'Social Media Marketing',
    description:
      'We build and manage your entire social media presence — from strategy to execution. Our team creates platform-specific content that builds community, drives engagement, and converts followers into paying customers. Every post, story, and campaign is backed by data.',
    features: [
      'Full content calendar & strategy',
      'Platform management (Instagram, Facebook, LinkedIn, TikTok)',
      'Community management & engagement',
      'Paid social media advertising',
      'Monthly analytics & performance reports',
      'Competitor analysis & benchmarking',
    ],
    stat: { value: '3x', label: 'Average Engagement Increase' },
  },
  {
    id: 2,
    icon: FiShoppingCart,
    color: '#a855f7',
    tag: 'E-COMMERCE',
    title: 'Shopify Store Development',
    description:
      'We build high-converting Shopify stores from scratch or redesign existing ones. Every store we build is optimized for speed, mobile, and conversions. We handle everything from theme customization to complex third-party integrations — so you can focus on selling.',
    features: [
      'Custom theme design & development',
      'Product catalog setup & management',
      'Payment gateway & checkout optimization',
      'Apps & third-party integrations',
      'Speed & performance optimization',
      'Post-launch support & maintenance',
    ],
    stat: { value: '45%', label: 'Average Conversion Rate Boost' },
  },
  {
    id: 3,
    icon: FiGlobe,
    color: '#3b82f6',
    tag: 'WEB DEVELOPMENT',
    title: 'WordPress Website Development',
    description:
      'We craft professional WordPress websites that are fast, secure, and SEO-optimized. Whether it\'s a corporate site, blog, or portfolio, we build with scalability in mind. Our WordPress sites are custom-built — no bloated templates, no shortcuts.',
    features: [
      'Custom WordPress theme development',
      'Plugin development & customization',
      'On-page SEO optimization',
      'WooCommerce integration',
      'Speed optimization & caching',
      'Security hardening & ongoing maintenance',
    ],
    stat: { value: '#1', label: 'Ranked for Target Keywords' },
  },
  {
    id: 4,
    icon: FiSearch,
    color: '#10b981',
    tag: 'SEO',
    title: 'SEO Optimization',
    description:
      'Our proven SEO strategies put your business at the top of search results and keep it there. We combine technical SEO, on-page optimization, and authoritative link building to drive sustainable organic growth. No black hat tricks — just results that last.',
    features: [
      'Full technical SEO audit',
      'Keyword research & strategy',
      'On-page & content optimization',
      'Link building & outreach',
      'Local SEO & Google Business Profile',
      'Monthly ranking & traffic reports',
    ],
    stat: { value: '300%', label: 'Average Organic Traffic Growth' },
  },
  {
    id: 5,
    icon: FiCode,
    color: '#f97316',
    tag: 'DEVELOPMENT',
    title: 'Custom Web Development',
    description:
      'Need something beyond a template? We build fully custom web applications, SaaS platforms, and internal tools using modern technologies like React, Next.js, and Node.js. Every line of code is written for performance, scalability, and long-term maintainability.',
    features: [
      'React / Next.js frontend development',
      'Node.js / REST API backend development',
      'Database architecture & optimization',
      'Third-party API integrations',
      'Authentication & user management',
      'Cloud deployment & DevOps',
    ],
    stat: { value: '12%', label: 'Average Landing Page Conversion Rate' },
  },
  {
    id: 6,
    icon: FiImage,
    color: '#ec4899',
    tag: 'DESIGN',
    title: 'Graphic Designing',
    description:
      'Great design is the difference between being noticed and being ignored. Our designers create visual identities that make your brand instantly recognizable. From logo design to complete brand systems, we bring strategy and creativity together for designs that work.',
    features: [
      'Logo design & brand identity',
      'Brand guidelines & style guide',
      'Social media graphics & templates',
      'UI/UX design for web & mobile',
      'Marketing materials & print design',
      'Presentation & pitch deck design',
    ],
    stat: { value: '100+', label: 'Brand Identities Delivered' },
  },
  {
    id: 7,
    icon: FiPackage,
    color: '#eab308',
    tag: 'PACKAGING',
    title: 'Packaging Design',
    description:
      'Your packaging is your first impression on the shelf and online. We design product packaging that tells your brand\'s story, stands out from the competition, and converts browsers into buyers. All files are delivered print-ready, production-spec, and pixel-perfect.',
    features: [
      'Product packaging design',
      'Label & sticker design',
      'Box, sleeve & pouch design',
      'Mockup & visualization',
      'Print-ready production files',
      'Multiple revision rounds',
    ],
    stat: { value: '50+', label: 'Product Packages Designed' },
  },
]

// Single service section component
const ServiceSection = ({ service, index }) => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const cardRef = useRef(null)
  const Icon = service.icon
  const isEven = index % 2 === 0

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: isEven ? -60 : 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
      gsap.fromTo(cardRef.current,
        { opacity: 0, x: isEven ? 60 : -60, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
      // Feature items stagger
      const items = textRef.current?.querySelectorAll('.feat-item')
      if (items?.length) {
        gsap.fromTo(items,
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out',
            scrollTrigger: { trigger: textRef.current, start: 'top 78%', toggleActions: 'play none none none' }
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [isEven])

  return (
    <div
      ref={sectionRef}
      style={{
        borderBottom: '1px solid #1a2234',
        padding: '100px 0',
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
          direction: isEven ? 'ltr' : 'rtl',
          padding: '0 48px',
        }}
      >
        {/* Text side */}
        <div ref={textRef} style={{ direction: 'ltr', opacity: 0 }}>
          {/* Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              backgroundColor: `${service.color}18`,
              border: `1px solid ${service.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={20} color={service.color} />
            </div>
            <span style={{
              fontSize: '11px', fontWeight: '800', letterSpacing: '2.5px',
              color: service.color, textTransform: 'uppercase',
            }}>
              {service.tag}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: '800', lineHeight: '1.2',
            color: '#fff', marginBottom: '20px',
          }}>
            {service.title}
          </h2>

          {/* Description */}
          <p style={{
            color: '#9ca3af', fontSize: '16px',
            lineHeight: '1.8', marginBottom: '32px',
          }}>
            {service.description}
          </p>

          {/* Features */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {service.features.map((feat, fi) => (
              <li key={fi} className="feat-item" style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                fontSize: '14px', color: '#d1d5db', opacity: 0,
              }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  backgroundColor: `${service.color}20`,
                  border: `1px solid ${service.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px',
                }}>
                  <FiCheck size={11} color={service.color} />
                </div>
                {feat}
              </li>
            ))}
          </ul>

          {/* CTA removed */}
        </div>

        {/* Stat card side */}
        <div ref={cardRef} style={{ direction: 'ltr', opacity: 0 }}>
          <div style={{
            borderRadius: '20px',
            border: `1px solid ${service.color}30`,
            background: `linear-gradient(135deg, ${service.color}08 0%, rgba(17,24,39,0.8) 100%)`,
            padding: '60px 52px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Big background icon watermark */}
            <div style={{
              position: 'absolute', right: '-10px', bottom: '-10px',
              opacity: 0.04, pointerEvents: 'none',
            }}>
              <Icon size={180} color={service.color} />
            </div>

            {/* Service number */}
            <div style={{
              fontSize: '13px', fontWeight: '700', letterSpacing: '2px',
              color: `${service.color}80`, marginBottom: '32px',
              textTransform: 'uppercase',
            }}>
              Service 0{service.id}
            </div>

            {/* Big stat */}
            <div style={{
              fontSize: 'clamp(52px, 8vw, 88px)',
              fontWeight: '900', lineHeight: 1,
              background: `linear-gradient(135deg, ${service.color}, ${service.color}88)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', marginBottom: '12px',
            }}>
              {service.stat.value}
            </div>
            <p style={{ color: '#9ca3af', fontSize: '15px', marginBottom: '44px', fontWeight: '500' }}>
              {service.stat.label}
            </p>

            {/* Divider */}
            <div style={{
              height: '1px', marginBottom: '32px',
              background: `linear-gradient(to right, ${service.color}40, transparent)`,
            }} />

            {/* Mini feature pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {service.features.slice(0, 4).map((feat, fi) => (
                <span key={fi} style={{
                  fontSize: '12px', fontWeight: '500',
                  color: service.color,
                  backgroundColor: `${service.color}12`,
                  border: `1px solid ${service.color}30`,
                  padding: '6px 14px', borderRadius: '100px',
                }}>
                  {feat.split(' ').slice(0, 3).join(' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
        }
        @media (max-width: 900px) {
          .container-custom { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  )
}

// Page hero
const PageHero = () => {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '140px 48px 100px',
      borderBottom: '1px solid #1a2234',
      position: 'relative', overflow: 'hidden',
      backgroundColor: '#07090f',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.1), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <p style={{
        fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px',
        color: '#06b6d4', textTransform: 'uppercase',
        marginBottom: '16px', opacity: 0,
      }}>
        WHAT WE OFFER
      </p>
      <h1 style={{
        fontSize: 'clamp(32px, 6vw, 64px)',
        fontWeight: '800', lineHeight: '1.1',
        marginBottom: '20px', opacity: 0,
      }}>
        Our <span className="gradient-text">Services</span>
      </h1>
      <p style={{
        color: '#9ca3af', fontSize: '18px',
        maxWidth: '560px', margin: '0 auto 36px',
        lineHeight: '1.75', opacity: 0,
      }}>
        Comprehensive digital solutions designed to grow your business,
        build your brand, and deliver real measurable results.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
        <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
          Start a Project
        </Link>
        <a href="#services-list" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 24px', borderRadius: '8px',
          border: '1px solid #374151', color: '#d1d5db',
          textDecoration: 'none', fontWeight: '600', fontSize: '14px',
          transition: 'all 0.3s ease', backgroundColor: 'transparent',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#06b6d4'
            e.currentTarget.style.color = '#06b6d4'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#374151'
            e.currentTarget.style.color = '#d1d5db'
          }}
        >
          Explore Services <FiArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

// Bottom CTA
const BottomCTA = () => {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' }
      }
    )
  }, [])

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '120px 48px',
      backgroundColor: '#07090f',
      position: 'relative', overflow: 'hidden',
      opacity: 0,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <p style={{
        fontSize: '11px', fontWeight: '700', letterSpacing: '3px',
        color: '#06b6d4', textTransform: 'uppercase', marginBottom: '16px',
      }}>
        LET'S BUILD TOGETHER
      </p>
      <h2 style={{
        fontSize: 'clamp(28px, 5vw, 52px)',
        fontWeight: '800', lineHeight: '1.2',
        marginBottom: '20px',
      }}>
        Ready to Start Your{' '}
        <span className="gradient-text">Project?</span>
      </h2>
      <p style={{
        color: '#9ca3af', fontSize: '17px',
        maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.75',
      }}>
        Tell us about your goals and we'll put together a custom strategy
        built specifically for your business.
      </p>
      <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', fontSize: '16px', padding: '16px 40px' }}>
        Get a Free Consultation
      </Link>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <div style={{ backgroundColor: '#07090f', paddingTop: '64px' }}>
      <PageHero />
      <div id="services-list">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
      <BottomCTA />
    </div>
  )
}

export default ServicesPage
