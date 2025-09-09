import React, { useState } from 'react'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Plus, 
  Trash2, 
  Edit3,
  Video,
  Users,
  Star,
  DollarSign,
  Camera,
  Utensils,
  Plane,
  Hotel,
  Mountain,
  Waves
} from 'lucide-react'

const Itinerary = () => {
  const [selectedDestination, setSelectedDestination] = useState('Barcelona, Spain')
  const [tripDuration, setTripDuration] = useState(5)
  const [itineraryItems, setItineraryItems] = useState([
    {
      id: 1,
      day: 1,
      time: '09:00',
      title: 'Sagrada Familia Visit',
      type: 'sightseeing',
      duration: '2 hours',
      cost: '$25',
      description: 'Explore Gaudí\'s masterpiece',
      icon: Mountain
    },
    {
      id: 2,
      day: 1,
      time: '14:00',
      title: 'Tapas Food Tour',
      type: 'food',
      duration: '3 hours',
      cost: '$65',
      description: 'Authentic Spanish cuisine experience',
      icon: Utensils
    },
    {
      id: 3,
      day: 2,
      time: '10:00',
      title: 'Beach Time at Barceloneta',
      type: 'relaxation',
      duration: '4 hours',
      cost: 'Free',
      description: 'Relax and enjoy the Mediterranean',
      icon: Waves
    }
  ])

  const [draggedItem, setDraggedItem] = useState(null)

  const activityTemplates = [
    { type: 'sightseeing', icon: Mountain, label: 'Sightseeing', color: '#C6A664' },
    { type: 'food', icon: Utensils, label: 'Food Tour', color: '#EF4444' },
    { type: 'relaxation', icon: Waves, label: 'Beach Time', color: '#06B6D4' },
    { type: 'culture', icon: Camera, label: 'Cultural Site', color: '#8B5CF6' },
    { type: 'transport', icon: Plane, label: 'Transportation', color: '#10B981' },
    { type: 'accommodation', icon: Hotel, label: 'Hotel Check-in', color: '#F59E0B' }
  ]

  const expertConsultants = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      specialty: 'Spain & Portugal',
      rating: 4.9,
      reviews: 234,
      price: '$50/hour',
      available: true,
      languages: ['English', 'Spanish', 'French']
    },
    {
      id: 2,
      name: 'James Wilson',
      specialty: 'European Cities',
      rating: 4.8,
      reviews: 189,
      price: '$45/hour',
      available: false,
      languages: ['English', 'German', 'Italian']
    },
    {
      id: 3,
      name: 'Sophie Chen',
      specialty: 'Budget Travel',
      rating: 4.9,
      reviews: 312,
      price: '$40/hour',
      available: true,
      languages: ['English', 'Mandarin', 'Spanish']
    }
  ]

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, targetDay, targetTime) => {
    e.preventDefault()
    if (draggedItem) {
      const updatedItems = itineraryItems.map(item => 
        item.id === draggedItem.id 
          ? { ...item, day: targetDay, time: targetTime }
          : item
      )
      setItineraryItems(updatedItems)
      setDraggedItem(null)
    }
  }

  const addNewActivity = (type) => {
    const newActivity = {
      id: Date.now(),
      day: 1,
      time: '12:00',
      title: `New ${activityTemplates.find(t => t.type === type)?.label}`,
      type: type,
      duration: '2 hours',
      cost: '$0',
      description: 'Add description...',
      icon: activityTemplates.find(t => t.type === type)?.icon || Mountain
    }
    setItineraryItems([...itineraryItems, newActivity])
  }

  const removeActivity = (id) => {
    setItineraryItems(itineraryItems.filter(item => item.id !== id))
  }

  const groupItemsByDay = () => {
    const grouped = {}
    for (let day = 1; day <= tripDuration; day++) {
      grouped[day] = itineraryItems
        .filter(item => item.day === day)
        .sort((a, b) => a.time.localeCompare(b.time))
    }
    return grouped
  }

  const getTotalCost = () => {
    return itineraryItems.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace(/[^0-9.]/g, '')) || 0
      return total + cost
    }, 0)
  }

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

  return (
    <div className="itinerary-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Smart Itinerary Planner</h1>
          <p>Create your perfect trip with drag-and-drop planning and expert guidance</p>
        </div>

        {/* Trip Setup */}
        <div className="trip-setup card">
          <h2>Trip Details</h2>
          <div className="setup-form">
            <div className="form-group">
              <label>Destination</label>
              <select 
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="form-select"
              >
                <option value="Barcelona, Spain">Barcelona, Spain</option>
                <option value="Paris, France">Paris, France</option>
                <option value="Tokyo, Japan">Tokyo, Japan</option>
                <option value="Rome, Italy">Rome, Italy</option>
                <option value="London, UK">London, UK</option>
              </select>
            </div>
            <div className="form-group">
              <label>Duration (days)</label>
              <input
                type="number"
                min="1"
                max="30"
                value={tripDuration}
                onChange={(e) => setTripDuration(parseInt(e.target.value))}
                className="form-input"
              />
            </div>
            <div className="trip-summary">
              <div className="summary-item">
                <MapPin size={16} />
                <span>{selectedDestination}</span>
              </div>
              <div className="summary-item">
                <Calendar size={16} />
                <span>{tripDuration} days</span>
              </div>
              <div className="summary-item">
                <DollarSign size={16} />
                <span>Total: ${getTotalCost()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="planner-layout">
          {/* Activity Templates */}
          <div className="templates-sidebar">
            <h3>Add Activities</h3>
            <div className="template-grid">
              {activityTemplates.map(template => {
                const IconComponent = template.icon
                return (
                  <button
                    key={template.type}
                    className="template-btn"
                    onClick={() => addNewActivity(template.type)}
                    style={{ borderColor: template.color }}
                  >
                    <IconComponent size={20} color={template.color} />
                    <span>{template.label}</span>
                    <Plus size={16} />
                  </button>
                )
              })}
            </div>

            {/* Expert Consultation */}
            <div className="expert-section">
              <h3>Expert Consultation</h3>
              <p className="expert-description">
                Get personalized advice from travel experts
              </p>
              {expertConsultants.map(expert => (
                <div key={expert.id} className="expert-card">
                  <div className="expert-info">
                    <div className="expert-avatar">
                      <Users size={20} />
                    </div>
                    <div className="expert-details">
                      <h4>{expert.name}</h4>
                      <p>{expert.specialty}</p>
                      <div className="expert-rating">
                        {renderStars(expert.rating)}
                        <span>({expert.reviews})</span>
                      </div>
                      <div className="expert-languages">
                        {expert.languages.join(', ')}
                      </div>
                    </div>
                  </div>
                  <div className="expert-booking">
                    <div className="expert-price">{expert.price}</div>
                    <button 
                      className={`btn btn-sm ${expert.available ? 'btn-primary' : 'btn-outline'}`}
                      disabled={!expert.available}
                    >
                      <Video size={14} />
                      {expert.available ? 'Book Call' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary Timeline */}
          <div className="itinerary-timeline">
            <div className="timeline-header">
              <h3>Your Itinerary</h3>
              <div className="timeline-actions">
                <button className="btn btn-outline">
                  <Edit3 size={16} />
                  Edit
                </button>
                <button className="btn btn-primary">
                  Save Itinerary
                </button>
              </div>
            </div>

            <div className="days-container">
              {Object.entries(groupItemsByDay()).map(([day, items]) => (
                <div key={day} className="day-column">
                  <div className="day-header">
                    <h4>Day {day}</h4>
                    <div className="day-stats">
                      {items.length} activities
                    </div>
                  </div>
                  
                  <div 
                    className="day-timeline"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, parseInt(day), '12:00')}
                  >
                    {items.length === 0 ? (
                      <div className="empty-day">
                        <Plus size={24} color="#C6A664" />
                        <p>Drag activities here</p>
                      </div>
                    ) : (
                      items.map(item => {
                        const IconComponent = item.icon
                        return (
                          <div
                            key={item.id}
                            className="activity-item"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                          >
                            <div className="activity-time">
                              <Clock size={14} />
                              <span>{item.time}</span>
                            </div>
                            <div className="activity-content">
                              <div className="activity-header">
                                <div className="activity-icon">
                                  <IconComponent size={16} />
                                </div>
                                <h5>{item.title}</h5>
                                <button 
                                  className="remove-btn"
                                  onClick={() => removeActivity(item.id)}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              <p className="activity-description">{item.description}</p>
                              <div className="activity-meta">
                                <span className="duration">{item.duration}</span>
                                <span className="cost">{item.cost}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Features CTA */}
        <div className="premium-cta card-gold">
          <div className="cta-content">
            <h3>Unlock Premium Planning Features</h3>
            <ul className="premium-features">
              <li>✓ AI-powered recommendations</li>
              <li>✓ Real-time booking integration</li>
              <li>✓ Unlimited expert consultations</li>
              <li>✓ Collaborative planning with friends</li>
            </ul>
            <button className="btn btn-secondary">Upgrade to Premium</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .itinerary-page {
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

        .trip-setup {
          margin-bottom: 3rem;
          padding: 2rem;
        }

        .setup-form {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr;
          gap: 2rem;
          align-items: end;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--navy);
        }

        .form-select,
        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .form-select:focus,
        .form-input:focus {
          border-color: var(--gold);
          outline: none;
        }

        .trip-summary {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
        }

        .planner-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .templates-sidebar {
          background: var(--white);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .templates-sidebar h3 {
          margin-bottom: 1rem;
          color: var(--navy);
        }

        .template-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .template-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--white);
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .template-btn:hover {
          background: var(--beige);
          transform: translateY(-1px);
        }

        .template-btn span {
          flex: 1;
          font-weight: 500;
        }

        .expert-section h3 {
          margin-bottom: 0.5rem;
          color: var(--navy);
        }

        .expert-description {
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .expert-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid var(--light-gray);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .expert-info {
          display: flex;
          gap: 0.75rem;
          flex: 1;
        }

        .expert-avatar {
          width: 40px;
          height: 40px;
          background: var(--beige);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
        }

        .expert-details h4 {
          margin: 0 0 0.25rem 0;
          font-size: 0.875rem;
        }

        .expert-details p {
          margin: 0 0 0.25rem 0;
          font-size: 0.75rem;
          color: var(--gray);
        }

        .expert-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .expert-rating span {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .expert-languages {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .expert-booking {
          text-align: center;
        }

        .expert-price {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .itinerary-timeline {
          background: var(--white);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .timeline-actions {
          display: flex;
          gap: 1rem;
        }

        .days-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .day-column {
          border: 2px solid var(--light-gray);
          border-radius: 1rem;
          overflow: hidden;
        }

        .day-header {
          background: var(--beige);
          padding: 1rem;
          border-bottom: 2px solid var(--light-gray);
        }

        .day-header h4 {
          margin: 0 0 0.5rem 0;
          color: var(--navy);
        }

        .day-stats {
          font-size: 0.875rem;
          color: var(--gray);
        }

        .day-timeline {
          padding: 1rem;
          min-height: 300px;
        }

        .empty-day {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          border: 2px dashed var(--gold);
          border-radius: 0.5rem;
          color: var(--gray);
        }

        .empty-day p {
          margin-top: 0.5rem;
        }

        .activity-item {
          background: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
          cursor: move;
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          box-shadow: var(--shadow);
          transform: translateY(-1px);
        }

        .activity-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .activity-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .activity-icon {
          width: 24px;
          height: 24px;
          background: var(--beige);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gold);
        }

        .activity-header h5 {
          flex: 1;
          margin: 0;
          font-size: 1rem;
        }

        .remove-btn {
          background: none;
          border: none;
          color: var(--gray);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: #FEE2E2;
          color: #DC2626;
        }

        .activity-description {
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .activity-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .duration {
          color: var(--gray);
        }

        .cost {
          color: var(--gold);
          font-weight: 600;
        }

        .premium-cta {
          text-align: center;
          padding: 2rem;
        }

        .cta-content h3 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .premium-features {
          list-style: none;
          margin: 1.5rem 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.5rem;
        }

        .premium-features li {
          color: var(--white);
          text-align: left;
        }

        @media (max-width: 1024px) {
          .planner-layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .templates-sidebar {
            position: static;
          }

          .setup-form {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .trip-summary {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .days-container {
            grid-template-columns: 1fr;
          }

          .timeline-header {
            flex-direction: column;
            gap: 1rem;
          }

          .timeline-actions {
            width: 100%;
            justify-content: center;
          }

          .premium-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Itinerary
