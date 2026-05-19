import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/Section";
import { AmbientBg } from "@/components/AmbientBg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nuvarez" },
      { name: "description", content: "Transform the way your business operates with expert MuleSoft and Salesforce solutions. Talk to a Nuvarez integration expert." },
      { property: "og:title", content: "Contact — Nuvarez" },
      { property: "og:description", content: "Request a consultation with Nuvarez." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <AmbientBg variant="default" />

      <section className="relative pt-32 md:pt-44 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Contact us"
              title={<>Let's design your <span className="text-gradient-accent">integration future.</span></>}
              lead="Transform the way your business operates with expert MuleSoft and Salesforce solutions from Nuvarez."
            />

            <div className="mt-12 space-y-5">
              <InfoRow icon={Phone} label="Call us · Mon–Fri 9–19" value="+1 (872) 217-0356" href="tel:+18722170356" />
              <InfoRow icon={Mail} label="General inquiries" value="info@nuvarez.com" href="mailto:info@nuvarez.com" />
              <InfoRow icon={Mail} label="Careers" value="hr@nuvarez.com" href="mailto:hr@nuvarez.com" />
              <InfoRow icon={MapPin} label="Headquarters" value="131 Continental Drive, Suite 301, Newark, DE 19713" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Request a consultation</div>
                <h2 className="font-display text-3xl mb-8">Drop us a line.</h2>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 mb-4">
                      <CheckCircle2 size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display text-2xl">Message received.</h3>
                    <p className="text-muted-foreground mt-2">A Nuvarez integration expert will be in touch within one business day.</p>
                  </motion.div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Company" name="company" />
                    <Field label="Phone" name="phone" type="tel" />
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">How can we help?</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full bg-transparent rounded-xl glass border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Tell us about your integration challenge..."
                      />
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#00D97E] px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_-6px_rgba(0,255,148,0.6)] transition">
                        Send message <Send size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">{label}</label>
      <input
        name={name} type={type} required={required}
        className="w-full bg-transparent rounded-xl glass border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="group glass rounded-2xl p-5 flex items-start gap-4 hover-lift">
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
        <Icon size={16} className="text-primary" />
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-display text-base mt-0.5 text-foreground group-hover:text-primary transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
