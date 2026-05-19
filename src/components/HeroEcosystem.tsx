import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Living Integration Ecosystem.
 *
 * A cinematic, environmental visualization meant to live inside the hero
 * section (not as an isolated card). Renders:
 *  - layered topology mesh + blueprint grid
 *  - orbiting orchestration rings
 *  - animated API flow lines with traveling data packets
 *  - Anypoint core + connected enterprise nodes
 *  - floating live telemetry chips
 *
 * Designed to blend INTO the page background, so the surrounding section
 * should not paint its own card / container around it.
 */
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

  // Enterprise systems Nuvarez orchestrates. Tier 1 = direct to Anypoint.
  const nodes = [
    { id: "core", x: 50, y: 50, label: "Anypoint Core", sub: "Mule 4 · 3,482 tx/s", primary: true },
    { id: "salesforce", x: 14, y: 22, label: "Salesforce", sub: "CRM · Sales Cloud" },
    { id: "sap", x: 86, y: 22, label: "SAP S/4HANA", sub: "ERP · Finance" },
    { id: "snowflake", x: 12, y: 72, label: "Snowflake", sub: "Data warehouse" },
    { id: "aws", x: 88, y: 72, label: "AWS Lambda", sub: "Serverless" },
    { id: "mongo", x: 50, y: 8, label: "MongoDB", sub: "Operational store" },
    { id: "stripe", x: 50, y: 92, label: "Stripe", sub: "Payments" },
    { id: "legacy", x: 26, y: 50, label: "Legacy AS/400", sub: "Modernized via API" },
    { id: "kafka", x: 74, y: 50, label: "Kafka", sub: "Event streaming" },
  ];

  return (
    <div ref={ref} className="relative w-full h-full min-h-[560px]">
      {/* Cursor-reactive volumetric halo */}
      <div
        className="absolute inset-0 transition-[background] duration-500"
        style={{
          background: `radial-gradient(520px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(0,255,148,0.10), transparent 65%)`,
        }}
      />

      {/* Concentric orbit rings — the orchestration field */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              opacity: { delay: i * 0.12, duration: 1 },
              scale: { delay: i * 0.12, duration: 1 },
              rotate: { duration: 60 + i * 30, ease: "linear", repeat: Infinity },
            }}
            className="absolute rounded-full border border-white/[0.06]"
            style={{
              width: `${i * 160 + 80}px`,
              height: `${i * 160 + 80}px`,
              borderStyle: i === 2 ? "dashed" : "solid",
            }}
          />
        ))}
      </div>

      {/* SVG: connection topology + traveling data packets */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF94" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FF94" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FF94" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00FF94" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Core glow underlay */}
        <circle cx="50" cy="50" r="18" fill="url(#core-glow)" />

        {/* Topology lines */}
        {nodes.filter((n) => !n.primary).map((n, i) => (
          <g key={n.id}>
            <line
              x1="50" y1="50" x2={n.x} y2={n.y}
              stroke="url(#flow-a)"
              strokeWidth="0.18"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated data packet traveling along the line */}
            <motion.circle
              r="0.55"
              fill="#00FF94"
              initial={{ opacity: 0 }}
              animate={{
                cx: [50, n.x, 50],
                cy: [50, n.y, 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3.2 + (i % 4) * 0.6,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.07, duration: 0.7, ease: [0.2, 0.9, 0.3, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.primary ? (
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-2xl animate-pulse-glow" />
              <div className="relative glass-strong rounded-2xl px-5 py-4 min-w-[210px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Live orchestration</span>
                </div>
                <p className="font-display font-semibold text-foreground text-base">{n.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-mono">{n.sub}</p>
                <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    animate={{ width: ["20%", "92%", "60%", "78%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="glass rounded-lg px-2.5 py-1.5 hover:border-primary/40 transition-colors group whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors" />
                <span className="text-[11px] font-mono text-foreground/85">{n.label}</span>
              </div>
              <div className="text-[9px] text-muted-foreground/70 font-mono mt-0.5">{n.sub}</div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Telemetry chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-4 glass rounded-xl p-3 hidden md:block animate-float-slow"
      >
        <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Throughput</div>
        <div className="flex items-end gap-0.5 h-8">
          {[40, 60, 45, 80, 65, 90, 70, 85, 95, 75, 88, 72].map((h, i) => (
            <div key={i} className="w-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary" style={{ height: `${h}%` }} />
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
        <span className="text-[11px] font-mono text-foreground/85">12 systems · 99.99% SLA</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-1/2 left-2 -translate-y-1/2 hidden lg:block"
      >
        <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground rotate-180" style={{ writingMode: "vertical-rl" }}>
          API-LED · EXPERIENCE · PROCESS · SYSTEM
        </div>
      </motion.div>
    </div>
  );
}
