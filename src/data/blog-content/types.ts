// Akshaya Cabs — Blog Content Types (TASK-25)
// Shared types for blog article content sections.

export type ArticleSectionType =
  | "intro"
  | "notice"
  | "section"
  | "cta";

export interface ArticleSection {
  type: ArticleSectionType;
  /** English heading — for sections only */
  heading?: string;
  /** Telugu heading — for sections only */
  headingTe?: string;
  /** English body text (may include **bold** markdown) */
  content: string;
  /** Telugu body text */
  contentTe?: string;
}
