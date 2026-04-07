import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return;

    setStatus('loading');
    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email: trimmed.toLowerCase(),
        subscribedAt: serverTimestamp(),
        source: 'footer',
      });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3500);
    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-20 px-6 lg:px-12 mt-32 rounded-t-[48px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <svg width="40" height="40" viewBox="0 0 92 92" className="shrink-0 group-hover:scale-105 transition-transform">
              <circle cx="46" cy="46" r="38" fill="none" stroke="currentColor" className="opacity-40" strokeWidth="2.5"/>
              <polyline points="14,27  30,68  46,40  62,68  78,27"
                fill="none" stroke="currentColor" strokeWidth="7.5"
                strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="46" cy="40" r="5.5" fill="currentColor" className="text-primary"/>
            </svg>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-3xl tracking-tight mt-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
                webit<span className="text-primary">.</span>
              </span>
            </div>
          </Link>
          <p className="text-sm opacity-70 max-w-xs leading-relaxed mt-2 font-manrope">
            Precision engineering and tailored output for hyper-scale solutions. We build the future of the web.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="p-2 rounded-full border border-inverse-on-surface/10 hover:bg-inverse-on-surface/5 transition-colors opacity-70 hover:opacity-100" aria-label="X (formerly Twitter)">
              <XIcon size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-inverse-on-surface/10 hover:bg-inverse-on-surface/5 transition-colors opacity-70 hover:opacity-100" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-inverse-on-surface/10 hover:bg-inverse-on-surface/5 transition-colors opacity-70 hover:opacity-100" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-inverse-on-surface/10 hover:bg-inverse-on-surface/5 transition-colors opacity-70 hover:opacity-100" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links Group 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-semibold mb-2">Company</h4>
          <Link to="/about" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">About Us</Link>
          <Link to="/solutions" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Solutions</Link>
          <Link to="/careers" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Careers</Link>
          <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Contact</Link>
        </div>

        {/* Links Group 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-semibold mb-2">Legal</h4>
          <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Privacy Policy</Link>
          <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Terms of Service</Link>
          <Link to="/cookies" className="text-sm opacity-70 hover:opacity-100 font-manrope transition-opacity w-fit">Cookie Policy</Link>
        </div>

        {/* Newsletter — Firestore wired */}
        <div className="flex flex-col gap-6">
          <h4 className="font-headline font-semibold">Ready to scale?</h4>
          <p className="text-sm opacity-70 font-manrope">Join our newsletter for insights on engineering and growth.</p>
          <form className="flex gap-2 relative" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="bg-transparent border border-inverse-on-surface/20 rounded-full px-4 py-2.5 text-sm placeholder:opacity-50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all flex-1 text-inherit disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center shrink-0 w-[44px] h-[44px] ${
                status === 'success'
                  ? 'bg-[#00e297] text-black'
                  : status === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-primary hover:bg-primary-container text-white disabled:opacity-50'
              }`}
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : status === 'success' ? (
                <Check size={20} />
              ) : (
                <ArrowUpRight size={20} />
              )}
            </button>
          </form>
          {status === 'error' && (
            <p className="text-red-400 text-xs -mt-2">Failed to subscribe. Please try again.</p>
          )}
          {status === 'success' && (
            <p className="text-[#00e297] text-xs -mt-2 font-semibold">✓ You're subscribed!</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-inverse-on-surface/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-70 font-manrope">
          © {new Date().getFullYear()} Webit Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs opacity-70 font-label tracking-widest uppercase">
          <span>Designed with precision.</span>
          <span className="w-1 h-1 rounded-full bg-primary inline-block" />
          <span>Built for scale.</span>
        </div>
      </div>
    </footer>
  );
}
