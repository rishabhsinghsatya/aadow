import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const NewsletterFooter = () => {
  return (
    <div className="footers-container">
      <div className="newsletter-section">
        <div className="left-section">
          <h2>Sign up to our newsletter</h2>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <footer className="footers">
        <div className="footer-content">
          <div className="brand-column">
            <h3>Untitled UI</h3>
            <p>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          <div className="footer-links">
            {["Product", "Company", "Resources", "Social", "Legal"].map(
              (category, index) => (
                <div key={index} className="link-column">
                  <h4>{category}</h4>
                  <ul>
                    {[
                      "Overview",
                      "Features",
                      "Solutions",
                      "Tutorials",
                      "Pricing",
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2077 Untitled UI. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon-twitter">
            <FaTwitter />
          </a>
          <a href="#" className="icon-linkedin">
            <FaLinkedin />
          </a>
          <a href="#" className="icon-facebook">
            <FaFacebook />
          </a>
          <a href="#" className="icon-github">
            <FaGithub />
          </a>
          <a href="#" className="icon-dribbble">
            <FaDribbble />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFooter;
