import React from 'react';

const VideoIntroductions = () => {
  return (
    <section
      style={{
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: 'rgba(28,70,112,1)',
        marginTop: '15px',
      }}
    >
      {/* Text Section */}
      <article
        style={{
          flex: '1',
          minWidth: '300px',
          textAlign: 'left',
          color: 'white',
        }}
      >
        <h2>Our Video Introductions</h2>
        <p style={{ color: 'rgba(170,181,205,1)' }}>
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '16px',
            }}
          >
            <img
              src="/Display Icon.png"
              alt="Explore ideas together"
              style={{ height: '24px', marginRight: '12px' }}
            />
            <div>
              <strong>Explore ideas together</strong>
              <p style={{ margin: '4px 0', color: 'rgba(170,181,205,1)' }}>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '16px',
            }}
          >
            <img
              src="/Display Icon2.png"
              alt="Bring those ideas to life"
              style={{ height: '24px', marginRight: '12px' }}
            />
            <div>
              <strong>Bring those ideas to life</strong>
              <p style={{ margin: '4px 0', color: 'rgba(170,181,205,1)' }}>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </li>
        </ul>
      </article>

      {/* Image Section */}
      <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
        <img
          src="/Group 1261153023.png"
          alt="Video introduction visual"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
};

export default VideoIntroductions;
