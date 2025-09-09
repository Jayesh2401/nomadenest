import React, { useState } from 'react'
import { 
  Star, 
  MapPin, 
  Calendar, 
  User, 
  ThumbsUp, 
  ThumbsDown,
  Filter,
  Search,
  Shield,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'transport', label: 'Transport' }
  ]

  const reviews = [
    {
      id: 1,
      type: 'hotel',
      name: 'Grand Palace Hotel',
      location: 'Bangkok, Thailand',
      rating: 4.8,
      totalReviews: 2847,
      reviewer: 'Sarah Johnson',
      reviewerLevel: 'Gold Member',
      date: '2024-01-15',
      verified: true,
      aiVerified: true,
      review: 'Absolutely stunning hotel with exceptional service. The staff went above and beyond to make our stay memorable. The location is perfect for exploring the city.',
      helpful: 156,
      images: 4,
      stayDuration: '5 nights',
      roomType: 'Deluxe Suite'
    },
    {
      id: 2,
      type: 'hotel',
      name: 'Seaside Resort & Spa',
      location: 'Goa, India',
      rating: 4.6,
      totalReviews: 1923,
      reviewer: 'Mike Chen',
      reviewerLevel: 'Premium Member',
      date: '2024-01-10',
      verified: true,
      aiVerified: true,
      review: 'Beautiful beachfront property with amazing sunset views. The spa services were top-notch and the food was delicious. Highly recommend for couples.',
      helpful: 89,
      images: 8,
      stayDuration: '3 nights',
      roomType: 'Ocean View Villa'
    },
    {
      id: 3,
      type: 'restaurant',
      name: 'Le Petit Bistro',
      location: 'Paris, France',
      rating: 4.9,
      totalReviews: 756,
      reviewer: 'Emma Wilson',
      reviewerLevel: 'Verified Traveler',
      date: '2024-01-08',
      verified: true,
      aiVerified: false,
      review: 'Authentic French cuisine in a cozy atmosphere. The wine selection is excellent and the service is impeccable. A must-visit when in Paris!',
      helpful: 234,
      images: 3,
      visitType: 'Dinner',
      partySize: '2 people'
    },
    {
      id: 4,
      type: 'hotel',
      name: 'Mountain View Lodge',
      location: 'Swiss Alps, Switzerland',
      rating: 4.7,
      totalReviews: 1456,
      reviewer: 'David Kumar',
      reviewerLevel: 'Gold Member',
      date: '2024-01-05',
      verified: true,
      aiVerified: true,
      review: 'Breathtaking mountain views and excellent skiing facilities. The lodge has a warm, welcoming atmosphere and the breakfast is fantastic.',
      helpful: 178,
      images: 6,
      stayDuration: '7 nights',
      roomType: 'Alpine Suite'
    }
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesFilter = selectedFilter === 'all' || review.type === selectedFilter.slice(0, -1)
    const matchesSearch = searchTerm === '' ||
                         review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.reviewer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < Math.floor(rating) ? '#C6A664' : 'none'}
        color="#C6A664"
      />
    ))
  }

  return (
    <div className="reviews-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Trusted Reviews</h1>
          <p>AI-verified reviews from real travelers to help you make informed decisions</p>
        </div>

        {/* Trust Indicators */}
        <div className="trust-section">
          <div className="trust-stats">
            <div className="trust-stat">
              <Shield size={24} color="#C6A664" />
              <div>
                <h3>98%</h3>
                <p>Verified Reviews</p>
              </div>
            </div>
            <div className="trust-stat">
              <CheckCircle size={24} color="#10B981" />
              <div>
                <h3>AI-Powered</h3>
                <p>Authenticity Check</p>
              </div>
            </div>
            <div className="trust-stat">
              <User size={24} color="#C6A664" />
              <div>
                <h3>500K+</h3>
                <p>Trusted Reviewers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="search-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search hotels, restaurants, attractions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filters">
            <Filter size={20} />
            <div className="filter-buttons">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="reviews-list">
          {filteredReviews.map(review => (
            <div key={review.id} className="review-card card">
              <div className="review-header">
                <div className="place-info">
                  <h3>{review.name}</h3>
                  <div className="location">
                    <MapPin size={16} />
                    <span>{review.location}</span>
                  </div>
                  <div className="rating-info">
                    <div className="stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="rating-number">{review.rating}</span>
                    <span className="total-reviews">({review.totalReviews} reviews)</span>
                  </div>
                </div>
                <div className="verification-badges">
                  {review.verified && (
                    <div className="badge verified">
                      <CheckCircle size={16} />
                      <span>Verified Stay</span>
                    </div>
                  )}
                  {review.aiVerified && (
                    <div className="badge ai-verified">
                      <Shield size={16} />
                      <span>AI Verified</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="review-content">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <User size={20} />
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.reviewer}</h4>
                    <span className="reviewer-level">{review.reviewerLevel}</span>
                  </div>
                  <div className="review-date">
                    <Calendar size={16} />
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="review-text">
                  <p>{review.review}</p>
                </div>

                <div className="review-details">
                  {review.stayDuration && (
                    <div className="detail">
                      <strong>Stay Duration:</strong> {review.stayDuration}
                    </div>
                  )}
                  {review.roomType && (
                    <div className="detail">
                      <strong>Room Type:</strong> {review.roomType}
                    </div>
                  )}
                  {review.visitType && (
                    <div className="detail">
                      <strong>Visit Type:</strong> {review.visitType}
                    </div>
                  )}
                  {review.partySize && (
                    <div className="detail">
                      <strong>Party Size:</strong> {review.partySize}
                    </div>
                  )}
                </div>

                <div className="review-footer">
                  <div className="review-actions">
                    <button className="action-btn helpful">
                      <ThumbsUp size={16} />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="action-btn">
                      <ThumbsDown size={16} />
                      <span>Not Helpful</span>
                    </button>
                  </div>
                  <div className="review-meta">
                    {review.images > 0 && (
                      <span className="images-count">{review.images} photos</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="write-review-cta">
          <div className="cta-content card-gold">
            <h3>Share Your Experience</h3>
            <p>Help fellow travelers by writing a detailed review of your recent trip</p>
            <button className="btn btn-secondary">Write a Review</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reviews-page {
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

        .trust-section {
          margin-bottom: 3rem;
        }

        .trust-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .trust-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--white);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--light-gold);
        }

        .trust-stat h3 {
          margin: 0;
          color: var(--gold);
        }

        .trust-stat p {
          margin: 0;
          color: var(--gray);
        }

        .search-filters {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .search-bar {
          flex: 1;
          position: relative;
          min-width: 300px;
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
          border: 1px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .filters {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 1px solid var(--light-gray);
          background: var(--white);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--gold);
          color: var(--white);
          border-color: var(--gold);
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .review-card {
          padding: 2rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .place-info h3 {
          margin-bottom: 0.5rem;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }

        .rating-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          display: flex;
          gap: 0.25rem;
        }

        .rating-number {
          font-weight: 600;
          color: var(--gold);
        }

        .total-reviews {
          color: var(--gray);
        }

        .verification-badges {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .badge.verified {
          background: #DCFCE7;
          color: #166534;
        }

        .badge.ai-verified {
          background: #FEF3C7;
          color: #92400E;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .reviewer-avatar {
          width: 40px;
          height: 40px;
          background: var(--light-gray);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reviewer-details h4 {
          margin: 0;
          font-size: 1rem;
        }

        .reviewer-level {
          color: var(--gold);
          font-size: 0.875rem;
        }

        .review-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-left: auto;
        }

        .review-text {
          margin-bottom: 1rem;
        }

        .review-text p {
          line-height: 1.6;
          color: var(--navy);
        }

        .review-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .detail {
          font-size: 0.875rem;
          color: var(--gray);
        }

        .detail strong {
          color: var(--navy);
        }

        .review-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--light-gray);
        }

        .review-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid var(--light-gray);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: var(--light-gray);
        }

        .action-btn.helpful {
          color: var(--gold);
          border-color: var(--gold);
        }

        .action-btn.helpful:hover {
          background: var(--gold);
          color: var(--white);
        }

        .images-count {
          color: var(--gray);
          font-size: 0.875rem;
        }

        .write-review-cta {
          text-align: center;
        }

        .cta-content {
          padding: 2rem;
        }

        .cta-content h3 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: var(--white);
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .search-filters {
            flex-direction: column;
            gap: 1rem;
          }

          .search-bar {
            min-width: auto;
          }

          .review-header {
            flex-direction: column;
            gap: 1rem;
          }

          .verification-badges {
            flex-direction: row;
          }

          .reviewer-info {
            flex-wrap: wrap;
          }

          .review-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default Reviews
