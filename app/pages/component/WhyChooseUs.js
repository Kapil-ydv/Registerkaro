import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: '/Symbol.png', title: 'Confidential & Safe', description: 'All your private information is safe with us.', background: '#FFEFEA' },
    { icon: '/Symbol (1).png', title: 'No Hidden Fee', description: 'Everything is put before you with no hidden charges or conditions.', background: '#E8FAE8' },
    { icon: '/Symbol (2).png', title: 'Guaranteed Satisfaction', description: 'We ensure that you stay 100% satisfied with our offered services.', background: '#EFF5FF' },
    { icon: '/Symbol (3).png', title: 'Expert CA/CS Assistance', description: 'Prompt support from our in-house expert professionals.', background: '#FDEFF7' },
    { icon: '/Symbol.png', title: '24/7 Customer Support', description: 'We\'re here to help you anytime, day or night.', background: '#E8FAE8' },
  ];

  return (
    <section style={{ padding: '40px 20px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
      {/* Left Side Text */}
      <div style={{ flex: '1', textAlign: 'left' }}>
      <h4 style={{ color: "#f8a531"}}>
            WHY REGISTERKARO.IN
          </h4>
  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
    Why Choose Register Karo
  </h2>
  <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', marginBottom: '70px' }}>
    It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
  </p>

  {/* Third Icon Below Text */}
  <article
    style={{
      background: reasons[2].background,
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
    // onMouseEnter={(e) => {
    //   e.currentTarget.style.transform = 'scale(1.05)';
    //   e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    // }}
    // onMouseLeave={(e) => {
    //   e.currentTarget.style.transform = 'scale(1)';
    //   e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    // }}
  >
    <img
      src={reasons[2].icon}
      alt={`Icon for ${reasons[2].title}`}
      style={{ height: '60px',marginBottom: '15px' }}
    />
    <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333', fontWeight: 'bold' }}>
      {reasons[2].title}
    </h3>
    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{reasons[2].description}</p>
  </article>
</div>

      {/* Right Side Icon Boxes */}
      <div
        style={{
          flex: '2',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Two columns for the first row
          gap: '20px',
        }}
      >
        {/* First Two Icons */}
        {reasons.slice(0, 2).map((reason, index) => (
          <article
            key={index}
            style={{
              background: reason.background,
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.transform = 'scale(1.05)';
            //   e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.transform = 'scale(1)';
            //   e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            // }}
          >
            <img
              src={reason.icon}
              alt={`Icon for ${reason.title}`}
              style={{ height: '50px', marginBottom: '15px' }}
            />
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333', fontWeight: 'bold' }}>
              {reason.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{reason.description}</p>
          </article>
        ))}

        {/* Next Two Icons */}
        {reasons.slice(3).map((reason, index) => (
          <article
            key={index}
            style={{
              background: reason.background,
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.transform = 'scale(1.05)';
            //   e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.transform = 'scale(1)';
            //   e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            // }}
          >
            <img
              src={reason.icon}
              alt={`Icon for ${reason.title}`}
              style={{ height: '50px', marginBottom: '15px' }}
            />
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333', fontWeight: 'bold' }}>
              {reason.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;



