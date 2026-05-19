import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, lead, align = "left" }: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.3, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 mb-5 ${align === "center" ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/80">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-gradient leading-[1.05]">{title}</h2>
      {lead && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{lead}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.9, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
