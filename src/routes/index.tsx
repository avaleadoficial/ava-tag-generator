import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AvaLogo } from "@/components/ava/AvaLogo";
import { Hero } from "@/components/ava/Hero";
import { SearchForm } from "@/components/ava/SearchForm";
import { ResultsSection } from "@/components/ava/ResultsSection";
import { Footer } from "@/components/ava/Footer";
import { generateSuggestions, type Suggestions } from "@/lib/tags/generator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AvA Tags — Hashtags e palavras-chave inteligentes" },
      {
        name: "description",
        content:
          "Descubra hashtags e palavras-chave relacionadas ao seu nicho em segundos. Gere sugestões inteligentes para aumentar seu alcance nas redes sociais.",
      },
      { property: "og:title", content: "AvA Tags — Hashtags e palavras-chave inteligentes" },
      {
        property: "og:description",
        content:
          "Gere hashtags e palavras-chave estratégicas para o seu nicho. Simples, rápido e gratuito.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [results, setResults] = useState<Suggestions | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState<{ term: string; cep: string } | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  function run(term: string, cep: string) {
    setLoading(true);
    setLastQuery({ term, cep });
    // Simulate engine for premium feel
    setTimeout(() => {
      const data = generateSuggestions(term, cep);
      setResults(data);
      setLoading(false);
      requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, 450);
  }

  function regenerate() {
    if (!lastQuery) return;
    setLoading(true);
    setTimeout(() => {
      setResults(generateSuggestions(lastQuery.term, lastQuery.cep));
      setLoading(false);
    }, 300);
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <header className="px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <AvaLogo />
          <a
            href="#gerar"
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Começar
          </a>
        </div>
      </header>

      <main>
        <Hero onCta={scrollToForm} />
        <div ref={formRef}>
          <SearchForm onSubmit={run} loading={loading} />
        </div>

        <div ref={resultsRef}>
          {results && <ResultsSection data={results} onRegenerate={regenerate} />}
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
