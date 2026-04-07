import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const jobs = [
  {
    dept: 'Engineering',
    deptColor: '#4f8aff',
    title: 'Senior Go Architect',
    location: 'Remote / San Francisco, CA',
    desc: 'Design hyperscale microservices processing thousands of RPS with bulletproof reliability.',
    tags: ['Go', 'gRPC', 'K8s', 'PostgreSQL'],
  },
  {
    dept: 'Design',
    deptColor: '#00e297',
    title: 'UX/UI Product Designer',
    location: 'Remote / London, UK',
    desc: 'Craft intuitive, editorial experiences for complex developer-facing workflows.',
    tags: ['Figma', 'Motion', 'React', 'Design Systems'],
  },
  {
    dept: 'Security',
    deptColor: '#a78bfa',
    title: 'Penetration Tester',
    location: 'Remote / Global',
    desc: 'Conduct red-team operations and vulnerability assessments across our client infrastructure.',
    tags: ['Kali', 'Burp Suite', 'Zero-Trust', 'OWASP'],
  },
  {
    dept: 'Engineering',
    deptColor: '#f0b429',
    title: 'React / Next.js Engineer',
    location: 'Remote / Dubai, UAE',
    desc: 'Build elite, performance-first web applications delivering sub-100ms interactions.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
];

const perks = [
  { icon: 'public', label: '100% Remote', desc: 'Work from anywhere that has good Wi-Fi.' },
  { icon: 'trending_up', label: 'Equity', desc: 'Own a piece of what we\'re building together.' },
  { icon: 'school', label: 'Learning Budget', desc: '$2K/year for courses, books, and conferences.' },
  { icon: 'health_and_safety', label: 'Full Health', desc: 'Medical, dental, and vision worldwide.' },
  { icon: 'schedule', label: 'Async Culture', desc: 'No pointless standups. Results-first.' },
  { icon: 'devices', label: 'Hardware Setup', desc: 'MBP Pro M4 + monitor + peripherals on us.' },
];

export default function Careers() {
  return (
    <>
      <Navbar />

      <motion.main className="pt-24 pb-32 min-h-screen relative overflow-hidden" initial="hidden" animate="visible" variants={pageVariants}>

        {/* Subtle grid overlay */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(79,138,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,138,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        {/* Hero */}
        <section className="relative px-6 py-24 md:py-32 text-center flex flex-col items-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(46,91,255,0.12) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8"
              style={{ borderColor: 'rgba(79,138,255,0.25)', backgroundColor: 'rgba(79,138,255,0.07)' }}>
              <span className="w-2 h-2 rounded-full bg-[#00e297] animate-pulse"></span>
              We're Hiring
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight">
              Build the <span className="text-gradient">cutting edge.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mx-auto">
              Join a collective of elite engineers, product designers, and security strategists. We construct the digital infrastructure of tomorrow — from anywhere.
            </p>
          </div>
        </section>

        {/* Job listings */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <h2 className="font-headline text-2xl font-bold text-on-surface">Open Roles</h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#00e297]/30 text-[#00e297] w-fit">{jobs.length} positions open</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <motion.div key={i}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  borderColor: `${job.deptColor}40`,
                  boxShadow: `0 12px 40px ${job.deptColor}15`
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl p-8 border transition-colors cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold border"
                    style={{ color: job.deptColor, borderColor: `${job.deptColor}30`, backgroundColor: `${job.deptColor}10` }}>
                    {job.dept}
                  </span>
                  <div className="w-9 h-9 rounded-xl border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${job.deptColor}12` }}>
                    <span className="material-symbols-outlined text-sm" style={{ color: job.deptColor, fontSize: 16 }}>arrow_outward</span>
                  </div>
                </div>

                <h3 className="font-headline text-2xl md:text-xl font-bold mb-2 text-on-surface leading-tight">{job.title}</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-4 font-mono">{job.location}</p>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">{job.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider text-on-surface-variant border border-white/5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Why Webit</span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">Built for builders.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} className="rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/20 transition-colors shadow-sm hover:shadow-xl cursor-default"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: 32 }}>{p.icon}</span>
                <h4 className="font-bold text-lg text-on-surface mb-2">{p.label}</h4>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open application CTA */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="relative rounded-[32px] p-10 md:p-16 text-center overflow-hidden border border-white/5 shadow-2xl"
            style={{ background: 'linear-gradient(160deg, #08142e 0%, #0a1628 60%, #060e1f 100%)' }}>
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
              style={{ backgroundColor: 'rgba(46,91,255,0.15)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
              style={{ backgroundColor: 'rgba(0,226,151,0.08)', transform: 'translate(-30%, 30%)' }} />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6">Don't see your role?</h2>
              <p className="text-white/60 mb-10 text-lg max-w-lg mx-auto leading-relaxed">We're always looking for exceptional people. Send us your work — we read everything.</p>
              <a
                href="mailto:webit.realone@gmail.com"
                className="thumb-btn hover-lift inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 md:py-5 rounded-xl font-bold text-white text-lg transition-all border border-white/10"
                style={{ background: 'linear-gradient(135deg, #2a14b4, #4338ca)' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mail</span>
                webit.realone@gmail.com
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
              </a>
            </div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
