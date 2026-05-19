interface Props {
  variant?: "default" | "mulesoft" | "salesforce" | "company" | "careers";
}

export function AmbientBg({ variant = "default" }: Props) {
  const palettes = {
    default: ["bg-primary/10", "bg-accent/8"],
    mulesoft: ["bg-primary/12", "bg-accent/6"],
    salesforce: ["bg-accent/14", "bg-teal/12"],
    company: ["bg-primary/6", "bg-deep-blue/12"],
    careers: ["bg-primary/8", "bg-cyan/10"],
  } as const;
  const [a, b] = palettes[variant];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className={`absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px] ${a}`} />
      <div className={`absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] ${b}`} />
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
