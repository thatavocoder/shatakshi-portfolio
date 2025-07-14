import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line-1">Hey there!</span>
              <span className="title-line-2">I'm Shatakshi ✨</span>
            </h1>
            <p className="hero-description">
              A word-weaving, story-spinning, coffee-fueled blog writer who turns everyday moments into extraordinary tales.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">Read My Stories</button>
              <button className="cta-button secondary">Let's Chat! 💬</button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="floating-elements">
                <div className="element element-1">✨</div>
                <div className="element element-2">📚</div>
                <div className="element element-3">☕</div>
                <div className="element element-4">💡</div>
              </div>
              <div className="profile-photo">
                <img src="/profile-placeholder.png" alt="Shatakshi - Blog Writer" />
              </div>
              <div className="photo-frame"></div>
            </div>
          </div>
        </div>

        {/* Quirky Background Elements */}
        <div className="background-elements">
          <div className="floating-word word-1">Write</div>
          <div className="floating-word word-2">Dream</div>
          <div className="floating-word word-3">Create</div>
          <div className="floating-word word-4">Inspire</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 