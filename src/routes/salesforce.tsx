import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ClipboardCheck, Sparkles, Rocket, Users, BarChart3 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/salesforce")({
  head: () => ({
    meta: [
      { title: "Salesforce Solutions — Nuvarez" },
      { name: "description", content: "Strategic advisory, tailored implementations, and continuous optimization across sales, service, marketing, and commerce on Salesforce." },
      { property: "og:title", content: "Salesforce Solutions — Nuvarez" },
      { property: "og:description", content: "Reimagining customer connections with the world's #1 CRM platform." },
    ],
  }),
  component: SalesforcePage,
});

const advisory = [
  { icon: Compass, t: "CRM strategy", d: "Aligned with your business goals and customer KPIs." },
  { icon: ClipboardCheck, t: "Product & licensing", d: "Right-sized cloud and license selection." },
  { icon: BarChart3, t: "Health checks", d: "Audit your current org and uncover ROI gaps." },
  { icon: Rocket, t: "Scalable roadmaps", d: "Phase your Salesforce growth intelligently." },
  { icon: Users, t: "Change management", d: "Drive adoption with people-first rollouts." },
];

const process = [
  { n: "01", t: "Discovery & Assessment", d: "We analyze your current systems, business goals, and pain points to identify gaps and opportunities within your Salesforce landscape." },
  { n: "02", t: "Strategic Planning", d: "A tailored Salesforce roadmap with clear milestones, budget planning, and risk mitigation strategies." },
  { n: "03", t: "Solution Recommendation", d: "Best-fit clouds, integrations, and license mix — designed around your customer journey." },
  { n: "04", t: "Continuous Optimization", d: "Iterative improvements to keep adoption climbing and ROI compounding." },
];

const journey = [
  { stage: "Lead", color: "from-accent/60 to-accent/0" },
  { stage: "Engage", color: "from-teal/60 to-teal/0" },
  { stage: "Convert", color: "from-primary/60 to-primary/0" },
  { stage: "Service", color: "from-accent/60 to-accent/0" },
  { stage: "Expand", color: "from-primary/60 to-primary/0" },
];

function SalesforcePage() {
  return (
    <>
      <AmbientBg variant="salesforce" />

      <section className="relative pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">Salesforce Solutions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient">
              Customer connections, <span className="text-gradient-accent">reimagined.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
              Strategic advisory, tailored implementations, and continuous optimization across the entire Salesforce ecosystem — sales, service, marketing, commerce.
            </motion.p>
            <div className="mt-8"><MagneticButton to="/contact">Talk to a CRM strategist <ArrowRight size={16} /></MagneticButton></div>
          </div>

          {/* Journey ribbon visual */}
          <Reveal>
            <div className="lg:col-span-6 w-full">
              <div className="relative glass-strong rounded-3xl p-6 md:p-8 overflow-visible w-full">
                <div className="absolute inset-0 grid-bg radial-fade opacity-40 rounded-3xl pointer-events-none" />
                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-5">Customer Journey · Orchestrated</div>
                  <div className="space-y-2.5">
                    {journey.map((j, i) => (
                      <motion.div
                        key={j.stage}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 text-[10px] font-mono text-muted-foreground shrink-0">0{i + 1}</div>
                        <div className="flex-1 h-10 rounded-lg glass overflow-hidden relative">
                          <div className={`absolute inset-y-0 left-0 bg-gradient-to-r ${j.color}`} style={{ width: `${60 + i * 8}%` }} />
                          <div className="relative h-full flex items-center px-3 text-sm font-medium">{j.stage}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <Metric k="+38%" v="Conversion" />
                    <Metric k="2.4x" v="LTV" />
                    <Metric k="-41%" v="Churn" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advisory */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Advisory services" title="From lead to long-term customer." lead="Every step connected, data-driven, and built to scale." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {advisory.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.05}>
                <div className="glass-strong rounded-2xl p-6 h-full hover-lift">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl glass mb-4">
                    <a.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg mb-1.5">{a.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Our 4-step advisory process" title="Disciplined. Iterative. Outcome-led." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative glass-strong rounded-2xl p-7 hover-lift h-full flex flex-col">
                  <div className="font-display text-5xl text-gradient-accent leading-none mb-4">{s.n}</div>
                  <h3 className="font-display text-lg mb-2 text-foreground">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <Sparkles size={20} className="text-accent mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Make every customer moment count.</h2>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Get Started <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="glass rounded-lg py-2">
      <div className="font-display text-lg text-gradient-accent">{k}</div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{v}</div>
    </div>
  );
}
