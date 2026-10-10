// Akshaya Cabs — Blog Content Index (TASK-25)
// Maps blog slugs to their content arrays.
// Only published slugs should be in this map.

import type { ArticleSection } from "./types";
import { ARTICLE_TIRUPATI_DARSHAN } from "./article-tirupati-darshan-guide";
import { ARTICLE_TIRUMALA_TRAVEL } from "./article-tirumala-travel-guide";
import { ARTICLE_BEST_PLACES_TIRUPATI } from "./article-best-places-tirupati";
import { ARTICLE_TIRUPATI_KANIPAKAM } from "./article-tirupati-to-kanipakam";

export type { ArticleSection };

export const BLOG_CONTENT_MAP: Record<string, ArticleSection[]> = {
  "tirupati-darshan-guide": ARTICLE_TIRUPATI_DARSHAN,
  "tirumala-travel-guide": ARTICLE_TIRUMALA_TRAVEL,
  "best-places-to-visit-in-tirupati": ARTICLE_BEST_PLACES_TIRUPATI,
  "tirupati-to-kanipakam-travel-guide": ARTICLE_TIRUPATI_KANIPAKAM,
};

export function getArticleContent(slug: string): ArticleSection[] | null {
  return BLOG_CONTENT_MAP[slug] ?? null;
}
