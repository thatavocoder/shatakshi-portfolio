import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="content-sections">
        <About />
        <BlogPreview />
      </div>
    </>
  );
};

export default Home; 