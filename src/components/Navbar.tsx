import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/mulesoft", label: "MuleSoft" },
  { to: "/salesforce", label: "Salesforce" },
  { to: "/company", label: "Company" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`mt-4 w-full max-w-6xl glass-strong rounded-2xl transition-all duration-500 ${
          scrolled ? "py-2 shadow-2xl shadow-black/50" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-[2px] rounded-[7px] bg-background grid place-items-center">
                <span className="font-display font-bold text-sm text-gradient-accent">N</span>
              </div>
            </div>
            <span className="font-display font-semibold tracking-tight text-foreground">Nuvarez</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative ${active ? "text-foreground" : ""}`}>{l.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#00D97E] px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_-4px_rgba(0,255,148,0.6)]"
            >
              <span>Talk to an Expert</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse-glow" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5 mt-2"
            >
              <div className="flex flex-col p-3 gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      pathname === l.to ? "bg-white/5 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 px-3 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground text-center"
                >
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
