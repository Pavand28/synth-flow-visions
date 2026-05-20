import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Plus, Minus, Workflow, Code2, GitBranch, Database, LifeBuoy, Layers3, Radar, Activity, Wrench, LineChart, ChevronDown, Maximize2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";
import mulesoftLogo from "@/assets/brand/mulesoft.png";

export const Route = createFileRoute("/mulesoft")({
  head: () => ({
    meta: [
      { title: "MuleSoft Solutions — Nuvarez" },
      { name: "description", content: "Modernize legacy systems, manage APIs, and optimize integrations with end-to-end MuleSoft solutions from Nuvarez." },
      { property: "og:title", content: "MuleSoft Solutions — Nuvarez" },
      { property: "og:description", content: "End-to-end MuleSoft architecture, implementation, migration, and managed services." },
    ],
  }),
  component: MuleSoftPage,
});

const modules = [
  {
    id: "arch",
    icon: Layers3,
    title: "Integration Architecture & Strategy",
    short: "API-led architecture, scalable design, CI/CD-aligned delivery.",
    long: "Unlock the full potential of your digital ecosystem with industry best practices, API-led connectivity, and scalable design. We guide you from strategy to execution, whether you're modernizing legacy systems or building a new digital foundation.",
    bullets: ["API-led architecture tailored to business objectives", "Scalable, secure, and reusable integration design", "Deployment aligned with CI/CD and DevOps best practices"],
  },
  {
    id: "impl",
    icon: Workflow,
    title: "MuleSoft Implementation",
    short: "Rapid, minimal-disruption delivery on the Anypoint Platform.",
    long: "Certified experts deliver scalable, secure, and future-ready solutions on the Anypoint Platform — integrating multiple systems, building APIs, and enabling real-time data connectivity tailored to your business goals.",
    bullets: ["Accelerated time-to-value", "Seamless system connectivity", "Scalable architecture for growth"],
  },
  {
    id: "api",
    icon: Code2,
    title: "API Design & Development",
    short: "Reusable, modular, secure APIs engineered for scale.",
    long: "From RESTful APIs to complex integrations, our solutions are engineered for flexibility, performance, and future growth — built to MuleSoft best practices for reuse, security, and ease of management.",
    bullets: ["Reusable, modular API architecture", "Secure & compliant design", "Faster time-to-market", "End-to-end lifecycle support"],
  },
  {
    id: "mig",
    icon: GitBranch,
    title: "Migration Services",
    short: "Zero data loss, minimal downtime, full compliance.",
    long: "Moving from legacy systems, point-to-point integrations, or another integration platform? Our experts ensure a seamless migration to the Anypoint Platform with deep expertise in data mapping, connector development, and API-led migration.",
    bullets: ["Seamless legacy-to-MuleSoft migration", "Risk-free testing & validation", "Secure data handling", "Minimal disruption to operations"],
  },
  {
    id: "mod",
    icon: Database,
    title: "Legacy Modernization",
    short: "Wrap legacy in modern APIs. Avoid risky rebuilds.",
    long: "We wrap your legacy systems in modern APIs, enabling them to communicate with cloud apps, CRMs, ERPs, and more — minimal disruption, faster time-to-value, scalable foundation.",
    bullets: ["Unlock data from legacy systems", "Enable agile, API-first architecture", "Avoid risky full rebuilds", "Reduce costs & improve efficiency"],
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Managed Services & Support",
    short: "24/7 monitoring, rapid resolution, continuous optimization.",
    long: "Keep your MuleSoft integrations running at peak performance. Proactive monitoring, rapid issue resolution, and continuous improvement to keep your ecosystem healthy, secure, and scalable.",
    bullets: ["24/7 monitoring & performance checks", "Issue resolution & root cause analysis", "Optimization & health reporting", "Tailored SLAs"],
  },
];

const steps = [
  {
    n: "01",
    t: "Environment Audit & Onboarding",
    d: "Review of your current architecture, integrations, and support needs. We map every endpoint, dependency, and risk to define tailored SLAs.",
    icon: Radar,
    metric: "Topology mapped",
  },
  {
    n: "02",
    t: "24/7 Monitoring & Performance",
    d: "Real-time observability detects anomalies, latency spikes, and errors before they touch the business. Flowing data diagnostics, always on.",
    icon: Activity,
    metric: "Live diagnostics",
  },
  {
    n: "03",
    t: "Issue Resolution & RCA",
    d: "Swift incident response with intelligent rerouting, then deep root-cause analysis to make sure the same incident never returns.",
    icon: Wrench,
    metric: "Self-healing routes",
  },
  {
    n: "04",
    t: "Optimization & Reporting",
    d: "Continuous tuning, executive-ready health reports, and infrastructure recommendations that compound performance over time.",
    icon: LineChart,
    metric: "Compounding gains",
  },
];

function MuleSoftPage() {
  const [active, setActive] = useState("arch");

  return (
    <>
      <AmbientBg variant="mulesoft" />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">MuleSoft Solutions</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient max-w-4xl">
            A futuristic integration <span className="text-gradient-accent">operating system.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Modernize legacy systems, manage APIs, and optimize integrations with end-to-end MuleSoft solutions built for enterprise scale.
          </motion.p>

          {/* Blueprint visual */}
          <Reveal>
            <div className="mt-14 relative rounded-3xl overflow-hidden glass-strong p-8 md:p-12">
              <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
              <BlueprintTopology />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODULES with sticky side nav */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionHeader eyebrow="End-to-end services" title="The full integration lifecycle." />
            <ModuleNav
              modules={modules}
              active={active}
              onSelect={(id) => {
                setActive(id);
                document.getElementById(`mod-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            />
          </aside>

          <div className="lg:col-span-8 space-y-4">
            {modules.map((m, i) => (
              <ExpandingModule key={m.id} mod={m} index={i} active={active === m.id} onOpen={() => setActive(m.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — Orchestration Journey */}
      <section className="relative px-6 py-28">
        <div className="absolute inset-0 -z-[1] pointer-events-none">
          <div className="absolute inset-0 blueprint-bg radial-fade-soft opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our process"
            title="A 4-stage orchestration journey."
            lead="Continuous, instrumented, observable — every stage feeds the next, compounding intelligence across your integration estate."
          />
          <OrchestrationJourney steps={steps} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <img src={mulesoftLogo} alt="MuleSoft from Salesforce" className="relative mx-auto mb-6 h-12 w-auto object-contain rounded-md" />
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.025em] text-foreground">Ready to orchestrate?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Let's design an integration architecture worthy of your ambition.</p>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Get Started <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}

function ExpandingModule({ mod, index, active, onOpen }: { mod: typeof modules[number]; index: number; active: boolean; onOpen: () => void }) {
  return (
    <motion.div
      id={`mod-${mod.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.04 }}
      className={`glass-strong rounded-2xl overflow-hidden transition-colors ${active ? "border-primary/30" : ""}`}
    >
      <button onClick={onOpen} className="w-full flex items-start gap-5 p-7 text-left">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl glass shrink-0">
          <mod.icon size={20} className="text-primary" />
        </div>
        <div className="flex-1">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Module 0{index + 1}</div>
          <h3 className="font-display text-2xl text-foreground">{mod.title}</h3>
          <p className="text-sm text-muted-foreground mt-1.5">{mod.short}</p>
        </div>
        <div className="shrink-0 mt-1">{active ? <Minus size={18} className="text-primary" /> : <Plus size={18} className="text-muted-foreground" />}</div>
      </button>
      <motion.div initial={false} animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
        <div className="px-7 pb-7 pl-[7.25rem] -mt-1">
          <p className="text-foreground/80 leading-relaxed">{mod.long}</p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
            {mod.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />{b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BlueprintTopology() {
  const layers = [
    { name: "Experience APIs", desc: "Channel-specific consumers" },
    { name: "Process APIs", desc: "Business orchestration logic" },
    { name: "System APIs", desc: "Source systems & legacy adapters" },
  ];
  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-4">
        {layers.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Layer 0{i + 1}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            </div>
            <h4 className="font-display text-lg">{l.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{l.desc}</p>
            <div className="mt-4 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, k) => (
                <div key={k} className="h-1.5 rounded-sm bg-white/5" style={{ background: `linear-gradient(90deg, rgba(0,255,148,${0.15 + (k % 3) * 0.15}), rgba(0,194,255,${0.1 + (k % 2) * 0.2}))` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span>API-LED CONNECTIVITY</span>
        <span>3,482 TX/S · 99.99% UPTIME</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Premium sticky module navigator — numbered, glowing, expanding active state.
   --------------------------------------------------------------------------- */
function ModuleNav({
  modules,
  active,
  onSelect,
}: {
  modules: { id: string; title: string; short: string; icon: typeof Layers3 }[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const activeIndex = Math.max(0, modules.findIndex((m) => m.id === active));
  const progress = ((activeIndex + 1) / modules.length) * 100;

  return (
    <div className="mt-8 relative">
      {/* Architectural rail */}
      <div className="absolute left-[14px] top-2 bottom-2 w-px bg-white/[0.06]" aria-hidden />
      <motion.div
        className="absolute left-[14px] top-2 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent"
        initial={false}
        animate={{ height: `calc(${progress}% - 4px)` }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
        aria-hidden
      />

      <ol className="space-y-1.5">
        {modules.map((m, i) => {
          const isActive = active === m.id;
          return (
            <li key={m.id}>
              <button
                onClick={() => onSelect(m.id)}
                aria-current={isActive ? "true" : undefined}
                className={`group relative w-full pl-10 pr-3 py-3 rounded-xl text-left transition-all duration-300 ${
                  isActive
                    ? "bg-primary/[0.06] border border-primary/30 shadow-[0_0_24px_-12px_rgba(0,255,148,0.4)]"
                    : "border border-transparent hover:bg-white/[0.025] hover:border-white/[0.06]"
                }`}
              >
                {/* Node marker on rail */}
                <span
                  className={`absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-6 w-6 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_rgba(0,255,148,0.6)]"
                      : "bg-background border-white/15 text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[9px] font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </span>

                <div className="flex items-center gap-3">
                  <m.icon size={15} className={isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground transition-colors"} />
                  <span className={`flex-1 text-sm font-medium tracking-tight ${isActive ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"}`}>
                    {m.title}
                  </span>
                </div>

                {/* Expanding subtitle on active */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 ml-7 text-[12px] text-muted-foreground leading-relaxed pr-2">{m.short}</p>
                </motion.div>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 ml-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
        Module {String(activeIndex + 1).padStart(2, "0")} of {String(modules.length).padStart(2, "0")}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Orchestration Journey — animated 4-stage horizontal pipeline with traveling
   data pulse, connected stage cards, and scroll-triggered activation.
   --------------------------------------------------------------------------- */
function OrchestrationJourney({
  steps,
}: {
  steps: { n: string; t: string; d: string; icon: typeof Layers3; metric: string }[];
}) {
  const [activeStage, setActiveStage] = useState(0);

  // Cycle the "live pulse" across stages
  useEffect(() => {
    const id = setInterval(() => setActiveStage((s) => (s + 1) % steps.length), 2800);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="mt-16 relative">
      {/* Pipeline rail */}
      <div className="hidden md:block absolute left-0 right-0 top-[68px] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Live energy traveling across the rail */}
      <div className="hidden md:block absolute left-0 right-0 top-[68px] h-[2px] overflow-hidden">
        <motion.div
          className="absolute top-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ left: ["-10%", "110%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="grid md:grid-cols-4 gap-5 md:gap-4 relative">
        {steps.map((s, i) => {
          const isLive = activeStage === i;
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.9, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector arrow between stages */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute right-[-12px] top-[60px] z-10 items-center justify-center">
                  <span className={`h-2 w-2 rotate-45 border-t border-r ${isLive ? "border-primary" : "border-white/20"} transition-colors`} />
                </div>
              )}

              {/* Node */}
              <div className="relative mb-5 h-[36px] flex items-center">
                <div
                  className={`relative grid place-items-center h-9 w-9 rounded-full transition-all duration-500 ${
                    isLive
                      ? "bg-primary text-primary-foreground shadow-[0_0_28px_rgba(0,255,148,0.6)]"
                      : "bg-background border border-white/15 text-muted-foreground"
                  }`}
                >
                  <Icon size={15} />
                  {isLive && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-primary"
                      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  )}
                </div>
                <div className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Stage {s.n}
                </div>
              </div>

              <div
                className={`relative glass-strong rounded-2xl p-6 h-full transition-all duration-500 ${
                  isLive ? "border-primary/30 -translate-y-1" : "hover:-translate-y-1 hover:border-primary/20"
                }`}
              >
                {/* Stage data stream visual */}
                <div className="flex gap-0.5 h-6 mb-4 items-end">
                  {Array.from({ length: 14 }).map((_, k) => (
                    <motion.div
                      key={k}
                      className="w-1 rounded-sm bg-primary/30"
                      animate={
                        isLive
                          ? { height: ["20%", `${30 + ((k * 37) % 70)}%`, "20%"] }
                          : { height: `${15 + ((k * 23) % 30)}%` }
                      }
                      transition={
                        isLive
                          ? { duration: 1.2, repeat: Infinity, delay: k * 0.06, ease: "easeInOut" }
                          : { duration: 0 }
                      }
                    />
                  ))}
                </div>

                <h3 className="font-display font-semibold text-[17px] text-foreground tracking-tight leading-snug">{s.t}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.d}</p>

                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-primary animate-pulse-glow" : "bg-white/20"}`} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">{s.metric}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
