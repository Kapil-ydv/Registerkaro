"use client";

import React from "react";
import Image from "next/image";

const AboutRegisterKaro = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "20px",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Curve Image at the Top-Right */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "0",
          width: "150px",
          height: "450px",
        }}
      >
        <Image
          src="/curve.png"
          alt="Decorative curve"
          width={150}
          height={450}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "40px auto",
          maxWidth: "1200px",
          gap: "20px", // Adjust spacing between elements
        }}
      >
        {/* Text Content */}
        <div
          style={{
            flex: 1,
            paddingRight: "20px",
            minWidth: "300px",
          }}
        >
          <h1 style={{ color: "#f8a531", marginBottom: "10px" }}>
            WELCOME TO REGISTERKARO.IN
          </h1>
          <h2 style={{ marginBottom: "20px" }}>
            <span style={{ color: "#000" }}>About </span>
            <span style={{ color: "#f8a531" }}>Register Karo</span>
          </h2>
          <p style={{ color: "#000", marginBottom: "10px" }}>
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment.
          </p>
          <p style={{ color: "#000", marginBottom: "10px" }}>
            Perry is an outstanding leader who is fanatical about customer
            satisfaction. He has built a solid team that has consistently
            delivered on projects, thereby exceeding everyone’s expectations.
          </p>
          <a
            href="#learn-more"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#003366",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Learn More
          </a>
        </div>

        {/* Image Content */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/Group.png"
            alt="Register Karo Team"
            width={300}
            height={300}
          />
        </div>

        {/* Dots at Bottom-Right of Group Image */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            width: "150px",
            height: "150px",
          }}
        >
          <Image
            src="/dots.png"
            alt="Decorative dots"
            width={150}
            height={150}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
            text-align: center;
          }
          h1,
          h2 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
          }
          a {
            font-size: 0.9rem;
          }
          .curve-image {
            display: none; /* Hide curve image for smaller screens */
          }
          .dots-image {
            display: none; /* Hide dots image for smaller screens */
          }
        }

        @media (max-width: 480px) {
          div {
            padding: 10px;
          }
          h1 {
            font-size: 1rem;
          }
          h2 {
            font-size: 0.9rem;
          }
          p {
            font-size: 0.8rem;
          }
          a {
            font-size: 0.8rem;
          }
          img {
            width: 100px;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutRegisterKaro;
