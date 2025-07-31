import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="news-letter">
      <h3>Newsletter Signup</h3>
      <p>Subscribe now and don't miss a single deal!</p>
      <input type="email" placeholder="Enter your email..." />
      <button type="submit">Subscribe</button>
    </section>
  );
};

export default NewsLetter;
