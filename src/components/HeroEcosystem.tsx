import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Living Integration Ecosystem — animated topology + API flows */
export function HeroEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const nodes = [
    { id: "core", x: 50, y: 50, label: "Anypoint Core", primary: true },
    { id: "salesforce", x: 18, y: 22, label: "Salesforce" },
    { id: "sap", x: 82, y: 24, label: "SAP" },
    { id: "snowflake", x: 16, y: 78, label: "Snowflake" },
    { id: "aws", x: 84, y: 76, label: "AWS Lambda" },
    { id: "mongo", x: 50, y: 10, label: "MongoDB" },
    { id: "stripe", x: 50, y: 90, label: "Stripe" },
  ];

  return (
    <div ref={ref} className="relative h-[520px] md:h-[600px] w-full">
      {/* Cursor-reactive halo */}
      <div
        className="absolute inset-0 transition-[background-position] duration-300"
        style={{
          background: `radial-gradient(420px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(0,255,148,0.12), transparent 60%)`,
        }}
      />

      {/* Layered grid floor */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-50" />

      {/* Orbit rings */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 1 }}
            className="absolute rounded-full border border-white/5"
            style={{ width: `${i * 220}px`, height: `${i * 220}px` }}
          />
        ))}
      </div>

      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF94" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FF94" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {nodes.filter((n) => !n.primary).map((n) => (
          <line
            key={n.id}
            x1="50" y1="50" x2={n.x} y2={n.y}
            stroke="url(#flow)"
            strokeWidth="0.25"
            className="animate-flow"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.primary ? (
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl animate-pulse-glow" />
              <div className="relative glass-strong rounded-2xl px-5 py-4 min-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Live · Mule 4</span>
                </div>
                <p className="font-display font-semibold text-foreground">{n.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">3,482 tx/s · 99.99%</p>
              </div>
            </div>
          ) : (
            <div className="glass rounded-xl px-3 py-2 hover:border-primary/40 transition-colors group">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors" />
                <span className="text-xs font-mono text-foreground/80">{n.label}</span>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Floating UI fragment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-4 glass rounded-xl p-3 hidden md:block animate-float-slow"
      >
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Throughput</div>
        <div className="flex items-end gap-0.5 h-8">
          {[40, 60, 45, 80, 65, 90, 70, 85, 95, 75, 88].map((h, i) => (
            <div key={i} className="w-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-4 right-4 glass rounded-xl px-3 py-2 hidden md:flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-xs font-mono text-foreground/80">12 systems orchestrated</span>
      </motion.div>
    </div>
  );
}
