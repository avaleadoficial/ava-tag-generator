import { useEffect, useState, type FormEvent } from "react";
import { Search, MapPin, Loader2, Sparkles } from "lucide-react";

const placeholders = ["estética", "carros", "advocacia", "dentista", "academia", "marketing"];

function formatCep(v: string) {
  const digits = v.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

type Props = {
  onSubmit: (term: string, cep: string) => void;
  loading: boolean;
};

export function SearchForm({ onSubmit, loading }: Props) {
  const [term, setTerm] = useState("");
  const [cep, setCep] = useState("");
  const [phIndex, setPhIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhIndex((i) => (i + 1) % placeholders.length), 2400);
    return () => clearInterval(id);
  }, []);

  function handle(e: FormEvent) {
    e.preventDefault();
    if (!term.trim() || loading) return;
    onSubmit(term.trim(), cep);
  }

  return (
    <section id="gerar" className="px-6 pb-20">
      <form
        onSubmit={handle}
        className="bg-surface shadow-card-premium animate-fade-in mx-auto max-w-3xl rounded-3xl border border-border p-6 md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-[1.7fr_1fr]">
          <div className="space-y-2">
            <label htmlFor="term" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Digite sua hashtag ou palavra-chave
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={`Ex.: ${placeholders[phIndex]}`}
                className="h-12 w-full rounded-xl border border-input bg-background px-11 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="cep" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              CEP da sua região
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="cep"
                value={cep}
                onChange={(e) => setCep(formatCep(e.target.value))}
                placeholder="00000-000"
                inputMode="numeric"
                className="h-12 w-full rounded-xl border border-input bg-background px-11 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !term.trim()}
          className="bg-gradient-primary shadow-elegant hover:shadow-glow mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Gerando sugestões…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Gerar Sugestões
            </>
          )}
        </button>
      </form>
    </section>
  );
}
