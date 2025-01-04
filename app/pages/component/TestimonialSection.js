import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    rating: 5,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "/pm.png"
  },
  {
    quote: "Suspendisse in justo eu magna luctus suscipit. Sed lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    rating: 4.5,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "/pm.png"
  },
  {
    quote: "Praesent venenatis metus at tortor pulvinar varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    rating: 4.5,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "/pm.png"
  }
];

const TestimonialSection = () => {
  return (
    <div style={styles.testimonialSection}>
      <h1 style={styles.sectionTitle}>What people say about us</h1>
      <div style={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={styles.testimonialCard}
          >
            <div style={styles.quoteIconContainer}>
              <img src="/quote.png" alt="Quote Icon" style={styles.quoteIcon} />
            </div>
            <div style={styles.rating}>
              {Array(Math.floor(testimonial.rating)).fill().map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              {testimonial.rating % 1 ? <span>⭐</span> : null}
            </div>
            <p>"{testimonial.quote}"</p>
            <div style={styles.profile}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                style={styles.profileImage}
              />
              <div>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.pagination}>
        <span style={styles.arrow}>←</span>
        <span style={styles.dots}>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
        </span>
        <span style={styles.arrow}>→</span>
      </div>
    </div>
  );
};

const styles = {
  testimonialSection: {
    padding: '20px',
    textAlign: 'center',
    background: '#1b3f65',
  },
  sectionTitle: {
    color: 'white',
    marginBottom: '20px',
  },
  testimonialContainer: {
    display: 'flex',
    flexDirection: 'row', // Align cards horizontally
    gap: '20px',
    overflowX: 'auto', // Allow horizontal scrolling
    paddingBottom: '20px',
  },
  testimonialCard: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px', // Fixed width for each card
    flexShrink: 0, // Prevent cards from shrinking
    position: 'relative',
    overflow: 'hidden',
  },
  quoteIconContainer: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  quoteIcon: {
    width: '30px',
    height: '30px',
  },
  rating: {
    color: 'gold',
    marginBottom: '10px',
    textAlign: 'right', // Align stars to the right
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    justifyContent: 'flex-start',
  },
  profileImage: {
    borderRadius: '50%',
    marginRight: '10px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  arrow: {
    cursor: 'pointer',
    padding: '10px',
  },
  dots: {
    display: 'flex',
    gap: '5px',
  },
  dot: {
    width: '10px',
    height: '10px',
    background: '#ddd',
    borderRadius: '50%',
  },
  dotActive: {
    background: '#333',
  }
};

export default TestimonialSection;




