import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1c4670', color: 'white', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <p style={{ marginBottom: '20px', fontSize: '1.2em' }}>
          Design outstanding interfaces with advanced Figma features in a matter of minutes.
        </p>
        
        {/* Sections */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '0 10px', minWidth: '150px' }}>
            <h2 style={{ fontSize: '1.1em', marginBottom: '10px', color: '#ffa229' }}>START A BUSINESS</h2>
            <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.8' }}>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div style={{ flex: '1', padding: '0 10px', minWidth: '150px' }}>
            <h2 style={{ fontSize: '1.1em', marginBottom: '10px', color: '#ffa229' }}>GOVERNMENT REGISTRATION</h2>
            <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.8' }}>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div style={{ flex: '1', padding: '0 10px', minWidth: '150px' }}>
            <h2 style={{ fontSize: '1.1em', marginBottom: '10px', color: '#ffa229' }}>COMPLIANCE & TAX</h2>
            <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.8' }}>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div style={{ flex: '1', padding: '0 10px', minWidth: '150px' }}>
            <h2 style={{ fontSize: '1.1em', marginBottom: '10px', color: '#ffa229' }}>BIS & CDSCO</h2>
            <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.8' }}>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            <Image src="/google.png" alt="Google" width={24} height={24} />
            <Image src="/apple.png" alt="Apple" width={24} height={24} />
            <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          </div>
          <p>© 2024 Registerkaro. All Rights Reserved.</p>
        </div>

        {/* Back to Top Button */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#ffa229',
            fontSize: '1.5em',
            cursor: 'pointer',
          }}>↑</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
