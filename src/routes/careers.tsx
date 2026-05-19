import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader, Reveal } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Nuvarez" },
      { name: "description", content: "Be part of Nuvarez's rapid expansion in the integration and CRM space. Senior-only delivery. Global presence." },
      { property: "og:title", content: "Careers — Nuvarez" },
      { property: "og:description", content: "Join the team architecting intelligent enterprise ecosystems." },
    ],
  }),
  component: CareersPage,
});

const values = [
  { t: "Passionate Learners", d: "Curiosity is non-negotiable." },
  { t: "Collaborative Players", d: "We win as a team." },
  { t: "Creative Problem Solvers", d: "Elegant answers to hard questions." },
  { t: "Client-Focused", d: "Their outcomes are our outcomes." },
  { t: "Growth-Minded", d: "Compound mastery, every quarter." },
  { t: "Innovation Drivers", d: "Push the platform forward." },
];

const openings = [
  { title: "MuleSoft Developer", type: "Full-Time", locations: ["India", "Mexico", "USA"], posted: "10 months ago" },
  { title: "Senior Salesforce Consultant", type: "Full-Time", locations: ["USA", "Mexico"], posted: "Open" },
  { title: "Integration Architect", type: "Full-Time", locations: ["USA", "India"], posted: "Open" },
];

function CareersPage() {
  return (
    <>
      <AmbientBg variant="careers" />

      <section className="relative pt-32 md:pt-44 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-6">
              <Sparkles size={12} className="text-primary" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">Careers · Hiring globally</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient">
              Build the integration <span className="text-gradient-accent">future</span> with us.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
              Be part of Nuvarez's rapid expansion in the integration and CRM space. Technical mastery meets collaborative culture and client-first thinking.
            </motion.p>
          </div>
          <div className="lg:col-span-4">
            <div className="glass-strong rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">Hiring across</div>
              <div className="flex flex-wrap gap-2">
                {["USA", "India", "Mexico"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs"><MapPin size={12} className="text-primary" />{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What we look for" title="Talent with taste." lead="People who turn integration challenges into elegant business outcomes." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="glass-strong rounded-2xl p-7 hover-lift h-full">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">0{i + 1}</div>
                  <h3 className="font-display text-xl mt-1.5">{v.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Current openings" title="Roles that matter." />
          <div className="mt-12 space-y-3">
            {openings.map((o, i) => (
              <Reveal key={o.title + i} delay={i * 0.05}>
                <a href="mailto:hr@nuvarez.com?subject=Application: {o.title}" className="group block">
                  <div className="glass-strong rounded-2xl p-6 md:p-7 hover-lift">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                          <Briefcase size={18} className="text-primary" />
                          <h3 className="font-display text-xl">{o.title}</h3>
                        </div>
                      </div>
                      <div className="md:col-span-2 text-sm text-muted-foreground">{o.type}</div>
                      <div className="md:col-span-3 flex flex-wrap gap-1.5">
                        {o.locations.map((l) => (
                          <span key={l} className="text-[11px] font-mono px-2 py-0.5 rounded-full glass">{l}</span>
                        ))}
                      </div>
                      <div className="md:col-span-1 text-xs text-muted-foreground">{o.posted}</div>
                      <div className="md:col-span-1 flex md:justify-end">
                        <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:translate-x-0.5 transition-transform">Apply <ArrowRight size={14} /></span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 glass rounded-2xl p-6 text-sm text-muted-foreground">
              <span className="text-foreground/80">Don't see the right role?</span> Send your resume to{" "}
              <a className="text-primary underline-offset-4 hover:underline" href="mailto:hr@nuvarez.com">hr@nuvarez.com</a> — we're always interested in exceptional integration talent.
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-gradient">Ready to architect what's next?</h2>
          <div className="mt-8 flex justify-center"><MagneticButton to="/contact">Talk to our team <ArrowRight size={16} /></MagneticButton></div>
        </div>
      </section>
    </>
  );
}
