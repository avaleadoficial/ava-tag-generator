import { database } from "./database";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[#@]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function findCategory(input: string): string {
  const q = normalize(input);
  if (!q) return "marketing";

  const keys = Object.keys(database);

  // exact key match
  for (const k of keys) {
    if (normalize(k) === q) return k;
  }
  // alias exact
  for (const k of keys) {
    if (database[k].aliases.some((a) => normalize(a) === q)) return k;
  }
  // contains
  for (const k of keys) {
    if (
      normalize(k).includes(q) ||
      q.includes(normalize(k)) ||
      database[k].aliases.some((a) => {
        const n = normalize(a);
        return n.includes(q) || q.includes(n);
      })
    ) {
      return k;
    }
  }
  // token overlap with any hashtag/keyword
  const tokens = q.split(" ").filter((t) => t.length > 2);
  if (tokens.length) {
    let best = "marketing";
    let bestScore = 0;
    for (const k of keys) {
      const bag = [...database[k].hashtags, ...database[k].keywords]
        .map(normalize)
        .join(" ");
      let score = 0;
      for (const t of tokens) if (bag.includes(t)) score++;
      if (score > bestScore) {
        bestScore = score;
        best = k;
      }
    }
    if (bestScore > 0) return best;
  }
  return "marketing";
}

/** Related categories used to add cross-pollination variety. */
const relations: Record<string, string[]> = {
  estetica: ["beleza", "micropigmentacao", "cilios", "sobrancelhas", "saude"],
  beleza: ["estetica", "micropigmentacao", "moda"],
  micropigmentacao: ["estetica", "beleza", "sobrancelhas"],
  cilios: ["estetica", "beleza", "sobrancelhas"],
  sobrancelhas: ["estetica", "beleza", "micropigmentacao"],
  carros: ["mecanica", "funilaria", "esteticaauto"],
  mecanica: ["carros", "funilaria"],
  funilaria: ["carros", "mecanica", "esteticaauto"],
  esteticaauto: ["carros", "funilaria"],
  odontologia: ["saude", "estetica"],
  nutricao: ["saude", "academia"],
  psicologia: ["saude"],
  advocacia: ["marketing"],
  imobiliaria: ["arquitetura", "construcao", "marketing"],
  airbnb: ["hotelaria", "imobiliaria"],
  hotelaria: ["airbnb", "restaurante"],
  academia: ["crossfit", "personal", "nutricao"],
  crossfit: ["academia", "personal"],
  personal: ["academia", "crossfit", "nutricao"],
  marketing: ["trafegopago", "socialmedia", "ecommerce"],
  trafegopago: ["marketing", "socialmedia", "ecommerce"],
  socialmedia: ["marketing", "trafegopago"],
  ecommerce: ["marketing", "trafegopago", "moda"],
  moda: ["beleza", "ecommerce"],
  restaurante: ["hamburgueria", "pizzaria", "delivery"],
  hamburgueria: ["restaurante", "delivery"],
  pizzaria: ["restaurante", "delivery"],
  delivery: ["restaurante", "hamburgueria", "pizzaria"],
  saude: ["odontologia", "nutricao", "psicologia"],
  veterinaria: ["saude"],
  construcao: ["engenharia", "arquitetura", "marcenaria"],
  marcenaria: ["arquitetura", "construcao"],
  engenharia: ["construcao", "arquitetura"],
  arquitetura: ["construcao", "marcenaria", "imobiliaria"],
  tecnologia: ["programacao", "marketing"],
  programacao: ["tecnologia"],
  educacao: ["marketing", "tecnologia"],
};

export function relatedCategories(cat: string): string[] {
  return relations[cat] ?? [];
}
