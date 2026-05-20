import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send, Calendar, Building2, Workflow, Cloud, Phone } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string; quick?: { label: string; value: string }[] };

type BookingStep = "name" | "email" | "phone" | "service" | "date" | "done";

const services = ["MuleSoft", "Salesforce", "Integration Consulting", "Other"];

const initialQuick = [
  { label: "Book Appointment", value: "book" },
  { label: "About Nuvarez", value: "about" },
  { label: "MuleSoft Services", value: "mulesoft" },
  { label: "Salesforce Services", value: "salesforce" },
  { label: "Contact Team", value: "contact" },
];

const greeting: Msg = {
  role: "bot",
  text: "Hi — I'm Nuva, the Nuvarez assistant. How can I help today?",
  quick: initialQuick,
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [booking, setBooking] = useState<null | {
    step: BookingStep;
    data: Partial<Record<BookingStep, string>>;
  }>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const push = (m: Msg) => setMessages((prev) => [...prev, m]);

  const handleQuick = (value: string) => {
    push({ role: "user", text: labelFor(value) });
    setTimeout(() => respond(value), 250);
  };

  const labelFor = (v: string) => initialQuick.find((q) => q.value === v)?.label ?? v;

  const respond = (intent: string) => {
    switch (intent) {
      case "about":
        push({
          role: "bot",
          text: "Nuvarez is a boutique MuleSoft & Salesforce integration consultancy. We architect connected enterprise ecosystems — strategy, implementation, and managed services across the US, India, and Mexico.",
          quick: initialQuick,
        });
        return;
      case "mulesoft":
        push({
          role: "bot",
          text: "Our MuleSoft practice covers Integration Architecture, Anypoint Implementation, API Design, Migration, Legacy Modernization and 24/7 Managed Services.",
          quick: [
            { label: "Book Appointment", value: "book" },
            { label: "Contact Team", value: "contact" },
          ],
        });
        return;
      case "salesforce":
        push({
          role: "bot",
          text: "On Salesforce we deliver CRM advisory, implementation, system integration, data migration, automation and analytics — across Sales, Service, Marketing & Commerce clouds.",
          quick: [
            { label: "Book Appointment", value: "book" },
            { label: "Contact Team", value: "contact" },
          ],
        });
        return;
      case "contact":
        push({
          role: "bot",
          text: "You can reach us at info@nuvarez.com or +1 (945) 350-5561. Want me to book a consultation for you?",
          quick: [{ label: "Book Appointment", value: "book" }],
        });
        return;
      case "book":
        setBooking({ step: "name", data: {} });
        push({ role: "bot", text: "Great — let's get you scheduled. What's your full name?" });
        return;
      default:
        push({ role: "bot", text: "I can help with services, company info, or booking a call.", quick: initialQuick });
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    push({ role: "user", text });

    if (booking) {
      const next = { ...booking, data: { ...booking.data, [booking.step]: text } };
      setTimeout(() => advanceBooking(next), 250);
      return;
    }

    // Naive keyword routing for free text
    const lower = text.toLowerCase();
    setTimeout(() => {
      if (lower.includes("book") || lower.includes("appointment") || lower.includes("meeting")) respond("book");
      else if (lower.includes("mule")) respond("mulesoft");
      else if (lower.includes("sales")) respond("salesforce");
      else if (lower.includes("about") || lower.includes("company")) respond("about");
      else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) respond("contact");
      else
        push({
          role: "bot",
          text: "Thanks! A Nuvarez specialist can take that further. Would you like to book a quick consultation?",
          quick: [
            { label: "Book Appointment", value: "book" },
            { label: "About Nuvarez", value: "about" },
          ],
        });
    }, 300);
  };

  const advanceBooking = (state: { step: BookingStep; data: Partial<Record<BookingStep, string>> }) => {
    switch (state.step) {
      case "name":
        setBooking({ ...state, step: "email" });
        push({ role: "bot", text: `Nice to meet you, ${state.data.name}. What's the best email to reach you?` });
        break;
      case "email":
        setBooking({ ...state, step: "phone" });
        push({ role: "bot", text: "Got it. And a phone number?" });
        break;
      case "phone":
        setBooking({ ...state, step: "service" });
        push({
          role: "bot",
          text: "Which area would you like to discuss?",
          quick: services.map((s) => ({ label: s, value: `svc:${s}` })),
        });
        break;
      case "service":
        setBooking({ ...state, step: "date" });
        push({ role: "bot", text: "Perfect. What date & time works best (e.g., May 28, 3pm EST)?" });
        break;
      case "date": {
        const d = state.data;
        console.log("[Nuvarez chatbot] Appointment request:", d);
        setBooking(null);
        push({
          role: "bot",
          text: `Thanks ${d.name}! Your consultation request for ${d.service} on ${d.date} is logged. Our team will confirm via ${d.email} shortly.`,
          quick: initialQuick,
        });
        break;
      }
      default:
        setBooking(null);
    }
  };

  // Handle service quick-pick during booking
  const handleAnyQuick = (value: string) => {
    if (booking && booking.step === "service" && value.startsWith("svc:")) {
      const svc = value.slice(4);
      push({ role: "user", text: svc });
      const next = { ...booking, data: { ...booking.data, service: svc } };
      setTimeout(() => advanceBooking(next), 200);
      return;
    }
    handleQuick(value);
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 220, damping: 18 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-[60] h-14 w-14 rounded-full grid place-items-center bg-gradient-to-br from-primary to-[#00D97E] text-primary-foreground shadow-[0_8px_30px_-6px_rgba(0,255,148,0.55)] hover:scale-105 transition-transform"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
            className="fixed bottom-24 right-3 sm:right-5 z-[60] w-[calc(100vw-1.5rem)] sm:w-[380px] max-h-[78vh] flex flex-col rounded-2xl glass-strong overflow-hidden shadow-2xl shadow-black/60"
            style={{ backdropFilter: "blur(28px) saturate(160%)" }}
          >
            {/* Header */}
            <div className="relative px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
                <span className="font-display font-bold text-sm text-background">N</span>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground leading-tight">Nuva · Nuvarez Assistant</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-primary/80">Online · Avg reply &lt; 1m</div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-md text-muted-foreground hover:text-foreground" aria-label="Minimize">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`text-[13.5px] leading-relaxed px-3.5 py-2.5 rounded-2xl ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-white/[0.04] border border-white/[0.06] text-foreground/90 rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.quick && m.role === "bot" && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.quick.map((q) => {
                          const Icon = iconFor(q.value);
                          return (
                            <button
                              key={q.value}
                              onClick={() => handleAnyQuick(q.value)}
                              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium px-2.5 py-1.5 rounded-full glass border border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition"
                            >
                              {Icon && <Icon size={12} className="text-primary" />}
                              {q.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Composer */}
            <div className="border-t border-white/5 px-3 py-3 flex items-center gap-2 bg-background/40">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={booking ? "Type your answer…" : "Ask about services, or type 'book'…"}
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40"
              />
              <button
                onClick={handleSend}
                aria-label="Send"
                className="h-9 w-9 grid place-items-center rounded-xl bg-primary text-primary-foreground hover:opacity-90"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function iconFor(value: string) {
  if (value === "book") return Calendar;
  if (value === "about") return Building2;
  if (value === "mulesoft") return Workflow;
  if (value === "salesforce") return Cloud;
  if (value === "contact") return Phone;
  return null;
}
