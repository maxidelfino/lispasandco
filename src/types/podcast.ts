import { Language } from "./index";

export type PodcastCategory = "programs" | "caseStudies";

export interface Podcast {
  /** URL-safe identifier for analytics */
  slug: string;
  /** Episode number for display ordering */
  episodeNumber: number;
  /** Title per language */
  title: Record<Language, string>;
  /** Description per language */
  description: Record<Language, string>;
  /** Category: program episode or case study */
  category: PodcastCategory;
  /** Audio source per language. `null` means not available in that language. */
  audio: Record<Language, string | null>;
}