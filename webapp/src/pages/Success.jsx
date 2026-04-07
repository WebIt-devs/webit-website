import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Headset, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Success() {
  useEffect(() => {
    // Scroll to top when loading the success page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <motion.main className="min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 bg-background text-on-surface" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      {/* Success Identity Block (Asymmetric Placement) */}
      <div className="w-full max-w-3xl">
        {/* Tonal Shift Layering for "Stitch" Look */}
        <div className="bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-[0_40px_80px_-20px_rgba(42,20,180,0.08)] relative overflow-hidden border border-outline-variant/20">
          
          {/* Abstract Background Detail */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Prominent Checkmark */}
            <div className="w-24 h-24 bg-tertiary-fixed/30 rounded-full flex items-center justify-center mb-10">
              <CheckCircle size={48} className="text-tertiary" />
            </div>
            
            <p className="text-tertiary font-label font-semibold tracking-wider text-sm mb-4 uppercase">
              Submission Confirmed
            </p>
            
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter leading-tight mb-6">
              Request Received. <br />
              <span className="text-primary">We’re Analyzing Your Ecosystem.</span>
            </h1>
            
            <p className="text-on-surface-variant max-w-lg mb-12 text-lg leading-relaxed font-manrope">
              Our engineering team has received your technical blueprint. We are currently performing a deep-dive audit of your digital infrastructure.
            </p>
            
            {/* Timeline Section: No-Line Rule Implementation */}
            <div className="w-full max-w-md text-left bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <h3 className="font-headline font-extrabold text-sm uppercase tracking-widest text-on-surface-variant mb-8">
                Next Steps
              </h3>
              
              <div className="space-y-10">
                {/* Timeline Item 1 */}
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary/20">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-outline-variant opacity-30"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-extrabold text-on-surface text-base">Initial Security Scan</h4>
                    <p className="text-primary font-semibold text-sm">In Progress</p>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-on-surface-variant/30"></div>
                    </div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-outline-variant opacity-30"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-extrabold text-on-surface-variant text-base opacity-60">Developer Review</h4>
                    <p className="text-on-surface-variant text-sm font-medium">Pending</p>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-on-surface-variant/30"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-extrabold text-on-surface-variant text-base opacity-60">Strategy Call</h4>
                    <p className="text-on-surface-variant text-sm font-medium">Scheduled</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <Link 
                to="/" 
                className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-headline font-extrabold tracking-tight hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
              >
                Back to Home
              </Link>
              <Link 
                to="/about"
                className="bg-surface-container-highest hover:bg-surface-variant text-on-surface px-10 py-4 rounded-full font-headline font-extrabold tracking-tight transition-all active:scale-95 border border-outline-variant/10"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Contextual Information (Asymmetric Layout) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-shadow">
            <Headset size={32} className="text-primary mb-4" />
            <h5 className="font-headline font-extrabold text-lg mb-2">Dedicated Support</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed font-manrope">
              Your assigned specialist will reach out within 24 hours to discuss the initial scan results.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-shadow">
            <ShieldCheck size={32} className="text-tertiary mb-4" />
            <h5 className="font-headline font-extrabold text-lg mb-2">Privacy Guaranteed</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed font-manrope">
              All ecosystem data is encrypted at rest and in transit during our deep-dive analysis phase.
            </p>
          </div>
        </div>
      </div>
      </motion.main>
      <Footer />
    </>
  );
}
