import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 bg-background relative overflow-hidden">

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[150px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2e5bff 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
          style={{ backgroundColor: '#00e297' }}
        />

        <motion.div
          className="text-center max-w-2xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 404 number */}
          <motion.p
            className="font-headline text-[10rem] md:text-[14rem] font-extrabold tracking-tighter leading-none text-outline/10 select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            404
          </motion.p>

          <motion.div
            className="mt-[-2rem] relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 font-label">
              <span className="w-2 h-2 rounded-full bg-tertiary" />
              Page Not Found
            </span>

            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
              This page{' '}
              <span className="text-primary-container italic">doesn't exist.</span>
            </h1>

            <p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-lg mx-auto">
              You've navigated to a URL that doesn't exist in our ecosystem. Let's get you back on track.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold font-headline text-white btn-primary-gradient hover:scale-[1.02] hover:shadow-2xl transition-all"
              >
                <span className="material-symbols-outlined text-lg">home</span>
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold font-headline bg-surface-container-high text-on-surface border border-white/5 hover:bg-surface-container-highest transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
