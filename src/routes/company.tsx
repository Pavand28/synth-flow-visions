import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Nuvarez" },
      { name: "description", content: "Redefining what system integration can achieve. Meet the team architecting intelligent enterprise ecosystems." },
      { property: "og:title", content: "Company — Nuvarez" },
      { property: "og:description", content: "Boutique integration partner. Senior-only delivery. End-to-end ownership." },
    ],
  }),
  component: CompanyPage,
});

const principles = [
  { t: "Strategic Thinking", d: "We don't connect Point A to Point B. We map your entire data ecosystem, identify opportunities others miss, and design solutions that scale with your ambitions." },
  { t: "Boutique Advantage", d: "Direct access to senior-level expertise on every project. No junior hand-offs — only seasoned professionals who understand both technical nuance and business implication." },
  { t: "End-to-End Ownership", d: "From initial strategy through post-deployment optimization. Engagements that evolve into partnerships that adapt as your business grows." },
  { t: "Industry-Agnostic Expertise", d: "Salesforce, MuleSoft, cloud modernization, API strategy, data architecture, system optimization — the disciplines that define modern enterprise." },
];

const leaders = [
  {
    name: "Monil Porwal",
    role: "Founder & CEO",
    bio: "Enterprise integration expert with deep specialization in efficient, scalable, and ROI-driven MuleSoft solutions. Architect of Nuvarez's proprietary delivery framework, significantly reducing time-to-market across 100+ MuleSoft projects.",
  },
  {
    name: "Ian Peters",
    role: "Strategic Advisor",
    bio: "Decades of enterprise transformation experience guiding Fortune-class organizations through complex, mission-critical integration programs.",
  },
];

function CompanyPage() {
  return (
    <>
      <AmbientBg variant="company" />

      <section className="relative pt-32 md:pt-44 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">Our Story</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-gradient">
            Redefining what <span className="text-gradient-accent">system integration</span> can achieve.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto">
            We architect digital ecosystems that amplify human potential and accelerate business growth — built on the principle that technology serves strategy, not the other way around.
          </motion.p>
        </div>
      </section>

      {/* Editorial quote */}
      <section className="relative px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden">
              <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
              <Quote size={32} className="text-primary opacity-60" />
              <p className="relative mt-6 font-display text-2xl md:text-4xl leading-snug text-gradient">
                True integration goes far beyond making systems talk to each other. We build the connective tissue of the modern enterprise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles — zigzag */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="What we stand for" title="Four principles. One discipline." />
          <div className="mt-16 space-y-6">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <div className={`grid md:grid-cols-12 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:col-span-2 [direction:ltr]">
                    <div className="font-display text-6xl text-gradient-accent">{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="md:col-span-10 [direction:ltr] glass-strong rounded-2xl p-7 hover-lift">
                    <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Leadership" title="Experience that leads. Leadership that inspires." />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1}>
                <div className="relative glass-strong rounded-3xl p-8 hover-lift overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-48 h-48 conic-glow opacity-20" />
                  <div className="relative flex items-start gap-5">
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center shrink-0">
                      <span className="font-display text-2xl text-primary-foreground">{l.name.split(" ").map(s => s[0]).join("")}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl">{l.name}</h3>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-primary mt-1">{l.role}</div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Capabilities" title="The full integration stack." />
          <div className="mt-12 flex flex-wrap gap-3">
            {["Salesforce Integration", "MuleSoft Architecture", "Cloud Modernization", "API Strategy", "Data Architecture", "System Optimization", "Legacy Modernization", "Managed Services"].map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-foreground hover-lift">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />{c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Let's build the next chapter.</h2>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Get Started <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}
