import React from 'react';

const services = [
  {
    icon: '/vector.svg.png',
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience.',
  },
  {
    icon: '/vector-1.svg.png',
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals.',
  },
  {
    icon: '/vector-2.svg fill.png',
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market.',
  },
  {
    icon: '/vector-3.svg.png',
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts.',
  },
  {
    icon: '/vector-4.svg.png',
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort.',
  },
  {
    icon: '/vector-5.svg.png',
    title: 'Bookkeeping Services',
    description: 'Steering user behaviors with creative design, data insights & technology.',
  },
];

const ExploreOurServices = () => {
  return (
    <div style={{ backgroundColor:'rgba(250,250,250,1)',marginTop:'15px'}}>
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
       <h4 style={{ textAlign: 'center', marginBottom: '20px', color:' #f8a531',fontSize:'15px' }}>WELCOME TO REGISTERKARO.IN</h4>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize:'40px' }}>Explore Our Services</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '90px',
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <img
              src={service.icon}
              alt={service.title}
              style={{ height: '50px', marginBottom: '10px', objectFit: 'contain' }}
            />
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{service.title}</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>{service.description}</p>
            <a
              href="#"
              style={{ color: '#1c4a71', textDecoration: 'none', fontWeight: 'bold' ,}}
            >
              Learn more 
            </a>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            background: '#1c4a71',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        //   onClick={() => window.location.href = '/services'}
        >
          See All Services
        </button>
      </div>
    </div>
    </div>
  );
};

export default ExploreOurServices;
