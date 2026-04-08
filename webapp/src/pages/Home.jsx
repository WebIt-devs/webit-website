import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';
import HeroDashboard from '../components/HeroDashboard';
import WaveBackground from '../components/WaveBackground';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};


export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [stackRef, stackInView] = useInView({ threshold: 0.1 });
  const [cyberRef, cyberInView] = useInView({ threshold: 0.1 });
  const [ecosystemRef, ecosystemInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <Navbar />

      <motion.main
        className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >

        {/* ── Hero Section ── */}
        <section className="flex flex-col items-center mb-32 relative overflow-hidden rounded-[40px] pb-20" ref={heroRef}>
          {/* Animated wave background — sits behind all hero content */}
          <WaveBackground />
          <div className={`relative z-10 text-center max-w-4xl mx-auto mb-20 reveal ${heroInView ? 'in-view' : ''}`}>
            
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e297]/30 bg-[#00e297]/10 backdrop-blur-md mb-8 font-label text-[#00e297] font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase shadow-[0_0_20px_rgba(0,226,151,0.15)] cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-[#00e297] animate-pulse shadow-[0_0_10px_rgba(0,226,151,0.8)]"></span>
              Engineered for Scale
            </motion.div>

            <h1 className="font-headline text-[50px] sm:text-[60px] md:text-[85px] font-black tracking-tighter mb-8 leading-[1.05] drop-shadow-2xl text-on-surface">
              Code to <span className="bg-gradient-to-br from-primary via-[#4f75ff] to-[#00e297] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(46,91,255,0.4)]">Product</span>
              <br className="hidden md:block" /> with surgical precision.
            </h1>

            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              We architect elite SaaS solutions for visionaries who demand world-class performance, editorial design, and bulletproof security.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
              <Link to="/contact" className="thumb-btn hover-lift btn-primary-gradient border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-[0_15px_30px_-10px_rgba(46,91,255,0.4)]">
                Launch Your Idea
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
              </Link>
              <Link to="/solutions" className="thumb-btn hover-lift bg-surface-container-low border border-white/10 text-on-surface px-8 py-3.5 rounded-xl font-bold text-base tracking-wide hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 shadow-lg hover:border-white/20">
                View Portfolio
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </Link>
            </div>
          </div>

          {/* Hero Glassmorphism Dashboard */}
          <div className={`relative z-10 w-full reveal-scale delay-300 ${heroInView ? 'in-view' : ''}`}>
            <HeroDashboard />
          </div>
        </section>

        {/* ── Tech Stack Bento Grid ── */}
        <section className="mb-32" ref={stackRef}>
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal ${stackInView ? 'in-view' : ''}`}>
            <div className="max-w-xl">
              <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">The Stack</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Built on the bedrock of modern tech.</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm mb-2">
              We select technologies that offer the best balance of speed, developer experience, and long-term scalability.
            </p>
          </div>

          {/* --- MOBILE CAROUSEL --- */}
          <div className="md:hidden relative mb-12 -mx-6">
            {/* Swipe fade gradient */}
            <div className="absolute right-0 top-0 h-[340px] w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 hide-scrollbar scroll-smooth [-webkit-overflow-scrolling:touch]">
              {/* React Card */}
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="snap-center shrink-0 w-[82%] min-h-[340px] rounded-3xl p-6 bg-surface-container-low border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-2xl">javascript</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider mb-4 font-bold">Frontend</span>
                  <h3 className="font-headline text-2xl font-extrabold mb-3 text-on-surface">React & Next.js</h3>
                  <p className="text-sm leading-6 text-on-surface-variant">Optimized for SSR, ultra-fast performance, and seamless content delivery.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 rounded-lg bg-surface text-[10px] font-mono">Tailwind</span>
                  <span className="px-3 py-1 rounded-lg bg-surface text-[10px] font-mono">TypeScript</span>
                  <span className="px-3 py-1 rounded-lg bg-surface text-[10px] font-mono">Vercel</span>
                </div>
              </motion.div>

              {/* Product Card */}
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="snap-center shrink-0 w-[82%] min-h-[340px] rounded-3xl p-6 bg-surface-container-highest border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-container/30 flex items-center justify-center mb-6 border border-tertiary/20">
                    <span className="material-symbols-outlined text-tertiary text-2xl">handyman</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider mb-4 font-bold text-tertiary">Product</span>
                  <h3 className="font-headline text-2xl font-extrabold mb-3 text-on-surface">Product Strategy</h3>
                  <p className="text-sm leading-6 text-on-surface-variant">We align code with UX/UI to build products that perfectly serve the user.</p>
                </div>
                <div className="w-full h-24 mt-6">
                  <img className="rounded-xl shadow-lg w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" alt="designer drafting wireframes" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600" />
                </div>
              </motion.div>

              {/* Flutter Card */}
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="snap-center shrink-0 w-[82%] min-h-[340px] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
                style={{ background: 'linear-gradient(160deg, #1a0f6e 0%, #2a14b4 50%, #4338ca 100%)' }}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <span className="material-symbols-outlined text-white text-2xl">phone_iphone</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-white text-[10px] uppercase tracking-wider mb-4 backdrop-blur-sm font-bold">Mobile</span>
                  <h3 className="font-headline text-2xl font-extrabold mb-3 text-white">Native Flutter</h3>
                  <p className="text-sm leading-6 text-white/75">Single codebase, beautiful cross-platform performance across iOS and Android.</p>
                </div>
                <div className="pt-6 relative z-10 mt-auto">
                  <span className="material-symbols-outlined text-4xl text-white/20">terminal</span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              </motion.div>

              {/* Go Card */}
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="snap-center shrink-0 w-[82%] min-h-[340px] rounded-3xl p-6 flex flex-col justify-between border border-outline-variant/10"
                style={{ background: 'linear-gradient(160deg, #1a2614 0%, #2a3a1e 50%, #3d4b30 100%)' }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                    <span className="material-symbols-outlined text-[#bbcca9] text-2xl">dns</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[#bbcca9] text-[10px] uppercase tracking-wider mb-4 backdrop-blur-sm font-bold">Backend</span>
                  <h3 className="font-headline text-2xl font-extrabold mb-3 text-[#d7e8c4]">Go Backend</h3>
                  <p className="text-sm leading-6 text-[#a1b091]">Concurrency by design. Our Go backends handle millions of requests with minimal overhead.</p>
                </div>
                <div className="flex mt-6 gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 text-[10px] text-[#bbcca9] font-mono"><span className="material-symbols-outlined text-[14px]">memory</span> Microservices</span>
                </div>
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mb-1"></span>
              <span className="w-2 h-2 rounded-full bg-white/20 mb-1"></span>
              <span className="w-2 h-2 rounded-full bg-white/20 mb-1"></span>
              <span className="w-2 h-2 rounded-full bg-white/20 mb-1"></span>
            </div>
          </div>

          {/* --- DESKTOP BENTO GRID --- */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {/* React Card */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`col-span-2 bg-surface-container-low rounded-xl p-10 flex flex-col hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 reveal delay-100 cursor-pointer ${stackInView ? 'in-view' : ''}`}
            >
              <div className="flex items-start justify-between mb-12">
                <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">javascript</span>
                </div>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold shadow-sm text-on-surface whitespace-nowrap">Frontend</span>
              </div>
              <h3 className="font-headline text-3xl font-extrabold mb-4">React & Next.js Elite</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 flex-1">
                Optimized for SSR, ultra-fast loading states, and dynamic content delivery that feels instantaneous.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="px-3 py-1 bg-surface rounded-md text-xs font-mono border border-white/5">TailwindCSS</span>
                <span className="px-3 py-1 bg-surface rounded-md text-xs font-mono border border-white/5">TypeScript</span>
                <span className="px-3 py-1 bg-surface rounded-md text-xs font-mono border border-white/5">Vercel</span>
              </div>
            </motion.div>

            {/* Flutter Card */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-xl p-10 flex flex-col justify-between relative overflow-hidden reveal delay-200 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 ${stackInView ? 'in-view' : ''}`} 
              style={{ background: 'linear-gradient(160deg, #1a0f6e 0%, #2a14b4 50%, #4338ca 100%)' }}
            >
              <div className="flex items-start justify-between relative z-10 mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="material-symbols-outlined text-white text-3xl">phone_iphone</span>
                  </div>
                  <span className="px-4 py-2 bg-black/20 rounded-full text-xs font-bold shadow-sm text-white whitespace-nowrap backdrop-blur-sm">Mobile</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-headline text-3xl font-extrabold mb-4 text-white mt-auto">Native Flutter</h3>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  Single codebase, beautiful cross-platform performance across iOS and Android.
                </p>
              </div>
              <div className="pt-8 relative z-10">
                <span className="material-symbols-outlined text-5xl text-white/20">terminal</span>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Go Card */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-xl p-10 flex flex-col transition-all duration-300 border border-outline-variant/10 reveal delay-300 cursor-pointer hover:shadow-2xl hover:shadow-[#3d4b30]/30 hover:border-[#bbcca9]/30 ${stackInView ? 'in-view' : ''}`} 
              style={{ background: 'linear-gradient(160deg, #1a2614 0%, #2a3a1e 50%, #3d4b30 100%)' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                  <span className="material-symbols-outlined text-[#bbcca9] text-3xl">dns</span>
                </div>
                <span className="px-4 py-2 bg-black/20 rounded-full text-xs font-bold shadow-sm text-[#bbcca9] whitespace-nowrap backdrop-blur-sm">Backend</span>
              </div>
              <h3 className="font-headline text-3xl font-extrabold mb-4 text-[#d7e8c4] mt-auto">Go Backend</h3>
              <p className="text-[#a1b091] text-lg leading-relaxed mb-8 flex-1">
                Concurrency by design. Our Go backends handle millions of requests with minimal overhead.
              </p>
              <div className="flex gap-2 mt-auto">
                <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-[#bbcca9] border border-white/5 gap-1 flex items-center"><span className="material-symbols-outlined text-[14px]">memory</span> Microservices</span>
              </div>
            </motion.div>

            {/* Product Strategy Card */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`col-span-2 bg-surface-container-highest rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center reveal delay-400 cursor-pointer hover:shadow-2xl hover:bg-surface-container border border-transparent hover:border-outline/20 transition-all duration-300 ${stackInView ? 'in-view' : ''}`}
            >
              <div className="flex-1 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-tertiary-container/30 rounded-2xl flex items-center justify-center border border-tertiary/20">
                    <span className="material-symbols-outlined text-tertiary text-3xl">handyman</span>
                  </div>
                  <span className="px-4 py-2 bg-surface-container-low rounded-full text-xs font-bold shadow-sm text-tertiary whitespace-nowrap block">Product</span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold mb-4 text-on-surface mt-auto">Product Engineering</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-auto">
                  We don't just write code; we build products. Our engineers are trained in UX/UI and product strategy to ensure every line of code serves the user.
                </p>
              </div>
              <div className="w-full md:w-1/3 h-full">
                 <img className="rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-black aspect-[4/3] object-cover w-full h-full opacity-80 mix-blend-luminosity" alt="designer drafting wireframes" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Cybersecurity Section ── */}
        <section className="mb-32 py-24 bg-surface-container-low rounded-[32px] px-12 border border-outline-variant/5" ref={cyberRef}>
          <div className={`text-center max-w-2xl mx-auto mb-20 reveal ${cyberInView ? 'in-view' : ''}`}>
            <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">Security First</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6 text-on-surface">Cybersecurity as a Standard.</h2>
            <p className="text-on-surface-variant">
              Premium production requires ironclad defense. We integrate enterprise-grade security protocols into every layer of your application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: 'shield_lock', title: 'Pentesting', desc: 'Rigorous vulnerability assessments and simulated attacks to harden your infrastructure.' },
              { icon: 'enhanced_encryption', title: 'Zero-Trust', desc: 'Implementing granular access controls and identity verification at every touchpoint.' },
              { icon: 'api', title: 'Secure APIs', desc: 'OAuth2, JWT, and mTLS integration for safe data exchange between microservices.' },
              { icon: 'history_edu', title: 'Compliance', desc: 'GDPR, HIPAA, and SOC2 readiness auditing to ensure legal peace of mind.' },
            ].map((item, i) => (
              <div key={i} className={`space-y-4 group reveal delay-${(i + 1) * 100} ${cyberInView ? 'in-view' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-lg text-on-surface">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Integrated Ecosystems ── */}
        <section className="mb-32 py-24 md:py-32 bg-surface-container-low rounded-[40px] px-8 md:px-16 lg:px-24" ref={ecosystemRef}>
          <div className={`text-center mb-20 md:mb-32 reveal ${ecosystemInView ? 'in-view' : ''}`}>
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Integrated <br />
              <span className="text-primary text-[1.1em] tracking-tighter">Ecosystems.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
            {[
              { icon: 'monitoring', title: 'Cloud Infrastructure', desc: 'AWS and Azure orchestration that prioritizes zero-latency and maximum uptime for global audiences.', delay: 'delay-100', dir: 'reveal-left' },
              { icon: 'health_and_safety', title: 'Privacy by Design', desc: 'Adhering to strict GDPR and CCPA standards while maintaining a frictionless user experience.', delay: 'delay-300', dir: 'reveal' },
              { icon: 'hub', title: 'Custom Integrations', desc: 'Connecting your bespoke platform with the tools you already love through robust, documented APIs.', delay: 'delay-500', dir: 'reveal-right' },
            ].map((item, i) => (
              <div key={i} className={`space-y-6 ${item.dir} ${item.delay} ${ecosystemInView ? 'in-view' : ''}`}>
                <span className="material-symbols-outlined text-primary text-5xl">{item.icon}</span>
                <h4 className="font-headline font-bold text-2xl text-on-surface tracking-tight">{item.title}</h4>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed opacity-90 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mb-32 relative overflow-hidden rounded-[32px] p-16 text-center" style={{ background: 'linear-gradient(160deg, #1a0f6e 0%, #0f0a3e 40%, #0a0a0f 100%)' }} ref={ctaRef}>
          <div className={`relative z-10 reveal-scale ${ctaInView ? 'in-view' : ''}`}>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to evolve?</h2>
            <p className="text-white/60 text-xl max-w-xl mx-auto mb-10">
              Join the ranks of high-performance agencies and tech startups building with Webit.
            </p>
            <div className="flex justify-center gap-6">
              <Link to="/contact" className="inline-block px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all text-white border border-white/10" style={{ background: 'linear-gradient(135deg, #2a14b4, #4338ca)' }}>
                Book a Strategy Session
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float" style={{ backgroundColor: '#c3c0ff' }}></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-slow" style={{ backgroundColor: '#bbcca9' }}></div>
        </section>

      </motion.main>

      <Footer />
    </>
  );
}
