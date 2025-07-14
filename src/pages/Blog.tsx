import NavBar from '../components/NavBar';
import { HiCalendar, HiClock, HiArrowRight } from 'react-icons/hi';
import { BiCoffee } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePostsCount, setVisiblePostsCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const POSTS_PER_PAGE = 3;

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Storytelling in the Digital Age",
      excerpt: "How modern writers are adapting ancient storytelling techniques for today's digital-first world. Exploring the balance between tradition and innovation.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Writing",
      featured: true
    },
    {
      id: 2,
      title: "Coffee Shop Chronicles: Where Ideas Bloom",
      excerpt: "My favorite writing spots around the city and why changing your environment can spark creativity. Plus, the best coffee orders for different writing moods.",
      date: "March 8, 2024",
      readTime: "3 min read",
      category: "Lifestyle",
      featured: false
    },
    {
      id: 3,
      title: "Building Authentic Characters That Readers Love",
      excerpt: "Character development techniques that go beyond the surface. How to create multi-dimensional characters that feel real and relatable.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Writing",
      featured: false
    },
    {
      id: 4,
      title: "The Power of Vulnerability in Content Creation",
      excerpt: "Why sharing your struggles makes you stronger as a creator. How authenticity builds deeper connections with your audience.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Content",
      featured: false
    },
    {
      id: 5,
      title: "Midnight Thoughts: Finding Inspiration in Silence",
      excerpt: "Some of my best ideas come at 2 AM. Here's how I capture those fleeting moments of clarity and turn them into meaningful content.",
      date: "February 14, 2024",
      readTime: "6 min read",
      category: "Inspiration",
      featured: false
    },
    {
      id: 6,
      title: "The Evolution of My Writing Voice",
      excerpt: "A personal journey through different writing styles and how I discovered my authentic voice. Lessons learned along the way.",
      date: "February 5, 2024",
      readTime: "5 min read",
      category: "Inspiration",
      featured: false
    },
    {
      id: 7,
      title: "Digital Minimalism for Content Creators",
      excerpt: "How reducing digital clutter can improve your creative process. My journey to a more intentional online presence.",
      date: "January 28, 2024",
      readTime: "4 min read",
      category: "Lifestyle",
      featured: false
    },
    {
      id: 8,
      title: "The Psychology of Compelling Headlines",
      excerpt: "What makes readers click? A deep dive into the science of attention-grabbing titles and how to craft them ethically.",
      date: "January 20, 2024",
      readTime: "6 min read",
      category: "Writing",
      featured: false
    },
    {
      id: 9,
      title: "Balancing Perfectionism and Productivity",
      excerpt: "How I learned to ship content without letting perfectionism paralyze my creative process. Finding the sweet spot.",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "Personal",
      featured: false
    },
    {
      id: 10,
      title: "The Art of Visual Storytelling",
      excerpt: "Why images matter more than ever in content creation. How to choose visuals that enhance your narrative.",
      date: "January 8, 2024",
      readTime: "4 min read",
      category: "Content",
      featured: false
    },
    {
      id: 11,
      title: "Building a Sustainable Writing Routine",
      excerpt: "Creating consistency without burning out. My daily habits that keep the creative flow alive while maintaining work-life balance.",
      date: "December 30, 2023",
      readTime: "7 min read",
      category: "Lifestyle",
      featured: false
    },
    {
      id: 12,
      title: "The Future of Personal Branding",
      excerpt: "How authenticity is becoming the new currency in the creator economy. What this means for writers and content creators.",
      date: "December 22, 2023",
      readTime: "5 min read",
      category: "Content",
      featured: false
    },
    {
      id: 13,
      title: "Overcoming Writer's Block: My Go-To Strategies",
      excerpt: "Practical techniques I use when the words won't come. From morning pages to creative constraints that spark ideas.",
      date: "December 15, 2023",
      readTime: "6 min read",
      category: "Writing",
      featured: false
    },
    {
      id: 14,
      title: "The Magic of Micro-Moments",
      excerpt: "How small, everyday experiences can become powerful stories. Finding extraordinary narratives in ordinary life.",
      date: "December 8, 2023",
      readTime: "4 min read",
      category: "Inspiration",
      featured: false
    },
    {
      id: 15,
      title: "Lessons from My First Year as a Full-Time Writer",
      excerpt: "The ups, downs, and everything in between. What I wish I'd known before making the leap into independent writing.",
      date: "December 1, 2023",
      readTime: "8 min read",
      category: "Personal",
      featured: true
    }
  ];

  const categories = ["All", "Writing", "Lifestyle", "Content", "Inspiration", "Personal"];

  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get visible posts based on current count
  const visiblePosts = filteredPosts.slice(0, visiblePostsCount);
  
  // Check if there are more posts to load
  const hasMorePosts = visiblePostsCount < filteredPosts.length;

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setVisiblePostsCount(6); // Reset to initial count when changing category
  };

  const loadMorePosts = () => {
    if (loading || !hasMorePosts) return;
    
    setLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisiblePostsCount(prev => prev + POSTS_PER_PAGE);
      setLoading(false);
    }, 800);
  };

  // Infinite scroll implementation
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMorePosts) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Load more when user is 100px from bottom
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMorePosts, visiblePostsCount]);

  return (
    <>
      <NavBar />
      <div className="blog-page">
        <div className="blog-page-container">
          {/* Header Section */}
          <header className="blog-page-header">
            <div className="header-content">
              <h1 className="blog-page-title">
                <span className="title-accent">Stories & Thoughts</span>
                <span className="title-main">From My Writing Journey</span>
              </h1>
              <p className="blog-page-subtitle">
                Where words meet wanderlust and creativity flows like good coffee ☕
              </p>
            </div>
            <div className="header-decoration">
              <div className="decoration-line"></div>
            </div>
          </header>

          {/* Category Filter */}
          <div className="category-filter">
            <div className="filter-container">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${category === activeCategory ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-posts-grid">
            {visiblePosts.map((post) => (
              <article
                key={post.id}
                className={`blog-post-card ${post.featured ? "featured" : ""}`}
              >
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    {post.featured && (
                      <span className="featured-badge">
                        <HiSparkles className="badge-icon" />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="post-date-time">
                    <span className="post-date">
                      <HiCalendar className="meta-icon" />
                      {post.date}
                    </span>
                    <span className="post-read-time">
                      <HiClock className="meta-icon" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="post-content">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>

                <div className="post-footer">
                  <button className="read-more-button">
                    <span>Read More</span>
                    <HiArrowRight className="arrow-icon" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Show message if no posts in category */}
          {filteredPosts.length === 0 && (
            <div className="no-posts-message">
              <p>No posts found in the "{activeCategory}" category.</p>
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="loading-indicator">
              <div className="loading-content">
                <BiCoffee className="loading-icon" />
                <span className="loading-text">Brewing fresh stories...</span>
              </div>
            </div>
          )}

          {/* End of posts message */}
          {!hasMorePosts && filteredPosts.length > 6 && (
            <div className="end-of-posts">
              <p className="end-message">
                That's all for now! Thanks for reading ✨
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;