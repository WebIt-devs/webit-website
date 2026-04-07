import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [heroRef, heroInView]   = useInView({ threshold: 0.15 });
  const [formRef, formInView]   = useInView({ threshold: 0.08 });
  const [sideRef, sideInView]   = useInView({ threshold: 0.1 });
  const [faqRef, faqInView]     = useInView({ threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const firstName   = fd.get('firstName')?.toString().trim() || '';
    const lastName    = fd.get('lastName')?.toString().trim() || '';
    const email       = fd.get('email')?.toString().trim() || '';
    const company     = fd.get('company')?.toString().trim() || '';
    const projectType = fd.get('projectType')?.toString() || '';
    const details     = fd.get('details')?.toString().trim() || '';

    // Client-side validation
    if (firstName.length < 2 || lastName.length < 1) {
      setError('Please enter your full name.'); setIsSubmitting(false); return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.'); setIsSubmitting(false); return;
    }
    if (details.length < 10) {
      setError('Project details must be at least 10 characters.'); setIsSubmitting(false); return;
    }
    const malicious = /<script>|<\/script>|DROP\s+TABLE|SELECT\s+.*FROM|--|;/i;
    if (malicious.test(details) || malicious.test(firstName) || malicious.test(lastName)) {
      setError('Invalid characters detected.'); setIsSubmitting(false); return;
    }

    try {
      await addDoc(collection(db, 'contact_submissions'), {
        name: `${firstName} ${lastName}`,
        email: email.toLowerCase(),
        company,
        projectType,
        details,
        createdAt: serverTimestamp(),
        source: 'webit-website',
        userAgent: navigator.userAgent,
      });
      navigate('/success');
    } catch (err) {
      console.error('Firestore write failed:', err);
      setError('There was an error submitting your request. Please try again or email us directly.');
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: 'What is your typical project timeline?', a: 'Depending on complexity, our projects range from 2 months for a targeted architectural overhaul to 6+ months for a full-scale enterprise platform build.' },
    { q: 'Do you offer ongoing support and maintenance?', a: 'Yes. We offer dedicated SLA-backed support contracts to ensure your infrastructure remains secure, updated, and highly available.' },
    { q: 'What technologies do you specialize in?', a: 'We are stack-agnostic but heavily favor React/Next.js for the frontend, and Node.js, Go, or Python for backend services, deployed on AWS or GCP.' },
    { q: 'How does your pricing work?', a: 'We offer project-based pricing with clear milestones. After an initial discovery call, we provide a detailed proposal with transparent cost breakdowns — no hidden fees.' },
  ];

  return (
    <>
      <Navbar />

      <motion.main className="pt-24 bg-background selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(46,91,255,0.08) 0%, transparent 70%)' }} />

        {/* ── Hero Header ── */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center py-20 relative z-10" ref={heroRef}>
          <span className={`inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 font-label reveal delay-100 ${heroInView ? 'in-view' : ''}`}>
            <span className="w-2 h-2 rounded-full bg-tertiary mr-2 animate-pulse"></span>
            Get In Touch
          </span>
          <h1 className={`text-5xl md:text-7xl lg:text-[80px] font-extrabold text-on-surface font-headline tracking-tight leading-[1.1] mb-8 reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
            Let's build something{' '}
            <span className="text-primary-container">extraordinary</span>.
          </h1>
          <p className={`text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed reveal delay-300 ${heroInView ? 'in-view' : ''}`}>
            Whether you need a complete architectural overhaul or a high-performance web application, our engineering team is ready to execute.
          </p>
        </section>

        {/* ── Main Grid: Form + Sidebar ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32 relative z-10">

          {/* ─── Left: Project Inquiry Form ─── */}
          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="lg:col-span-7" ref={formRef}>
            <div className={`p-8 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden reveal-left transition-all duration-500 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_40px_100px_-20px_rgba(46,91,255,0.25)] hover:border-white/20 ${formInView ? 'in-view' : ''}`}
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}>

              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">Project Inquiry</h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00e297]/10 border border-[#00e297]/30 text-[#00e297] text-[10px] font-black uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e297] animate-pulse"></span>
                    Firebase Live
                  </span>
                </div>
                <p className="text-on-surface-variant mb-8 text-sm">All fields are validated and submissions stored securely to Google Firestore.</p>

                {error && (
                  <div className="p-4 mb-6 rounded-xl font-bold text-sm border flex items-center gap-2 bg-error/10 text-error border-error/20">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-on-surface font-headline">First Name</label>
                      <input type="text" id="firstName" name="firstName" required maxLength={50}
                        placeholder="Jane"
                        className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all font-body" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-on-surface font-headline">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required maxLength={50}
                        placeholder="Doe"
                        className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all font-body" />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-on-surface font-headline">Work Email</label>
                    <input type="email" id="email" name="email" required maxLength={100}
                      placeholder="jane@company.com"
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all font-body" />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-on-surface font-headline">Company Name</label>
                    <input type="text" id="company" name="company" maxLength={100}
                      placeholder="Acme Corp"
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all font-body" />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-bold text-on-surface font-headline">Project Type</label>
                    <div className="relative">
                      <select id="projectType" name="projectType"
                        className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all appearance-none font-body pr-12 cursor-pointer">
                        <option value="web-app">Web Application Development</option>
                        <option value="saas-platform">SaaS Platform Engineering</option>
                        <option value="e-commerce">E-Commerce & Digital Storefronts</option>
                        <option value="portfolio">Portfolio & Corporate Websites</option>
                        <option value="infrastructure">Infrastructure & Scaling</option>
                        <option value="security-audit">Cybersecurity Audit</option>
                        <option value="ui-ux">UI/UX Design & Branding</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-xl">expand_more</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-bold text-on-surface font-headline">Project Details</label>
                    <textarea id="details" name="details" rows={5} required maxLength={2000}
                      placeholder="Tell us about your goals, timeline, and budget..."
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/40 transition-all resize-none font-body" />
                  </div>

                  {/* Submit */}
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="submit" disabled={isSubmitting}
                    className="w-full btn-primary-gradient text-white px-8 py-4 rounded-xl font-bold text-lg font-headline hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-all border border-white/10 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100 disabled:shadow-none cursor-pointer">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-lg">send</span>
                        Submit Request
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-on-surface-variant mt-4">
                    <span className="material-symbols-outlined text-[14px] align-middle mr-1 text-tertiary">lock</span>
                    End-to-end encrypted
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Sidebar ─── */}
          <div className="lg:col-span-5 flex flex-col gap-8" ref={sideRef}>

            {/* Direct Contact Card */}
            <div className={`p-8 rounded-[32px] bg-surface-container border border-white/5 reveal-right delay-100 ${sideInView ? 'in-view' : ''}`}>
              <h3 className="font-headline font-bold text-2xl text-on-surface mb-6">Direct Contact</h3>
              <div className="space-y-5">
                <motion.a whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} href="mailto:webit.realone@gmail.com" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary/70 transition-colors">Email Us</p>
                    <p className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">webit.realone@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} href="https://wa.me/917012131600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">chat</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary/70 transition-colors">WhatsApp</p>
                    <p className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Chat With Us</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className={`space-y-4 reveal-right delay-300 ${sideInView ? 'in-view' : ''}`}>
              {[
                { icon: 'shield_lock', title: 'Firestore Secured', desc: 'Submissions stored with AES-256 encryption at rest' },
                { icon: 'schedule', title: '24-Hour Response', desc: 'Our team typically responds within one business day' },
                { icon: 'handshake', title: 'No Obligation', desc: 'Free architecture consultation for qualifying projects' },
                { icon: 'verified', title: 'Production Grade', desc: 'Enterprise-tier code quality with automated CI/CD pipelines' },
              ].map((badge) => (
                <motion.div whileHover={{ scale: 1.02, x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} key={badge.title} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5 cursor-pointer shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-surface-container transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary-container/20 border border-primary-container/30 flex items-center justify-center shrink-0 group-hover:bg-primary-container/40 transition-colors">
                    <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">{badge.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm group-hover:text-primary-container transition-colors">{badge.title}</h4>
                    <p className="text-on-surface-variant text-xs mt-0.5">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </section>

        {/* ── FAQ Section ── */}
        <section className="px-6 lg:px-12 max-w-3xl mx-auto pb-32 relative z-10" ref={faqRef}>
          <div className={`text-center mb-12 reveal ${faqInView ? 'in-view' : ''}`}>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant text-lg">Quick answers to common project inquiries.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i}
                className={`group bg-surface-container-low rounded-2xl border border-white/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden reveal delay-${(i + 1) * 100} ${faqInView ? 'in-view' : ''}`}>
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-semibold text-lg text-on-surface select-none">
                  {faq.q}
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </motion.main>

      <Footer />
    </>
  );
}
