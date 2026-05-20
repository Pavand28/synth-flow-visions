import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Landmark, ShoppingBag, Factory, Truck, GraduationCap, Cpu, Building2, Network, Database, Workflow, BarChart3, RefreshCw, Cloud } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Nuvarez" },
      { name: "description", content: "Industries Nuvarez empowers with MuleSoft, Salesforce and enterprise integration solutions." },
      { property: "og:title", content: "Industries We Empower — Nuvarez" },
      { property: "og:description", content: "Connecting systems, data, and teams across modern enterprises." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Heart, name: "Healthcare", desc: "Unify patient systems, automate workflows, and enable secure data exchange across platforms." },
  { icon: Landmark, name: "Financial Services", desc: "Connect core banking, CRM, compliance, and customer data into secure digital workflows." },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Create connected customer journeys across commerce, inventory, CRM, and support systems." },
  { icon: Factory, name: "Manufacturing", desc: "Modernize operations by connecting ERP, supply chain, production, and analytics platforms." },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Enable real-time visibility across shipments, warehouses, partners, and customer touchpoints." },
  { icon: GraduationCap, name: "Education", desc: "Connect student systems, admissions, learning platforms, and engagement workflows." },
  { icon: Cpu, name: "Technology & SaaS", desc: "Scale integrations across product platforms, customer success, billing, and analytics." },
  { icon: Building2, name: "Real Estate", desc: "Unify lead management, property data, client communication, and reporting workflows." },
];

const capabilities = [
  { icon: Network, t: "API-led connectivity" },
  { icon: Cloud, t: "CRM transformation" },
  { icon: Database, t: "Data migration" },
  { icon: Workflow, t: "Workflow automation" },
  { icon: RefreshCw, t: "Legacy modernization" },
  { icon: BarChart3, t: "Analytics & reporting" },
];

function IndustriesPage() {
  return (
    <>
      <AmbientBg variant="default" />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">Industries</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient max-w-4xl">
            Industries we <span className="text-gradient-accent">empower.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Connecting systems, data, and teams across modern enterprises.
          </motion.p>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.04}>
              <div className="glass-strong rounded-2xl p-6 h-full hover-lift">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl glass mb-4">
                  <it.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Cross-industry capabilities" title="One foundation. Every industry." lead="The same integration disciplines power outcomes across sectors." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.04}>
                <div className="glass rounded-xl p-5 flex items-center gap-4 hover-lift">
                  <div className="h-10 w-10 rounded-lg glass grid place-items-center"><c.icon size={16} className="text-primary" /></div>
                  <span className="font-display text-base text-foreground">{c.t}</span>
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
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Build a connected enterprise for your industry.</h2>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Talk to Nuvarez <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}
