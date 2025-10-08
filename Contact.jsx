// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <h3>Contact Us</h3>
      <p>
        Have questions or want to reach out? Fill out the form below or email us at
        <strong> support@cozyportal.com</strong>.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          marginTop: "1rem",
          background: "rgba(255,255,255,0.9)",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(124, 58, 237, 0.15)",
        }}
      >
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit" style={{ cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
