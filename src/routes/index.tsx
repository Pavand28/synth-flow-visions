import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Layers, Lock, Sparkles, Network, Cog, Globe2 } from "lucide-react";
import { HeroEcosystem } from "@/components/HeroEcosystem";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuvarez — Enterprise Integration, Architected" },
      { name: "description", content: "Modernize legacy systems, orchestrate APIs, and deliver connected experiences with MuleSoft & Salesforce certified experts." },
      { property: "og:title", content: "Nuvarez — Enterprise Integration, Architected" },
      { property: "og:description", content: "Modernize legacy systems, orchestrate APIs, and deliver connected experiences." },
    ],
  }),
  component: Home,
});

const advantages = [
  { icon: ShieldCheck, title: "Certified Experts", body: "MuleSoft & Salesforce certified consultants with deep platform mastery and a strategic delivery mindset." },
  { icon: Zap, title: "Speed to Value", body: "Proven delivery frameworks that compress discovery-to-deployment and accelerate measurable ROI." },
  { icon: Layers, title: "Tailored & Scalable", body: "Architectures designed around your business goals — adaptive, modular, and built to scale with you." },
  { icon: Lock, title: "Security-First", body: "Enterprise-grade governance, compliance, and security woven into every integration we ship." },
  { icon: Sparkles, title: "Boutique Attention", body: "Direct access to senior-level expertise on every engagement — no junior hand-offs, ever." },
  { icon: Cog, title: "End-to-End Ownership", body: "From blueprint to build to beyond — partners that evolve with your ecosystem." },
];

const regions = [
  { code: "USA", city: "Newark, DE", role: "Headquarters" },
  { code: "IND", city: "India", role: "Delivery Center" },
  { code: "MEX", city: "Mexico", role: "Nearshore Hub" },
];

function Home() {
  return (
    <>
      {/* HERO — integrated ecosystem environment */}
      <section className="relative min-h-[100vh] pt-32 md:pt-36 pb-24 px-6 overflow-hidden">
        {/* Hero-local environmental layers that BLEND into the page bg */}
        <div className="absolute inset-0 -z-[1] pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full bg-primary/[0.10] blur-[140px]" />
          <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-accent/[0.08] blur-[120px]" />
          <div className="absolute inset-0 blueprint-bg opacity-50 spotlight-top" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-7"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/80">Official Salesforce &amp; MuleSoft Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.9, 0.3, 1] }}
              className="font-display font-semibold text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-[-0.03em] text-foreground text-balance"
            >
              Enterprise integration,
              <br />
              <span className="text-gradient-accent">architected.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-7 text-[17px] text-muted-foreground max-w-xl leading-relaxed text-pretty"
            >
              We modernize legacy systems, orchestrate APIs, and deliver connected experiences across your enterprise ecosystem — with the precision of a boutique partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton to="/contact">
                Talk to an Expert <ArrowRight size={16} />
              </MagneticButton>
              <Link to="/mulesoft" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition px-3 py-3 group">
                Explore the platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { k: "100+", v: "MuleSoft projects" },
                { k: "3", v: "Global regions" },
                { k: "99.99%", v: "SLA uptime" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display font-semibold text-2xl text-foreground tracking-tight">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <HeroEcosystem />
          </div>
        </div>
      </section>

      {/* WHO WE ARE — split */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Who we are"
              title={<>We turn integration <em className="not-italic text-gradient-accent">complexity</em> into business advantage.</>}
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="glass-strong rounded-2xl p-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  As a boutique MuleSoft and Salesforce systems integration partner, we deliver more than technical solutions — we create competitive edges.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our seasoned team takes on your toughest integration challenges and converts them into opportunities for innovation. Deep technical expertise meets strategic insight to build solutions that don't just connect systems — they transform businesses.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid sm:grid-cols-3 gap-3">
                {regions.map((r) => (
                  <div key={r.code} className="glass rounded-2xl p-5 hover-lift">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">{r.role}</div>
                    <div className="font-display text-2xl text-foreground">{r.code}</div>
                    <div className="text-xs text-muted-foreground mt-1">{r.city}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADVANTAGES — Bento */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Nuvarez Advantage"
            title="The smart choice for your business."
            lead="Six commitments that define every Nuvarez engagement — from blueprint to long-term partnership."
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group relative glass-strong rounded-2xl p-7 h-full hover-lift overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl glass mb-5 group-hover:border-primary/40 transition-colors">
                      <a.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                    <div className="absolute top-6 right-6 font-mono text-[10px] text-muted-foreground/60">0{i + 1}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS — diagonal split */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Technology partnerships"
            title="Two platforms. One ecosystem."
            lead="MuleSoft for the wiring, Salesforce for the relationship. Nuvarez orchestrates them as one."
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            <Reveal>
              <Link to="/mulesoft" className="group relative block rounded-3xl overflow-hidden glass-strong h-full p-10 hover-lift">
                <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
                <div className="absolute -top-24 -right-24 w-72 h-72 conic-glow opacity-30 group-hover:opacity-50 transition" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Network size={20} className="text-primary" />
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">MuleSoft</span>
                  </div>
                  <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-4">Deliver more, faster.</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    API-led architectures that unlock data, orchestrate systems, and scale digital initiatives — on-prem, cloud, or hybrid.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm text-primary">
                    Explore MuleSoft solutions
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link to="/salesforce" className="group relative block rounded-3xl overflow-hidden glass-strong h-full p-10 hover-lift">
                <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl opacity-40 group-hover:opacity-70 transition" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe2 size={20} className="text-accent" />
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">Salesforce</span>
                  </div>
                  <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-4">Reimagine customer connections.</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Strategic advisory, tailored implementations, and continuous optimization across sales, service, marketing, and commerce.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm text-accent">
                    Explore Salesforce solutions
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] conic-glow animate-spin-slow" />
          <div className="relative">
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.025em] text-foreground leading-[1.05] text-balance">
              Build smarter. <span className="text-gradient-accent">Ship faster.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Unlock the full power of your data with cutting-edge tools and expert guidance.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticButton to="/contact">Get Started <ArrowRight size={16} /></MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
