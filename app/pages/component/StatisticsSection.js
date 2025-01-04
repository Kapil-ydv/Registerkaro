import React from 'react';

const statistics = [
  { value: '1M+', description: 'Customers' },
  { value: '12+', description: 'Years of Excellence' },
  { value: '41+', description: 'R&D Engineers' },
  { value: '78+', description: 'Countries' },
  { value: '3287+', description: 'Partners' },
  { value: '41+', description: 'Awards Received' }
];

const StatisticsSection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#d9b00f' }}>WHY REGISTER KARO</h1>
      <p style={{ fontSize: '2em', marginBottom: '20px', color: '#3C2109' }}>Some Numbers are important</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '60px'
      
      }}>
        {statistics.map((stat, index) => (
          <div key={index} style={{
            textAlign: 'center',
            padding: '10px',
          }}>
            <h2 style={{
              background: 'linear-gradient(to right, #ffa229, #1c4670)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: '3em',
              margin: '0',
            }}>
              {stat.value}
            </h2>
            <p style={{ fontSize: '1.2em', marginTop: '10px', fontWeight: 'bold' }}>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;


