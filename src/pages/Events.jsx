import React, { useState } from 'react'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Filter,
  Search,
  Music,
  Camera,
  Utensils,
  Palette,
  Zap,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react'

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'cultural', label: 'Cultural', icon: Camera },
    { id: 'food', label: 'Food & Drink', icon: Utensils },
    { id: 'art', label: 'Art & Design', icon: Palette },
    { id: 'nightlife', label: 'Nightlife', icon: Zap }
  ]

  const events = [
    {
      id: 1,
      title: 'Kumbh Mela 2024',
      category: 'cultural',
      location: 'Prayagraj, India',
      date: '2024-01-15',
      endDate: '2024-03-04',
      time: 'All Day',
      price: 'Free',
      rating: 4.9,
      reviews: 2847,
      attendees: '50M+',
      image: '/api/placeholder/400/250',
      description: 'The largest peaceful gathering in the world. Experience ancient traditions, spiritual ceremonies, and cultural performances.',
      highlights: ['Sacred River Bathing', 'Traditional Music', 'Spiritual Talks', 'Cultural Exhibitions'],
      organizer: 'Government of Uttar Pradesh',
      tags: ['Spiritual', 'Traditional', 'Cultural Heritage']
    },
    {
      id: 2,
      title: 'Coachella Valley Music Festival',
      category: 'music',
      location: 'Indio, California, USA',
      date: '2024-04-12',
      endDate: '2024-04-21',
      time: '12:00 PM - 2:00 AM',
      price: '$429',
      rating: 4.7,
      reviews: 15623,
      attendees: '250K',
      image: '/api/placeholder/400/250',
      description: 'One of the most famous music festivals featuring top artists, art installations, and desert vibes.',
      highlights: ['World-Class Artists', 'Art Installations', 'Desert Camping', 'Fashion Shows'],
      organizer: 'Goldenvoice',
      tags: ['Music', 'Art', 'Fashion', 'Desert']
    },
    {
      id: 3,
      title: 'Oktoberfest Munich',
      category: 'food',
      location: 'Munich, Germany',
      date: '2024-09-16',
      endDate: '2024-10-03',
      time: '10:00 AM - 11:30 PM',
      price: 'Free Entry',
      rating: 4.8,
      reviews: 8934,
      attendees: '6M',
      image: '/api/placeholder/400/250',
      description: 'The world\'s largest beer festival with traditional Bavarian culture, music, and cuisine.',
      highlights: ['Traditional Beer', 'Bavarian Music', 'Local Cuisine', 'Cultural Parades'],
      organizer: 'City of Munich',
      tags: ['Beer', 'Traditional', 'Music', 'Food']
    },
    {
      id: 4,
      title: 'Art Basel Miami Beach',
      category: 'art',
      location: 'Miami Beach, Florida, USA',
      date: '2024-12-06',
      endDate: '2024-12-08',
      time: '11:00 AM - 7:00 PM',
      price: '$65',
      rating: 4.6,
      reviews: 3421,
      attendees: '80K',
      image: '/api/placeholder/400/250',
      description: 'Premier international art fair showcasing modern and contemporary works.',
      highlights: ['Contemporary Art', 'Gallery Exhibitions', 'Artist Talks', 'VIP Previews'],
      organizer: 'Art Basel',
      tags: ['Contemporary Art', 'Galleries', 'Luxury', 'Culture']
    },
    {
      id: 5,
      title: 'Tomorrowland Belgium',
      category: 'music',
      location: 'Boom, Belgium',
      date: '2024-07-19',
      endDate: '2024-07-28',
      time: '2:00 PM - 1:00 AM',
      price: '€350',
      rating: 4.9,
      reviews: 12456,
      attendees: '400K',
      image: '/api/placeholder/400/250',
      description: 'The world\'s most magical electronic music festival with incredible stage designs.',
      highlights: ['Electronic Music', 'Magical Stages', 'International DJs', 'Fantasy Theme'],
      organizer: 'ID&T',
      tags: ['Electronic', 'Fantasy', 'International', 'Magic']
    },
    {
      id: 6,
      title: 'Full Moon Party',
      category: 'nightlife',
      location: 'Koh Phangan, Thailand',
      date: '2024-02-24',
      endDate: '2024-02-25',
      time: '9:00 PM - 6:00 AM',
      price: '$10',
      rating: 4.4,
      reviews: 5678,
      attendees: '30K',
      image: '/api/placeholder/400/250',
      description: 'Monthly beach party under the full moon with international DJs and fire shows.',
      highlights: ['Beach Party', 'Fire Shows', 'International DJs', 'Full Moon'],
      organizer: 'Local Beach Bars',
      tags: ['Beach', 'Party', 'Fire Shows', 'Tropical']
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? '#C6A664' : 'none'}
        color="#C6A664"
      />
    ))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="events-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Discover Amazing Events</h1>
          <p>Find festivals, concerts, cultural events, and nightlife around the world</p>
        </div>

        {/* Search and Filters */}
        <div className="search-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search events, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent size={18} />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card card">
              <div className="event-image">
                <div className="image-placeholder">
                  <Calendar size={32} color="#C6A664" />
                </div>
                <div className="event-actions">
                  <button className="action-btn">
                    <Heart size={16} />
                  </button>
                  <button className="action-btn">
                    <Bookmark size={16} />
                  </button>
                  <button className="action-btn">
                    <Share2 size={16} />
                  </button>
                </div>
                <div className="event-category">
                  {categories.find(cat => cat.id === event.category)?.label}
                </div>
              </div>

              <div className="event-content">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <div className="event-rating">
                    {renderStars(event.rating)}
                    <span>({event.reviews})</span>
                  </div>
                </div>

                <div className="event-details">
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>
                      {formatDate(event.date)}
                      {event.endDate && event.endDate !== event.date && 
                        ` - ${formatDate(event.endDate)}`
                      }
                    </span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <Users size={16} />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-highlights">
                  {event.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="event-footer">
                  <div className="event-price">
                    <span className="price">{event.price}</span>
                    <span className="organizer">by {event.organizer}</span>
                  </div>
                  <div className="event-actions-footer">
                    <button className="btn btn-outline btn-sm">Learn More</button>
                    <button className="btn btn-primary btn-sm">Get Tickets</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Events */}
        <div className="featured-section">
          <h2>Trending This Month</h2>
          <div className="featured-events">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="featured-event card">
                <div className="featured-content">
                  <div className="featured-info">
                    <h3>{event.title}</h3>
                    <div className="featured-location">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="featured-date">
                      <Calendar size={16} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="featured-attendees">
                      <Users size={16} />
                      <span>{event.attendees} going</span>
                    </div>
                  </div>
                  <div className="featured-image">
                    <div className="image-placeholder">
                      <Calendar size={24} color="#C6A664" />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">View Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content card-gold">
            <h2>Never Miss an Event</h2>
            <p>Get personalized event recommendations and early access to tickets</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
            <div className="newsletter-features">
              <div className="feature">
                <Zap size={16} />
                <span>Early bird tickets</span>
              </div>
              <div className="feature">
                <Star size={16} />
                <span>Exclusive events</span>
              </div>
              <div className="feature">
                <Heart size={16} />
                <span>Personalized picks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .events-page {
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

        .search-filters {
          margin-bottom: 3rem;
        }

        .search-bar {
          position: relative;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .search-bar svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray);
        }

        .search-bar input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .search-bar input:focus {
          border-color: var(--gold);
          outline: none;
        }

        .category-filters {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--light-gray);
          background: var(--white);
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--gold);
          color: var(--white);
          border-color: var(--gold);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .event-card {
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-4px);
        }

        .event-image {
          position: relative;
          height: 200px;
          background: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .image-placeholder {
          text-align: center;
          color: var(--gray);
        }

        .event-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          background: var(--white);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }

        .action-btn:hover {
          background: var(--gold);
          color: var(--white);
        }

        .event-category {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .event-content {
          padding: 0 1.5rem 1.5rem;
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .event-header h3 {
          flex: 1;
          margin-right: 1rem;
        }

        .event-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .event-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .event-description {
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .event-highlights {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .highlight-tag {
          background: var(--beige);
          color: var(--navy);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid var(--gold);
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .event-price .price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gold);
        }

        .event-price .organizer {
          display: block;
          font-size: 0.75rem;
          color: var(--gray);
        }

        .event-actions-footer {
          display: flex;
          gap: 0.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .featured-section {
          margin-bottom: 4rem;
        }

        .featured-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .featured-events {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .featured-event {
          padding: 1.5rem;
        }

        .featured-content {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .featured-info {
          flex: 1;
        }

        .featured-info h3 {
          margin-bottom: 0.5rem;
        }

        .featured-location,
        .featured-date,
        .featured-attendees {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .featured-image {
          width: 80px;
          height: 80px;
          background: var(--beige);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
        }

        .newsletter-section {
          text-align: center;
        }

        .newsletter-content {
          padding: 3rem;
        }

        .newsletter-content h2 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          color: var(--white);
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .newsletter-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .newsletter-features .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--white);
        }

        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr;
          }

          .category-filters {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .category-btn {
            white-space: nowrap;
          }

          .event-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .event-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-features {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Events
