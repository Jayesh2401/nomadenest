import React, { useState } from 'react'
import { 
  Gift, 
  Users, 
  DollarSign, 
  Share2, 
  Copy, 
  Star,
  Coffee,
  Utensils,
  ShoppingBag,
  Plane,
  Trophy,
  Target
} from 'lucide-react'

const ReferralRewards = () => {
  const [referralCode, setReferralCode] = useState('NOMAD2024XYZ')
  const [copied, setCopied] = useState(false)

  const stats = {
    totalReferrals: 12,
    totalEarned: 450,
    availableCredits: 280,
    usedCredits: 170
  }

  const rewardTiers = [
    { referrals: 1, reward: '$25', status: 'completed' },
    { referrals: 5, reward: '$150', status: 'completed' },
    { referrals: 10, reward: '$350', status: 'completed' },
    { referrals: 25, reward: '$1000', status: 'locked' },
    { referrals: 50, reward: '$2500', status: 'locked' }
  ]

  const partnerOffers = [
    {
      id: 1,
      name: 'Starbucks',
      type: 'Coffee',
      icon: Coffee,
      discount: '15% off',
      credits: 50,
      description: 'Get 15% off your next coffee purchase'
    },
    {
      id: 2,
      name: 'Local Restaurants',
      type: 'Dining',
      icon: Utensils,
      discount: '20% off',
      credits: 75,
      description: 'Enjoy discounts at partner restaurants worldwide'
    },
    {
      id: 3,
      name: 'Travel Gear Store',
      type: 'Shopping',
      icon: ShoppingBag,
      discount: '25% off',
      credits: 100,
      description: 'Save on travel essentials and gear'
    },
    {
      id: 4,
      name: 'Flight Bookings',
      type: 'Travel',
      icon: Plane,
      discount: '$50 off',
      credits: 200,
      description: 'Apply credits to your next flight booking'
    }
  ]

  const recentActivity = [
    { date: '2024-01-15', action: 'Referral completed', user: 'Sarah J.', earned: 25 },
    { date: '2024-01-12', action: 'Credits used', partner: 'Starbucks', spent: 50 },
    { date: '2024-01-10', action: 'Referral completed', user: 'Mike C.', earned: 25 },
    { date: '2024-01-08', action: 'Credits used', partner: 'Local Restaurant', spent: 75 }
  ]

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="referral-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Referral Rewards</h1>
          <p>Share NomadNest with friends and earn credits for amazing rewards</p>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card card">
            <div className="stat-icon">
              <Users size={24} color="#C6A664" />
            </div>
            <div className="stat-info">
              <h3>{stats.totalReferrals}</h3>
              <p>Total Referrals</p>
            </div>
          </div>
          <div className="stat-card card">
            <div className="stat-icon">
              <DollarSign size={24} color="#10B981" />
            </div>
            <div className="stat-info">
              <h3>${stats.totalEarned}</h3>
              <p>Total Earned</p>
            </div>
          </div>
          <div className="stat-card card">
            <div className="stat-icon">
              <Gift size={24} color="#8B5CF6" />
            </div>
            <div className="stat-info">
              <h3>{stats.availableCredits}</h3>
              <p>Available Credits</p>
            </div>
          </div>
          <div className="stat-card card">
            <div className="stat-icon">
              <Trophy size={24} color="#F59E0B" />
            </div>
            <div className="stat-info">
              <h3>{stats.usedCredits}</h3>
              <p>Credits Used</p>
            </div>
          </div>
        </div>

        {/* Referral Code */}
        <div className="referral-section card">
          <h2>Your Referral Code</h2>
          <p>Share this code with friends to earn $25 for each successful referral</p>
          <div className="referral-code-container">
            <div className="referral-code">
              <span>{referralCode}</span>
              <button 
                className="copy-btn"
                onClick={copyReferralCode}
              >
                <Copy size={16} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="share-buttons">
              <button className="btn btn-primary">
                <Share2 size={16} />
                Share Link
              </button>
              <button className="btn btn-outline">
                Invite via Email
              </button>
            </div>
          </div>
        </div>

        {/* Reward Tiers */}
        <div className="tiers-section">
          <h2>Reward Tiers</h2>
          <div className="tiers-progress">
            {rewardTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`tier-item ${tier.status}`}
              >
                <div className="tier-circle">
                  {tier.status === 'completed' ? (
                    <Trophy size={20} color="#C6A664" />
                  ) : (
                    <Target size={20} color="#9CA3AF" />
                  )}
                </div>
                <div className="tier-info">
                  <h4>{tier.referrals} Referrals</h4>
                  <p>{tier.reward} reward</p>
                </div>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(stats.totalReferrals / 50) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {stats.totalReferrals} of 50 referrals completed
          </p>
        </div>

        {/* Partner Offers */}
        <div className="offers-section">
          <h2>Redeem Your Credits</h2>
          <div className="offers-grid">
            {partnerOffers.map(offer => {
              const IconComponent = offer.icon
              return (
                <div key={offer.id} className="offer-card card">
                  <div className="offer-header">
                    <div className="offer-icon">
                      <IconComponent size={24} color="#C6A664" />
                    </div>
                    <div className="offer-discount">{offer.discount}</div>
                  </div>
                  <h3>{offer.name}</h3>
                  <p className="offer-type">{offer.type}</p>
                  <p className="offer-description">{offer.description}</p>
                  <div className="offer-footer">
                    <div className="credits-cost">
                      <Gift size={16} />
                      <span>{offer.credits} credits</span>
                    </div>
                    <button 
                      className={`btn ${stats.availableCredits >= offer.credits ? 'btn-primary' : 'btn-outline'}`}
                      disabled={stats.availableCredits < offer.credits}
                    >
                      {stats.availableCredits >= offer.credits ? 'Redeem' : 'Not Enough Credits'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list card">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-date">
                  {new Date(activity.date).toLocaleDateString()}
                </div>
                <div className="activity-details">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-meta">
                    {activity.user && `by ${activity.user}`}
                    {activity.partner && `at ${activity.partner}`}
                  </p>
                </div>
                <div className={`activity-amount ${activity.earned ? 'earned' : 'spent'}`}>
                  {activity.earned ? '+' : '-'}{activity.earned || activity.spent} credits
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works-section">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Share Your Code</h3>
              <p>Send your unique referral code to friends and family</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Friend Signs Up</h3>
              <p>They create an account using your referral code</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Earn Credits</h3>
              <p>Get $25 in credits when they complete their first booking</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Redeem Rewards</h3>
              <p>Use credits at partner cafés, restaurants, and more</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .referral-page {
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
        }

        .stat-icon {
          background: var(--beige);
          padding: 0.75rem;
          border-radius: 50%;
          border: 2px solid var(--gold);
        }

        .stat-info h3 {
          margin: 0;
          font-size: 2rem;
          color: var(--navy);
        }

        .stat-info p {
          margin: 0;
          color: var(--gray);
        }

        .referral-section {
          text-align: center;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .referral-code-container {
          margin-top: 2rem;
        }

        .referral-code {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .referral-code span {
          background: var(--beige);
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-family: monospace;
          font-size: 1.25rem;
          font-weight: 600;
          border: 2px solid var(--gold);
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: var(--gold);
          color: var(--white);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .copy-btn:hover {
          background: var(--dark-gold);
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .tiers-section {
          margin-bottom: 3rem;
        }

        .tiers-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .tiers-progress {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .tier-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .tier-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--light-gray);
          background: var(--white);
        }

        .tier-item.completed .tier-circle {
          border-color: var(--gold);
          background: var(--beige);
        }

        .tier-info {
          text-align: center;
        }

        .tier-info h4 {
          margin: 0;
          font-size: 0.875rem;
          color: var(--navy);
        }

        .tier-info p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--gray);
        }

        .progress-bar {
          height: 8px;
          background: var(--light-gray);
          border-radius: 4px;
          margin-bottom: 0.5rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gold);
          transition: width 0.3s ease;
        }

        .progress-text {
          text-align: center;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .offers-section {
          margin-bottom: 3rem;
        }

        .offers-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .offer-card {
          padding: 1.5rem;
        }

        .offer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .offer-icon {
          background: var(--beige);
          padding: 0.5rem;
          border-radius: 50%;
          border: 2px solid var(--gold);
        }

        .offer-discount {
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .offer-type {
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .offer-description {
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .offer-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .credits-cost {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold);
          font-weight: 600;
        }

        .activity-section {
          margin-bottom: 3rem;
        }

        .activity-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .activity-list {
          padding: 1.5rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--light-gray);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-date {
          font-size: 0.875rem;
          color: var(--gray);
          min-width: 100px;
        }

        .activity-details {
          flex: 1;
        }

        .activity-action {
          margin: 0;
          font-weight: 600;
          color: var(--navy);
        }

        .activity-meta {
          margin: 0;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .activity-amount {
          font-weight: 600;
        }

        .activity-amount.earned {
          color: #10B981;
        }

        .activity-amount.spent {
          color: #EF4444;
        }

        .how-it-works-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .step-card {
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

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .referral-code {
            flex-direction: column;
          }

          .share-buttons {
            flex-direction: column;
          }

          .tiers-progress {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .offers-grid {
            grid-template-columns: 1fr;
          }

          .activity-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default ReferralRewards
