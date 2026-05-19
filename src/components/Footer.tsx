import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] conic-glow animate-spin-slow" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent" />
                <div className="absolute inset-[2px] rounded-[7px] bg-background grid place-items-center">
                  <span className="font-display font-bold text-gradient-accent">N</span>
                </div>
              </div>
              <span className="font-display font-semibold text-xl">Nuvarez</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-gradient max-w-md leading-tight">
              Architecting the next generation of enterprise integration.
            </h3>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-primary font-medium group">
              Start a project
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Platform</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/mulesoft" className="text-foreground/80 hover:text-primary transition">MuleSoft</Link></li>
                <li><Link to="/salesforce" className="text-foreground/80 hover:text-primary transition">Salesforce</Link></li>
                <li><Link to="/company" className="text-foreground/80 hover:text-primary transition">Company</Link></li>
                <li><Link to="/careers" className="text-foreground/80 hover:text-primary transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Regions</p>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                <li>United States</li>
                <li>India</li>
                <li>Mexico</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-foreground/80"><MapPin size={16} className="mt-0.5 text-primary" /><span>131 Continental Drive, Suite 301, Newark, DE 19713</span></li>
              <li className="flex items-center gap-3 text-foreground/80"><Phone size={16} className="text-primary" /><span>+1 (872) 217-0356</span></li>
              <li className="flex items-center gap-3 text-foreground/80"><Mail size={16} className="text-primary" /><span>info@nuvarez.com</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nuvarez. All rights reserved.</p>
          <p className="text-xs text-muted-foreground font-mono">SYSTEM://INTEGRATION.ONLINE</p>
        </div>
      </div>
    </footer>
  );
}
