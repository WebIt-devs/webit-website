import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView as framerUseInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

// Helper component for animated counting
function AnimatedCounter({ from, to, duration = 2, decimals = 0 }) {
  const nodeRef = useRef(null);
  const isInView = framerUseInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          nodeRef.current.textContent = value.toFixed(decimals);
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, decimals]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}</span>;
}

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const techStack = [
  "React", "Node.js", "TypeScript", "Go", "Framer Motion", "Kubernetes", "PostgreSQL",
  "TailwindCSS", "Firebase", "Redis", "OWASP Security", "Stripe", "GraphQL", "WebRTC"
];

const tabsData = [
  {
    id: 'ecommerce',
    title: 'Enterprise Portfolios & E-Commerce',
    icon: 'storefront',
    desc: 'High-volume retail architectures and bespoke corporate portfolios built for rapid conversion. We construct digital storefronts capable of sustaining intense traffic spikes without sacrificing sub-100ms load times.',
    tags: ['Performance API', 'Payment Gateways', 'Edge Caching'],
    gradient: 'linear-gradient(160deg, #001f14 0%, #004d31 50%, #007d52 100%)',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'saas',
    title: 'Futuristic SaaS Engineering',
    icon: 'lightbulb',
    desc: 'Bespoke dashboards and predictive workflow automation tools. We transform legacy workflows into modern, cloud-native Software-as-a-Service platforms designed for intuitive user adoption.',
    tags: ['React', 'Real-time Data', 'Microservices'],
    gradient: 'linear-gradient(160deg, #100069 0%, #2e5bff 50%, #124af0 100%)',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'security',
    title: 'Zero-Trust Networks',
    icon: 'shield_lock',
    desc: 'Military-grade infrastructure hardening. Every module we deploy is tested against advanced injection and DDoS vectors to ensure total data integrity across public and private channels.',
    tags: ['Pen Testing', 'RBAC', 'Encryption Core'],
    gradient: 'linear-gradient(160deg, #1f0101 0%, #7a0000 50%, #b30000 100%)',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Solutions() {
  const [heroRef, heroInView]         = useInView({ threshold: 0.15 });
  const [metricsRef, metricsInView]   = useInView({ threshold: 0.1 });
  const [tabsRef, tabsInView]         = useInView({ threshold: 0.1 });
  const [bentoRef, bentoInView]       = useInView({ threshold: 0.08 });
  const [secRef, secInView]           = useInView({ threshold: 0.1 });

  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <>
      <Navbar />
      <motion.main className="pt-24 bg-background selection:bg-primary-container selection:text-on-primary-container overflow-hidden" initial="hidden" animate="visible" variants={pageVariants}>

        {/* ── Hero ── */}
        <section className="relative px-6 py-24 md:py-32 text-center flex flex-col items-center" ref={heroRef}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(46,91,255,0.1) 0%, transparent 70%)' }} />

          <header className="mb-10 max-w-4xl relative z-10 w-full">
            <span className={`inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 font-label reveal delay-100 ${heroInView ? 'in-view' : ''}`}>
              <span className="w-2 h-2 rounded-full bg-tertiary mr-2"></span>
              Engineering Growth
            </span>
            <h1 className={`font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1] reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
              End-to-End <span className="text-primary-container">Product Lifecycle</span> Management
            </h1>
            <p className={`text-xl text-on-surface-variant font-medium max-w-2xl mx-auto leading-relaxed reveal delay-300 ${heroInView ? 'in-view' : ''}`}>
              We bridge the gap between abstract concept and global scale. Our modular framework ensures your product evolves as fast as your market does.
            </p>
          </header>
        </section>

        {/* ── Command Center: Animated Metrics ── */}
        <section className="px-6 md:px-12 lg:px-24 pb-20 max-w-[1600px] mx-auto border-b border-white/5" ref={metricsRef}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 reveal delay-400 ${metricsInView ? 'in-view' : ''}`}>
            {/* Metric 1 */}
            <div className="bg-surface-container border border-white/5 rounded-2xl p-6 text-center hover-lift">
              <span className="material-symbols-outlined text-primary mb-2">speed</span>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-1">
                {'<'}<AnimatedCounter from={500} to={100} duration={2.5} />ms
              </h3>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Load Latency</p>
            </div>
            {/* Metric 2 */}
            <div className="bg-surface-container border border-white/5 rounded-2xl p-6 text-center hover-lift">
              <span className="material-symbols-outlined text-tertiary mb-2">task_alt</span>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-1">
                <AnimatedCounter from={90} to={99.99} duration={2.5} decimals={2} />%
              </h3>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Guaranteed Uptime</p>
            </div>
            {/* Metric 3 */}
            <div className="bg-surface-container border border-white/5 rounded-2xl p-6 text-center hover-lift">
              <span className="material-symbols-outlined text-[#f0b429] mb-2">code_blocks</span>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-1">
                <AnimatedCounter from={0} to={50} duration={2} />+
              </h3>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Microservices</p>
            </div>
            {/* Metric 4 */}
            <div className="bg-surface-container border border-white/5 rounded-2xl p-6 text-center hover-lift">
              <span className="material-symbols-outlined text-error mb-2">gpp_bad</span>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-1">
                <AnimatedCounter from={100} to={0} duration={2} />
              </h3>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Active Breaches</p>
            </div>
          </div>
        </section>

        {/* ── Infinite Tech Marquee ── */}
        <section className="py-8 bg-surface-dim overflow-hidden border-b border-white/5 flex items-center relative">
          <div className="absolute left-0 w-16 md:w-32 h-full bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 w-16 md:w-32 h-full bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee hover:animation-play-state-paused">
            <div className="flex flex-shrink-0 items-center px-4">
              {techStack.map((tech, idx) => (
                <span key={`tech1-${idx}`} className="font-headline font-black text-2xl text-on-surface-variant/40 uppercase tracking-[0.2em] whitespace-nowrap mx-8">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-shrink-0 items-center px-4">
              {techStack.map((tech, idx) => (
                <span key={`tech2-${idx}`} className="font-headline font-black text-2xl text-on-surface-variant/40 uppercase tracking-[0.2em] whitespace-nowrap mx-8">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="px-6 md:px-12 lg:px-24 py-24 max-w-[1600px] mx-auto">
          
          {/* ── Interactive Glassmorphic Tabs ── */}
          <div className="mb-32" ref={tabsRef}>
            <div className={`mb-12 text-center max-w-3xl mx-auto reveal ${tabsInView ? 'in-view' : ''}`}>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 font-label">
                <span className="w-2 h-2 rounded-full bg-tertiary mr-2 animate-pulse"></span>
                Universal Capability
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
                Any Industry. Any Scale. <br/>
                <span className="text-primary-container italic">Secured by Design.</span>
              </h2>
            </div>

            {/* Tab Selector */}
            <div className={`flex flex-col md:flex-row justify-center gap-4 mb-8 reveal delay-200 ${tabsInView ? 'in-view' : ''}`}>
              {tabsData.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    activeTab.id === tab.id 
                    ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(46,91,255,0.4)] scale-105' 
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant border border-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  {tab.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className={`relative h-[550px] md:h-[450px] lg:h-[400px] rounded-[32px] overflow-hidden border border-white/10 reveal delay-300 ${tabsInView ? 'in-view' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full flex flex-col lg:flex-row"
                  style={{ background: activeTab.gradient }}
                >
                  {/* Content left */}
                  <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-black/20 backdrop-blur-md">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                      <span className="material-symbols-outlined text-white text-3xl">{activeTab.icon}</span>
                    </div>
                    <h3 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{activeTab.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">{activeTab.desc}</p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {activeTab.tags.map(t => (
                        <span key={t} className="px-4 py-2 text-xs font-bold font-headline bg-white/10 border border-white/20 text-white rounded-lg backdrop-blur-sm shadow-xl">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Image right */}
                  <div className="hidden lg:block lg:w-1/2 relative">
                    <img 
                      src={activeTab.img} 
                      alt={activeTab.title} 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 dark:via-white/5 to-transparent mb-24"></div>

          {/* ── Production Bento ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16" ref={bentoRef}>
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`cursor-pointer hover:shadow-2xl hover:border-primary/20 lg:col-span-8 bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-10 relative overflow-hidden group reveal-left transition-all ${bentoInView ? 'in-view' : ''}`}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container border border-primary-container/30">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <span className="font-headline font-bold text-lg text-primary-container">Production Tier</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6">Full-Stack SaaS Production</h2>
                <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
                  Bespoke 'Concept to Launch' services engineered for velocity. We leverage high-performance stacks including React for web, Flutter for mobile, and Go for robust backends.
                </p>
                <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[['React', 'Web Apps'], ['Flutter', 'Multi-Platform'], ['Go', 'Microservices']].map(([tech, label], idx) => (
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx, duration: 0.4 }} viewport={{ once: true }} whileHover={{ y: -6, scale: 1.05 }} key={tech} className="bg-surface-container p-6 rounded-xl border border-white/5 hover:bg-surface-container-high transition-colors cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.15)] hover:border-primary/50 relative overflow-hidden group/tech">
                      <motion.span className="block font-headline text-2xl font-extrabold text-primary mb-1 relative z-10 transition-colors group-hover/tech:text-primary-container">{tech}</motion.span>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label relative z-10">{label}</span>
                      <div className="absolute inset-0 bg-primary/0 group-hover/tech:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-500"></div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 lg:col-span-4 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col border border-white/5 reveal-right delay-200 transition-all ${bentoInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(160deg, #100069 0%, #2e5bff 50%, #124af0 100%)' }}>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 backdrop-blur-md">
                  <span className="material-symbols-outlined">stylus_note</span>
                </div>
                <h2 className="font-headline text-3xl font-extrabold mb-6 leading-tight text-white">Brand Identity & UI/UX Evolution</h2>
                <p className="text-white/80 font-medium text-lg leading-relaxed mb-8">
                  Beyond pixels. We craft 'Strategic Aesthetics' that drive growth and user retention.
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <motion.div whileHover={{ scale: 1.03, rotate: 1, y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full aspect-square rounded-xl bg-background/20 overflow-hidden border border-white/10 backdrop-blur-sm relative transition-colors shadow-2xl cursor-pointer">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    alt="Strategic UI/UX Design"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1000&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 grayscale hover:grayscale-0 transition-all duration-700">
                     <motion.span whileHover={{ y: -4, color: '#fff' }} className="text-sm font-bold text-white/80 uppercase tracking-widest font-label glow-text flex items-center gap-2">
                       <span className="material-symbols-outlined text-[16px]">touch_app</span>
                       Strategic Aesthetics
                     </motion.span>
                  </div>
                </motion.div>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/20 rounded-full blur-[100px]"></div>
            </motion.div>
          </div>

          {/* Process connector */}
          <div className="flex justify-center items-center py-8 mb-8">
            <div className="h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface-container px-6 py-2 rounded-full border border-white/5 flex items-center gap-2 shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Production to Security Hand-off</span>
                <span className="material-symbols-outlined text-sm text-tertiary animate-bounce">arrow_downward</span>
              </div>
            </div>
          </div>

          {/* ── Security Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24" ref={secRef}>
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`cursor-pointer hover-lift lg:col-span-7 bg-surface-container border border-white/5 text-on-surface rounded-2xl p-8 md:p-10 relative overflow-hidden group reveal-left ${secInView ? 'in-view' : ''}`}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  </div>
                  <span className="font-headline font-bold text-primary tracking-widest uppercase text-xs">Security & Testing</span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold mb-6 text-on-surface">Webtest Audit & Security Scans</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-lg">
                  Bespoke penetration testing and vulnerability scoring for web applications. We audit every endpoint before it touches a live user.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                  {[['Defense', 'Automated SQLi Detection'], ['Privacy', 'XSS Prevention'], ['Protocol', 'SSL/TLS Audits']].map(([heading, label], idx) => (
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx, duration: 0.4 }} viewport={{ once: true }} whileHover={{ y: -5, scale: 1.05 }} key={heading} className="bg-surface-container-high border border-white/5 p-5 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.1)] relative overflow-hidden group/sec">
                      <motion.span className="block text-xs font-black uppercase tracking-widest text-primary mb-2 relative z-10 transition-colors group-hover/sec:text-primary-container">{heading}</motion.span>
                      <p className="text-sm font-semibold text-on-surface relative z-10">{label}</p>
                      <div className="absolute inset-0 bg-primary/0 group-hover/sec:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-16 -top-16 opacity-5 group-hover:opacity-15 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[300px] text-primary drop-shadow-[0_0_50px_rgba(46,91,255,0.8)]">verified_user</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`cursor-pointer hover-lift hover:bg-surface hover:border-outline/20 transition-all lg:col-span-5 bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col reveal-right delay-200 ${secInView ? 'in-view' : ''}`}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-10 text-on-surface-variant">
                  <span className="material-symbols-outlined">workflow</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-xs">Security Lifecycle</span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold text-on-surface mb-4">Cybersecurity Workflow</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Integrating security into the SaaS lifecycle seamlessly.
                </p>
                <div className="space-y-4 mt-auto">
                  {[['1', 'Foundation Audit', 'opacity-100', 'bg-tertiary text-on-tertiary border-tertiary'], ['2', 'Continuous Monitoring', 'opacity-80', 'bg-surface-container-highest border-white/5 text-on-surface'], ['3', 'Threat Mitigation', 'opacity-60', 'bg-surface-container-highest border-white/5 text-on-surface']].map(([num, label, op, colors], idx) => (
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx, duration: 0.4 }} viewport={{ once: true }} whileHover={{ x: 10, scale: 1.02 }} key={num} className={`flex items-center gap-6 p-4 rounded-xl bg-surface-container border border-white/5 hover:border-white/20 transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(46,91,255,0.1)] hover:bg-surface-container-high`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border transition-all ${colors}`}>{num}</div>
                      <span className={`font-headline font-bold text-on-surface transition-opacity ${op} group-hover:opacity-100`}>{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.main>
      <Footer />
    </>
  );
}
