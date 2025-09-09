import React, { useState } from 'react'
import { MapPin, Star, DollarSign, Camera, Search, Filter } from 'lucide-react'

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')

  const destinations = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, India',
      region: 'asia',
      rating: 4.9,
      reviews: 2847,
      price: 'From $299',
      image: '/api/placeholder/300/200',
      description: 'Iconic symbol of love and architectural masterpiece'
    },
    {
      id: 2,
      name: 'Venice',
      location: 'Italy',
      region: 'europe',
      rating: 4.8,
      reviews: 1923,
      price: 'From $599',
      image: '/api/placeholder/300/200',
      description: 'Romantic city of canals and gondolas'
    },
    {
      id: 3,
      name: 'Paris',
      location: 'France',
      region: 'europe',
      rating: 4.7,
      reviews: 3456,
      price: 'From $799',
      image: '/api/placeholder/300/200',
      description: 'City of lights and romance'
    },
    {
      id: 4,
      name: 'Tokyo',
      location: 'Japan',
      region: 'asia',
      rating: 4.9,
      reviews: 2156,
      price: 'From $899',
      image: '/api/placeholder/300/200',
      description: 'Modern metropolis with ancient traditions'
    }
  ]

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'asia', label: 'Asia' },
    { id: 'europe', label: 'Europe' },
    { id: 'americas', label: 'Americas' },
    { id: 'africa', label: 'Africa' }
  ]

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion
    return matchesSearch && matchesRegion
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
    <div className="destinations-page">
      <div className="container">
        <div className="page-header">
          <h1>Trending Destinations</h1>
          <p>Discover the world's most amazing places</p>
        </div>

        <div className="search-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="region-filters">
            {regions.map(region => (
              <button
                key={region.id}
                className={`filter-btn ${selectedRegion === region.id ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region.id)}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="destination-card card">
              <div className="destination-image">
                <div className="image-placeholder">
                  <Camera size={32} color="#C6A664" />
                </div>
                <div className="destination-rating">
                  <Star size={14} fill="#C6A664" color="#C6A664" />
                  <span>{destination.rating}</span>
                </div>
              </div>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <div className="location">
                  <MapPin size={16} />
                  <span>{destination.location}</span>
                </div>
                <p>{destination.description}</p>
                <div className="destination-footer">
                  <div className="reviews">
                    {renderStars(destination.rating)}
                    <span>({destination.reviews} reviews)</span>
                  </div>
                  <div className="price">{destination.price}</div>
                </div>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .destinations-page {
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

        .region-filters {
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

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
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
        }

        .destination-info {
          padding: 0 1.5rem 1.5rem;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .destination-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .reviews {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .price {
          font-weight: 600;
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Destinations
