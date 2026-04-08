import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Solutions from './pages/Solutions';
import Success from './pages/Success';
import Login from './pages/Login';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

/**
 * App — fixed version
 *
 * Changes from original:
 * 1. SmoothScroll (Lenis) is disabled for users who prefer reduced motion.
 *    Lenis overrides native scroll behaviour; for vestibular/motion-sensitive
 *    users this can cause nausea. When prefers-reduced-motion: reduce is set,
 *    we skip the SmoothScroll wrapper entirely and use native browser scroll.
 *
 * Note: every page <main> element should carry id="main-content" to support
 * the skip-to-content link added in Navbar. The fixed Contact.jsx already
 * does this — apply the same to Home, About, Services, Solutions, Careers, etc.
 */

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const content = (
    <>
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );

  // Skip Lenis smooth scroll for users who have requested reduced motion
  if (prefersReducedMotion) {
    return content;
  }

  return <SmoothScroll>{content}</SmoothScroll>;
}

export default App;