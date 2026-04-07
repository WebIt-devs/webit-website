import { useState, useEffect, useRef, useCallback } from 'react';

/* ── Live activity log entries ── */
const LOG_ENTRIES = [
  { color: '#00e297', prefix: '[BUILD]', text: 'Compiling React component tree...' },
  { color: '#4f8aff', prefix: '[SECURE]', text: 'Validating SSL certificate chain...' },
  { color: '#00e297', prefix: '[DEPLOY]', text: 'Pushing to edge nodes (14 regions)...' },
  { color: '#f0b429', prefix: '[PERF]', text: 'Lighthouse score: 98/100 ✓' },
  { color: '#00e297', prefix: '[BUILD]', text: 'Bundle size optimized → 42kb gzipped' },
  { color: '#4f8aff', prefix: '[SECURE]', text: 'XSS sanitization layer active...' },
  { color: '#a78bfa', prefix: '[API]', text: 'Rate limiter: 18,400 req/min nominal' },
  { color: '#00e297', prefix: '[BUILD]', text: 'Tree-shaking 1,204 unused exports...' },
  { color: '#f0b429', prefix: '[PERF]', text: 'CDN cache hit ratio: 99.2%' },
  { color: '#4f8aff', prefix: '[SECURE]', text: 'mTLS handshake verified — zero leaks' },
  { color: '#a78bfa', prefix: '[API]', text: 'WebSocket pool: 2,044 active connections' },
  { color: '#00e297', prefix: '[DEPLOY]', text: 'Zero-downtime swap complete ✓' },
];

/* ── Tab definitions ── */
const TABS = [
  { id: 'pipeline', label: 'Pipeline', icon: 'terminal' },
  { id: 'security', label: 'Security', icon: 'shield_lock' },
  { id: 'performance', label: 'Performance', icon: 'speed' },
];

/* ── Animated counter hook ── */
function useCounter(target, duration = 1600, active = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return value;
}

/* ═══════════════════════════════════════════════
   PIPELINE TAB
═══════════════════════════════════════════════ */
function PipelineTab({ active }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const requests = useCounter(18427, 1800, active);
  const latency = useCounter(0, 600, active);

  const stages = [
    { name: 'Resolve Dependencies', done: true },
    { name: 'Compile TypeScript', done: true },
    { name: 'Bundle & Tree-shake', done: true, active: true },
    { name: 'Upload to CDN', done: false },
    { name: 'Edge Deploy', done: false },
  ];

  useEffect(() => {
    if (!active) return;
    let p = 0;
    const t = setInterval(() => {
      p += 0.6;
      if (p >= 94) { setProgress(94); clearInterval(t); }
      else setProgress(p);
    }, 16);
    return () => clearInterval(t);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setStage(s => (s + 1) % 3), 2400);
    return () => clearInterval(t);
  }, [active]);

  const dot = ['●', '●●', '●●●'][stage];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full">
      {/* Left: Pipeline */}
      <div className="md:col-span-7 flex flex-col gap-5">
        {/* Main progress card */}
        <div className="bg-[#0d1833] rounded-2xl p-7 border border-white/5 flex-1">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] font-mono text-[#4f8aff] tracking-[0.2em] uppercase mb-1">Active Build</p>
              <h3 className="text-white font-bold text-lg">Development Pipeline</h3>
            </div>
            <span className="text-[#00e297] font-mono text-sm font-bold">{Math.round(progress)}%</span>
          </div>

          {/* Steps */}
          <div className="space-y-3 mb-6">
            {stages.map((s, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${s.done ? 'bg-[#00e297] border-[#00e297]' : s.active ? 'border-[#4f8aff] bg-[#4f8aff]/10' : 'border-white/10 bg-white/5'}`}>
                  {s.done && <span className="material-symbols-outlined text-[10px] text-black" style={{ fontSize: 10 }}>check</span>}
                  {s.active && <span className="text-[#4f8aff] font-mono text-[8px]">{dot}</span>}
                </div>
                <span className={`text-xs font-mono ${s.done ? 'text-white/70 line-through' : s.active ? 'text-[#4f8aff] font-bold' : 'text-white/30'}`}>{s.name}</span>
                {s.active && <span className="text-[10px] text-[#4f8aff]/60 ml-auto font-mono animate-pulse">running...</span>}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full relative overflow-hidden transition-none"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #2e5bff, #00e297)' }}
            >
              <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-white/30 mt-2">
            <span>INIT_REACT_DOM</span>
            <span>EST: 12.4s</span>
          </div>
        </div>

        {/* Metric row */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-[#0d1833] rounded-2xl p-6 border border-white/5 group hover:border-[#4f8aff]/30 transition-colors cursor-default">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Requests / Min</p>
            <p className="text-4xl font-bold text-[#4f8aff] font-mono tabular-nums">{requests.toLocaleString()}</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00e297] animate-pulse"></span>
              <span className="text-[10px] text-[#00e297] font-mono">nominal</span>
            </div>
          </div>
          <div className="rounded-2xl p-6 group hover:scale-[1.02] transition-transform cursor-default" style={{ background: 'linear-gradient(135deg, #00c97b, #00e297)' }}>
            <p className="text-[10px] font-mono text-black/60 uppercase tracking-widest mb-2">Latency</p>
            <p className="text-4xl font-bold text-black font-mono tabular-nums">{latency}ms</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-black/30"></span>
              <span className="text-[10px] text-black/60 font-mono">zero-delay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Asset manifest */}
      <div className="md:col-span-5 bg-[#0d1833] rounded-2xl p-7 border border-white/5 flex flex-col gap-5">
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Asset Manifest</p>
        {[
          { icon: 'terminal', label: 'src/main.tsx', size: '2.1 KB', pct: 80, color: '#4f8aff' },
          { icon: 'data_object', label: 'dist/bundle.js', size: '42 KB', pct: 100, color: '#00e297' },
          { icon: 'cloud_done', label: '/cdn/static/', size: '1.2 MB', pct: 70, color: '#a78bfa' },
          { icon: 'image', label: '/assets/img/', size: '384 KB', pct: 55, color: '#f0b429' },
        ].map((a, i) => (
          <div key={i} className="group hover:bg-white/5 rounded-xl p-2 -m-2 transition-colors cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-sm" style={{ color: a.color, fontSize: 16 }}>{a.icon}</span>
              <span className="text-xs font-mono text-white/60 flex-1 truncate">{a.label}</span>
              <span className="text-[10px] font-mono text-white/30">{a.size}</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden ml-7">
              <div className="h-full rounded-full transition-all duration-1000" style={{ width: active ? `${a.pct}%` : '0%', backgroundColor: a.color }} />
            </div>
          </div>
        ))}

        {/* Uptime badge */}
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-white/30">UPTIME</span>
          <span className="font-mono font-bold text-[#00e297] text-sm">99.98%</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SECURITY TAB
═══════════════════════════════════════════════ */
function SecurityTab({ active }) {
  const threats = useCounter(1247, 1400, active);
  const scans = useCounter(99, 1200, active);
  const [pulseIdx, setPulseIdx] = useState(0);

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setPulseIdx(i => (i + 1) % 5), 700);
    return () => clearInterval(t);
  }, [active]);

  const checks = [
    { label: 'SSL / TLS 1.3', status: 'pass' },
    { label: 'XSS Sanitizer', status: 'pass' },
    { label: 'SQL Injection Guard', status: 'pass' },
    { label: 'CSRF Token Rotation', status: 'pass' },
    { label: 'Content Security Policy', status: 'pass' },
    { label: 'Rate Limiter', status: 'active' },
  ];

  const pulseNodes = [
    { cx: '20%', cy: '30%' }, { cx: '50%', cy: '15%' },
    { cx: '80%', cy: '35%' }, { cx: '65%', cy: '70%' }, { cx: '30%', cy: '65%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full">
      {/* Left: threat map */}
      <div className="md:col-span-7 flex flex-col gap-5">
        <div className="bg-[#0d1833] rounded-2xl p-7 border border-white/5 flex-1 relative overflow-hidden">
          <p className="text-[10px] font-mono text-[#00e297] tracking-[0.2em] uppercase mb-1">Live Threat Map</p>
          <h3 className="text-white font-bold text-lg mb-4">Global Shield Active</h3>

          {/* SVG threat visualization */}
          <div className="relative w-full h-36 mb-4">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 140">
              {/* Grid lines */}
              {[0,1,2,3].map(i => <line key={i} x1="0" y1={i*46} x2="400" y2={i*46} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
              {[0,1,2,3,4,5].map(i => <line key={i} x1={i*80} y1="0" x2={i*80} y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
              {/* Connections */}
              {pulseNodes.map((n, i) => pulseNodes.slice(i+1).map((m, j) => (
                <line key={`${i}-${j}`} x1={parseFloat(n.cx)*4} y1={parseFloat(n.cy)*1.4} x2={parseFloat(m.cx)*4} y2={parseFloat(m.cy)*1.4} stroke="rgba(79,138,255,0.15)" strokeWidth="1"/>
              )))}
              {/* Nodes */}
              {pulseNodes.map((n, i) => (
                <g key={i}>
                  <circle cx={parseFloat(n.cx)*4} cy={parseFloat(n.cy)*1.4} r={i === pulseIdx ? 12 : 5} fill={i === pulseIdx ? 'rgba(0,226,151,0.15)' : 'none'} stroke={i === pulseIdx ? '#00e297' : 'rgba(79,138,255,0.4)'} strokeWidth="1.5" style={{ transition: 'all 0.4s ease' }}/>
                  <circle cx={parseFloat(n.cx)*4} cy={parseFloat(n.cy)*1.4} r="3" fill={i === pulseIdx ? '#00e297' : '#4f8aff'} style={{ transition: 'all 0.4s ease' }}/>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-[10px] font-mono text-white/40 mb-1">Threats Blocked</p>
              <p className="text-2xl font-bold font-mono text-[#00e297]">{threats.toLocaleString()}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-[10px] font-mono text-white/40 mb-1">Scan Coverage</p>
              <p className="text-2xl font-bold font-mono text-[#4f8aff]">{scans}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: checklist */}
      <div className="md:col-span-5 bg-[#0d1833] rounded-2xl p-7 border border-white/5">
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-6">Security Checks</p>
        <div className="space-y-3">
          {checks.map((c, i) => (
            <div key={i} className="flex items-center gap-3 group hover:bg-white/5 rounded-lg p-2 -mx-2 transition-colors cursor-default">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${c.status === 'pass' ? 'bg-[#00e297]' : 'bg-[#f0b429]/20 border border-[#f0b429]/30'}`}>
                {c.status === 'pass'
                  ? <span className="material-symbols-outlined text-black" style={{ fontSize: 10 }}>check</span>
                  : <span className="w-2 h-2 rounded-full bg-[#f0b429] animate-pulse block"></span>
                }
              </div>
              <span className="text-xs font-mono text-white/70 flex-1">{c.label}</span>
              <span className={`text-[10px] font-mono ${c.status === 'pass' ? 'text-[#00e297]' : 'text-[#f0b429]'}`}>
                {c.status === 'pass' ? 'PASS' : 'ACTIVE'}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-white/30">COMPLIANCE</span>
          <div className="flex gap-2">
            {['GDPR', 'SOC2', 'HIPAA'].map(c => (
              <span key={c} className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#00e297]/30 text-[#00e297]">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PERFORMANCE TAB
═══════════════════════════════════════════════ */
function PerformanceTab({ active }) {
  const lighthouse = useCounter(98, 1200, active);
  const fcp = useCounter(0.6, 1000, active);
  const ttfb = useCounter(12, 800, active);
  const [barHeights, setBarHeights] = useState(Array(12).fill(20));

  useEffect(() => {
    if (!active) return;
    const base = [35,55,42,68,78,52,85,91,74,88,95,93];
    const t = setInterval(() => {
      setBarHeights(base.map(h => h + (Math.random() - 0.5) * 8));
    }, 600);
    return () => clearInterval(t);
  }, [active]);

  const metrics = [
    { label: 'First Contentful Paint', value: `${(fcp / 10).toFixed(1)}s`, pct: 95, color: '#00e297' },
    { label: 'Time to First Byte', value: `${ttfb}ms`, pct: 98, color: '#4f8aff' },
    { label: 'Cumulative Layout Shift', value: '0.02', pct: 99, color: '#a78bfa' },
    { label: 'Largest Contentful Paint', value: '1.1s', pct: 88, color: '#f0b429' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full">
      {/* Left */}
      <div className="md:col-span-7 flex flex-col gap-5">
        {/* Lighthouse score */}
        <div className="bg-[#0d1833] rounded-2xl p-7 border border-white/5 flex items-center gap-8">
          <div className="relative shrink-0">
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8"/>
              <circle cx="48" cy="48" r="40" fill="none" stroke="url(#scoreGrad)" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - lighthouse / 100)}`}
                transform="rotate(-90 48 48)" style={{ transition: 'stroke-dashoffset 1.5s ease' }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2e5bff"/>
                  <stop offset="100%" stopColor="#00e297"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold font-mono text-white">{lighthouse}</span>
              <span className="text-[8px] font-mono text-white/40 uppercase">Lighthouse</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-mono text-[#4f8aff] tracking-widest uppercase mb-1">Performance Score</p>
            <h3 className="text-white font-bold text-lg mb-1">Elite Tier</h3>
            <p className="text-xs text-white/40 leading-relaxed">Top 1% of all audited web apps globally.</p>
          </div>
        </div>

        {/* Live chart */}
        <div className="bg-[#0d1833] rounded-2xl p-7 border border-white/5 flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Throughput (last 12s)</p>
            <span className="text-[10px] font-mono text-[#00e297]">● live</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {barHeights.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm transition-all duration-500"
                style={{ height: `${h}%`, background: `linear-gradient(to top, #2e5bff, #00e297)`, opacity: 0.7 + (i / barHeights.length) * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Core Web Vitals */}
      <div className="md:col-span-5 bg-[#0d1833] rounded-2xl p-7 border border-white/5">
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-6">Core Web Vitals</p>
        <div className="space-y-5">
          {metrics.map((m, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono text-white/60">{m.label}</span>
                <span className="text-xs font-mono font-bold" style={{ color: m.color }}>{m.value}</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000 group-hover:opacity-100"
                  style={{ width: active ? `${m.pct}%` : '0%', backgroundColor: m.color }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/30">CDN</span>
            <span className="text-[10px] font-mono text-[#a78bfa]">14 Edge Regions</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] font-mono text-white/30">Cache HIT</span>
            <span className="text-[10px] font-mono text-[#00e297]">99.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN HERO DASHBOARD
═══════════════════════════════════════════════ */
export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [logs, setLogs] = useState([LOG_ENTRIES[0]]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buildNo] = useState(() => Math.floor(4000 + Math.random() * 999));
  const containerRef = useRef(null);
  const logRef = useRef(null);
  const logIdxRef = useRef(1);

  /* Live activity log streaming */
  useEffect(() => {
    const t = setInterval(() => {
      const entry = LOG_ENTRIES[logIdxRef.current % LOG_ENTRIES.length];
      logIdxRef.current++;
      setLogs(prev => [...prev.slice(-5), entry]);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logs]);

  /* Mouse parallax */
  const handleMouseMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-[56px] opacity-40 animate-pulse-glow pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(46,91,255,0.2) 0%, transparent 70%)' }}
      />

      {/* Main panel */}
      <div
        className="relative rounded-[32px] overflow-hidden border border-white/5"
        style={{
          background: 'linear-gradient(160deg, #08142e 0%, #0a1628 60%, #060e1f 100%)',
          boxShadow: '0 60px 120px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(79,138,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: 'transform 0.12s ease-out',
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            {/* Traffic lights */}
            <div className="flex gap-2">
              {['#e5736a', '#e5c26a', '#6acd8c'].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-full cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-white/30" style={{ fontSize: 12 }}>terminal</span>
              <span className="text-[11px] font-mono text-white/40">webit-os-v{buildNo}</span>
            </div>
          </div>

          {/* Tab bar — center */}
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold font-mono transition-all duration-200 ${activeTab === tab.id ? 'bg-[#2e5bff] text-white shadow-lg' : 'text-white/40 hover:text-white/70'}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e297]/20 bg-[#00e297]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e297] animate-pulse"></span>
            <span className="text-[10px] font-mono text-[#00e297] font-bold">LIVE</span>
          </div>
        </div>

        {/* Tab content */}
        <div className="p-5" style={{ minHeight: 340 }}>
          {activeTab === 'pipeline' && <PipelineTab active={activeTab === 'pipeline'} />}
          {activeTab === 'security' && <SecurityTab active={activeTab === 'security'} />}
          {activeTab === 'performance' && <PerformanceTab active={activeTab === 'performance'} />}
        </div>

        {/* Activity log footer */}
        <div className="border-t border-white/5 px-6 py-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white/30" style={{ fontSize: 13 }}>density_small</span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Activity Stream</span>
            <span className="ml-auto text-[10px] font-mono text-[#00e297]">● streaming</span>
          </div>
          <div ref={logRef} className="space-y-1 overflow-hidden" style={{ maxHeight: 68 }}>
            {logs.map((entry, i) => (
              <div key={i} className="flex items-baseline gap-2 text-[11px] font-mono" style={{ animation: i === logs.length - 1 ? 'fadeInUp 0.3s ease both' : 'none' }}>
                <span className="text-white/20 shrink-0">{String(i).padStart(2, '0')}</span>
                <span className="font-bold shrink-0" style={{ color: entry.color }}>{entry.prefix}</span>
                <span className="text-white/50 truncate">{entry.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
