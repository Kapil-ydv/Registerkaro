import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header">
      {/* Left Section */}
      <div className="leftSection">
        <a href="mailto:www.registerkaro.in" className="icon">
          <Image src="/mail.png" alt="Mail" width={10} height={10} />
          <span>www.registerkaro.in</span>
        </a>
        <a href="tel:+918447746183" className="icon">
          <Image src="/call.png" alt="Phone" width={1} height={10} />
          <span>+918447746183</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="rightSection">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <Image src="/facebook.png" alt="Facebook" width={1} height={1} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <Image src="/instagram.png" alt="Instagram" width={1} height={1} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
          <Image src="/Twiter.png" alt="Twitter" width={1} height={1} />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="icon">
          <Image src="/Pintrest.png" alt="Pinterest" width={1} height={1} />
        </a>
      </div>
    </div>
  );
};

export default Header;
