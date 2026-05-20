import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Nuvarez" },
      { name: "description", content: "Ideas, trends, and strategies for connected digital enterprises — MuleSoft, Salesforce, APIs, and data modernization." },
      { property: "og:title", content: "Insights — Nuvarez" },
      { property: "og:description", content: "Thought leadership for connected digital enterprises." },
    ],
  }),
  component: InsightsPage,
});

const featured = {
  category: "Integration Strategy",
  title: "Why API-led connectivity is becoming the backbone of modern enterprises",
  summary:
    "Modern organizations need systems that communicate seamlessly. API-led connectivity helps enterprises unlock reusable integrations, faster delivery, and scalable digital transformation.",
};

const posts = [
  { category: "Integration Modernization", title: "5 signs your business needs integration modernization", summary: "Disconnected systems, manual workarounds, and slow data access often signal that your integration layer needs a modern approach.", date: "Jan 12, 2026" },
  { category: "MuleSoft", title: "How MuleSoft accelerates digital transformation", summary: "MuleSoft helps teams connect applications, data, and devices through reusable APIs and governed integration patterns.", date: "Jan 18, 2026" },
  { category: "Salesforce", title: "Salesforce automation ideas for growing teams", summary: "From lead routing to service workflows, Salesforce automation can help teams reduce manual effort and improve customer response time.", date: "Jan 24, 2026" },
  { category: "Data Migration", title: "Data migration mistakes enterprises should avoid", summary: "Successful migration requires clean data, clear ownership, validation rules, and a careful rollout plan.", date: "Feb 02, 2026" },
  { category: "API Strategy", title: "Building scalable API ecosystems", summary: "A strong API ecosystem creates reusable services that support faster product launches and better system interoperability.", date: "Feb 10, 2026" },
  { category: "Analytics", title: "The role of analytics in connected customer experiences", summary: "Connected analytics helps teams understand customer behavior across systems and make better decisions in real time.", date: "Feb 16, 2026" },
];

function InsightsPage() {
  return (
    <>
      <AmbientBg variant="default" />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">Insights</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient max-w-3xl">
            <span className="text-gradient-accent">Insights</span> for connected enterprises.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ideas, trends, and strategies for connected digital enterprises.
          </motion.p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative grid lg:grid-cols-12 gap-8 glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
              <div className="lg:col-span-7 relative">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary">Featured · {featured.category}</span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-gradient leading-tight">{featured.title}</h2>
                <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-2xl">{featured.summary}</p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                  Read more <ArrowRight size={15} />
                </button>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-white/5">
                  <div className="absolute inset-0 blueprint-bg opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">API-LED · v3.0</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Latest articles" title="Fresh thinking from the Nuvarez team." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="glass-strong rounded-2xl p-6 h-full flex flex-col hover-lift group">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-primary mb-3">
                    <span>{p.category}</span>
                    <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar size={11} />{p.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground leading-snug">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">{p.summary}</p>
                  <button className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium self-start">
                    Read more <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Need a strategy for your integration roadmap?</h2>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Book a Consultation <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}
