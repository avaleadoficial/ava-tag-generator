import { database } from "./database";
import { findCategory, relatedCategories } from "./matcher";

export type Suggestions = {
  category: string;
  hashtags: string[];
  keywords: string[];
  trends: string[];
};

// Mulberry32 seeded PRNG for reproducible-but-varying shuffle
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffle<T>(arr: T[], rnd: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickN<T>(arr: T[], n: number, rnd: () => number): T[] {
  return shuffle(arr, rnd).slice(0, n);
}

function dedupe<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export function generateSuggestions(input: string, cep: string): Suggestions {
  const category = findCategory(input);
  const related = relatedCategories(category);

  const seed = (Date.now() ^ hashStr(input + "|" + cep)) >>> 0;
  const rnd = mulberry32(seed);

  const main = database[category];

  // Mix: 70% main + 30% from related (when available)
  const relatedPools = related.map((k) => database[k]).filter(Boolean);

  const hashtagPool = dedupe([
    ...pickN(main.hashtags, Math.min(20, main.hashtags.length), rnd),
    ...relatedPools.flatMap((p) => pickN(p.hashtags, 4, rnd)),
  ]);

  const keywordPool = dedupe([
    ...pickN(main.keywords, Math.min(20, main.keywords.length), rnd),
    ...relatedPools.flatMap((p) => pickN(p.keywords, 3, rnd)),
  ]);

  const trendPool = dedupe([
    ...main.trends,
    ...relatedPools.flatMap((p) => p.trends.slice(0, 2)),
  ]);

  // Prefer long-tail: sort by length-weighted random
  const longTailBias = (s: string) => s.length + rnd() * 8;

  const hashtags = pickN(hashtagPool, 6, rnd)
    .sort((a, b) => longTailBias(b) - longTailBias(a))
    .slice(0, 6);

  const keywords = pickN(keywordPool, 8, rnd)
    .sort((a, b) => longTailBias(b) - longTailBias(a))
    .slice(0, 6);

  const trends = pickN(trendPool, 3, rnd);

  return {
    category,
    hashtags: dedupe(hashtags).slice(0, 6),
    keywords: dedupe(keywords).slice(0, 6),
    trends: dedupe(trends).slice(0, 3),
  };
}
