import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, User, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigation = [
    { name: 'Reviews', href: '/reviews' },
    { name: 'Currency', href: '/currency' },
    { name: 'Itinerary', href: '/itinerary' },
    { name: 'Membership', href: '/membership' },
  ]

  const moreNavigation = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Events', href: '/events' },
    { name: 'Travel Guides', href: '/travel-guides' },
    { name: 'Expert Consult', href: '/expert-consult' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <MapPin size={32} color="#D4AF37" />
            </div>
            <div className="logo-text">
              <h1>NOMAD NEST</h1>
              <p>Where Every Nomad Finds a Nest</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                More <ChevronDown size={16} />
              </button>
              {isMoreOpen && (
                <div className="dropdown-menu">
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`dropdown-link ${isActive(item.href) ? 'active' : ''}`}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn btn-outline">
              <User size={18} />
              Sign In
            </button>
            <button className="btn btn-primary">Join Premium</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {moreNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-auth">
              <button className="btn btn-outline">Sign In</button>
              <button className="btn btn-primary">Join Premium</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .header {
          background: var(--white);
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
        }

        .logo-icon {
          background: var(--beige);
          padding: 0.5rem;
          border-radius: 50%;
          border: 2px solid var(--gold);
        }

        .logo-text h1 {
          font-size: 1.5rem;
          color: var(--navy);
          margin: 0;
        }

        .logo-text p {
          font-size: 0.875rem;
          color: var(--dark-gray);
          margin: 0;
        }

        .desktop-nav {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .nav-link {
          text-decoration: none;
          color: var(--navy);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background-color: var(--light-gold);
          color: var(--navy);
        }

        .dropdown {
          position: relative;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--white);
          border-radius: 0.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--light-gray);
          min-width: 200px;
          z-index: 1000;
          padding: 0.5rem 0;
        }

        .dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: var(--navy);
          transition: all 0.3s ease;
        }

        .dropdown-link:hover,
        .dropdown-link.active {
          background-color: var(--light-gold);
          color: var(--navy);
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--navy);
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
          border-top: 1px solid var(--light-gray);
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--navy);
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background-color: var(--light-gold);
        }

        .mobile-auth {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 1rem;
          }

          .nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.95rem;
          }

          .dropdown-menu {
            min-width: 180px;
          }
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 0.75rem;
          }

          .nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .auth-buttons {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }

          .logo-text h1 {
            font-size: 1.25rem;
          }

          .logo-text p {
            font-size: 0.75rem;
          }

          .header-content {
            padding: 0.75rem 0;
          }
        }

        @media (max-width: 480px) {
          .logo-text h1 {
            font-size: 1.125rem;
          }

          .logo-text p {
            display: none;
          }

          .logo-icon {
            padding: 0.375rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
