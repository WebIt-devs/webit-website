import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '1. What Are Cookies?',
    body: 'Cookies are small text files placed on your device to maintain state across HTTP requests. Webit uses cookies almost entirely for necessary authentication sessions and anti-CSRF token verification.',
  },
  {
    title: '2. Types of Cookies We Use',
    body: null,
    list: [
      { label: 'Strictly Necessary', desc: 'HTTP-only cookies defining secure SSL session states. These cannot be disabled without breaking core functionality.' },
      { label: 'Analytics', desc: 'Aggregated, fully anonymized metrics to gauge CDN performance and page load times. No personal data is collected.' },
      { label: 'Preference', desc: 'Stores your theme preference (light/dark mode) locally to provide a consistent experience on return visits.' },
    ],
  },
  {
    title: '3. Managing Preferences',
    body: 'You may configure your browser to reject non-essential cookies without materially affecting your viewing experience of the public portfolio. Note that disabling strictly necessary cookies will prevent authenticated portal access.',
  },
  {
    title: '4. Third-Party Cookies',
    body: 'Webit does not use third-party advertising, retargeting, or social tracking cookies of any kind. Any analytics are self-hosted and anonymized.',
  },
  {
    title: '5. Updates to This Policy',
    body: 'We may update this Cookie Policy from time to time. Continued use of our services after changes are posted constitutes acceptance. The effective date at the top of this page reflects the latest revision.',
  },
];

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto min-h-[60vh]">

        {/* Header */}
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Legal</span>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
          Cookie Policy
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
              {s.body && <p className="text-on-surface-variant leading-relaxed">{s.body}</p>}
              {s.list && (
                <ul className="space-y-4 mt-3">
                  {s.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 18 }}>cookie</span>
                      <span><strong className="text-on-surface">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              )}
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
