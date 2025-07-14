import React from 'react';
import NavBar from '../components/NavBar';
import './Blog.css';

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="blog-page">
        <div className="blog-page-container">
          <header className="blog-page-header">
            <h1 className="blog-page-title">All Blog Posts</h1>
            <p className="blog-page-subtitle">
              Stories, thoughts, and musings from my writing journey
            </p>
          </header>
          
          <div className="blog-content">
            <p>Full blog page coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog; 