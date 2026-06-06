import { Check, Copy, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  title: string;
  subtitle?: string;
  items: string[];
  icon: LucideIcon;
  accent?: boolean;
};

export function SuggestionCard({ title, subtitle, items, icon: Icon, accent }: Props) {
  return (
    <div className="bg-surface shadow-card-premium group relative overflow-hidden rounded-3xl border border-border p-6 transition-all duration-300 hover:border-primary/40 md:p-7">
      {accent && (
        <div className="bg-gradient-primary pointer-events-none absolute -top-px left-6 right-6 h-px opacity-80" />
      )}
      <div className="mb-5 flex items-center gap-3">
        <div className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <Chip key={item + i} value={item} index={i} />
        ))}
      </ul>
    </div>
  );
}

function Chip({ value, index }: { value: string; index: number }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Copiado!", { description: value });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Não foi possível copiar");
    }
  }

  return (
    <li
      className="animate-fade-in"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
    >
      <button
        onClick={copy}
        className="group/chip flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-2.5 text-left text-sm text-foreground transition-all hover:border-primary/50 hover:bg-background"
      >
        <span className="truncate">{value}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-elevated text-muted-foreground transition-colors group-hover/chip:bg-primary group-hover/chip:text-primary-foreground">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </span>
      </button>
    </li>
  );
}
