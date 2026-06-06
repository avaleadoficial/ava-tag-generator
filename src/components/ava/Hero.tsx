import { Sparkles } from "lucide-react";

type Props = {
  onCta: () => void;
};

export function Hero({ onCta }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="bg-gradient-hero pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.55 0.19 12 / 0.4) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          <span>Geração inteligente em segundos</span>
        </div>

        <h1
          className="font-display animate-fade-in text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          <span className="text-foreground">AvA </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Tags
          </span>
        </h1>

        <p
          className="animate-fade-in mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          style={{ animationDelay: "160ms", animationFillMode: "backwards" }}
        >
          Descubra hashtags e palavras-chave inteligentes para aumentar seu alcance.
        </p>

        <p
          className="animate-fade-in mx-auto mt-3 max-w-xl text-balance text-sm text-muted-foreground/80 md:text-base"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          Digite uma hashtag, palavra-chave ou nicho e receba sugestões relacionadas instantaneamente.
        </p>

        <div
          className="animate-fade-in mt-10"
          style={{ animationDelay: "320ms", animationFillMode: "backwards" }}
        >
          <button
            onClick={onCta}
            className="bg-gradient-primary shadow-elegant hover:shadow-glow group relative inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Gerar Sugestões
          </button>
        </div>
      </div>
    </section>
  );
}
