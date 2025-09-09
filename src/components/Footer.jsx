import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  MessageCircle,
  Send
} from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/nomadenest' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/nomadenest' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/nomadenest' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/nomadenest' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/nomadenest' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/1234567890' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/nomadenest' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Travel Guides', href: '/travel-guides' },
    { name: 'Events', href: '/events' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Expert Consult', href: '/expert-consult' },
    { name: 'Referral Rewards', href: '/referral-rewards' },
  ]

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <MapPin size={32} color="#D4AF37" />
              <div>
                <h3>NOMAD NEST</h3>
                <p>Where Every Nomad Finds a Nest</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted companion for seamless travel experiences. 
              Discover, plan, and explore the world with confidence.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@nomadenest.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="footer-section">
            <h4>Stay Connected</h4>
            <div className="newsletter">
              <p>Subscribe to our newsletter for travel tips and exclusive deals</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
            
            <div className="social-links">
              <h5>Follow Us</h5>
              <div className="social-icons">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 NomadNest. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--navy);
          color: var(--white);
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          padding: 3rem 0;
        }

        .footer-section h3,
        .footer-section h4,
        .footer-section h5 {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .footer-logo h3 {
          margin: 0;
          font-size: 1.25rem;
        }

        .footer-logo p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--light-gold);
        }

        .footer-description {
          margin-bottom: 1.5rem;
          color: #D1D5DB;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #D1D5DB;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: #D1D5DB;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--gold);
        }

        .newsletter {
          margin-bottom: 2rem;
        }

        .newsletter p {
          color: #D1D5DB;
          margin-bottom: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          background: #374151;
          color: var(--white);
        }

        .newsletter-input::placeholder {
          color: #9CA3AF;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #374151;
          border-radius: 50%;
          color: var(--white);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--gold);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 1.5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: #9CA3AF;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-links a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 0;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
