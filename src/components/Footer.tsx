import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import nuvarezLogo from "@/assets/brand/nuvarez.png";

const mulesoftLinks = [
  "Integration Architecture & Strategy",
  "Mulesoft Implementation",
  "API Design & Development",
  "Mulesoft Migration Services",
  "Managed Integration Services",
  "Legacy System Modernization",
  "Application Support & Maintenance",
];

const salesforceLinks = [
  "Salesforce Advisory",
  "Salesforce Implementation",
  "System Integration",
  "Data Migration & Cleanup",
  "Business Process Automation",
  "Analytics & Reporting",
  "Managed Services",
];

const quickLinks: { label: string; to: string }[] = [
  { label: "About Nuvarez", to: "/company" },
  { label: "Our Team", to: "/company" },
  { label: "Careers", to: "/careers" },
  { label: "Insights", to: "/insights" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32 overflow-hidden bg-[#04060a]">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block">
              <img
                src={nuvarezLogo}
                alt="Nuvarez"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <div className="mt-7 space-y-2 text-sm text-foreground/80">
              <p className="font-medium text-foreground">+1 (945) 350-5561</p>
              <p>info@nuvarez.com</p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Mulesoft */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-5">MuleSoft Solutions</p>
            <ul className="space-y-3 text-[13.5px]">
              {mulesoftLinks.map((l) => (
                <li key={l}>
                  <Link to="/mulesoft" className="text-muted-foreground hover:text-primary transition">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Salesforce */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-5">Salesforce Solutions</p>
            <ul className="space-y-3 text-[13.5px]">
              {salesforceLinks.map((l) => (
                <li key={l}>
                  <Link to="/salesforce" className="text-muted-foreground hover:text-primary transition">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-5">Quick Links</p>
            <ul className="space-y-3 text-[13.5px]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nuvarez. All rights reserved.</p>
          <p className="text-xs text-muted-foreground font-mono">SYSTEM://INTEGRATION.ONLINE</p>
        </div>
      </div>
    </footer>
  );
}
