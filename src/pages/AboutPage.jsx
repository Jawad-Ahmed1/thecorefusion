import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiTarget, FiEye, FiHeart, FiZap, FiUsers,
  FiAward, FiGlobe, FiArrowRight, FiCheck
} from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── data ────────────────────────────────────────────────
const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed', sub: 'Across various industries' },
  { value: 100, suffix: '+', label: 'Happy Clients',       sub: 'Worldwide partnerships'  },
  { value: 90,  suffix: '%', label: 'Client Satisfaction', sub: 'Proven track record'     },
  { value: 5,   suffix:'+',  label: 'Years of Experience', sub: 'Building digital brands' },
]

const values = [
  { icon: FiZap,    color: '#06b6d4', title: 'Innovation First',
    desc: 'We stay ahead of digital trends to deliver cutting-edge solutions that set your brand apart from the competition.' },
  { icon: FiTarget, color: '#a855f7', title: 'Results Driven',
    desc: 'Every strategy we build is tied to measurable outcomes. We don\'t just deliver — we deliver results that matter.' },
  { icon: FiHeart,  color: '#ec4899', title: 'Client Obsessed',
    desc: 'Your success is our success. We build long-term partnerships and treat every project as if it were our own business.' },
  { icon: FiUsers,  color: '#10b981', title: 'Expert Team',
    desc: 'Certified professionals with deep expertise across development, design, SEO, and digital marketing.' },
  { icon: FiAward,  color: '#f97316', title: 'Quality Assured',
    desc: 'Every deliverable goes through rigorous review to ensure it meets the highest standard before it reaches you.' },
  { icon: FiGlobe,  color: '#3b82f6', title: 'Global Reach',
    desc: 'We\'ve worked with clients across 15+ countries — bringing a global perspective to every local challenge.' },
]

const timeline = [
  { year: '2020', title: 'Founded',             desc: 'TheCoreFusion was born with a mission to help small businesses compete in the digital world.' },
  { year: '2021', title: 'First 25 Clients',    desc: 'Rapid growth through referrals. Expanded our team and launched our full-service digital marketing arm.' },
  { year: '2022', title: 'E-Commerce Focus',    desc: 'Became a certified Shopify Partner. Built and launched 40+ online stores with an average 35% conversion lift.' },
  { year: '2023', title: '100+ Projects',       desc: 'Crossed the 100-project milestone. Added custom web development and UI/UX design to our core services.' },
  { year: '2024', title: 'Global Expansion',   desc: 'Started serving clients in USA, UK, UAE, and Australia. Grew to a team of 30+ remote professionals.' },
  { year: '2025', title: 'Next Chapter',        desc: 'Launching new service packages, partnerships, and a redesigned client experience platform.' },
]

const team = [
  { name: 'Jawad Ahmed',    role: 'Founder & CEO',           img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=90', color: '#06b6d4' },
  { name: 'Arshad',         role: 'Head of Design',          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=90', color: '#a855f7' },
  { name: 'Abdullah Chakka',role: 'Head of SEO',             img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=90', color: '#3b82f6' },
  { name: 'Fatima Malik',   role: 'Marketing Lead',          img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=90', color: '#10b981' },
]

// ── reusable animated section wrapper ───────────────────
const FadeUp = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' } }
    )
  }, [delay])
  return <div ref={ref} style={{ opacity: 0, ...style }}>{children}</div>
}

// ── 1. Hero ──────────────────────────────────────────────
const AboutHero = () => {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
    )
  }, [])
  return (
    <div ref={ref} style={{
      textAlign: 'center', padding: '130px 24px 90px',
      borderBottom: '1px solid #1a2234', backgroundColor: '#07090f',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3.5px', color: '#06b6d4',
        textTransform: 'uppercase', marginBottom: '16px', opacity: 0 }}>
        OUR STORY
      </p>
      <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: '800', lineHeight: '1.1',
        marginBottom: '20px', opacity: 0 }}>
        About <span className="gradient-text">TheCoreFusion</span>
      </h1>
      <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '580px', margin: '0 auto 40px',
        lineHeight: '1.75', opacity: 0 }}>
        We are a results-driven digital agency helping brands grow, scale, and dominate
        their market through strategy, design, and technology.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
        <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Start a Project</Link>
        <Link to="/services" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 24px', borderRadius: '8px', border: '1px solid #374151',
          color: '#d1d5db', textDecoration: 'none', fontWeight: '600', fontSize: '14px',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.color = '#06b6d4' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.color = '#d1d5db' }}
        >
          Our Services <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

// ── 2. Who We Are ───────────────────────────────────────
const WhoWeAre = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%', toggleActions: 'play none none none' } })
    gsap.fromTo(rightRef.current, { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%', toggleActions: 'play none none none' } })
  }, [])
  return (
    <div style={{ backgroundColor: '#07090f', padding: '100px 0', borderBottom: '1px solid #1a2234' }}>
      <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', padding: '0 48px' }} className2="about-2col">
        <div ref={leftRef} style={{ opacity: 0 }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '16px' }}>WHO WE ARE</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px' }}>
            A Team That <span className="gradient-text">Builds Brands</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.85', marginBottom: '20px' }}>
            TheCoreFusion is a forward-thinking digital agency founded on the belief that every business —
            regardless of size — deserves world-class digital tools and strategy. We combine creativity,
            technology, and data to deliver solutions that actually move the needle.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.85', marginBottom: '32px' }}>
            From startups finding their footing to established companies scaling their operations, we've
            partnered with clients across e-commerce, SaaS, healthcare, retail, and more — delivering
            measurable growth every single time.
          </p>
          {['150+ projects delivered worldwide', 'Clients across 15+ countries',
            'Full-service: design, dev, SEO, marketing', 'Dedicated account manager for every client'].map((pt, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(6,182,212,0.15)',
                border: '1px solid rgba(6,182,212,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <FiCheck size={11} color="#06b6d4" />
              </div>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>{pt}</span>
            </div>
          ))}
        </div>
        <div ref={rightRef} style={{ opacity: 0, borderRadius: '20px', overflow: 'hidden',
          border: '1px solid #1a2234', position: 'relative', height: '480px' }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=960&fit=crop&q=90"
            alt="Team collaborating" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px',
            backgroundColor: 'rgba(7,9,15,0.85)', backdropFilter: 'blur(10px)',
            borderRadius: '12px', padding: '20px 24px', border: '1px solid #1a2234' }}>
            <p style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>
              TheCoreFusion Team
            </p>
            <p style={{ color: '#9ca3af', fontSize: '13px' }}>
              30+ remote professionals across design, dev & marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 3. Stats ─────────────────────────────────────────────
const StatsSection = () => {
  const gridRef = useRef(null)
  const counterRefs = useRef([])
  useEffect(() => {
    gsap.fromTo(gridRef.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' } })
    counterRefs.current.forEach((el, i) => {
      if (!el) return
      const obj = { val: 0 }
      gsap.to(obj, { val: stats[i].value, duration: 2.2, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.floor(obj.val) + stats[i].suffix },
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } })
    })
  }, [])
  return (
    <div style={{ backgroundColor: '#0a0d16', padding: '90px 0', borderBottom: '1px solid #1a2234' }}>
      <div className="container-custom" style={{ padding: '0 48px' }}>
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ opacity: 0, textAlign: 'center', padding: '40px 24px',
              borderRight: i < stats.length - 1 ? '1px solid #1a2234' : 'none' }}>
              <div ref={el => counterRefs.current[i] = el}
                style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '900', lineHeight: 1,
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', marginBottom: '12px' }}>0</div>
              <p style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '6px' }}>{s.label}</p>
              <p style={{ color: '#6b7280', fontSize: '13px' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.stats-grid{grid-template-columns:1fr!important}}
        @media(max-width:900px){.about-2col{grid-template-columns:1fr!important;padding:0 20px!important}}
      `}</style>
    </div>
  )
}

// ── 4. Mission & Vision ──────────────────────────────────
const MissionVision = () => (
  <div style={{ backgroundColor: '#07090f', padding: '100px 0', borderBottom: '1px solid #1a2234' }}>
    <div className="container-custom" style={{ padding: '0 48px' }}>
      <FadeUp style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
          textTransform: 'uppercase', marginBottom: '14px' }}>WHAT DRIVES US</p>
        <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: '800', lineHeight: '1.2' }}>
          Mission & <span className="gradient-text">Vision</span>
        </h2>
      </FadeUp>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="mv-grid">
        {[
          { icon: FiTarget, color: '#06b6d4', title: 'Our Mission',
            content: 'To empower businesses of all sizes with innovative digital solutions that drive growth, enhance brand presence, and create meaningful customer connections in the digital world. We believe every brand has the potential to lead — we just help them get there.' },
          { icon: FiEye, color: '#a855f7', title: 'Our Vision',
            content: 'To be the most trusted digital partner for businesses globally, recognized for innovation, excellence, and delivering transformative results that exceed expectations. We see a world where every business has the digital tools to compete and win at scale.' },
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.15}>
            <div style={{ backgroundColor: 'rgba(17,24,39,0.6)', border: '1px solid #1a2234',
              borderRadius: '16px', padding: '40px 36px', height: '100%',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${item.color}18` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2234'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px',
                backgroundColor: `${item.color}18`, border: `1px solid ${item.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <item.icon size={24} color={item.color} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: item.color }}>{item.title}</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.8', fontSize: '15px' }}>{item.content}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
    <style>{`@media(max-width:768px){.mv-grid{grid-template-columns:1fr!important}}`}</style>
  </div>
)

// ── 5. Core Values ───────────────────────────────────────
const CoreValues = () => {
  const gridRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(gridRef.current?.children || [],
      { opacity: 0, y: 50, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', toggleActions: 'play none none none' } })
  }, [])
  return (
    <div style={{ backgroundColor: '#0a0d16', padding: '100px 0', borderBottom: '1px solid #1a2234' }}>
      <div className="container-custom" style={{ padding: '0 48px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '14px' }}>WHAT WE STAND FOR</p>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: '800', lineHeight: '1.2' }}>
            Our Core <span className="gradient-text">Values</span>
          </h2>
        </FadeUp>
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="values-grid">
          {values.map((v, i) => (
            <div key={i} style={{ opacity: 0, backgroundColor: 'rgba(17,24,39,0.6)',
              border: '1px solid #1a2234', borderRadius: '14px', padding: '32px 28px',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = v.color; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${v.color}18` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2234'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px',
                backgroundColor: `${v.color}18`, border: `1px solid ${v.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <v.icon size={22} color={v.color} />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>{v.title}</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.75' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.values-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.values-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}

// ── 6. Timeline ──────────────────────────────────────────
const Timeline = () => {
  const itemRefs = useRef([])
  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } })
    })
  }, [])
  return (
    <div style={{ backgroundColor: '#07090f', padding: '100px 0', borderBottom: '1px solid #1a2234' }}>
      <div className="container-custom" style={{ padding: '0 48px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '14px' }}>OUR JOURNEY</p>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: '800', lineHeight: '1.2' }}>
            How We <span className="gradient-text">Got Here</span>
          </h2>
        </FadeUp>
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Centre line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '1px', backgroundColor: '#1a2234', transform: 'translateX(-50%)' }} />
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} ref={el => itemRefs.current[i] = el}
                style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start',
                  paddingRight: isLeft ? 'calc(50% + 32px)' : '0',
                  paddingLeft: isLeft ? '0' : 'calc(50% + 32px)',
                  marginBottom: '48px', opacity: 0, position: 'relative' }}>
                {/* Dot on line */}
                <div style={{ position: 'absolute', left: '50%', top: '20px',
                  transform: 'translateX(-50%)', width: '14px', height: '14px',
                  borderRadius: '50%', backgroundColor: '#06b6d4',
                  border: '3px solid #07090f', zIndex: 2,
                  boxShadow: '0 0 12px rgba(6,182,212,0.5)' }} />
                <div style={{ backgroundColor: 'rgba(17,24,39,0.8)', border: '1px solid #1a2234',
                  borderRadius: '12px', padding: '24px 28px', maxWidth: '300px',
                  transition: 'border-color 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(6,182,212,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2234'; e.currentTarget.style.boxShadow = 'none' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#06b6d4',
                    letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{item.year}</span>
                  <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── 7. Team ──────────────────────────────────────────────
const TeamSection = () => {
  const gridRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(gridRef.current?.children || [],
      { opacity: 0, y: 50, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', toggleActions: 'play none none none' } })
  }, [])
  return (
    <div style={{ backgroundColor: '#0a0d16', padding: '100px 0', borderBottom: '1px solid #1a2234' }}>
      <div className="container-custom" style={{ padding: '0 48px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
            textTransform: 'uppercase', marginBottom: '14px' }}>THE PEOPLE</p>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: '800', lineHeight: '1.2' }}>
            Meet The <span className="gradient-text">Team</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '480px', margin: '16px auto 0', lineHeight: '1.75' }}>
            Passionate professionals who live and breathe digital — dedicated to your growth.
          </p>
        </FadeUp>
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }} className="team-grid">
          {team.map((member, i) => (
            <div key={i} style={{ opacity: 0, borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #1a2234', backgroundColor: 'rgba(17,24,39,0.6)',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = member.color; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 20px 50px ${member.color}20` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2234'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={member.img} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0,
                  background: `linear-gradient(180deg, transparent 50%, rgba(10,13,22,0.8) 100%)` }} />
              </div>
              <div style={{ padding: '20px 20px 24px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{member.name}</h4>
                <p style={{ fontSize: '13px', color: member.color, fontWeight: '600' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.team-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.team-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}

// ── 8. Bottom CTA ────────────────────────────────────────
const AboutCTA = () => (
  <div style={{ backgroundColor: '#07090f', padding: '110px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 70%)',
      pointerEvents: 'none' }} />
    <FadeUp>
      <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#06b6d4',
        textTransform: 'uppercase', marginBottom: '16px' }}>LET'S WORK TOGETHER</p>
      <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>
        Ready to <span className="gradient-text">Grow Your Brand?</span>
      </h2>
      <p style={{ color: '#9ca3af', fontSize: '17px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.75' }}>
        Let's build something great together. Tell us about your project and
        we'll craft a strategy built specifically for your goals.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', fontSize: '16px', padding: '16px 40px' }}>
          Start a Conversation
        </Link>
        <Link to="/portfolio" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '16px 32px', borderRadius: '8px', border: '1px solid #374151',
          color: '#d1d5db', textDecoration: 'none', fontWeight: '600', fontSize: '15px',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.color = '#06b6d4' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.color = '#d1d5db' }}>
          View Our Work <FiArrowRight size={16} />
        </Link>
      </div>
    </FadeUp>
  </div>
)

// ── Page ─────────────────────────────────────────────────
const AboutPage = () => (
  <div style={{ backgroundColor: '#07090f', paddingTop: '64px' }}>
    <AboutHero />
    <WhoWeAre />
    <StatsSection />
    <MissionVision />
    <CoreValues />
    <Timeline />
    <TeamSection />
    <AboutCTA />
  </div>
)

export default AboutPage
