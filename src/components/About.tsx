import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Background Elements */}
        <div className="about-background-elements"></div>

        {/* Main content */}
        <div className="about-content">
          {/* Section header */}
          <div className="about-header">
            <h2 className="about-title">
              <span className="about-subtitle">Get to know</span>
              <span className="about-main-title">The Person Behind The Words</span>
            </h2>
            <div className="title-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="main-content-grid">
            {/* Description Section */}
            <div className="description-section">
              <p className="description-text">
                Hey there! I'm Shatakshi, a passionate blog writer who believes every ordinary moment has an extraordinary story waiting to be told. With a cup of coffee in hand and curiosity as my compass, I explore the beautiful chaos of everyday life through words that connect hearts and inspire minds.
              </p>
              
              {/* Skills/Interests Section */}
              <div className="skills-interests">
                <h3 className="skills-title">What I Love Writing About</h3>
                <div className="interests-grid">
                  <div className="interest-tag">
                    <span className="tag-icon">🌟</span>
                    <span className="tag-text">Life Stories</span>
                  </div>
                  <div className="interest-tag">
                    <span className="tag-icon">💭</span>
                    <span className="tag-text">Personal Growth</span>
                  </div>
                  <div className="interest-tag">
                    <span className="tag-icon">🎨</span>
                    <span className="tag-text">Creative Process</span>
                  </div>
                  <div className="interest-tag">
                    <span className="tag-icon">🌱</span>
                    <span className="tag-text">Everyday Magic</span>
                  </div>
                  <div className="interest-tag">
                    <span className="tag-icon">📖</span>
                    <span className="tag-text">Book Reviews</span>
                  </div>
                  <div className="interest-tag">
                    <span className="tag-icon">✨</span>
                    <span className="tag-text">Inspiration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facts and Quote Container */}
            <div className="facts-quote-container">
              {/* Fun facts */}
              <div className="fun-facts">
                <h3 className="fun-facts-title">Quick Facts About Me</h3>
                <div className="facts-grid">
                  <div className="fact-item">
                    <span className="fact-icon">☕</span>
                    <span className="fact-text">Coffee consumed daily: 4+ cups</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-icon">📚</span>
                    <span className="fact-text">Books read this year: 47</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-icon">✍️</span>
                    <span className="fact-text">Stories published: 120+</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-icon">🌟</span>
                    <span className="fact-text">Favorite writing spot: Window seat</span>
                  </div>
                </div>
              </div>

              {/* Quote section */}
              <div className="quote-section">
                <blockquote className="about-quote">
                  <p>"Every story matters, every voice deserves to be heard, and every moment has the potential to change someone's world."</p>
                  <cite>- My Writing Philosophy</cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="about-cta">
            <button className="cta-button">
              <span>Read My Stories</span>
              <span className="button-icon">📖</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 