import { Article } from '../../types/article';
import { article as ouvrirRestaurantTokyo } from './ouvrir-restaurant-tokyo-2026';
import { article as experienceClientOmotenashi } from './experience-client-boutique-japon-omotenashi';

// Registry: add each new article here
export const articles: Article[] = [
  ouvrirRestaurantTokyo,
  experienceClientOmotenashi,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
