type Props = {
  className?: string;
};

export function AvaLogo({ className }: Props) {
  return (
    <div className={`inline-flex items-baseline gap-2 ${className ?? ""}`}>
      <span className="font-display text-2xl font-bold tracking-tight">
        <span className="text-foreground">A</span>
        <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">
          v
        </span>
        <span className="text-foreground">A</span>
      </span>
      <span className="font-display text-sm font-light tracking-[0.3em] text-muted-foreground uppercase">
        Tags
      </span>
    </div>
  );
}
