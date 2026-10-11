// Akshaya Cabs — Blog Content Index (TASK-25 & TASK-26)
// Maps all 8 blog slugs to their complete content arrays.
// All 8 articles are published and fully localized in English and Telugu.

import type { ArticleSection } from "./types";
import { ARTICLE_TIRUPATI_DARSHAN } from "./article-tirupati-darshan-guide";
import { ARTICLE_TIRUMALA_TRAVEL } from "./article-tirumala-travel-guide";
import { ARTICLE_BEST_PLACES_TIRUPATI } from "./article-best-places-tirupati";
import { ARTICLE_TIRUPATI_KANIPAKAM } from "./article-tirupati-to-kanipakam";
import { ARTICLE_TIRUPATI_SRIKALAHASTI } from "./article-tirupati-to-srikalahasti";
import { ARTICLE_TIRUPATI_VELLORE } from "./article-tirupati-to-vellore";
import { ARTICLE_TIRUPATI_TEMPLE_TOUR } from "./article-tirupati-temple-tour";
import { ARTICLE_TIRUPATI_AIRPORT_TIRUMALA } from "./article-tirupati-airport-tirumala";

export type { ArticleSection };

export const BLOG_CONTENT_MAP: Record<string, ArticleSection[]> = {
  "tirupati-darshan-guide": ARTICLE_TIRUPATI_DARSHAN,
  "tirumala-travel-guide": ARTICLE_TIRUMALA_TRAVEL,
  "best-places-to-visit-in-tirupati": ARTICLE_BEST_PLACES_TIRUPATI,
  "tirupati-to-kanipakam-travel-guide": ARTICLE_TIRUPATI_KANIPAKAM,
  "tirupati-to-srikalahasti-travel-guide": ARTICLE_TIRUPATI_SRIKALAHASTI,
  "tirupati-to-golden-temple-vellore": ARTICLE_TIRUPATI_VELLORE,
  "tirupati-temple-tour-guide": ARTICLE_TIRUPATI_TEMPLE_TOUR,
  "tirupati-airport-to-tirumala-travel-guide": ARTICLE_TIRUPATI_AIRPORT_TIRUMALA,
};

export function getArticleContent(slug: string): ArticleSection[] | null {
  return BLOG_CONTENT_MAP[slug] ?? null;
}
