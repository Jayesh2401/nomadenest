import React, { useState } from 'react'
import { 
  Crown, 
  Check, 
  X, 
  Star, 
  Gift, 
  Users, 
  Clock, 
  Shield,
  Zap,
  Globe,
  Phone,
  Calendar
} from 'lucide-react'

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium')
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      id: 'free',
      name: 'Explorer',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for occasional travelers',
      features: [
        { name: 'Basic itinerary planning', included: true },
        { name: 'Currency converter', included: true },
        { name: 'Community reviews', included: true },
        { name: 'Basic travel guides', included: true },
        { name: 'Expert consultations', included: false },
        { name: 'Priority booking', included: false },
        { name: '24/7 concierge support', included: false },
        { name: 'Referral rewards', included: false }
      ],
      popular: false,
      color: '#6B7280'
    },
    {
      id: 'premium',
      name: 'Nomad Gold',
      price: { monthly: 29, yearly: 290 },
      description: 'For serious travelers and digital nomads',
      features: [
        { name: 'Advanced itinerary planning', included: true },
        { name: 'Premium currency rates', included: true },
        { name: 'Verified reviews access', included: true },
        { name: 'Exclusive travel guides', included: true },
        { name: '2 expert consultations/month', included: true },
        { name: 'Priority booking', included: true },
        { name: 'Email support', included: true },
        { name: 'Basic referral rewards', included: true }
      ],
      popular: true,
      color: '#C6A664'
    },
    {
      id: 'platinum',
      name: 'Nomad Platinum',
      price: { monthly: 79, yearly: 790 },
      description: 'Ultimate luxury travel experience',
      features: [
        { name: 'AI-powered itinerary planning', included: true },
        { name: 'Real-time currency alerts', included: true },
        { name: 'Premium review insights', included: true },
        { name: 'Personal travel curator', included: true },
        { name: 'Unlimited expert consultations', included: true },
        { name: 'VIP booking privileges', included: true },
        { name: '24/7 concierge support', included: true },
        { name: 'Premium referral rewards', included: true }
      ],
      popular: false,
      color: '#1A2A3A'
    }
  ]

  const benefits = [
    {
      icon: Crown,
      title: 'Exclusive Access',
      description: 'Get access to premium destinations and hidden gems'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with local experts and travel professionals'
    },
    {
      icon: Shield,
      title: 'Travel Protection',
      description: '24/7 support and emergency assistance worldwide'
    },
    {
      icon: Gift,
      title: 'Reward Points',
      description: 'Earn points on every booking and referral'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Digital Nomad',
      rating: 5,
      text: 'NomadNest Premium has transformed how I travel. The expert consultations saved me hundreds of dollars!',
      plan: 'Nomad Gold'
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Travel Blogger',
      rating: 5,
      text: 'The concierge service is incredible. They handled everything from bookings to local recommendations.',
      plan: 'Nomad Platinum'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Business Traveler',
      rating: 5,
      text: 'Priority booking and VIP access have made my business trips so much smoother.',
      plan: 'Nomad Platinum'
    }
  ]

  const getSavings = (plan) => {
    if (billingCycle === 'yearly') {
      const monthlyCost = plan.price.monthly * 12
      const yearlyCost = plan.price.yearly
      return monthlyCost - yearlyCost
    }
    return 0
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#C6A664' : 'none'}
        color="#C6A664"
      />
    ))
  }

  return (
    <div className="membership-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Choose Your Adventure</h1>
          <p>Unlock premium features and elevate your travel experience</p>
        </div>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="savings-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="pricing-grid">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}
              
              <div className="plan-header">
                <h3 style={{ color: plan.color }}>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price[billingCycle]}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                  <div className="savings">Save ${getSavings(plan)}/year</div>
                )}
              </div>

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    {feature.included ? (
                      <Check size={16} color="#10B981" />
                    ) : (
                      <X size={16} color="#EF4444" />
                    )}
                    <span className={feature.included ? '' : 'disabled'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`btn ${plan.id === 'free' ? 'btn-outline' : 'btn-primary'} plan-btn`}
                style={plan.id !== 'free' ? { backgroundColor: plan.color } : {}}
              >
                {plan.id === 'free' ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose NomadNest Premium?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <IconComponent size={32} color="#C6A664" />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h2>What Our Members Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="testimonial-plan">{testimonial.plan}</div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Users size={20} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Yes, you can cancel your subscription at any time. No questions asked.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>We offer a 30-day money-back guarantee for all premium plans.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes! All premium plans come with a 7-day free trial.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content card-gold">
            <h2>Ready to Start Your Premium Journey?</h2>
            <p>Join thousands of travelers who trust NomadNest for their adventures</p>
            <div className="cta-features">
              <div className="cta-feature">
                <Clock size={20} />
                <span>7-day free trial</span>
              </div>
              <div className="cta-feature">
                <Shield size={20} />
                <span>30-day money back</span>
              </div>
              <div className="cta-feature">
                <Phone size={20} />
                <span>24/7 support</span>
              </div>
            </div>
            <button className="btn btn-secondary btn-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .membership-page {
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-header h1 {
          margin-bottom: 1rem;
        }

        .page-header p {
          font-size: 1.125rem;
          color: var(--gray);
        }

        .billing-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .toggle-container {
          display: flex;
          background: var(--light-gray);
          border-radius: 0.5rem;
          padding: 0.25rem;
        }

        .toggle-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          background: transparent;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-btn.active {
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .savings-badge {
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .pricing-card {
          background: var(--white);
          border: 2px solid var(--light-gray);
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pricing-card:hover,
        .pricing-card.selected {
          border-color: var(--gold);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .pricing-card.popular {
          border-color: var(--gold);
          box-shadow: var(--shadow-lg);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold);
          color: var(--white);
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .plan-header h3 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .plan-description {
          color: var(--gray);
          margin-bottom: 1.5rem;
        }

        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 1.25rem;
          color: var(--gray);
        }

        .amount {
          font-size: 3rem;
          font-weight: 700;
          color: var(--navy);
        }

        .period {
          font-size: 1rem;
          color: var(--gray);
        }

        .savings {
          color: var(--gold);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .plan-features {
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .feature-item span.disabled {
          color: var(--gray);
          text-decoration: line-through;
        }

        .plan-btn {
          width: 100%;
        }

        .benefits-section {
          margin-bottom: 4rem;
        }

        .benefits-section h2 {
          text-align: center;
          margin-bottom: 3rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          text-align: center;
          padding: 2rem;
          background: var(--white);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--light-gold);
        }

        .benefit-icon {
          background: var(--beige);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          border: 2px solid var(--gold);
        }

        .testimonials-section {
          margin-bottom: 4rem;
        }

        .testimonials-section h2 {
          text-align: center;
          margin-bottom: 3rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          padding: 2rem;
        }

        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
        }

        .testimonial-plan {
          background: var(--light-gold);
          color: var(--navy);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .testimonial-text {
          font-style: italic;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: var(--beige);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
        }

        .author-info h4 {
          margin: 0;
          font-size: 1rem;
        }

        .author-info p {
          margin: 0;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .faq-section {
          margin-bottom: 4rem;
        }

        .faq-section h2 {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: var(--white);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--light-gold);
        }

        .faq-item h3 {
          margin-bottom: 1rem;
          color: var(--navy);
        }

        .faq-item p {
          color: var(--gray);
          line-height: 1.6;
        }

        .cta-section {
          text-align: center;
        }

        .cta-content {
          padding: 3rem;
        }

        .cta-content h2 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: var(--white);
          opacity: 0.9;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--white);
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid,
          .testimonials-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .cta-features {
            flex-direction: column;
            gap: 1rem;
          }

          .toggle-container {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  )
}

export default Membership
