import { Article } from '../../types/article';
import { article as ouvrirRestaurantTokyo } from './ouvrir-restaurant-tokyo-2026';

// Registry: add each new article here
export const articles: Article[] = [
  ouvrirRestaurantTokyo,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
