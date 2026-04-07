import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const [heroRef, heroInView]   = useInView({ threshold: 0.15 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView]     = useInView({ threshold: 0.15 });

  return (
    <>
      <Navbar />

      <motion.main className="pt-24 bg-background selection:bg-primary-container selection:text-on-primary-container" initial="hidden" animate="visible" variants={pageVariants}>

        {/* ── Hero ── */}
        <section
          className="relative px-6 py-24 md:py-32 overflow-hidden text-center flex flex-col items-center border-b border-white/5"
          ref={heroRef}
        >
          {/* subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(46,91,255,0.1) 0%, transparent 70%)' }} />

          <div className="mb-10 max-w-4xl relative z-10 w-full text-center">
            <span className={`inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 font-label reveal delay-100 ${heroInView ? 'in-view' : ''}`}>
              <span className="w-2 h-2 rounded-full bg-tertiary mr-2"></span>
              Our Capabilities
            </span>
            <h1 className={`font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter max-w-3xl leading-[1.1] mx-auto reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
              Precision Engineering. <br/>
              <span className="text-primary-container">Tailored Output.</span>
            </h1>
          </div>
        </section>

        {/* ── Service Cards ── */}
        <div className="px-6 md:px-12 lg:px-24 py-24 max-w-[1600px] mx-auto" ref={cardsRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">

            {/* Production Card */}
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`hover-lift bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 group/prod reveal delay-100 cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(46,91,255,0.15)] hover:border-primary/30 ${cardsInView ? 'in-view' : ''}`}>
              <div className="mb-12">
                <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-8 border border-primary-container/30 shadow-lg">
                  <span className="material-symbols-outlined text-primary-container text-3xl group-hover/prod:drop-shadow-[0_0_10px_rgba(46,91,255,0.8)] transition-all" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                </motion.div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4 text-on-surface">Production</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">High-fidelity interface engineering and robust transactional architectures for global scale.</p>
              </div>
              <div className="mt-auto space-y-4 relative z-10">
                <motion.div whileHover={{ y: -4, scale: 1.05 }} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-white/5 group-hover/prod:bg-surface-container-high transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(46,91,255,0.2)]">
                  <span className="material-symbols-outlined text-primary bg-primary/10 border border-primary/20 p-2 rounded-lg">hub</span>
                  <span className="font-bold text-sm tracking-tight text-on-surface">React Ecosystem</span>
                </motion.div>
                <motion.div whileHover={{ y: -4, scale: 1.05 }} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-white/5 group-hover/prod:bg-surface-container-high transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(46,91,255,0.2)]">
                  <span className="material-symbols-outlined text-primary bg-primary/10 border border-primary/20 p-2 rounded-lg">shopping_cart</span>
                  <span className="font-bold text-sm tracking-tight text-on-surface">E-Commerce Flow</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Scale Card */}
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`hover-lift cursor-pointer rounded-2xl p-8 md:p-10 flex flex-col h-full group/scale border border-white/5 transition-all duration-500 overflow-hidden relative reveal delay-200 shadow-xl hover:shadow-[0_0_25px_rgba(0,226,151,0.2)] hover:border-[#00e297]/30 ${cardsInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(160deg, #001f14 0%, #004d31 50%, #007d52 100%)' }}>
              <div className="relative z-10 mb-12">
                <motion.div whileHover={{ y: -5, scale: 1.1 }} className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl group-hover/scale:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </motion.div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4 text-white">Scale</h2>
                <p className="text-white/80 leading-relaxed text-lg">Expanding operational capacity through automated systems and educational excellence.</p>
              </div>
              <div className="mt-auto space-y-4 relative z-10">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 shadow-sm border border-white/10 group-hover/scale:bg-black/30 transition-colors backdrop-blur-sm hover:border-white/30">
                  <span className="material-symbols-outlined text-[#00e297] bg-white/10 p-2 rounded-lg">school</span>
                  <span className="font-bold text-sm tracking-tight text-white">Tech Literacy</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 shadow-sm border border-white/10 group-hover/scale:bg-black/30 transition-colors backdrop-blur-sm hover:border-white/30">
                  <span className="material-symbols-outlined text-[#00e297] bg-white/10 p-2 rounded-lg">settings</span>
                  <span className="font-bold text-sm tracking-tight text-white">System Automation</span>
                </motion.div>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-[80px]"></div>
            </motion.div>

            {/* Security Card */}
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`hover-lift cursor-pointer rounded-2xl p-8 md:p-10 flex flex-col h-full group/sec border border-white/5 transition-all duration-500 relative overflow-hidden reveal delay-300 shadow-xl hover:shadow-[0_0_25px_rgba(46,91,255,0.3)] hover:border-white/30 ${cardsInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(160deg, #100069 0%, #1a3299 50%, #2e5bff 100%)' }}>
              <div className="relative z-10 mb-12">
                <motion.div whileHover={{ rotate: -15, scale: 1.1 }} className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl group-hover/sec:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </motion.div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4 text-white">Security</h2>
                <p className="text-white/80 leading-relaxed text-lg">Hardening digital perimeters and ensuring total data integrity across complex networks.</p>
              </div>
              <div className="mt-auto space-y-4 relative z-10">
                <motion.div whileHover={{ x: -10 }} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 shadow-sm border border-white/10 group-hover/sec:bg-black/30 transition-colors backdrop-blur-sm justify-end hover:border-white/30">
                  <span className="font-bold text-sm tracking-tight text-white order-1">Encrypted Vaults</span>
                  <span className="material-symbols-outlined text-[#2e5bff] bg-white/10 p-2 rounded-lg order-2">lock</span>
                </motion.div>
                <motion.div whileHover={{ x: -10 }} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 shadow-sm border border-white/10 group-hover/sec:bg-black/30 transition-colors backdrop-blur-sm justify-end hover:border-white/30">
                  <span className="font-bold text-sm tracking-tight text-white order-1">Network Audit</span>
                  <span className="material-symbols-outlined text-[#2e5bff] bg-white/10 p-2 rounded-lg order-2">terminal</span>
                </motion.div>
              </div>
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-[80px]"></div>
            </motion.div>
          </div>

          {/* ── Bottom CTA Panel ── */}
          <section
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-surface-dim p-6 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden"
            ref={ctaRef}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className={`md:col-span-6 overflow-hidden h-[400px] md:h-[500px] rounded-3xl relative shadow-2xl border border-white/10 reveal-left ${ctaInView ? 'in-view' : ''}`}>
              <img
                alt="Clean minimalist server room"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-overlay hover:grayscale-0 transition-all duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfU0KLdcu1wRq7zXgIRoSfrId6qeVkG08h8QLS1mtvilYEYGGDZ08-Dy8_skr0gkRF4GHNmEzjHgOXrBCjQOdxjGU4lKfytRdhj3CFY0r3oMh_VB7s4YQvXUnvuLOjSUx9cXZ2FOC0EOHUSZdrDzNba2JNu9dgQvEMG-7sSqmKZrWJbZb0Um3nxevnhTJjG73L4TFvDHrCJt0Amc_Wi5er2gJvYuqUbgDgtMunZSBwDiJ-ny7YcsHEbWY6SN73I8_0lYhYKUNJdfw2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
            </div>

            <div className={`md:col-span-6 px-4 md:px-8 relative z-10 reveal-right delay-200 ${ctaInView ? 'in-view' : ''}`}>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
                Engineering a <span className="text-primary-container italic">Better</span> Standard.
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                We don't just build features; we craft digital legacies. Our approach treats every line of code as a stitch in a larger, bespoke tapestry of high-performance software. By focusing on the intersection of editorial aesthetics and technical rigor, we provide a tier of service previously reserved for elite global agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="thumb-btn hover-lift bg-surface-container-high border border-outline-variant/20 dark:border-white/5 text-on-surface px-8 rounded-xl font-bold hover:bg-surface-container-highest transition-all font-headline text-center">
                  View Portfolio
                </Link>
                <Link to="/about" className="thumb-btn hover-lift text-primary font-bold px-6 flex items-center justify-center gap-2 hover:bg-primary/5 rounded-xl transition-all font-headline bg-primary/5 border border-primary/20">
                  Our Story
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
