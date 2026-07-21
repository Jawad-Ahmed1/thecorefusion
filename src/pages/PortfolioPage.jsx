import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1, category: 'Shopify',
    title: 'E-Commerce Platform Redesign',
    result: '+45% Conversion Rate',
    description: 'Full Shopify store redesign for a fashion brand. Improved UX, checkout flow, and mobile performance — resulting in 45% higher conversions and 200% revenue growth within 3 months.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=90',
    tags: ['Shopify', 'UI/UX', 'CRO'],
    color: '#06b6d4', size: 'large',
  },
  {
    id: 2, category: 'WordPress',
    title: 'Corporate Website Launch',
    result: '#1 for 15 Keywords',
    description: 'Custom WordPress site with plugin development, SEO optimization, and CMS training. Ranked #1 for 15 target keywords within 4 months of launch.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=90',
    tags: ['WordPress', 'SEO', 'Web Dev'],
    color: '#a855f7', size: 'small',
  },
  {
    id: 3, category: 'Custom Dev',
    title: 'SaaS Analytics Platform',
    result: '10K+ Active Users',
    description: 'React + Node.js SaaS platform with real-time analytics dashboards, role-based access, and third-party API integrations. Scaled to 10,000+ users in 6 months.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90',
    tags: ['React', 'Node.js', 'API'],
    color: '#3b82f6', size: 'small',
  },
  {
    id: 4, category: 'Social Media',
    title: 'Viral Brand Campaign',
    result: '2M Impressions',
    description: 'Multi-platform social media campaign for a consumer brand. Generated 2M impressions, 50K engagements, and a 180% growth in follower count over 60 days.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=90',
    tags: ['Social Media', 'Content', 'Paid Ads'],
    color: '#ec4899', size: 'large',
  },
  {
    id: 5, category: 'SEO',
    title: 'Organic Growth Strategy',
    result: '+300% Traffic',
    description: 'Full-scale SEO audit, keyword research, content strategy, and link building for a B2B SaaS company. Grew organic traffic by 300% and reduced CAC by 40%.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop&q=90',
    tags: ['SEO', 'Content', 'Technical SEO'],
    color: '#10b981', size: 'small',
  },
  {
    id: 6, category: 'Design',
    title: 'Brand Identity System',
    result: 'Complete Rebrand',
    description: 'Full brand identity redesign including logo, color palette, typography, brand guidelines, and a complete set of marketing materials for a fintech startup.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90',
    tags: ['Branding', 'Logo', 'Guidelines'],
    color: '#f97316', size: 'small',
  },
  {
    id: 7, category: 'Shopify',
    title: 'Luxury Product Store',
    result: '$500K Monthly Revenue',
    description: 'High-end Shopify store for a luxury accessories brand. Custom theme, upsell flows, subscription model, and email automation — hitting $500K monthly GMV.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&q=90',
    tags: ['Shopify', 'Email', 'Automation'],
    color: '#06b6d4', size: 'large',
  },
  {
    id: 8, category: 'Custom Dev',
    title: 'Restaurant Booking Platform',
    result: '5000+ Reservations',
    description: 'Custom booking and table management web app for a restaurant chain. Real-time availability, SMS reminders, and admin dashboard. Processed 5000+ reservations in first month.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=90',
    tags: ['React', 'Backend', 'Database'],
    color: '#3b82f6', size: 'small',
  },
  {
    id: 9, category: 'Design',
    title: 'Product Packaging Line',
    result: '8 SKUs Launched',
    description: 'Complete packaging design for an organic skincare brand. 8 product SKUs with unified visual language, eco-friendly print specs, and retail-ready mockups.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop&q=90',
    tags: ['Packaging', 'Print', 'Brand'],
    color: '#f97316', size: 'small',
  },
]

const filters = ['All', 'Shopify', 'WordPress', 'Custom Dev', 'Social Media', 'SEO', 'Design']

// ── Project Card ─────────────────────────────────────────
const ProjectCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const imgRef  = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
        delay: (index % 3) * 0.1,
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
    )
  }, [index])

  const onEnter = () => {
    setHovered(true)
    gsap.to(imgRef.current, { scale: 1.07, duration: 0.55, ease: 'power2.out' })
  }
  const onLeave = () => {
    setHovered(false)
    gsap.to(imgRef.current, { scale: 1, duration: 0.45, ease: 'power2.out' })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', borderRadius: '16px', overflow: 'hidden',
        border: `1px solid ${hovered ? item.color + '60' : '#1e2d40'}`,
        backgroundColor: '#0d1117', cursor: 'pointer',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${item.color}20` : 'none',
        opacity: 0,
      }}
    >
      {/* Image */}
      <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
        <img ref={imgRef} src={item.image} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Bottom gradient — always visible, no blur */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to top, #0d1117, transparent)',
        }} />
        {/* Category pill */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          fontSize: '11px', fontWeight: '700', letterSpacing: '2px',
          color: '#fff', textTransform: 'uppercase',
          backgroundColor: item.color, padding: '5px 12px',
          borderRadius: '100px',
        }}>
          {item.category}
        </div>
        {/* Result badge */}
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          fontSize: '11px', fontWeight: '700',
          color: item.color, backgroundColor: `${item.color}18`,
          border: `1px solid ${item.color}40`,
          padding: '5px 12px', borderRadius: '100px',
          backdropFilter: 'blur(4px)',
        }}>
          {item.result}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 26px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <h3 style={{
            fontSize: '18px', fontWeight: '800', color: '#fff',
            lineHeight: '1.3', flex: 1, paddingRight: '12px',
          }}>
            {item.title}
          </h3>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
            backgroundColor: hovered ? item.color : `${item.color}15`,
            border: `1px solid ${item.color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}>
            <FiArrowUpRight size={16} color={hovered ? '#fff' : item.color} />
          </div>
        </div>

        <p style={{
          color: '#6b7280', fontSize: '13.5px', lineHeight: '1.7',
          marginBottom: '18px',
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {item.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {item.tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: '11px', fontWeight: '600', color: '#9ca3af',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid #1e2d40',
              padding: '4px 10px', borderRadius: '6px',
              letterSpacing: '0.5px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line — slides in on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(to right, ${item.color}, ${item.color}44)`,
        transformOrigin: 'left center',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.35s ease',
      }} />
    </div>
  )
}

// ── Stats Bar ────────────────────────────────────────────
const statsBar = [
  { value: '150+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients'       },
  { value: '7',    label: 'Service Categories'  },
  { value: '15+',  label: 'Countries Served'    },
]

// ── Main Page ────────────────────────────────────────────
const PortfolioPage = () => {
  const [active, setActive] = useState('All')
  const heroRef    = useRef(null)
  const statsRef   = useRef(null)
  const filterRef  = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  useEffect(() => {
    // Hero entrance
    gsap.fromTo(heroRef.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.14, ease: 'power3.out', delay: 0.1 }
    )
    // Stats bar
    gsap.fromTo(statsRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
    )
    // Filter bar
    gsap.fromTo(filterRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: filterRef.current, start: 'top 90%', toggleActions: 'play none none none' } }
    )
  }, [])

  return (
    <div style={{ backgroundColor: '#07090f', paddingTop: '64px', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{
        textAlign: 'center', padding: '110px 24px 80px',
        borderBottom: '1px solid #1a2234', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.07), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div ref={heroRef}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '16px', opacity: 0 }}>OUR WORK</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: '800', lineHeight: '1.1',
            marginBottom: '20px', opacity: 0 }}>
            Projects That <span className="gradient-text">Deliver Results</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '540px', margin: '0 auto 40px',
            lineHeight: '1.75', opacity: 0 }}>
            Real work. Real numbers. Every project in our portfolio is backed
            by measurable outcomes and genuine client satisfaction.
          </p>
          <Link to="/contact" className="btn-primary"
            style={{ textDecoration: 'none', opacity: 0, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Start Your Project <FiArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ borderBottom: '1px solid #1a2234', backgroundColor: '#0a0d16', padding: '0' }}>
        <div ref={statsRef} style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        }} className="stats-bar">
          {statsBar.map((s, i) => (
            <div key={i} style={{
              opacity: 0, textAlign: 'center', padding: '36px 16px',
              borderRight: i < statsBar.length - 1 ? '1px solid #1a2234' : 'none',
            }}>
              <div style={{
                fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', lineHeight: 1,
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', marginBottom: '8px',
              }}>{s.value}</div>
              <p style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter + Grid ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px' }} className="portfolio-wrap">
        {/* Filter tabs */}
        <div ref={filterRef} style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap',
          marginBottom: '56px', opacity: 0,
        }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '9px 20px', borderRadius: '100px',
              fontSize: '13px', fontWeight: '700', cursor: 'pointer',
              border: active === f ? 'none' : '1px solid #1e2d40',
              background: active === f
                ? 'linear-gradient(to right, #06b6d4, #2563eb)'
                : 'transparent',
              color: active === f ? '#fff' : '#9ca3af',
              transition: 'all 0.25s ease',
              letterSpacing: '0.3px',
            }}
              onMouseEnter={e => { if (active !== f) { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.color = '#06b6d4' }}}
              onMouseLeave={e => { if (active !== f) { e.currentTarget.style.borderColor = '#1e2d40'; e.currentTarget.style.color = '#9ca3af' }}}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="portfolio-grid">
          {filtered.map((item, i) => (
            <ProjectCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '80px', padding: '72px 0 0',
          borderTop: '1px solid #1a2234' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '14px' }}>READY TO JOIN THEM?</p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '18px' }}>
            Let's Create Your <span className="gradient-text">Success Story</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '460px', margin: '0 auto 36px', lineHeight: '1.75' }}>
            Every project above started with a single conversation. Let's have ours.
          </p>
          <Link to="/contact" className="btn-primary"
            style={{ textDecoration: 'none', fontSize: '16px', padding: '16px 40px',
              display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            Start a Project <FiArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ .portfolio-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:640px) { .portfolio-grid{grid-template-columns:1fr!important} }
        @media(max-width:768px) { .stats-bar{grid-template-columns:repeat(2,1fr)!important} .portfolio-wrap{padding:60px 20px!important} }
        @media(max-width:480px) { .stats-bar{grid-template-columns:repeat(2,1fr)!important; font-size:12px} .portfolio-wrap{padding:40px 16px!important} }
      `}</style>
    </div>
  )
}

export default PortfolioPage
