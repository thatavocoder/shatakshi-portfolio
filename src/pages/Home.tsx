import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="content-sections">
        <About />
        <BlogPreview />
        <Contact />
      </div>
    </>
  );
};

export default Home; 