import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Coinbase', logo: '/coinbaselogo.png' },
  { name: 'Spotify', logo: '/spotifylogo.png' },
  { name: 'Slack', logo: '/slacklogo.png' },
  { name: 'Dropbox', logo: '/dropboxlogo.png' },
  { name: 'Webflow', logo: '/webflowlogo.png' },
  { name: 'Zoom', logo: '/zoomlogo.png' }
];

const CompanyLogos = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Trusted by leading companies</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '52px'
      }}>
        {companies.map((company, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image src={company.logo} alt={company.name} width={150} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
