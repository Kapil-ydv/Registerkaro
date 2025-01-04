import React from 'react';

const TrustedBy = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1px', backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333', fontWeight:'bold'}}>
        Trusted by Over 160+ Startups and Freelance Businesses
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent:'space-between',
          // alignItems: 'center',
          // padding: '5px',
          marginLeft:'75px',
          width:'90%',
          gap: '1px',
          // flexWrap: 'wrap',
        }}
      >
        <img src="/oracle-logo.png" alt="Oracle" style={{ height: '30px', objectFit: 'contain' }} />
        <img src="/morpheus-logo.png" alt="Morpheus" style={{ height: '30px', objectFit: 'contain' }} />
        <img src="/morpheus-logo.png" alt="Morpheus" style={{ height: '30px', objectFit: 'contain' }} />
        <img src="/samsung-logo.png" alt="Samsung" style={{ height: '30px', objectFit: 'contain' }} />
        <img src="/monday-logo.png" alt="Monday.com" style={{ height: '30px', objectFit: 'contain' }} />
        <img src="/segment-logo.png" alt="Segment" style={{ height: '30px', objectFit: 'contain' }} />
      </div>
    </div>
  );
};

export default TrustedBy;
