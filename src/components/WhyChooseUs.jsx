import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Fast & Efficient',
      description: 'We deliver projects on time without compromising quality. Your business deserves swift solutions.',
    },
    {
      title: 'Expert Team',
      description: 'Our experienced professionals stay updated with latest trends and technologies in digital innovation.',
    },
    {
      title: 'Quality Assured',
      description: 'Every project goes through rigorous testing to ensure excellence and zero defects.',
    },
    {
      title: 'Creative Solutions',
      description: 'We blend creativity with strategy to develop unique solutions tailored to your brand.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center' }}>
            Why Choose <span style={{
              background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>TheCoreFusion</span>
          </h3>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(31, 41, 55, 0.3)',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  padding: '24px',
                  transition: 'border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <FiCheckCircle style={{ color: '#06b6d4', width: '24px', height: '24px', marginTop: '4px', flexShrink: 0 }} />
                  <h4 style={{ fontWeight: '600', fontSize: '18px' }}>{feature.title}</h4>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
