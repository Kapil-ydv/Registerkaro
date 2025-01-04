import React from 'react';
import Image from 'next/image';

const blogs = [
  {
    title: "Special Workshops & Startups",
    date: "Published Articles • 1 Jan 2023 • Today",
    description: "Like to know the secrets of developing a 9-5? Learn how to Super Boost working Capacity.",
    tags: ["Tax & Audit", "Management"],
    image: "/Image.png"
  },
  {
    title: "Scale-Up Company Offer",
    date: "Media News • 1 Jan 2023",
    description: "Market analysis on strategic expansion of companies.",
    tags: ["Tax", "Research", "Compliance"],
    image: "/Image (1).png"
  },
  {
    title: "Growing Business Packages",
    date: "Media Version • 1 Jan 2023",
    description: "Introduction to Bookkeeping and its Principles. Learn from the Best in the Industry.",
    tags: ["Audit", "Money Back"],
    image: "/Image.png"
  },
  {
    title: "Scale-Up Company Offer",
    date: "News Room • 1 Jan 2023",
    description: "Collaborative project on new business strategies and new individual company tactics.",
    tags: ["Money", "Management"],
    image: "/Image (2).png"
  },
  {
    title: "Scale-Up Company Offer",
    date: "Media Blogs • 1 Jan 2023",
    description: "Market analysis on strategic expansion of companies.",
    tags: ["Tax Return", "News", "Audit"],
    image: "/Image (3).png"
  },
  {
    title: "Scale-Up Company Offer",
    date: "Media News • 1 Jan 2023",
    description: "Starting a company doesn't need to be complicated, but how do you get started?",
    tags: ["Private Company", "Customer Success"],
    image: "/Image (4).png"
  }
];

const BlogSection = () => {
  return (
    <div style={styles.blogSection}>
      <h4 style={styles.exploreText}>Explore Our Blog</h4>
      <h2>Accelerate Digital Transformation</h2>
      <div style={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <div key={index} style={styles.blogPost}>
            <Image src={blog.image} alt={blog.title} width={300} height={200} />
            <p>{blog.date}</p>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div style={styles.tags}>
              {blog.tags.map((tag, i) => (
                <span key={i} style={{ ...styles.tag, backgroundColor: getTagColor(tag) }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button style={styles.showMore}>Show more blogs</button>
    </div>
  );
};

// Function to assign different colors to tags
const getTagColor = (tag) => {
  switch (tag) {
    case "Tax":
      return "#FF6347"; // Tomato red
    case "Research":
      return "#4682B4"; // Steel blue
    case "Compliance":
      return "#32CD32"; // Lime green
    case "Audit":
      return "#FFD700"; // Gold
    case "Money Back":
      return "#8A2BE2"; // Blue violet
    case "Private Company":
      return "#DC143C"; // Crimson
    case "Customer Success":
      return "#8B0000"; // Dark red
    case "Tax & Audit":
      return "#20B2AA"; // Light sea green
    case "Management":
      return "#C71585"; // Medium violet red
    case "Money":
      return "#FFD700"; // Gold
    case "Tax Return":
      return "#FF4500"; // Orange red
    case "News":
      return "#D2691E"; // Chocolate
    default:
      return "#D3D3D3"; // Light grey
  }
};

const styles = {
  blogSection: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
  },
  exploreText: {
    color: '#d9b00f', // Yellow color for "Explore Our Blog"
  },
  blogGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  blogPost: {
    width: '350px',
    margin: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',

  },
  tag: {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '5px',
  },
  showMore: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#1b3f65',
    color: '#fff',
    border: 'none',
    marginTop: '20px',
    cursor: 'pointer',
  }
};

export default BlogSection;
