import React, { useState, useEffect } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  RefreshCw,
  AlertCircle,
  MapPin,
  Clock,
  Calculator,
  Bookmark,
  Bell
} from 'lucide-react'

const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [amount, setAmount] = useState(100)
  const [convertedAmount, setConvertedAmount] = useState(85.23)
  const [isLoading, setIsLoading] = useState(false)

  // Mock exchange rates data
  const exchangeRates = {
    USD: { EUR: 0.8523, GBP: 0.7891, JPY: 149.32, INR: 83.12, CAD: 1.3456 },
    EUR: { USD: 1.1734, GBP: 0.8654, JPY: 162.45, INR: 89.76, CAD: 1.4523 },
    GBP: { USD: 1.2674, EUR: 1.1556, JPY: 189.23, INR: 104.56, CAD: 1.6789 },
    JPY: { USD: 0.0067, EUR: 0.0062, GBP: 0.0053, INR: 0.5567, CAD: 0.0089 },
    INR: { USD: 0.0120, EUR: 0.0111, GBP: 0.0096, JPY: 1.7956, CAD: 0.0162 }
  }

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' }
  ]

  const popularPairs = [
    { from: 'USD', to: 'EUR', rate: 0.8523, change: -0.12 },
    { from: 'USD', to: 'GBP', rate: 0.7891, change: 0.08 },
    { from: 'USD', to: 'JPY', rate: 149.32, change: 1.23 },
    { from: 'EUR', to: 'GBP', rate: 0.8654, change: 0.15 },
    { from: 'USD', to: 'INR', rate: 83.12, change: -0.45 },
    { from: 'GBP', to: 'INR', rate: 104.56, change: 0.67 }
  ]

  const travelDeals = [
    {
      id: 1,
      title: 'Best Exchange Rate Alert',
      description: 'USD to EUR rate dropped to 0.85 - Save 2% on your exchange',
      location: 'Europe',
      savings: '2%',
      type: 'rate-alert'
    },
    {
      id: 2,
      title: 'Airport Exchange Hack',
      description: 'Avoid airport fees - Exchange at city centers for better rates',
      location: 'Global',
      savings: '5-8%',
      type: 'tip'
    },
    {
      id: 3,
      title: 'Multi-Currency Card Deal',
      description: 'Get 0% foreign transaction fees with our partner cards',
      location: 'Worldwide',
      savings: '3%',
      type: 'deal'
    }
  ]

  const handleConvert = () => {
    setIsLoading(true)
    setTimeout(() => {
      const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1
      setConvertedAmount((amount * rate).toFixed(2))
      setIsLoading(false)
    }, 500)
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  useEffect(() => {
    handleConvert()
  }, [amount, fromCurrency, toCurrency])

  const getCurrencyInfo = (code) => {
    return currencies.find(c => c.code === code) || { name: code, symbol: code, flag: '🌍' }
  }

  return (
    <div className="currency-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Currency Exchange</h1>
          <p>Get live exchange rates and save money on your travels</p>
        </div>

        {/* Main Converter */}
        <div className="converter-section">
          <div className="converter-card card">
            <div className="converter-header">
              <h2>Currency Converter</h2>
              <div className="last-updated">
                <Clock size={16} />
                <span>Last updated: 2 minutes ago</span>
              </div>
            </div>

            <div className="converter-form">
              <div className="amount-input">
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                  className="amount-field"
                />
              </div>

              <div className="currency-selectors">
                <div className="currency-selector">
                  <label>From</label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="currency-select"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="swap-btn" onClick={swapCurrencies}>
                  <RefreshCw size={20} />
                </button>

                <div className="currency-selector">
                  <label>To</label>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="currency-select"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="conversion-result">
                <div className="result-display">
                  <div className="from-amount">
                    {getCurrencyInfo(fromCurrency).symbol}{amount}
                  </div>
                  <div className="equals">=</div>
                  <div className="to-amount">
                    {isLoading ? (
                      <div className="loading">Converting...</div>
                    ) : (
                      `${getCurrencyInfo(toCurrency).symbol}${convertedAmount}`
                    )}
                  </div>
                </div>
                <div className="exchange-rate">
                  1 {fromCurrency} = {exchangeRates[fromCurrency]?.[toCurrency]?.toFixed(4) || '1.0000'} {toCurrency}
                </div>
              </div>

              <div className="converter-actions">
                <button className="btn btn-primary" onClick={handleConvert}>
                  <Calculator size={16} />
                  Convert
                </button>
                <button className="btn btn-outline">
                  <Bookmark size={16} />
                  Save Rate
                </button>
                <button className="btn btn-outline">
                  <Bell size={16} />
                  Set Alert
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Currency Pairs */}
        <div className="popular-pairs-section">
          <h2>Popular Currency Pairs</h2>
          <div className="pairs-grid">
            {popularPairs.map((pair, index) => (
              <div key={index} className="pair-card card">
                <div className="pair-header">
                  <span className="pair-name">{pair.from}/{pair.to}</span>
                  <div className={`change ${pair.change >= 0 ? 'positive' : 'negative'}`}>
                    {pair.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {Math.abs(pair.change)}%
                  </div>
                </div>
                <div className="pair-rate">{pair.rate}</div>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    setFromCurrency(pair.from)
                    setToCurrency(pair.to)
                  }}
                >
                  Use This Pair
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Money Tips */}
        <div className="travel-deals-section">
          <h2>Money-Saving Tips & Deals</h2>
          <div className="deals-grid">
            {travelDeals.map(deal => (
              <div key={deal.id} className="deal-card card">
                <div className="deal-header">
                  <div className={`deal-type ${deal.type}`}>
                    {deal.type === 'rate-alert' && <TrendingDown size={16} />}
                    {deal.type === 'tip' && <AlertCircle size={16} />}
                    {deal.type === 'deal' && <DollarSign size={16} />}
                  </div>
                  <div className="savings-badge">Save {deal.savings}</div>
                </div>
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>
                <div className="deal-location">
                  <MapPin size={14} />
                  <span>{deal.location}</span>
                </div>
                <button className="btn btn-primary btn-sm">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        {/* Rate History Chart Placeholder */}
        <div className="chart-section">
          <div className="chart-card card">
            <h2>Exchange Rate History</h2>
            <div className="chart-placeholder">
              <TrendingUp size={48} color="#C6A664" />
              <p>Interactive rate history chart would be displayed here</p>
              <p className="chart-note">
                Track {fromCurrency} to {toCurrency} rates over the last 30 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .currency-page {
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

        .converter-section {
          margin-bottom: 3rem;
        }

        .converter-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .converter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .last-updated {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
        }

        .converter-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .amount-input label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--navy);
        }

        .amount-field {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
        }

        .amount-field:focus {
          border-color: var(--gold);
          outline: none;
        }

        .currency-selectors {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: end;
        }

        .currency-selector label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--navy);
        }

        .currency-select {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--light-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
          background: var(--white);
        }

        .currency-select:focus {
          border-color: var(--gold);
          outline: none;
        }

        .swap-btn {
          background: var(--gold);
          color: var(--white);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swap-btn:hover {
          background: var(--dark-gold);
          transform: rotate(180deg);
        }

        .conversion-result {
          text-align: center;
          padding: 2rem;
          background: var(--beige);
          border-radius: 1rem;
          border: 2px solid var(--gold);
        }

        .result-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .from-amount,
        .to-amount {
          font-size: 2rem;
          font-weight: 700;
          color: var(--navy);
        }

        .equals {
          font-size: 1.5rem;
          color: var(--gold);
        }

        .loading {
          color: var(--gold);
          font-style: italic;
        }

        .exchange-rate {
          color: var(--gray);
          font-size: 0.875rem;
        }

        .converter-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .popular-pairs-section,
        .travel-deals-section {
          margin-bottom: 3rem;
        }

        .popular-pairs-section h2,
        .travel-deals-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pairs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .pair-card {
          text-align: center;
          padding: 1.5rem;
        }

        .pair-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .pair-name {
          font-weight: 600;
          color: var(--navy);
        }

        .change {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .change.positive {
          color: #10B981;
        }

        .change.negative {
          color: #EF4444;
        }

        .pair-rate {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .deals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .deal-card {
          padding: 1.5rem;
        }

        .deal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .deal-type {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--beige);
          border: 2px solid var(--gold);
        }

        .savings-badge {
          background: var(--gold);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .deal-card h3 {
          margin-bottom: 0.5rem;
        }

        .deal-card p {
          color: var(--gray);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .deal-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .chart-section {
          margin-bottom: 3rem;
        }

        .chart-card {
          padding: 2rem;
          text-align: center;
        }

        .chart-placeholder {
          padding: 3rem;
          background: var(--beige);
          border-radius: 1rem;
          border: 2px dashed var(--gold);
        }

        .chart-placeholder p {
          margin: 1rem 0;
          color: var(--gray);
        }

        .chart-note {
          font-size: 0.875rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .converter-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .currency-selectors {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .swap-btn {
            justify-self: center;
          }

          .result-display {
            flex-direction: column;
            gap: 0.5rem;
          }

          .converter-actions {
            flex-direction: column;
          }

          .pairs-grid {
            grid-template-columns: 1fr;
          }

          .deals-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Currency
