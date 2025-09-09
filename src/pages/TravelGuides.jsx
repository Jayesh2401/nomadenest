import React, { useState } from 'react'
import { 
  Play, 
  BookOpen, 
  MapPin, 
  Clock, 
  Star,
  Download,
  Search,
  Filter,
  Eye,
  Heart,
  Share2
} from 'lucide-react'

const TravelGuides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGuide, setSelectedGuide] = useState(null)

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'city', label: 'City Guides' },
    { id: 'country', label: 'Country Guides' },
    { id: 'budget', label: 'Budget Travel' },
    { id: 'luxury', label: 'Luxury Travel' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'culture', label: 'Culture & History' }
  ]

  const guides = [
    {
      id: 1,
      title: 'Complete Barcelona Travel Guide',
      category: 'city',
      location: 'Barcelona, Spain',
      type: 'Video + PDF',
      duration: '45 min',
      rating: 4.9,
      reviews: 1234,
      views: 25600,
      price: 'Free',
      premium: false,
      thumbnail: '/api/placeholder/300/200',
      description: 'Comprehensive guide covering Gaudí architecture, tapas tours, beaches, and hidden local gems.',
      highlights: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter', 'Beach Guide'],
      author: 'Maria Rodriguez',
      lastUpdated: '2024-01-15',
      downloadSize: '12 MB'
    },
    {
      id: 2,
      title: 'Japan: First Timer\'s Complete Guide',
      category: 'country',
      location: 'Japan',
      type: 'Video Series',
      duration: '2h 30min',
      rating: 4.8,
      reviews: 2156,
      views: 45200,
      price: 'Premium',
      premium: true,
      thumbnail: '/api/placeholder/300/200',
      description: 'Everything you need for your first trip to Japan: culture, etiquette, transportation, and must-see destinations.',
      highlights: ['Tokyo Guide', 'Kyoto Temples', 'JR Pass Tips', 'Cultural Etiquette'],
      author: 'Hiroshi Tanaka',
      lastUpdated: '2024-01-10',
      downloadSize: '85 MB'
    },
    {
      id: 3,
      title: 'Southeast Asia on $30/Day',
      category: 'budget',
      location: 'Southeast Asia',
      type: 'PDF Guide',
      duration: '1h read',
      rating: 4.7,
      reviews: 892,
      views: 18900,
      price: '$9.99',
      premium: false,
      thumbnail: '/api/placeholder/300/200',
      description: 'Budget backpacker\'s bible for Thailand, Vietnam, Cambodia, and Laos with money-saving tips.',
      highlights: ['Budget Accommodations', 'Street Food Guide', 'Transport Hacks', 'Visa Information'],
      author: 'Sophie Chen',
      lastUpdated: '2024-01-08',
      downloadSize: '8 MB'
    },
    {
      id: 4,
      title: 'Paris: Art & Culture Deep Dive',
      category: 'culture',
      location: 'Paris, France',
      type: 'Interactive Guide',
      duration: '3h experience',
      rating: 4.9,
      reviews: 567,
      views: 12300,
      price: 'Premium',
      premium: true,
      thumbnail: '/api/placeholder/300/200',
      description: 'Explore Paris through its art, museums, and cultural heritage with expert commentary and virtual tours.',
      highlights: ['Louvre Secrets', 'Montmartre Artists', 'Hidden Museums', 'Art History'],
      author: 'Jean-Pierre Dubois',
      lastUpdated: '2024-01-12',
      downloadSize: '156 MB'
    },
    {
      id: 5,
      title: 'Iceland Adventure Guide',
      category: 'adventure',
      location: 'Iceland',
      type: 'Video + Maps',
      duration: '1h 45min',
      rating: 4.8,
      reviews: 743,
      views: 22100,
      price: '$14.99',
      premium: false,
      thumbnail: '/api/placeholder/300/200',
      description: 'Complete adventure guide to Iceland\'s natural wonders, from glaciers to geysers.',
      highlights: ['Ring Road Route', 'Northern Lights', 'Hot Springs', 'Hiking Trails'],
      author: 'Erik Johansson',
      lastUpdated: '2024-01-05',
      downloadSize: '67 MB'
    },
    {
      id: 6,
      title: 'Luxury Dubai Experience',
      category: 'luxury',
      location: 'Dubai, UAE',
      type: 'Premium Video',
      duration: '1h 20min',
      rating: 4.6,
      reviews: 445,
      views: 15600,
      price: 'Premium',
      premium: true,
      thumbnail: '/api/placeholder/300/200',
      description: 'Exclusive guide to Dubai\'s luxury experiences, from 7-star hotels to private desert safaris.',
      highlights: ['Luxury Hotels', 'Fine Dining', 'Private Tours', 'Shopping Guide'],
      author: 'Amira Al-Rashid',
      lastUpdated: '2024-01-18',
      downloadSize: '94 MB'
    }
  ]

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.location.toLowerCase().includes(searchTerm.toLowerCase())
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

  const GuideModal = ({ guide, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{guide.title}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="guide-preview">
          <div className="preview-thumbnail">
            <div className="thumbnail-placeholder">
              <Play size={48} color="#C6A664" />
            </div>
            <div className="preview-overlay">
              <button className="play-btn">
                <Play size={24} />
                Preview
              </button>
            </div>
          </div>
          
          <div className="guide-details">
            <div className="guide-meta">
              <div className="meta-item">
                <MapPin size={16} />
                <span>{guide.location}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{guide.duration}</span>
              </div>
              <div className="meta-item">
                <Eye size={16} />
                <span>{guide.views.toLocaleString()} views</span>
              </div>
            </div>
            
            <div className="guide-rating">
              {renderStars(guide.rating)}
              <span>({guide.reviews} reviews)</span>
            </div>
            
            <p className="guide-description">{guide.description}</p>
            
            <div className="guide-highlights">
              <h4>What's Included:</h4>
              <ul>
                {guide.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="guide-info">
              <div className="info-item">
                <strong>Author:</strong> {guide.author}
              </div>
              <div className="info-item">
                <strong>Last Updated:</strong> {new Date(guide.lastUpdated).toLocaleDateString()}
              </div>
              <div className="info-item">
                <strong>Download Size:</strong> {guide.downloadSize}
              </div>
            </div>
            
            <div className="guide-actions">
              {guide.premium ? (
                <button className="btn btn-primary">
                  Upgrade to Access
                </button>
              ) : guide.price === 'Free' ? (
                <button className="btn btn-primary">
                  <Download size={16} />
                  Download Free
                </button>
              ) : (
                <button className="btn btn-primary">
                  Buy for {guide.price}
                </button>
              )}
              <button className="btn btn-outline">
                <Heart size={16} />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="travel-guides-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Travel Guides</h1>
          <p>Expert-curated guides with videos, maps, and insider tips</p>
        </div>

        {/* Search and Filters */}
        <div className="search-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search guides by destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Guide */}
        <div className="featured-guide card">
          <div className="featured-content">
            <div className="featured-info">
              <div className="featured-badge">Featured Guide</div>
              <h2>Complete Barcelona Travel Guide</h2>
              <p>Our most comprehensive city guide with 45 minutes of video content, interactive maps, and local insider tips.</p>
              <div className="featured-stats">
                <div className="stat">
                  <Star size={16} fill="#C6A664" color="#C6A664" />
                  <span>4.9 (1,234 reviews)</span>
                </div>
                <div className="stat">
                  <Eye size={16} />
                  <span>25,600 views</span>
                </div>
                <div className="stat">
                  <Download size={16} />
                  <span>Free Download</span>
                </div>
              </div>
              <button className="btn btn-primary">
                <Play size={16} />
                Watch Now
              </button>
            </div>
            <div className="featured-thumbnail">
              <div className="thumbnail-placeholder">
                <Play size={48} color="#C6A664" />
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="guides-grid">
          {filteredGuides.map(guide => (
            <div key={guide.id} className="guide-card card">
              <div className="guide-thumbnail">
                <div className="thumbnail-placeholder">
                  <BookOpen size={32} color="#C6A664" />
                </div>
                <div className="guide-type">{guide.type}</div>
                {guide.premium && <div className="premium-badge">Premium</div>}
                <div className="guide-overlay">
                  <button 
                    className="preview-btn"
                    onClick={() => setSelectedGuide(guide)}
                  >
                    <Eye size={16} />
                    Preview
                  </button>
                </div>
              </div>

              <div className="guide-content">
                <div className="guide-header">
                  <h3>{guide.title}</h3>
                  <div className="guide-actions-mini">
                    <button className="action-btn">
                      <Heart size={14} />
                    </button>
                    <button className="action-btn">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="guide-meta">
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{guide.location}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{guide.duration}</span>
                  </div>
                </div>

                <div className="guide-rating">
                  {renderStars(guide.rating)}
                  <span>({guide.reviews})</span>
                  <div className="guide-views">
                    <Eye size={12} />
                    <span>{guide.views.toLocaleString()}</span>
                  </div>
                </div>

                <p className="guide-description">{guide.description}</p>

                <div className="guide-highlights">
                  {guide.highlights.slice(0, 2).map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                  {guide.highlights.length > 2 && (
                    <span className="more-highlights">
                      +{guide.highlights.length - 2} more
                    </span>
                  )}
                </div>

                <div className="guide-footer">
                  <div className="guide-price">
                    {guide.premium ? (
                      <span className="premium-price">Premium</span>
                    ) : (
                      <span className="price">{guide.price}</span>
                    )}
                  </div>
                  <div className="guide-actions">
                    {guide.premium ? (
                      <button className="btn btn-outline btn-sm">Upgrade</button>
                    ) : guide.price === 'Free' ? (
                      <button className="btn btn-primary btn-sm">
                        <Download size={14} />
                        Free
                      </button>
                    ) : (
                      <button className="btn btn-primary btn-sm">Buy</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="premium-cta card-gold">
          <h2>Unlock All Premium Guides</h2>
          <p>Get access to our complete library of expert travel guides with exclusive content</p>
          <div className="premium-features">
            <div className="feature">✓ 50+ Premium Guides</div>
            <div className="feature">✓ Video Content Library</div>
            <div className="feature">✓ Interactive Maps</div>
            <div className="feature">✓ Offline Downloads</div>
          </div>
          <button className="btn btn-secondary">Upgrade to Premium</button>
        </div>
      </div>

      {/* Guide Preview Modal */}
      {selectedGuide && (
        <GuideModal 
          guide={selectedGuide} 
          onClose={() => setSelectedGuide(null)} 
        />
      )}

      <style jsx>{`
        .travel-guides-page {
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
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

        .category-filters {
          display: flex;
          gap: 1rem;
          justify-content: center;
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

        .featured-guide {
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, var(--beige), var(--light-gold));
          border: 2px solid var(--gold);
        }

        .featured-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .featured-badge {
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .featured-info h2 {
          margin-bottom: 1rem;
          color: var(--navy);
        }

        .featured-stats {
          display: flex;
          gap: 2rem;
          margin: 1.5rem 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
        }

        .featured-thumbnail {
          height: 200px;
          background: var(--white);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
        }

        .guides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .guide-card {
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .guide-card:hover {
          transform: translateY(-4px);
        }

        .guide-thumbnail {
          position: relative;
          height: 200px;
          background: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .thumbnail-placeholder {
          text-align: center;
          color: var(--gray);
        }

        .guide-type {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--navy);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .premium-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .guide-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .guide-thumbnail:hover .guide-overlay {
          opacity: 1;
        }

        .preview-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--white);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
        }

        .guide-content {
          padding: 0 1.5rem 1.5rem;
        }

        .guide-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .guide-header h3 {
          flex: 1;
          margin-right: 1rem;
        }

        .guide-actions-mini {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 28px;
          height: 28px;
          background: var(--light-gray);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: var(--gold);
          color: var(--white);
        }

        .guide-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .guide-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .guide-rating span {
          font-size: 0.875rem;
          color: var(--gray);
        }

        .guide-views {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--gray);
        }

        .guide-description {
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .guide-highlights {
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
          border: 1px solid var(--gold);
        }

        .more-highlights {
          color: var(--gray);
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
        }

        .guide-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .guide-price .price {
          font-weight: 600;
          color: var(--gold);
        }

        .guide-price .premium-price {
          font-weight: 600;
          color: var(--navy);
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .premium-cta {
          text-align: center;
          padding: 3rem;
        }

        .premium-cta h2 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .premium-cta p {
          color: var(--white);
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .premium-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .premium-features .feature {
          color: var(--white);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: var(--white);
          border-radius: 1rem;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--light-gray);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--gray);
        }

        .guide-preview {
          padding: 1.5rem;
        }

        .preview-thumbnail {
          position: relative;
          height: 300px;
          background: var(--light-gray);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--gold);
          color: var(--white);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
        }

        .guide-details .guide-meta {
          margin-bottom: 1rem;
        }

        .guide-details .guide-rating {
          margin-bottom: 1.5rem;
        }

        .guide-details .guide-description {
          margin-bottom: 2rem;
          -webkit-line-clamp: unset;
        }

        .guide-highlights h4 {
          margin-bottom: 1rem;
        }

        .guide-highlights ul {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .guide-highlights li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--light-gray);
        }

        .guide-info {
          background: var(--beige);
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }

        .info-item {
          margin-bottom: 0.5rem;
          color: var(--gray);
        }

        .guide-actions {
          display: flex;
          gap: 1rem;
        }

        .guide-actions .btn {
          flex: 1;
        }

        @media (max-width: 768px) {
          .featured-content {
            grid-template-columns: 1fr;
          }

          .guides-grid {
            grid-template-columns: 1fr;
          }

          .guide-header {
            flex-direction: column;
            gap: 1rem;
          }

          .guide-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .premium-features {
            grid-template-columns: 1fr;
          }

          .guide-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default TravelGuides
