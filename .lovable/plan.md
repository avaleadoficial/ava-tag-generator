
## AvA Tags — Plano de Implementação

App de página única (sem backend, sem login) para gerar hashtags e palavras-chave relacionadas a um nicho, com visual premium em preto, branco e vinho.

### Estrutura da página (rota única `/`)
Tudo em `src/routes/index.tsx`, montando seções:

1. **Header minimalista** — logo "AvA Tags" (wordmark) + tagline curta.
2. **Hero** 
   - Título grande: **AvA Tags**
   - Subtítulo: "Descubra hashtags e palavras-chave inteligentes para aumentar seu alcance."
   - Descrição: "Digite uma hashtag, palavra-chave ou nicho e receba sugestões relacionadas instantaneamente."
   - CTA "Gerar Sugestões" que faz scroll suave até o formulário.
3. **Search Section**
   - Campo 1: "Digite sua hashtag ou palavra-chave" (placeholder rotativo: estética, carros, advocacia, dentista, academia, marketing).
   - Campo 2: "CEP da sua região" com máscara `00000-000` (apenas decorativo — nunca exibir nada relacionado a localização).
   - Botão "Gerar Sugestões".
4. **Results** (renderizados após submit, com fade-in)
   - Card "Hashtags Recomendadas" — 6 hashtags, cada uma com botão copiar.
   - Card "Palavras-chave Relacionadas" — 6 keywords com copiar.
   - Card "Tendências do Nicho" — 3 sugestões estratégicas.
   - Botão "Gerar novamente" para re-randomizar.
5. **Footer** — "AvA Tags © Todos os direitos reservados" + descrição curta.

### Design system (`src/styles.css`)
Tokens em `oklch`:
- `--background` preto profundo (#080808)
- `--foreground` branco
- `--primary` vinho (#8B1E2D) + `--primary-glow` para gradientes
- `--gradient-primary`: linear-gradient vinho → vermelho escuro → roxo profundo
- `--gradient-hero`: radial sutil para o hero
- `--shadow-elegant`: sombra wine translúcida
- Bordas suaves (`--radius: 1rem`), tipografia: display (Geist/Space Grotesk) + body (Inter), carregadas via `<link>` no `__root.tsx`.
- Variantes customizadas no `button.tsx` (`hero`, `wine`, `ghost-wine`) usando os tokens — sem cores hard-coded nos componentes.

### Componentes
Em `src/components/ava/`:
- `Hero.tsx`
- `SearchForm.tsx` (controla estado, máscara CEP, validação simples)
- `ResultsSection.tsx` (recebe resultados, animação fade-in/stagger)
- `SuggestionCard.tsx` (título + chips com botão copiar usando `navigator.clipboard` + toast `sonner`)
- `Footer.tsx`
- `AvaLogo.tsx` (wordmark SVG: "AvA" com "v" estilizado em gradient wine, "Tags" em peso leve)

### Motor de sugestões (`src/lib/tags/`)
- `database.ts` — JSON grande estruturado: `{ [categoria]: { hashtags: string[], keywords: string[], trends: string[], aliases: string[] } }`. Categorias do prompt (estética, beleza, micropigmentação, cílios, sobrancelhas, carros, mecânica, funilaria, estética automotiva, odontologia, nutrição, psicologia, advocacia, imobiliária, airbnb, hotelaria, academia, crossfit, personal, marketing digital, tráfego pago, social media, instagram, facebook ads, e-commerce, moda, restaurante, hamburgueria, pizzaria, delivery, saúde, clínicas, medicina, veterinária, construção, marcenaria, engenharia, arquitetura, tecnologia, programação, educação, cursos online). Cada uma com ~40–80 hashtags, ~40–80 keywords, ~10 trends e aliases de busca.
- `matcher.ts` — normaliza input (lowercase, sem acento, remove `#`), faz match exato → alias → fuzzy substring → fallback "marketing".
- `generator.ts` — função `generate(input, cep)`:
  - escolhe categoria via matcher
  - mistura pool de categorias vizinhas (cross-pollination leve) para variedade
  - usa shuffle Fisher-Yates seedado por `Date.now() + hash(input+cep)` para garantir resultados diferentes a cada chamada
  - retorna 6 hashtags + 6 keywords + 3 trends, sem duplicatas, priorizando long-tail (filtros por comprimento)
  - CEP é ingrediente do seed apenas (nunca exibido nem mencionado nos resultados)

### UX / animações
- Tailwind `animate-fade-in`, `animate-scale-in`, stagger via `style={{ animationDelay }}`.
- Hover scale nos cards/chips, transição suave do botão CTA.
- Toast "Copiado!" com `sonner`.
- Mobile-first: hero responsivo, form empilha em mobile, cards em grid 1/2/3 colunas.

### SEO (`head()` da rota)
- Title: "AvA Tags — Hashtags e palavras-chave inteligentes"
- Meta description em pt-BR
- og:title / og:description / twitter:card
- H1 único = "AvA Tags"
- `<html lang="pt-BR">` no `__root.tsx`

### Detalhes técnicos
- Sem backend, sem Lovable Cloud.
- Tudo client-side; geração é síncrona com `setTimeout(120ms)` para suavidade visual.
- Toaster `<Sonner />` montado no root component.
- Substituir o placeholder atual em `src/routes/index.tsx`.

### Arquivos a criar/editar
- `src/styles.css` — tokens wine + gradientes
- `src/routes/__root.tsx` — lang pt-BR, fontes, toaster
- `src/routes/index.tsx` — composição da página + meta
- `src/components/ava/*` — componentes listados
- `src/components/ui/button.tsx` — adicionar variant `hero`/`wine`
- `src/lib/tags/database.ts`, `matcher.ts`, `generator.ts`

### Fora de escopo
- Logo enviado pelo usuário não está acessível nesta sessão — vou usar um wordmark SVG com a identidade descrita (preto/branco/vinho com gradiente). Se você anexar o arquivo depois, troco pelo logo real.
