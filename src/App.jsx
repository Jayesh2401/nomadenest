import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Currency from './pages/Currency'
import Itinerary from './pages/Itinerary'
import Membership from './pages/Membership'
import Events from './pages/Events'
import Destinations from './pages/Destinations'
import ReferralRewards from './pages/ReferralRewards'
import ContactUs from './pages/ContactUs'
import ExpertConsult from './pages/ExpertConsult'
import TravelGuides from './pages/TravelGuides'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/referral-rewards" element={<ReferralRewards />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/expert-consult" element={<ExpertConsult />} />
            <Route path="/travel-guides" element={<TravelGuides />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
