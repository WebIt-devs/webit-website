import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '1. Information Collection',
    body: 'At Webit, we prioritize your security and operational confidentiality. We collect only necessary metadata required for securing continuous connectivity and service delivery. This includes standard IP logging, browser headers, and direct communications sent via secure channels.',
  },
  {
    title: '2. Data Processing & Security',
    body: 'All telemetry data is encrypted at rest using AES-256 and transmitted exclusively over TLS 1.3 connections. We adhere rigorously to the principle of least privilege, ensuring no extraneous personal information is parsed or retained.',
  },
  {
    title: '3. Information Sharing',
    body: 'Webit does not sell, rent, or lease any client data to third parties. Data is only disclosed when legally compelled by valid court orders under the appropriate sovereign jurisdiction.',
  },
  {
    title: '4. Cookies & Tracking',
    body: 'We use strictly necessary cookies to maintain authenticated sessions and site functionality. No third-party advertising or tracking cookies are deployed on our platform.',
  },
  {
    title: '5. Your Rights',
    body: 'You retain the right to request access to, correction of, or deletion of any personal data we hold. Contact us at webit.realone@gmail.com to exercise these rights and we will respond within 30 days.',
  },
  {
    title: '6. Contact',
    body: 'For any privacy-related enquiries, please email us at webit.realone@gmail.com. We are committed to resolving any concerns promptly and transparently.',
  },
];

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto min-h-[60vh]">

        {/* Header */}
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Legal</span>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
          Privacy Policy
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

        {/* Back link */}
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
