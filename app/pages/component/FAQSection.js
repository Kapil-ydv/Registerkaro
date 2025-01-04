import React from 'react';

// Static FAQ data
const faqs = [
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, our software allows you to recover deleted files from your desktop." },
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, our software allows you to recover deleted files from your desktop." },
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, our software allows you to recover deleted files from your desktop." },
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, our software allows you to recover deleted files from your desktop." },
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, our software allows you to recover deleted files from your desktop." }
];

const FAQSection = () => (
  <div style={styles.faqSection}>
    <h4 style={styles.faqHeader}>FAQ</h4>
    <h1 style={styles.sectionTitle}>Frequently Asked Questions</h1>
    <div style={styles.faqList}>
      {faqs.map((faq, index) => (
        <details key={index} style={styles.faqItem}>
          <summary style={styles.faqQuestion}>
            {faq.question}
            <img src="/dropdownarrow.png" alt="arrow" style={styles.arrowImage} />
          </summary>
          <div style={styles.faqAnswer}>{faq.answer}</div>
        </details>
      ))}
    </div>
    <div style={styles.showMoreContainer}>
      <button style={styles.showMore}>Show more</button>
    </div>
  </div>
);

const styles = {
  faqSection: {
    padding: '20px',
  },
  faqHeader: {
    textAlign: 'center', // Center "FAQ" text
    color: '#d9b00f', // Yellow color for the header
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  faqItem: {
    background: 'white',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding shadow effect to FAQ container
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    alignItems: 'center', // Align text and image
  },
  faqAnswer: {
    marginTop: '10px',
  },
  arrowImage: {
    width: '20px', // Adjust size of the arrow
    height: '20px',
    marginLeft: '10px', // Space between the question text and the arrow
  },
  showMoreContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the "Show more" button
    marginTop: '20px',
  },
  showMore: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#1b3f65',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  }
};

export default FAQSection;
