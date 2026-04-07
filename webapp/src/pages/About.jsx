import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

import farisImg from '../assets/Muhammed-faris.png';
import fazeenImg from '../assets/Fazeen-Alan.png';
import abinavImg from '../assets/Abinav-punnakan.png';

export default function About() {
  const [heroRef, heroInView]       = useInView({ threshold: 0.15 });
  const [storyRef, storyInView]     = useInView({ threshold: 0.1 });
  const [bentoRef, bentoInView]     = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView]       = useInView({ threshold: 0.08 });
  const [ctaRef, ctaInView]         = useInView({ threshold: 0.2 });

  return (
    <>
      <Navbar />
      <motion.main className="pt-48 px-6 max-w-7xl mx-auto overflow-hidden" initial="hidden" animate="visible" variants={pageVariants}>

        {/* ── Hero ── */}
        <section className="mb-32" ref={heroRef}>
          <div className="max-w-4xl">
            <span className={`text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block reveal delay-100 ${heroInView ? 'in-view' : ''}`}>
              Our Identity
            </span>
            <h1 className={`text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-12 reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
              Engineering Growth.<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Securing Innovation.
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-3xl reveal delay-300 ${heroInView ? 'in-view' : ''}`}>
              At Webit, we don't just build websites; we architect digital ecosystems. Born from the intersection of high-scale software production and rigorous cybersecurity.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="mb-48 grid grid-cols-1 md:grid-cols-12 gap-16 items-center" ref={storyRef}>
          <div className={`md:col-span-7 relative reveal-left group/story ${storyInView ? 'in-view' : ''}`}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="rounded-xl overflow-hidden shadow-2xl cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                alt="Abstract digital network visualization"
                className="w-full h-[600px] object-cover mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3i-vyoBk9JrUkAvIvuBExr4YIDFrTGxunxpCOHVKIU0SfZ4Q0yXwF2f2mVQzE-if9HoSzDBTqV3bvoiV-usIPQ53QXE5syqVwoXQ_3BwEu_On3q0YsjNHiV5wdVdB0xY6b-wojr2gp-IQH3LU4DFj2xdcT6OHRmpOpwrpn2g4pkpLW3-5u2D7mz8EPqnqZFL-_V-OolBCguh8CdcYEHeXnDVfLb5met2sn6xOjU1BsD6CsT-QWtHEP3r1S7KBQxMc-t59isVn0wcN"
              />
            </motion.div>
            {/* Float card */}
            <motion.div whileHover={{ y: -10, scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="absolute -bottom-12 -right-12 bg-surface-container-lowest p-12 rounded-xl shadow-[0_40px_40px_-15px_rgba(46,91,255,0.2)] hidden lg:block max-w-sm cursor-pointer border border-white/5 hover:border-primary/30 group/float">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="text-primary mb-4 w-min">
                <span className="material-symbols-outlined text-4xl group-hover/float:drop-shadow-[0_0_10px_rgba(46,91,255,0.8)]">security</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Webtested®</h3>
              <p className="text-on-surface-variant text-sm">Our proprietary security audit baked into every release pipeline.</p>
            </motion.div>
          </div>

          <div className={`md:col-span-5 space-y-8 reveal-right delay-200 ${storyInView ? 'in-view' : ''}`}>
            <div className="p-8 md:p-12 bg-surface-container-low rounded-xl">
              <h2 className="text-4xl font-extrabold tracking-tight mb-6 text-on-surface">The Resilience Realization</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We realized that the modern web is broken. Most agencies build for looks; we build for resilience. In an era of constant data breaches and reputation volatility, we knew "functional" wasn't enough.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bento Grid ── */}
        <section className="mb-48" ref={bentoRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`md:col-span-2 text-white p-12 md:p-16 rounded-[32px] flex flex-col justify-between min-h-[450px] relative overflow-hidden reveal-left cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 ${bentoInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(160deg, #1a0f6e 0%, #2a14b4 50%, #4338ca 100%)' }}>
              <div className="max-w-xl relative z-10">
                <span className="text-white/60 font-label text-sm uppercase tracking-widest mb-6 block">Our Evolution</span>
                <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-tight">From Developers to Hybrid Architects.</h2>
                <p className="text-lg text-white/75 leading-relaxed">
                  We evolved into a hybrid production house where Web Development and Cybersecurity are two sides of the same coin. We treat the screen as a tactile sheet of premium paper, where the "Stitch" aesthetic creates a sense of bespoke craftsmanship.
                </p>
              </div>
              <div className="mt-8 flex gap-4 relative z-10">
                <motion.div whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(255,255,255,0.1)' }} className="px-6 py-2 rounded-full border border-white/20 text-sm font-bold text-white cursor-pointer shadow-lg transition-colors">SaaS-First</motion.div>
                <motion.div whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(255,255,255,0.1)' }} className="px-6 py-2 rounded-full border border-white/20 text-sm font-bold text-white cursor-pointer shadow-lg transition-colors">SOC-Ready</motion.div>
              </div>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`text-white p-12 rounded-[32px] flex flex-col items-center justify-center text-center relative overflow-hidden reveal-right delay-200 cursor-pointer hover:shadow-2xl hover:shadow-[#00e297]/20 group/philosophy transition-all duration-300 ${bentoInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(160deg, #1a2614 0%, #2a3a1e 50%, #3d4b30 100%)' }}>
              <motion.div whileHover={{ rotate: 15, scale: 1.2 }} className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm cursor-pointer shadow-lg">
                <span className="material-symbols-outlined text-[#d7e8c4] text-4xl group-hover/philosophy:drop-shadow-[0_0_15px_rgba(215,232,196,1)] transition-all">lightbulb</span>
              </motion.div>
              <h3 className="text-3xl font-extrabold tracking-tight mb-6">Our Philosophy</h3>
              <p className="text-lg text-white/70 leading-relaxed italic">
                "If it isn't secure, it isn't finished. If it doesn't scale, it isn't SaaS."
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="mb-48" ref={processRef}>
          <div className={`text-center mb-24 reveal ${processInView ? 'in-view' : ''}`}>
            <h2 className="text-6xl font-extrabold tracking-tighter mb-4 text-on-surface">How We Build</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {[
              { num: '01', title: 'Production Excellence', desc: 'Using modern stacks (React, Flutter, Go) to create fluid, PWA-ready experiences that feel tactile and responsive.', icons: ['layers', 'phone_iphone'], delay: 'delay-100' },
              { num: '02', title: 'Integrated Security', desc: "Every line of code is 'Webtested.' We don't add security at the end; we bake it into the foundation with SOC-ready architectures.", icons: ['lock', 'shield'], delay: 'delay-200' },
              { num: '03', title: 'Reputation Management', desc: 'Our automated review systems ensure that once your product is live, its growth is protected and its feedback loop is optimized.', icons: ['auto_graph', 'verified_user'], delay: 'delay-300' },
            ].map((step) => (
              <motion.div key={step.num}
                whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group grid grid-cols-1 md:grid-cols-12 items-center gap-12 p-8 md:p-16 bg-surface-container-low rounded-xl hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl reveal cursor-pointer border border-transparent hover:border-primary/20 ${step.delay} ${processInView ? 'in-view' : ''}`}>
                <div className="md:col-span-1 text-5xl font-black text-outline/30 group-hover:text-primary transition-colors">{step.num}</div>
                <div className="md:col-span-6">
                  <h3 className="text-3xl font-bold mb-4 text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-lg">{step.desc}</p>
                </div>
                <div className="md:col-span-5 flex justify-end">
                  <div className="flex gap-4">
                    {step.icons.map(icon => (
                      <motion.span whileHover={{ y: -5, scale: 1.2, color: '#2e5bff' }} transition={{ type: "spring", stiffness: 300 }} key={icon} className="material-symbols-outlined text-6xl text-primary/20 group-hover:text-primary/60 transition-colors drop-shadow-md cursor-pointer">{icon}</motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="mb-48" ref={teamRef}>
          <div className={`mb-20 reveal ${teamInView ? 'in-view' : ''}`}>
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">The Humans</span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6">The Architects Behind Webit</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              A hybrid collective of software engineers, security researchers, and strategic designers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: farisImg, name: 'Muhammed Faris', role: 'Founder & Principal Architect (SaaS Systems)', desc: 'Expert in distributed systems and high-scale production environments. Designing the backbone of resilient digital products.', tags: ['Distributed Systems', 'React/Go'], delay: 'delay-100' },
              { img: fazeenImg, name: 'Fazeen Alan', role: 'Head of Cybersecurity (Webtest® Lead)', desc: 'Securing the frontier. Fazeen leads our proprietary Webtest® audits, ensuring every release is battle-hardened.', tags: ['Penetration Testing', 'SOC2 Ready'], delay: 'delay-200' },
              { img: abinavImg, name: 'Abinav Punnakan', role: 'Co Founder & Senior Developer (Full Stack)', desc: 'Bridging the gap between engineering and user-centric strategy. Abinav ensures long-term scalability and market fit.', tags: ['Product Strategy', 'Lifecycle MGMT'], delay: 'delay-300' },
            ].map((member) => (
              <motion.div key={member.name}
                whileHover={{ y: -12 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-surface-container-low p-8 rounded-[32px] group hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl reveal-scale cursor-pointer border border-transparent hover:border-primary/10 ${member.delay} ${teamInView ? 'in-view' : ''}`}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-surface-container-high">
                  <img alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={member.img} />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{member.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {member.tags.map(tag => (
                      <motion.span whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(46,91,255,0.1)' }} key={tag} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-wider uppercase border border-primary/10 transition-colors cursor-pointer shadow-sm">{tag}</motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="mb-24" ref={ctaRef}>
          <div className={`relative rounded-[32px] overflow-hidden p-16 md:p-24 text-center reveal-scale ${ctaInView ? 'in-view' : ''}`}
            style={{ background: 'linear-gradient(160deg, #0f0a3e 0%, #1a0f6e 50%, #0a0a0f 100%)' }}>
            <div className="absolute inset-0 opacity-[0.06]">
              <img alt="Abstract high-tech circuit board" className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1S8Iufprz12wKLxPWpAwvj5ICDabc73ZY3pxiDuB25auKj9oKiILbku9a6vaL95DJMfAgSuHfNUjII0W1VjrQYBOCB-hAVIl6oypp9mNR6kQEB01z3ap-bdEgsV7vXS0hPE849uJhLTb00R6pY6BXNuNFxcWX7nBL6NnT6Gp1u_clbUdMhQdBqiOOnS_eNWKh3U-w10Iqlpi9_HwpqXxhl2L64F4EGoUU5RNIJrny2E533xx47wwkp9LcJeupl72ZEbe4BIC0PFYx"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl font-extrabold tracking-tight mb-8 text-white">Ready to architect your ecosystem?</h2>
              <p className="text-xl text-white/60 mb-12">Let's build a digital presence that doesn't just look expensive—it performs and protects.</p>
              <Link to="/contact"
                className="inline-block px-12 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-white border border-white/10"
                style={{ background: 'linear-gradient(135deg, #2a14b4, #4338ca)' }}>
                Schedule an Architecture Review
              </Link>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#c3c0ff' }}></div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
