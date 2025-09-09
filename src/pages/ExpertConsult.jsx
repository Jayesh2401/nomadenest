import React, { useState } from 'react'
import { 
  Video, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  Users,
  Award,
  Globe,
  MessageCircle,
  CheckCircle,
  Filter
} from 'lucide-react'

const ExpertConsult = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedExpert, setSelectedExpert] = useState(null)

  const specialties = [
    { id: 'all', label: 'All Experts' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'americas', label: 'Americas' },
    { id: 'budget', label: 'Budget Travel' },
    { id: 'luxury', label: 'Luxury Travel' },
    { id: 'adventure', label: 'Adventure' }
  ]

  const experts = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      specialty: 'Spain & Portugal Expert',
      category: 'europe',
      rating: 4.9,
      reviews: 234,
      consultations: 1200,
      price: 50,
      languages: ['English', 'Spanish', 'French'],
      experience: '8 years',
      avatar: '/api/placeholder/80/80',
      bio: 'Former travel guide with deep knowledge of Iberian Peninsula culture, hidden gems, and local experiences.',
      expertise: ['Cultural Tours', 'Food & Wine', 'Historical Sites', 'Local Experiences'],
      availability: 'Available',
      nextSlot: '2024-01-20 10:00 AM',
      achievements: ['Top Rated Expert', '1000+ Happy Clients', 'Cultural Specialist']
    },
    {
      id: 2,
      name: 'James Wilson',
      specialty: 'European Cities Specialist',
      category: 'europe',
      rating: 4.8,
      reviews: 189,
      consultations: 890,
      price: 45,
      languages: ['English', 'German', 'Italian'],
      experience: '6 years',
      avatar: '/api/placeholder/80/80',
      bio: 'Urban explorer specializing in European capitals with focus on architecture, museums, and city planning.',
      expertise: ['City Planning', 'Architecture', 'Museums', 'Public Transport'],
      availability: 'Busy',
      nextSlot: '2024-01-22 2:00 PM',
      achievements: ['Architecture Expert', 'City Guide Pro', 'Museum Specialist']
    },
    {
      id: 3,
      name: 'Sophie Chen',
      specialty: 'Budget Travel Expert',
      category: 'budget',
      rating: 4.9,
      reviews: 312,
      consultations: 1500,
      price: 40,
      languages: ['English', 'Mandarin', 'Spanish'],
      experience: '5 years',
      avatar: '/api/placeholder/80/80',
      bio: 'Digital nomad who has traveled to 50+ countries on a budget. Expert in finding deals and budget accommodations.',
      expertise: ['Budget Planning', 'Hostels', 'Local Transport', 'Street Food'],
      availability: 'Available',
      nextSlot: '2024-01-19 4:00 PM',
      achievements: ['Budget Master', 'Nomad Expert', 'Deal Finder']
    },
    {
      id: 4,
      name: 'Raj Patel',
      specialty: 'Southeast Asia Expert',
      category: 'asia',
      rating: 4.7,
      reviews: 156,
      consultations: 670,
      price: 35,
      languages: ['English', 'Hindi', 'Thai'],
      experience: '4 years',
      avatar: '/api/placeholder/80/80',
      bio: 'Local expert with extensive knowledge of Southeast Asian cultures, festivals, and off-the-beaten-path destinations.',
      expertise: ['Cultural Festivals', 'Local Customs', 'Adventure Tours', 'Spiritual Sites'],
      availability: 'Available',
      nextSlot: '2024-01-21 8:00 AM',
      achievements: ['Cultural Guide', 'Festival Expert', 'Adventure Specialist']
    }
  ]

  const filteredExperts = experts.filter(expert => 
    selectedSpecialty === 'all' || expert.category === selectedSpecialty
  )

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

  const BookingModal = ({ expert, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [consultationType, setConsultationType] = useState('video')

    const timeSlots = [
      '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
    ]

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Book Consultation with {expert.name}</h3>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          
          <div className="booking-form">
            <div className="expert-summary">
              <div className="expert-avatar">
                <Users size={24} />
              </div>
              <div className="expert-info">
                <h4>{expert.name}</h4>
                <p>{expert.specialty}</p>
                <div className="expert-rating">
                  {renderStars(expert.rating)}
                  <span>({expert.reviews} reviews)</span>
                </div>
              </div>
              <div className="consultation-price">
                ${expert.price}/hour
              </div>
            </div>

            <div className="form-group">
              <label>Consultation Type</label>
              <div className="consultation-types">
                <button 
                  className={`type-btn ${consultationType === 'video' ? 'active' : ''}`}
                  onClick={() => setConsultationType('video')}
                >
                  <Video size={16} />
                  Video Call
                </button>
                <button 
                  className={`type-btn ${consultationType === 'phone' ? 'active' : ''}`}
                  onClick={() => setConsultationType('phone')}
                >
                  <MessageCircle size={16} />
                  Phone Call
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label>Select Time</label>
              <div className="time-slots">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'active' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-summary">
              <div className="summary-item">
                <span>Duration:</span>
                <span>1 hour</span>
              </div>
              <div className="summary-item">
                <span>Price:</span>
                <span>${expert.price}</span>
              </div>
              <div className="summary-item total">
                <span>Total:</span>
                <span>${expert.price}</span>
              </div>
            </div>

            <button className="btn btn-primary book-btn">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="expert-consult-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Expert Travel Consultations</h1>
          <p>Get personalized advice from experienced travel professionals</p>
        </div>

        {/* Benefits */}
        <div className="benefits-section">
          <div className="benefits-grid">
            <div className="benefit-item">
              <Video size={24} color="#C6A664" />
              <h3>Face-to-Face Guidance</h3>
              <p>Personal video consultations with travel experts</p>
            </div>
            <div className="benefit-item">
              <Globe size={24} color="#C6A664" />
              <h3>Local Expertise</h3>
              <p>Insights from locals and experienced travelers</p>
            </div>
            <div className="benefit-item">
              <Clock size={24} color="#C6A664" />
              <h3>Flexible Scheduling</h3>
              <p>Book consultations at your convenience</p>
            </div>
            <div className="benefit-item">
              <Award size={24} color="#C6A664" />
              <h3>Verified Experts</h3>
              <p>All experts are vetted and highly rated</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by Specialty</span>
          </div>
          <div className="specialty-filters">
            {specialties.map(specialty => (
              <button
                key={specialty.id}
                className={`filter-btn ${selectedSpecialty === specialty.id ? 'active' : ''}`}
                onClick={() => setSelectedSpecialty(specialty.id)}
              >
                {specialty.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experts Grid */}
        <div className="experts-grid">
          {filteredExperts.map(expert => (
            <div key={expert.id} className="expert-card card">
              <div className="expert-header">
                <div className="expert-avatar">
                  <Users size={32} />
                </div>
                <div className="expert-basic-info">
                  <h3>{expert.name}</h3>
                  <p className="expert-specialty">{expert.specialty}</p>
                  <div className="expert-rating">
                    {renderStars(expert.rating)}
                    <span>({expert.reviews} reviews)</span>
                  </div>
                </div>
                <div className="expert-price">
                  <DollarSign size={16} />
                  <span>${expert.price}/hr</span>
                </div>
              </div>

              <div className="expert-stats">
                <div className="stat">
                  <Users size={16} />
                  <span>{expert.consultations} consultations</span>
                </div>
                <div className="stat">
                  <Globe size={16} />
                  <span>{expert.experience} experience</span>
                </div>
                <div className="stat">
                  <MessageCircle size={16} />
                  <span>{expert.languages.join(', ')}</span>
                </div>
              </div>

              <p className="expert-bio">{expert.bio}</p>

              <div className="expert-expertise">
                <h4>Expertise</h4>
                <div className="expertise-tags">
                  {expert.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="expert-achievements">
                {expert.achievements.map((achievement, index) => (
                  <div key={index} className="achievement">
                    <CheckCircle size={14} color="#10B981" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="expert-availability">
                <div className="availability-status">
                  <div className={`status-indicator ${expert.availability.toLowerCase()}`}></div>
                  <span>{expert.availability}</span>
                </div>
                {expert.availability === 'Available' && (
                  <div className="next-slot">
                    <Calendar size={14} />
                    <span>Next: {expert.nextSlot}</span>
                  </div>
                )}
              </div>

              <div className="expert-actions">
                <button className="btn btn-outline">View Profile</button>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedExpert(expert)}
                >
                  <Video size={16} />
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Expert</h3>
              <p>Browse and select the perfect expert for your travel needs</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Book Session</h3>
              <p>Schedule a convenient time for your consultation</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Advice</h3>
              <p>Receive personalized recommendations and insider tips</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Plan Trip</h3>
              <p>Use the expert advice to create your perfect itinerary</p>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="premium-cta card-gold">
          <h2>Premium Members Get More</h2>
          <div className="premium-benefits">
            <div className="premium-benefit">
              <CheckCircle size={20} />
              <span>Unlimited consultations</span>
            </div>
            <div className="premium-benefit">
              <CheckCircle size={20} />
              <span>Priority booking</span>
            </div>
            <div className="premium-benefit">
              <CheckCircle size={20} />
              <span>Exclusive expert access</span>
            </div>
          </div>
          <button className="btn btn-secondary">Upgrade to Premium</button>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedExpert && (
        <BookingModal 
          expert={selectedExpert} 
          onClose={() => setSelectedExpert(null)} 
        />
      )}

      <style jsx>{`
        .expert-consult-page {
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .benefits-section {
          margin-bottom: 3rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .benefit-item {
          text-align: center;
          padding: 2rem;
          background: var(--white);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--light-gold);
        }

        .benefit-item h3 {
          margin: 1rem 0 0.5rem;
        }

        .filters-section {
          margin-bottom: 3rem;
        }

        .filter-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: var(--navy);
        }

        .specialty-filters {
          display: flex;
          gap: 1rem;
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

        .experts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .expert-card {
          padding: 2rem;
        }

        .expert-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .expert-avatar {
          width: 60px;
          height: 60px;
          background: var(--beige);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
        }

        .expert-basic-info {
          flex: 1;
        }

        .expert-basic-info h3 {
          margin: 0 0 0.25rem;
        }

        .expert-specialty {
          color: var(--gray);
          margin: 0 0 0.5rem;
        }

        .expert-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .expert-price {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
          color: var(--gold);
        }

        .expert-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .expert-bio {
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .expert-expertise h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .expertise-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .expertise-tag {
          background: var(--beige);
          color: var(--navy);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          border: 1px solid var(--gold);
        }

        .expert-achievements {
          margin-bottom: 1.5rem;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .expert-availability {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: var(--beige);
          border-radius: 0.5rem;
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.available {
          background: #10B981;
        }

        .status-indicator.busy {
          background: #EF4444;
        }

        .next-slot {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .expert-actions {
          display: flex;
          gap: 1rem;
        }

        .expert-actions .btn {
          flex: 1;
        }

        .how-it-works {
          margin-bottom: 4rem;
        }

        .how-it-works h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .step {
          text-align: center;
          padding: 2rem;
          background: var(--white);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--light-gold);
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--gold);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1rem;
        }

        .premium-cta {
          text-align: center;
          padding: 3rem;
        }

        .premium-cta h2 {
          color: var(--white);
          margin-bottom: 2rem;
        }

        .premium-benefits {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .premium-benefit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          max-width: 500px;
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

        .booking-form {
          padding: 1.5rem;
        }

        .expert-summary {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: var(--beige);
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }

        .consultation-price {
          font-weight: 600;
          color: var(--gold);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--navy);
        }

        .consultation-types {
          display: flex;
          gap: 1rem;
        }

        .type-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border: 2px solid var(--light-gray);
          background: var(--white);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .type-btn:hover,
        .type-btn.active {
          border-color: var(--gold);
          background: var(--beige);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .time-slots {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .time-slot {
          padding: 0.75rem;
          border: 2px solid var(--light-gray);
          background: var(--white);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .time-slot:hover,
        .time-slot.active {
          border-color: var(--gold);
          background: var(--beige);
        }

        .booking-summary {
          background: var(--beige);
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .summary-item.total {
          font-weight: 600;
          border-top: 1px solid var(--gold);
          padding-top: 0.5rem;
          margin-top: 0.5rem;
        }

        .book-btn {
          width: 100%;
        }

        @media (max-width: 768px) {
          .experts-grid {
            grid-template-columns: 1fr;
          }

          .expert-header {
            flex-direction: column;
            text-align: center;
          }

          .expert-stats {
            justify-content: center;
          }

          .expert-actions {
            flex-direction: column;
          }

          .premium-benefits {
            flex-direction: column;
            align-items: center;
          }

          .time-slots {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default ExpertConsult
