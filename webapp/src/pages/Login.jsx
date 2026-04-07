import { Link } from 'react-router-dom';
import { Shield, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Portal coming soon – no-op for now
  };

  return (
    <>
      <Navbar />
      <motion.main className="min-h-screen bg-background flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-20 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2e5bff 0%, transparent 70%)' }}
        />

        <div className="w-full max-w-md animate-fade-in-up">
          {/* Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-10 border border-outline-variant/20 dark:border-white/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Top glow blob */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                <Shield size={28} className="text-primary" />
              </div>

              {/* Headline */}
              <p className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">Client Portal</p>
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-[#0A1628] dark:text-white mb-2">
                Welcome Back.
              </h1>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                Sign in to access your project dashboard, reports, and deployment status.
              </p>

              {/* Coming Soon Banner */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8 flex items-start gap-3">
                <Lock size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-primary font-bold text-sm">Client Portal — Early Access</p>
                  <p className="text-on-surface-variant text-xs mt-1 leading-relaxed">
                    Our secure client dashboard is launching soon. We'll notify you at your project email when access is granted.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-bold text-[#0A1628] dark:text-white mb-2 font-headline">
                    Email Address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/20 dark:border-white/10 rounded-xl px-5 py-4 text-[#0A1628] dark:text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-sm font-bold text-[#0A1628] dark:text-white mb-2 font-headline">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full bg-surface-container border border-outline-variant/20 dark:border-white/10 rounded-xl px-5 py-4 pr-14 text-[#0A1628] dark:text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                      tabIndex={-1}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full py-4 rounded-xl font-bold font-headline text-white btn-primary-gradient flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                  title="Portal launching soon"
                >
                  Access Portal
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="text-center text-xs text-on-surface-variant mt-6">
                Don't have an account?{' '}
                <Link to="/contact" className="text-primary font-bold hover:underline">
                  Start a project
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom info */}
          <p className="text-center text-xs text-on-surface-variant mt-6 flex items-center justify-center gap-1.5">
            <Lock size={12} />
            Protected by Webit's End-to-End Secure Infrastructure
          </p>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
