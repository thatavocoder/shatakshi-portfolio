import { Link } from 'react-router-dom';
import './BlogPreview.css';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Magic in Monday Mornings",
      excerpt: "How I learned to transform the most dreaded day of the week into my favorite canvas for creativity and fresh starts.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Life Stories"
    },
    {
      id: 2,
      title: "The Art of Slow Living",
      excerpt: "In a world that never stops rushing, I discovered the profound beauty of intentional pauses and mindful moments.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Personal Growth"
    },
    {
      id: 3,
      title: "Coffee Shop Chronicles",
      excerpt: "Stories overheard between sips and sketches - a collection of human moments that remind us we're all connected.",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "Everyday Magic"
    },
    {
      id: 4,
      title: "Words That Changed My World",
      excerpt: "A deep dive into the books that shaped my perspective and the quotes that continue to guide my writing journey.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Book Reviews"
    }
  ];

  return (
    <section className="blog-preview" id="blog-preview">
      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-header">
          <h2 className="blog-title">
            <span className="blog-subtitle">Latest from the blog</span>
            <span className="blog-main-title">Stories Worth Reading</span>
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-time">{post.readTime}</span>
                  <button className="read-more-btn">
                    Read More
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="blog-cta">
          <Link to="/blog" className="view-all-btn">
            <span>View All Posts</span>
            <span className="btn-icon">📚</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 