interface Props {
  variant?: "default" | "mulesoft" | "salesforce" | "company" | "careers";
}

/**
 * Cinematic environmental background system.
 * Layered: base → mesh aurora → blueprint grid → vignette → noise.
 * Variants tint the aurora to give each page a distinct atmosphere
 * while sharing the same infrastructure universe.
 */
export function AmbientBg({ variant = "default" }: Props) {
  const aurora: Record<NonNullable<Props["variant"]>, string> = {
    default:
      "radial-gradient(55% 45% at 18% 22%, rgba(0,255,148,0.16), transparent 60%), radial-gradient(45% 40% at 82% 28%, rgba(0,194,255,0.14), transparent 60%), radial-gradient(70% 55% at 50% 110%, rgba(80,60,200,0.10), transparent 65%)",
    mulesoft:
      "radial-gradient(60% 45% at 20% 25%, rgba(0,255,148,0.18), transparent 60%), radial-gradient(50% 40% at 80% 60%, rgba(0,210,180,0.12), transparent 60%), radial-gradient(70% 50% at 50% 105%, rgba(0,194,255,0.10), transparent 65%)",
    salesforce:
      "radial-gradient(55% 45% at 80% 20%, rgba(0,194,255,0.20), transparent 60%), radial-gradient(50% 40% at 15% 60%, rgba(0,150,255,0.12), transparent 60%), radial-gradient(70% 50% at 50% 110%, rgba(0,255,200,0.10), transparent 65%)",
    company:
      "radial-gradient(55% 45% at 50% 18%, rgba(80,90,220,0.14), transparent 65%), radial-gradient(50% 40% at 20% 80%, rgba(0,194,255,0.10), transparent 65%), radial-gradient(40% 35% at 85% 70%, rgba(0,255,148,0.08), transparent 65%)",
    careers:
      "radial-gradient(50% 40% at 20% 25%, rgba(0,255,148,0.14), transparent 60%), radial-gradient(50% 40% at 85% 75%, rgba(0,194,255,0.14), transparent 60%)",
  };

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Atmospheric aurora mesh */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: aurora[variant] }}
      />

      {/* Slow drifting orbs for environmental motion */}
      <div className="absolute top-[10%] left-[8%] w-[520px] h-[520px] rounded-full bg-primary/[0.07] blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[5%] right-[6%] w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[140px] animate-float-slow" style={{ animationDelay: "-4s" }} />

      {/* Blueprint infrastructure overlay */}
      <div className="absolute inset-0 blueprint-bg radial-fade-soft opacity-50" />

      {/* Subtle horizontal scanlines for "live system" feel */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Vignette + film grain */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)" }} />
      <div className="noise absolute inset-0" />
    </div>
  );
}
