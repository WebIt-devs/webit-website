import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary font-bold border-b-2 border-primary transition-colors outline-none"
      : "text-on-surface-variant font-medium hover:text-primary transition-colors outline-none";
  };

  const mobileLinkClass = (path) => {
    return location.pathname === path
      ? "block text-3xl font-headline font-extrabold text-primary py-2"
      : "block text-3xl font-headline font-extrabold text-[#0A1628] dark:text-white hover:text-primary py-2 transition-colors";
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-xl z-50 glass-nav flex justify-between items-center px-6 md:px-8 py-4 shadow-xl">
        <Link to="/" className="flex items-center gap-3 outline-none group text-[#0A1628] dark:text-white z-[60]">
          <svg width="32" height="32" viewBox="0 0 92 92" className="transition-transform group-hover:scale-105">
            <circle cx="46" cy="46" r="38" fill="none" stroke="#3B82F6" strokeWidth="2.5" opacity="0.35"/>
            <polyline points="14,27 30,68 46,40 62,68 78,27" fill="none" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="46" cy="40" r="5.5" fill="#3B82F6"/>
          </svg>
          <span style={{ fontFamily: "'DM Serif Display', serif" }} className="text-[28px] mt-1 leading-none">
            webit<span className="text-[#3B82F6]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/solutions')} to="/solutions">Solutions</Link>
          <Link className={getLinkClass('/about')} to="/about">About</Link>
          <Link className={getLinkClass('/services')} to="/services">Services</Link>
          <Link className={getLinkClass('/contact')} to="/contact">Contact</Link>
        </div>

        {/* Global Controls & Mobile Toggles */}
        <div className="flex items-center space-x-2 md:space-x-4 z-[60]">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors outline-none flex items-center justify-center cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <span className="material-symbols-outlined text-[20px]">light_mode</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">dark_mode</span>
            )}
          </button>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-on-surface-variant font-medium hover:text-primary transition-colors px-4 py-2 outline-none">Login</Link>
            <Link to="/contact" className="btn-primary-gradient text-on-primary px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-95 duration-200 ease-in-out outline-none flex items-center gap-2">Get Started <ArrowRight size={14} /></Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-surface/95 dark:bg-[#050A12]/95 backdrop-blur-xl transition-all duration-300 flex flex-col pt-32 px-8 pb-12 overflow-y-auto lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 flex-1">
          <Link className={mobileLinkClass('/')} to="/">Home</Link>
          <Link className={mobileLinkClass('/solutions')} to="/solutions">Solutions</Link>
          <Link className={mobileLinkClass('/about')} to="/about">About Us</Link>
          <Link className={mobileLinkClass('/services')} to="/services">Services</Link>
          <Link className={mobileLinkClass('/contact')} to="/contact">Secure Contact</Link>
        </div>

        <div className="mt-12 flex flex-col space-y-4">
          <Link to="/login" className="w-full text-center py-4 rounded-xl border border-outline-variant/30 text-on-surface-variant font-bold uppercase tracking-wider text-sm transition-colors hover:bg-surface-container">
            Client Login
          </Link>
          <Link to="/contact" className="w-full text-center py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-white btn-primary-gradient transition-all active:scale-95">
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
