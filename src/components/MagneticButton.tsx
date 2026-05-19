import { useRef, MouseEvent, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "ghost";
  className?: string;
}

export function MagneticButton({ children, to = "/contact", variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,box-shadow,background] duration-300 will-change-transform";
  const styles = variant === "primary"
    ? "bg-gradient-to-r from-primary to-[#00D97E] text-primary-foreground hover:shadow-[0_0_40px_-6px_rgba(0,255,148,0.6)]"
    : "glass text-foreground hover:border-primary/40";

  return (
    <Link
      to={to}
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
