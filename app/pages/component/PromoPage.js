import React from 'react';

const PromoPage = () => {
  return (
    <div style={{
      textAlign: 'center', 
      padding: '50px 20px', 
      background: 'linear-gradient(90deg, orange, blue)', 
      color: 'white'
    }}>
      {/* Adjusted 1% text size and kept it white */}
      <h1 style={{ fontSize: '2em', marginBottom: '10px', color: 'white' }}>1% OF THE INDUSTRY</h1>
      <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Welcome to your new digital reality. Now.</h2>
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          style={{ 
            padding: '10px', 
            border: 'none', 
            borderRadius: '5px', 
            marginRight: '10px' 
          }}
        />
        {/* Updated Submit button background to yellow */}
        <button style={{ 
          padding: '10px 20px', 
          border: 'none', 
          backgroundColor: '#ffd700', 
          color: 'black', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>Submit</button>
      </div>
      {/* Display Instant Results, Interface, and Customization in a row */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        fontSize: '1.2em',
        marginTop: '20px'
      }}>
        <span>✔ Instant results</span>
        <span>✔ User-friendly interface</span>
        <span>✔ Personalized customization</span>
      </div>
    </div>
  );
};

export default PromoPage;
