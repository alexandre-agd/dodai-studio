import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Clock, Calendar, ArrowLeft, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticleBySlug } from '../data/articles/index';
import { ArticleRenderer } from '../components/ArticleRenderer';
import { Article, ArticleContent } from '../types/article';

const LOCALE_MAP = { fr: 'fr-FR', en: 'en-GB', jp: 'ja-JP' };

function formatDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(LOCALE_MAP[lang] || 'fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const UI = {
  fr: {
    readingTime: 'min de lecture',
    backToList: '← Tous les articles',
    toc: 'Sommaire',
    publishedOn: 'Publié le',
  },
  en: {
    readingTime: 'min read',
    backToList: '← All articles',
    toc: 'Contents',
    publishedOn: 'Published',
  },
  jp: {
    readingTime: '分',
    backToList: '← 記事一覧',
    toc: '目次',
    publishedOn: '公開日',
  },
};

// Sticky TOC sidebar
const TableOfContents: React.FC<{
  sections: { id: string; title: string }[];
  lang: string;
}> = ({ sections, lang }) => {
  const ui = UI[lang as keyof typeof UI] || UI.fr;
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-28 space-y-1" aria-label={ui.toc}>
      <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-4">{ui.toc}</p>
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className={`flex items-start gap-3 py-2 text-sm leading-snug transition-colors duration-200 group ${
            activeId === s.id
              ? 'text-dodai-charcoal font-medium'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          <span
            className={`flex-shrink-0 font-mono text-xs mt-0.5 transition-colors ${
              activeId === s.id ? 'text-dodai-red' : 'text-gray-300 group-hover:text-gray-400'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span>{s.title}</span>
        </a>
      ))}
    </nav>
  );
};

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en' | 'jp';
  const ui = UI[lang] || UI.fr;

  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/articles" replace />;

  const content: ArticleContent = article[lang] || article.fr;

  useEffect(() => {
    document.title = `${content.title} | Dodai Studio`;
    // Update meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = content.metaDescription;
  }, [content]);

  const tocSections = content.sections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <main className="bg-dodai-cream min-h-screen">
      {/* ── ARTICLE HERO ─────────────────────────────────────────── */}
      <section className="relative bg-dodai-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-dodai-red/10 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] bg-white/3 rounded-full filter blur-[100px]" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 pt-40 pb-16">
          {/* Back link */}
          <Link
            smooth
            to="/articles"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            {ui.backToList}
          </Link>

          {/* Category + reading time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-dodai-red uppercase tracking-widest">
              {article.category}
            </span>
            {article.pillar && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-xs text-gray-400 font-light">{article.pillar}</span>
              </>
            )}
            <span className="text-gray-600">·</span>
            <span className="text-xs text-gray-400 font-light flex items-center gap-1.5">
              <Clock size={11} />
              {article.readingTime} {ui.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
            {content.title}
          </h1>

          {/* Meta description */}
          <p className="text-gray-400 font-light text-lg max-w-2xl leading-relaxed mb-8">
            {content.metaDescription}
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{ui.publishedOn} {formatDate(article.publishedAt, lang)}</span>
          </div>
        </div>
      </section>

      {/* ── CONTENT AREA ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-16 items-start">

          {/* TOC Sidebar — Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <TableOfContents sections={tocSections} lang={lang} />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Mobile TOC toggle */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="flex items-center gap-2 text-sm text-dodai-charcoal font-medium border border-gray-200 rounded-full px-4 py-2.5 hover:bg-white transition-colors"
              >
                {mobileTocOpen ? <X size={14} /> : <Menu size={14} />}
                {ui.toc}
              </button>
              {mobileTocOpen && (
                <div className="mt-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <TableOfContents sections={tocSections} lang={lang} />
                </div>
              )}
            </div>

            {/* Intro paragraphs */}
            <div className="space-y-5 mb-12">
              {content.intro.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-xl md:text-2xl text-dodai-charcoal font-light leading-relaxed'
                      : 'text-gray-600 font-light leading-relaxed text-[17px]'
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Sections */}
            {content.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-28"
              >
                {/* Section H2 */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-0.5 bg-dodai-red flex-shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-dodai-charcoal leading-snug">
                    {section.title}
                  </h2>
                </div>

                <ArticleRenderer blocks={section.blocks} articleTitle={content.title} />
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────────── */}
      <section className="bg-dodai-charcoal text-white py-20 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          <Link smooth to="/diagnostic" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
            Le Diagnostic →
          </Link>
          <Link smooth to="/build" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
            Le Build →
          </Link>
          <Link smooth to="/run" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
            Le Run →
          </Link>
          <Link smooth to="/articles" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
            {ui.backToList}
          </Link>
        </div>
      </section>
    </main>
  );
};
