import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HelpCircle,
  User,
  AlertCircle
} from 'lucide-react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking Support' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'feedback', label: 'Feedback' }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@nomadenest.com',
      responseTime: '24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '+1 (555) 123-4567',
      responseTime: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us instantly',
      contact: 'Available 24/7',
      responseTime: 'Instant'
    }
  ]

  const faqItems = [
    {
      question: 'How do I cancel my booking?',
      answer: 'You can cancel your booking through your account dashboard or by contacting our support team.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer full refunds for cancellations made 48 hours before your trip. Partial refunds may apply for later cancellations.'
    },
    {
      question: 'How do I upgrade to Premium?',
      answer: 'Visit the Membership page and select your preferred plan. You can upgrade instantly with any major credit card.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! We offer special rates for groups of 10 or more. Contact our sales team for custom pricing.'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      })
    }, 2000)
  }

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We're here to help! Get in touch with our support team</p>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">
          <h2>Get In Touch</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div key={index} className="method-card card">
                  <div className="method-icon">
                    <IconComponent size={32} color="#C6A664" />
                  </div>
                  <h3>{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <div className="method-contact">{method.contact}</div>
                  <div className="method-response">
                    <Clock size={16} />
                    <span>{method.responseTime}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="contact-layout">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-container card">
              <h2>Send us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <Send size={32} color="#10B981" />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="form-textarea"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="contact-info-section">
            {/* Office Info */}
            <div className="office-info card">
              <h3>Our Office</h3>
              <div className="office-details">
                <div className="office-item">
                  <MapPin size={20} color="#C6A664" />
                  <div>
                    <p>123 Travel Street</p>
                    <p>San Francisco, CA 94102</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="office-item">
                  <Clock size={20} color="#C6A664" />
                  <div>
                    <p>Business Hours</p>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                    <p>Sat-Sun: 10:00 AM - 4:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section card">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      <HelpCircle size={16} color="#C6A664" />
                      <span>{item.question}</span>
                    </div>
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="emergency-contact card">
              <div className="emergency-header">
                <AlertCircle size={24} color="#EF4444" />
                <h3>Emergency Support</h3>
              </div>
              <p>For urgent travel emergencies while you're on the road:</p>
              <div className="emergency-number">
                <Phone size={20} />
                <span>+1 (555) 911-HELP</span>
              </div>
              <p className="emergency-note">Available 24/7 for Premium members</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-methods {
          margin-bottom: 4rem;
        }

        .contact-methods h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .method-card {
          text-align: center;
          padding: 2rem;
        }

        .method-icon {
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

        .method-description {
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .method-contact {
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 0.5rem;
        }

        .method-response {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .form-container {
          padding: 2rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-icon {
          background: #DCFCE7;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .success-message h3 {
          color: #10B981;
          margin-bottom: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--navy);
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 0.75rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--gold);
          outline: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          align-self: flex-start;
          min-width: 150px;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .office-info,
        .faq-section,
        .emergency-contact {
          padding: 1.5rem;
        }

        .office-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .office-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .office-item p {
          margin: 0;
          color: var(--gray);
          line-height: 1.4;
        }

        .office-item p:first-child {
          color: var(--navy);
          font-weight: 600;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-bottom: 1px solid var(--light-gray);
          padding-bottom: 1rem;
        }

        .faq-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 0.5rem;
        }

        .faq-answer {
          color: var(--gray);
          line-height: 1.5;
          padding-left: 1.5rem;
        }

        .emergency-contact {
          border: 2px solid #FEE2E2;
          background: #FEF2F2;
        }

        .emergency-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .emergency-header h3 {
          color: #DC2626;
          margin: 0;
        }

        .emergency-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #DC2626;
          margin: 1rem 0;
        }

        .emergency-note {
          font-size: 0.875rem;
          color: var(--gray);
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .methods-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .submit-btn {
            align-self: stretch;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactUs
