import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { articles } from '../data/articles/index';
import { Article } from '../types/article';

const UI = {
  fr: {
    pageTitle: 'Articles & Ressources | Dodai Studio',
    tag: 'RESSOURCES',
    title: 'Guides et analyses terrain',
    subtitle: 'Ce qu\'on a appris en 14 ans à Tokyo. Des contenus actionnables, basés sur le réel, sans remplissage.',
    readingTime: 'min de lecture',
    noArticles: 'Les premiers articles arrivent bientôt.',
    category: 'Catégorie',
    backHome: '← Accueil',
  },
  en: {
    pageTitle: 'Articles & Resources | Dodai Studio',
    tag: 'RESOURCES',
    title: 'Field guides and analysis',
    subtitle: 'What we\'ve learned over 14 years in Tokyo. Actionable content, grounded in reality, no filler.',
    readingTime: 'min read',
    noArticles: 'First articles coming soon.',
    category: 'Category',
    backHome: '← Home',
  },
  jp: {
    pageTitle: '記事・リソース | Dodai Studio',
    tag: 'リソース',
    title: '現場からのガイドと分析',
    subtitle: '東京での14年間で学んだこと。実践的なコンテンツ、現実に基づいた内容。',
    readingTime: '分で読める',
    noArticles: '最初の記事は近日公開予定です。',
    category: 'カテゴリー',
    backHome: '← ホーム',
  },
};

const DATE_FORMAT: Record<string, Intl.DateTimeFormatOptions> = {
  fr: { year: 'numeric', month: 'long', day: 'numeric' },
  en: { year: 'numeric', month: 'long', day: 'numeric' },
  jp: { year: 'numeric', month: 'long', day: 'numeric' },
};

const LOCALE_MAP = { fr: 'fr-FR', en: 'en-GB', jp: 'ja-JP' };

function formatDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(LOCALE_MAP[lang] || 'fr-FR', DATE_FORMAT[lang] || DATE_FORMAT.fr);
}

function getArticleContent(article: Article, lang: string) {
  const l = lang as 'fr' | 'en' | 'jp';
  return article[l] || article.fr;
}

const ArticleCard: React.FC<{ article: Article; lang: string }> = ({ article, lang }) => {
  const content = getArticleContent(article, lang);
  const ui = UI[lang as keyof typeof UI] || UI.fr;

  return (
    <Link
      smooth
      to={`/articles/${article.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-dodai-charcoal/20 hover:shadow-xl transition-all duration-500"
    >
      {/* Top color bar */}
      <div className="h-1 bg-dodai-red group-hover:bg-dodai-charcoal transition-colors duration-500" />

      <div className="p-8">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono text-dodai-red uppercase tracking-widest">
            {article.category}
          </span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400 font-light flex items-center gap-1.5">
            <Clock size={11} />
            {article.readingTime} {ui.readingTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-dodai-charcoal leading-snug mb-4 group-hover:text-dodai-red transition-colors duration-300">
          {content.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-3 mb-6">
          {content.intro[0]}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">{formatDate(article.publishedAt, lang)}</span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-dodai-charcoal group-hover:text-dodai-red transition-colors">
            Lire
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export const ArticlesListPage: React.FC = () => {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en' | 'jp';
  const ui = UI[lang] || UI.fr;

  useEffect(() => {
    document.title = ui.pageTitle;
  }, [ui.pageTitle]);

  return (
    <main className="bg-dodai-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-dodai-charcoal text-white overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-dodai-red/10 rounded-full filter blur-[120px]" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 py-32 pt-44">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-6">{ui.tag}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            {ui.title}
          </h1>
          <p className="text-gray-400 font-light text-lg max-w-xl leading-relaxed">{ui.subtitle}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {articles.length === 0 ? (
            <p className="text-gray-400 font-light text-lg">{ui.noArticles}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
