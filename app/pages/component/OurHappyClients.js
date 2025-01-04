import React from 'react';

const OurHappyClients = () => {
  const clients = [
    { logo: 'Display Round Logo.png', name: 'Shopify' },
    { logo: 'Display Round Logo (1).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (2).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (3).png', name: 'Trello' },
    { logo: 'Display Round Logo (4).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (5).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (6).png', name: 'Trello' },
    { logo: 'Display Round Logo (7).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (8).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (9).png', name: 'Trello' },
    { logo: 'Display Round Logo (10).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (11).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (12).png', name: 'Trello' },
    { logo: 'Display Round Logo (13).png', name: 'Trello' },
    { logo: 'Display Round Logo (14).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (15).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (16).png', name: 'Trello' },
    { logo: 'Display Round Logo (17).png', name: 'Trello' },
    { logo: 'Display Round Logo (18).png', name: 'Pinterest' },
    { logo: 'Display Round Logo (19).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (20).png', name: 'Trello' },
    { logo: 'Display Round Logo (21).png', name: 'Trello' },
    { logo: 'Display Round Logo (22).png', name: 'Pinterest' },
    // { logo: 'Display Round Logo (23).png', name: 'Dropbox' },
    { logo: 'Display Round Logo (24).png', name: 'Trello' },
    // Add more client logos as needed
  ];

  const sizeOptions = [
    { width: '30px', height: '30px' },
    
    { width: '66px', height: '66px' },
    
    { width: '100px', height: '100px' },
  ];

  return (
    <section style={{ textAlign: 'center', width: '100%' }}>
      <h2>Our Happy Clients</h2>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state-of-the-art customer satisfaction.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '20px',
          width: '100%',
        }}
      >
        {clients.map((client, index) => {
          // Randomly pick a size for each logo
          const randomSize =
            sizeOptions[Math.floor(Math.random() * sizeOptions.length)];

          return (
            <div
              key={index}
              style={{
                borderRadius: '50%',
                border: '1px solid #ccc',
                padding: '10px',
                width: randomSize.width,
                height: randomSize.height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.2s ease-in-out',
              }}
              // onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              // onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#1c4a71',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Show more
        </button>
      </div>
    </section>
  );
};

export default OurHappyClients;