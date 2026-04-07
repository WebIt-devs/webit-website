import { motion } from 'framer-motion';

/**
 * WaveBackground
 * Three overlapping SVG wave layers:
 *  - Two at the bottom moving in opposite directions
 *  - One floating in the upper portion for depth
 * Uses theme primary/tertiary colors at very low opacity so content stays readable.
 */
export default function WaveBackground() {
  // Seamlessly tileable wave — 2× viewport wide so panning never shows a gap
  const waveA =
    'M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 C1400,120 1600,0 1800,60 C2000,120 2200,0 2400,60 C2600,120 2700,60 2700,60 L2700,160 L0,160 Z';

  const waveB =
    'M0,90 C180,30 360,150 540,90 C720,30 900,150 1080,90 C1260,30 1440,150 1620,90 C1800,30 1980,150 2160,90 C2340,30 2520,150 2700,90 L2700,160 L0,160 Z';

  const waveC =
    'M0,50 C240,110 480,−10 720,50 C960,110 1200,−10 1440,50 C1680,110 1920,−10 2160,50 C2400,110 2600,30 2700,50 L2700,160 L0,160 Z';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* ── Ambient radial glow — top centre ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(46,91,255,0.11) 0%, transparent 65%)',
        }}
      />

      {/* ── Side glow accents ── */}
      <div
        className="absolute -left-40 top-1/4 w-80 h-80 rounded-full blur-[120px]"
        style={{ backgroundColor: 'rgba(46,91,255,0.06)' }}
      />
      <div
        className="absolute -right-40 top-1/3 w-80 h-80 rounded-full blur-[120px]"
        style={{ backgroundColor: 'rgba(0,226,151,0.04)' }}
      />

      {/* ── Wave Layer 1 — bottom, primary, slow right→left ── */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%]"
        viewBox="0 0 2700 160"
        preserveAspectRatio="none"
        style={{ height: '140px' }}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        <path d={waveA} className="fill-primary" style={{ opacity: 0.08 }} />
      </motion.svg>

      {/* ── Wave Layer 2 — bottom, tertiary, faster left→right ── */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%]"
        viewBox="0 0 2700 160"
        preserveAspectRatio="none"
        style={{ height: '120px' }}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 13, ease: 'linear', repeat: Infinity }}
      >
        <path d={waveB} className="fill-tertiary" style={{ opacity: 0.055 }} />
      </motion.svg>

      {/* ── Wave Layer 3 — bottom, primary, mid-speed, taller crest ── */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%]"
        viewBox="0 0 2700 160"
        preserveAspectRatio="none"
        style={{ height: '90px' }}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        <path d={waveC} className="fill-primary" style={{ opacity: 0.045 }} />
      </motion.svg>

      {/* ── Top floating wave — subtle depth at hero top ── */}
      <motion.svg
        className="absolute top-0 left-0 w-[200%] rotate-180"
        viewBox="0 0 2700 160"
        preserveAspectRatio="none"
        style={{ height: '80px' }}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        <path d={waveB} className="fill-primary" style={{ opacity: 0.04 }} />
      </motion.svg>
    </div>
  );
}
