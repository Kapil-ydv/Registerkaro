import React from 'react';
import Image from 'next/image';

const PromoBanner = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.textSection}>
        <h1 style={styles.mainTitle}>Manage Your Services By Your Mobile Phone</h1>
        <p style={styles.subTitle}>
          Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
        </p>
        <h4 style={styles.getAppText}>Get the App</h4>
        <div style={styles.buttonContainer}>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={styles.button}>
            <Image src="/Frame 7844.png" alt="Get it on App Store" width={150} height={50} />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={styles.button}>
            <Image src="/Frame 7846.png" alt="Get it on Google Play" width={150} height={50} />
          </a>
        </div>
      </div>
      <div style={styles.imageSection}>
        <Image src="/mobile.png" alt="Promo Image" width={400} height={400} style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#1b3f65',
    padding: '40px 20px',
    color: 'white',
    textAlign: 'left',
    alignItems: 'center',
  },
  textSection: {
    maxWidth: '600px',
  },
  mainTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    color: 'white', // Manage Your Services in white color
  },
  subTitle: {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: '#d0d0d0', // Light white-grey color for "Download our app"
  },
  getAppText: {
    fontSize: '1.5em',
    margin: '0 12px',
    marginBottom: '20px',
    color: 'white', // "Get the App" text in white
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
  },
  imageSection: {
    flex: 1,
    textAlign: 'right',
    position: 'relative',
    overflow: 'hidden', // Ensure image is clipped if needed
    height: '500px', // Adjust height of the section
  },
  image: {
    position: 'absolute',
    top: '-70px', // Move the image up by 50px (adjust as necessary)
    left: 0,
    width: '100%',
    height: 'auto',
    // objectFit: 'cover', // Ensures the image covers the section without distorting
  },
};

export default PromoBanner;
