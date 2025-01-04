import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="rating">
          <img src="/star.png" alt="Star" className="star" />
          Google Rating
          <div className="stars">
            <img src="/starrating.png" alt="Star Rating" />
            <img src="/starrating.png" alt="Star Rating" />
            <img src="/starrating.png" alt="Star Rating" />
            <img src="/starrating.png" alt="Star Rating" />
            <img src="/starrating.png" alt="Star Rating" />
          </div>
        </div>
        <h1>Your trusted partner for compliance business needs</h1>
        <p className="description">
          An online business compliance platform that helps entrepreneurs and other individuals
          with various <strong>registrations, tax filings</strong>, and other <strong>legal matters</strong>.
        </p>
        <div className="stats">
          <div className="stat-item">
            <img src="/SVG.png" alt="Customer Rating" className="stat-icon" />
            <div className="stat-info">
              <span className="rating-text">4.5+</span>
              <p>Customer Rating</p>
            </div>
          </div>
          <div className="stat-item">
            <img src="/SVG (1).png" alt="Clients" className="stat-icon" />
            <div className="stat-info">
              <span className="rating-text">20,000+</span>
              <p>Clients</p>
            </div>
          </div>
          <div className="stat-item">
            <img src="/SVG.png" alt="Financial Stability" className="stat-icon" />
            <div className="stat-info">
              <span className="rating-text">99.8%</span>
              <p>Financial Stability</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="cta-button">Talk An Expert</button>
          <button className="secondary-button">See how it works</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Group-6631 1.png" alt="Illustration" />
      </div>
      <div className="services-menu">
        <button>Annual Compliance</button>
        <button>Payroll Services</button>
        <button>Company Formation</button>
        <button>Annual Compliance</button>
        
      </div>
      <div className="services-menu2">
      <img src="/Group 122.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
