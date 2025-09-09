import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  DollarSign, 
  BookOpen, 
  Crown, 
  Star,
  Calendar,
  Users,
  TrendingUp,
  ArrowRight,
  Play
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Star,
      title: 'Portal Reviews',
      description: 'Trusted & AI-verified reviews from real travelers',
      link: '/reviews'
    },
    {
      icon: DollarSign,
      title: 'Currency & Deals',
      description: 'Live competitive rates and exclusive offers',
      link: '/currency'
    },
    {
      icon: BookOpen,
      title: 'Travel Guides',
      description: 'Video + curated guides for every destination',
      link: '/travel-guides'
    },
    {
      icon: Crown,
      title: 'Membership Plans',
      description: 'Affordable tiers + rewards program',
      link: '/membership'
    }
  ]

  const trendingDestinations = [
    {
      id: 1,
      name: 'Taj Mahal, India',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      reviews: 2847,
      price: 'From $299'
    },
    {
      id: 2,
      name: 'Venice, Italy',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      reviews: 1923,
      price: 'From $599'
    },
    {
      id: 3,
      name: 'Paris, France',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      reviews: 3456,
      price: 'From $799'
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      reviews: 2156,
      price: 'From $899'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Kumbh Mela 2024',
      location: 'Prayagraj, India',
      date: 'Jan 15 - Mar 4',
      type: 'Cultural Festival'
    },
    {
      id: 2,
      title: 'Coachella Music Festival',
      location: 'California, USA',
      date: 'Apr 12 - 21',
      type: 'Music Festival'
    },
    {
      id: 3,
      title: 'Oktoberfest',
      location: 'Munich, Germany',
      date: 'Sep 16 - Oct 3',
      type: 'Cultural Event'
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Cheapest Hostels in Goa',
      excerpt: 'Discover budget-friendly accommodations in paradise',
      readTime: '5 min read',
      category: 'Budget Travel'
    },
    {
      id: 2,
      title: 'Currency Hacks at Airports',
      excerpt: 'Save money on currency exchange with these tips',
      readTime: '3 min read',
      category: 'Money Tips'
    },
    {
      id: 3,
      title: 'Nomad Survival Tips',
      excerpt: 'Essential skills every digital nomad needs',
      readTime: '7 min read',
      category: 'Lifestyle'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>NOMAD NEST</h1>
              <p className="hero-subtitle">Where Every Nomad Finds a Nest</p>
              <p className="hero-description">
                Discover the world with confidence. Plan perfect trips, find trusted reviews,
                get the best currency rates, and connect with fellow travelers.
              </p>
              <div className="hero-buttons">
                <Link to="/itinerary" className="btn btn-primary">
                  <MapPin size={20} />
                  Plan My Trip
                </Link>
                <Link to="/membership" className="btn btn-secondary">
                  <Crown size={20} />
                  Join Premium
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <MapPin size={64} color="#D4AF37" />
                <p>Beautiful Travel Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title text-center">Why Choose NomadNest?</h2>
          <div className="grid grid-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Link key={index} to={feature.link} className="feature-card card text-center">
                  <div className="feature-icon">
                    <IconComponent size={32} color="#D4AF37" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-arrow">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trial Banner */}
      <section className="trial-banner">
        <div className="container">
          <div className="trial-content card-gold flex justify-between items-center">
            <div className="trial-text">
              <h3>Start Your Free Trial</h3>
              <p>Get 7 days of Premium access with exclusive itineraries and priority support</p>
            </div>
            <Link to="/membership" className="btn btn-secondary">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="section destinations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Destinations</h2>
            <Link to="/destinations" className="view-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-4">
            {trendingDestinations.map((destination) => (
              <div key={destination.id} className="destination-card card">
                <div className="destination-image">
                  <div className="image-placeholder">
                    <MapPin size={32} color="#C6A664" />
                  </div>
                  <div className="destination-rating">
                    <Star size={14} fill="#C6A664" color="#C6A664" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                <div className="destination-info">
                  <h4>{destination.name}</h4>
                  <p>{destination.reviews} reviews</p>
                  <div className="destination-price">{destination.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Events Near You</h2>
            <Link to="/events" className="view-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-3">
            {events.map((event) => (
              <div key={event.id} className="event-card card">
                <div className="event-type">{event.type}</div>
                <h4>{event.title}</h4>
                <div className="event-details">
                  <div className="event-location">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-date">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Planner Preview */}
      <section className="section itinerary-preview">
        <div className="container">
          <div className="grid grid-2">
            <div className="itinerary-info">
              <h2>Smart Itinerary Planner</h2>
              <p>
                Create perfect travel plans with our drag-and-drop planner. 
                Add sightseeing, food tours, and relaxation time with ease.
              </p>
              <ul className="itinerary-features">
                <li>✓ Drag & drop trip elements</li>
                <li>✓ Live expert consultations</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Real-time updates</li>
              </ul>
              <Link to="/itinerary" className="btn btn-primary">
                Start Planning
              </Link>
            </div>
            <div className="itinerary-demo">
              <div className="demo-placeholder card">
                <h4>Trip to Barcelona</h4>
                <div className="demo-items">
                  <div className="demo-item">🏛️ Sightseeing</div>
                  <div className="demo-item">🍽️ Food Tour</div>
                  <div className="demo-item">🏖️ Beach Time</div>
                </div>
                <button className="btn btn-outline">
                  <Play size={16} />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Membership */}
      <section className="section premium">
        <div className="container">
          <div className="premium-content card-gold">
            <div className="premium-info">
              <h2>Premium Membership</h2>
              <ul className="premium-features">
                <li>✓ Exclusive itineraries</li>
                <li>✓ Priority bookings</li>
                <li>✓ 24/7 Concierge support</li>
                <li>✓ Referral rewards</li>
              </ul>
            </div>
            <div className="premium-cta">
              <Link to="/membership" className="btn btn-secondary">
                Join Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section blog">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nomad Knowledge Hub</h2>
            <Link to="/blog" className="view-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card card">
                <div className="blog-category">{post.category}</div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.readTime}</span>
                  <ArrowRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--beige) 0%, var(--light-gold) 100%);
          padding: 6rem 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-text {
          text-align: left;
        }

        .hero-text h1 {
          font-size: clamp(3rem, 6vw, 5rem);
          color: var(--navy);
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          color: var(--gold);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .hero-description {
          font-size: clamp(1.125rem, 1.8vw, 1.25rem);
          color: var(--dark-gray);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-placeholder {
          background: var(--white);
          border-radius: 1.5rem;
          padding: 4rem 3rem;
          text-align: center;
          box-shadow: var(--shadow-xl);
          border: 3px solid var(--gold);
          width: 100%;
          max-width: 450px;
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }

        .hero-placeholder:hover {
          transform: rotate(0deg) scale(1.05);
        }

        .hero-placeholder p {
          margin-top: 1rem;
          color: var(--dark-gray);
          font-weight: 500;
        }

        .section-title {
          margin-bottom: 3rem;
          color: var(--navy);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .view-all {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-all:hover {
          color: var(--dark-gold);
        }

        .feature-card {
          position: relative;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          color: inherit;
        }

        .feature-icon {
          background: var(--light-gold);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          border: 2px solid var(--gold);
        }

        .feature-arrow {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: var(--gold);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .feature-arrow {
          opacity: 1;
        }

        .trial-banner {
          padding: 2rem 0;
        }

        .trial-content {
          padding: 2rem;
        }

        .trial-text h3 {
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .trial-text p {
          color: var(--white);
          opacity: 0.9;
          margin: 0;
        }

        .destination-card {
          overflow: hidden;
        }

        .destination-image {
          position: relative;
          height: 200px;
          background: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
        }

        .image-placeholder {
          text-align: center;
          color: var(--gray);
        }

        .destination-rating {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--white);
          padding: 0.25rem 0.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: var(--shadow);
        }

        .destination-info h4 {
          margin-bottom: 0.5rem;
          color: var(--navy);
        }

        .destination-info p {
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }

        .destination-price {
          font-weight: 600;
          color: var(--gold);
        }

        .event-card {
          position: relative;
        }

        .event-type {
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .event-details {
          margin: 1rem 0;
        }

        .event-location,
        .event-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }

        .itinerary-features {
          list-style: none;
          margin: 1.5rem 0;
        }

        .itinerary-features li {
          margin-bottom: 0.5rem;
          color: var(--dark-gray);
        }

        .demo-placeholder {
          text-align: center;
        }

        .demo-items {
          margin: 1.5rem 0;
        }

        .demo-item {
          background: var(--light-gold);
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          border: 1px solid var(--gold);
          color: var(--navy);
        }

        .premium-content {
          padding: 2rem;
        }

        .premium-features {
          list-style: none;
          margin: 1rem 0;
        }

        .premium-features li {
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .blog-card {
          position: relative;
        }

        .blog-category {
          background: var(--light-gold);
          color: var(--navy);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--dark-gray);
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        @media (max-width: 1200px) {
          .hero-content {
            gap: 3rem;
          }

          .hero-text h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }
        }

        @media (max-width: 1024px) {
          .hero {
            padding: 4rem 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            text-align: center;
          }

          .hero-description {
            max-width: 700px;
            margin: 0 auto 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-placeholder {
            transform: none;
            max-width: 400px;
          }

          .hero-placeholder:hover {
            transform: scale(1.05);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }

          .hero-content {
            gap: 2rem;
          }

          .section-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .trial-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .premium-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero-buttons .btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .hero-placeholder {
            padding: 2rem;
          }

          .demo-item {
            padding: 0.5rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
