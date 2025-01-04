'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

const Header2 = () => {
  // Create sparkles dynamically in the useEffect
  useEffect(() => {
    const numberOfSparkles = 5; // Adjust how many sparkles you want
    const logoElement = document.querySelector('.logo');

    // Function to generate random color class
    const getRandomColorClass = () => {
      return Math.random() > 0.5 ? 'sparkle-orange' : 'sparkle-white';
    };

    for (let i = 0; i < numberOfSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle', getRandomColorClass()); // Add random color class
      logoElement.appendChild(sparkle);
    }

    // Clean up sparkles when the component unmounts
    return () => {
      const sparkles = document.querySelectorAll('.sparkle');
      sparkles.forEach(sparkle => sparkle.remove());
    };
  }, []);

  return (
    <div className="header2">
      <div className="logo">
        <img
          src="/christmashat.png"
          alt="RegisterKaro"
          className="logo-image"
        />
        <img
          src="/RegisterKarologo.png"
          alt="RegisterKaro"
          className="logo-image"
        />
      </div>
      <nav className="navigation">
        <Link href="/">Home</Link>
        <div className="dropdown">
          <span>
            Our Services <img src="/dropdownarrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
          </span>
          {/* Dropdown options */}
          <div className="dropdown-content">
            <Link href="/service1">Service 1</Link>
            <Link href="/service2">Service 2</Link>
          </div>
        </div>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/about">About Us</Link>
      </nav>
      <div className="actions">
        <img src="/search.png" alt="Search" className="search-icon" />
        <button className="cta-button">Talk An Expert</button>
      </div>
    </div>
  );
};

export default Header2;
