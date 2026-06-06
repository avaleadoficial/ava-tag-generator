import { Hash, KeyRound, TrendingUp, RefreshCcw } from "lucide-react";
import type { Suggestions } from "@/lib/tags/generator";
import { SuggestionCard } from "./SuggestionCard";

type Props = {
  data: Suggestions;
  onRegenerate: () => void;
};

export function ResultsSection({ data, onRegenerate }: Props) {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-in mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Sugestões personalizadas
            </p>
            <h2 className="font-display mt-1 text-2xl font-semibold text-foreground md:text-3xl">
              Resultados prontos para você
            </h2>
          </div>
          <button
            onClick={onRegenerate}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary-glow"
          >
            <RefreshCcw className="h-4 w-4" />
            Gerar novamente
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <SuggestionCard
            title="Hashtags Recomendadas"
            subtitle="6 hashtags para destacar seu conteúdo"
            items={data.hashtags}
            icon={Hash}
            accent
          />
          <SuggestionCard
            title="Palavras-chave Relacionadas"
            subtitle="6 termos de busca estratégicos"
            items={data.keywords}
            icon={KeyRound}
          />
          <SuggestionCard
            title="Tendências do Nicho"
            subtitle="3 movimentos em alta no seu mercado"
            items={data.trends}
            icon={TrendingUp}
          />
        </div>
      </div>
    </section>
  );
}
