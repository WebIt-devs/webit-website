import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using Webit\'s infrastructure, APIs, or services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you must cease use of our services immediately.',
  },
  {
    title: '2. Acceptable Use',
    body: 'You agree not to deploy automated crawlers, DDoS attack vectors, or inject malicious payloads into our systems. Any infrastructure abuse will result in immediate termination of the Master Service Agreement (MSA) and may be escalated to the relevant legal authorities.',
  },
  {
    title: '3. Intellectual Property',
    body: 'All source code, designs, documentation, and materials produced by Webit remain the intellectual property of Webit until full payment is received. Upon final payment, all agreed deliverables transfer to the client under the terms of the signed contract.',
  },
  {
    title: '4. Liability Limitations',
    body: 'Webit operates cutting-edge systems but guarantees no zero-day flaw immunity outside explicit SLA guarantees negotiated in dedicated enterprise contracts. Our liability is limited to the total value of fees paid in the preceding 90 days.',
  },
  {
    title: '5. Modifications',
    body: 'We reserve the right to modify these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms. We will notify clients of material changes via email.',
  },
  {
    title: '6. Governing Law',
    body: 'These terms shall be governed by and construed in accordance with applicable international commercial law. Any disputes shall be resolved through binding arbitration before litigation is pursued.',
  },
];

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto min-h-[60vh]">

        {/* Header */}
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Legal</span>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
          Terms of Service
        </h1>
        <p className="text-on-surface-variant mb-12 border-b border-outline-variant/20 pb-8">
          Effective Date: March 2026
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i} className="group">
              <h2 className="text-xl font-bold mb-3 text-on-surface font-headline group-hover:text-primary transition-colors">
                {s.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20">
          <a href="mailto:webit.realone@gmail.com"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm">
            <span className="material-symbols-outlined text-sm" style={{ fontSize: 16 }}>mail</span>
            webit.realone@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
