import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Plus, Minus, Workflow, Code2, GitBranch, Database, LifeBuoy, Layers3, Radar, Activity, Wrench, LineChart } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

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
  { n: "01", t: "Onboarding & Assessment", d: "Review of your current architecture, integrations, and support needs to define tailored SLAs." },
  { n: "02", t: "24/7 Monitoring", d: "Real-time tools detect anomalies, latency, and errors — ensuring system stability." },
  { n: "03", t: "Resolution & RCA", d: "Swiftly resolve incidents, then conduct root cause analysis to prevent recurrence." },
  { n: "04", t: "Optimization & Reporting", d: "Regular health reports, performance insights, and recommendations to keep you agile." },
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
            <ul className="mt-8 space-y-1">
              {modules.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => { setActive(m.id); document.getElementById(`mod-${m.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition ${
                      active === m.id ? "glass border-primary/30 text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <m.icon size={16} className={active === m.id ? "text-primary" : ""} />
                    <span className="flex-1">{m.title}</span>
                    <span className={`h-1 w-6 rounded-full ${active === m.id ? "bg-primary" : "bg-white/10"} transition`} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="lg:col-span-8 space-y-4">
            {modules.map((m, i) => (
              <ExpandingModule key={m.id} mod={m} index={i} active={active === m.id} onOpen={() => setActive(m.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS Timeline */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Our process" title="A 4-step orchestration loop." lead="Continuous, instrumented, observable — the way enterprise integration should run." />
          <div className="mt-16 relative">
            <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative glass-strong rounded-2xl p-6 hover-lift">
                    <div className="relative w-10 h-10 rounded-full bg-background border border-primary/30 grid place-items-center mb-5">
                      <Activity size={14} className="text-primary" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{s.n}</div>
                    <h3 className="font-display text-lg mt-1 mb-2">{s.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Ready to orchestrate?</h2>
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
