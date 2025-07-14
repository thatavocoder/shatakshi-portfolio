import React from 'react';
import { HiOutlineMail, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="contact-subtitle">Let's Connect</span>
            <span className="contact-main-title">Ready to Start a Conversation?</span>
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          <p className="contact-description">
            Whether you want to collaborate on a project, share your story, or just say hello over a virtual coffee, I'd love to hear from you! ☕
          </p>

          {/* Main Contact Container */}
          <div className="contact-main">
            {/* Email Section */}
            <div className="contact-email">
              <div className="email-label">
                <HiOutlineMail className="email-icon" />
                <span className="email-text">Drop me a line</span>
              </div>
              <a 
                href="mailto:shatakshi@example.com" 
                className="email-address"
                title="Send me an email"
              >
                shatakshi@example.com
              </a>
              <p className="email-note">I'll get back to you within 24 hours!</p>
            </div>

            {/* Divider */}
            <div className="contact-divider">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            {/* Social Section */}
            <div className="contact-social">
              <div className="social-label">
                <HiOutlineGlobeAlt className="social-icon" />
                <span className="social-text">Find me around the web</span>
              </div>
              <div className="social-links">
                <a 
                  href="https://instagram.com/shatakshi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  title="Follow me on Instagram"
                >
                  <FaInstagram className="link-icon" />
                  <span className="link-text">Instagram</span>
                </a>
                <a 
                  href="https://linkedin.com/in/shatakshi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  title="Connect on LinkedIn"
                >
                  <FaLinkedinIn className="link-icon" />
                  <span className="link-text">LinkedIn</span>
                </a>
                <a 
                  href="https://twitter.com/shatakshi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link twitter"
                  title="Follow me on Twitter"
                >
                  <FaTwitter className="link-icon" />
                  <span className="link-text">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Fun Footer */}
          <div className="contact-footer">
            <p className="footer-text">
              <span className="footer-emoji">✨</span>
              Always up for a good story or a great conversation
              <span className="footer-emoji">✨</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 