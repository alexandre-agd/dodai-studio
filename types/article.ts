// Article content block types
export type Block =
  | { type: 'p'; text: string }
  | { type: 'lead'; text: string }                          // intro paragraph, slightly larger
  | { type: 'h3'; text: string }                            // subsection H3
  | { type: 'strong'; text: string }                        // bold standalone paragraph
  | { type: 'ul'; items: string[] }                         // unordered list
  | { type: 'ol'; items: string[] }                         // ordered list
  | { type: 'callout'; emoji: string; text: string }        // aside/callout box
  | { type: 'table'; headers: string[]; rows: string[][] }  // data table
  | { type: 'cta-lead' }                                    // lead capture CTA block
  | { type: 'faq'; items: { q: string; a: string }[] }      // FAQ accordion
  | { type: 'summary'; title: string; items: string[] }     // "En résumé" summary box
  | { type: 'closing-cta' };                                // Dodai Studio closing CTA

export interface ArticleSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface ArticleContent {
  title: string;
  metaDescription: string;
  intro: string[];
  sections: ArticleSection[];
}

export interface Article {
  slug: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  pillar?: string;
  coverImage?: string;
  fr: ArticleContent;
  en: ArticleContent;
  jp: ArticleContent;
}
