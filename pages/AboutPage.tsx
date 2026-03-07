import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const p = (t as any).aboutPage;

  useEffect(() => {
    document.title = p.pageTitle;
  }, [p.pageTitle]);

  return (
    <main className="bg-dodai-cream">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dodai-charcoal text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-dodai-red/10 rounded-full filter blur-[160px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[140px]" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 py-32 pt-48">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-8">{p.hero.tag}</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="block text-white">{p.hero.title}</span>
              <span className="block text-dodai-red">{p.hero.titleSpan}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY ─────────────────────────────────────────────── */}
      <section className="py-32 bg-dodai-cream">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-16 reveal">{p.origin.tag}</p>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Left column */}
            <div className="space-y-6 reveal">
              <p className="text-lg text-dodai-charcoal font-light leading-relaxed">{p.origin.l1}</p>
              <p className="text-2xl md:text-3xl font-bold text-dodai-charcoal">{p.origin.l2}</p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.l3}</p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.l4}</p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.l5}</p>
            </div>

            {/* Right column */}
            <div className="space-y-6 reveal">
              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.l6a}</p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.l6b}</p>
              <p className="text-lg text-dodai-charcoal font-bold leading-relaxed">{p.origin.l7}</p>

              <div className="relative pl-8 border-l-4 border-dodai-red mt-8">
                <p className="text-lg text-gray-600 font-light leading-relaxed italic">{p.origin.wedding}</p>
              </div>

              <p className="text-lg text-gray-600 font-light leading-relaxed">{p.origin.conclusion1}</p>
              <p className="text-xl text-dodai-charcoal font-bold leading-relaxed">{p.origin.conclusion2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATTERN / CONSTAT ────────────────────────────────────────── */}
      <section className="py-32 bg-dodai-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-16 reveal">{p.pattern.tag}</p>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Left: stat + question */}
            <div className="reveal">
              <div className="text-[120px] md:text-[160px] font-bold text-dodai-red leading-none mb-4">30%</div>
              <p className="text-gray-300 font-light text-lg mb-12">{p.pattern.stat}</p>

              <p className="text-gray-300 font-light leading-relaxed mb-6">{p.pattern.intro}</p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-xl md:text-2xl font-bold text-white">{p.pattern.quote}</p>
              </div>
            </div>

            {/* Right: what's missing */}
            <div className="space-y-8 reveal">
              <p className="text-gray-300 font-light leading-relaxed text-lg">{p.pattern.p1}</p>

              <div className="space-y-3">
                {p.pattern.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-dodai-red flex-shrink-0 mt-2.5" />
                    <p className="text-gray-300 font-light">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-bold text-lg">{p.pattern.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WE CREATED DODAI STUDIO — storytelling flow ──────────── */}
      <section className="py-32 bg-dodai-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-16 reveal">{p.why.tag}</p>

          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-bold text-dodai-charcoal leading-snug reveal">{p.why.gIntro}</p>
            <p className="text-lg text-gray-600 font-light leading-relaxed reveal">{p.why.gDesc}</p>

            <div className="pt-4 reveal">
              <p className="text-2xl md:text-3xl font-bold text-dodai-charcoal leading-snug">{p.why.aIntro}</p>
            </div>
            <p className="text-lg text-gray-600 font-light leading-relaxed reveal">{p.why.aDesc}</p>

            <div className="pt-8 border-t border-gray-200 reveal">
              <p className="text-xl md:text-2xl text-dodai-charcoal font-bold leading-relaxed">{p.why.conclusion}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ETYMOLOGY / WHY DODAI ────────────────────────────────────── */}
      <section className="py-32 bg-dodai-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Kanji display */}
            <div className="flex flex-col items-center md:items-start reveal">
              <div className="relative">
                <span className="text-[160px] md:text-[200px] font-bold text-dodai-charcoal leading-none select-none opacity-[0.06] absolute -top-8 -left-4 pointer-events-none">
                  土台
                </span>
                <div className="relative z-10 pt-8">
                  <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-dodai-charcoal mb-8">
                    <span className="text-7xl font-bold text-white">{p.etymology.kanji}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">{p.etymology.reading}</p>
                  <p className="text-gray-600 font-light text-lg max-w-xs leading-relaxed">{p.etymology.p1}</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6 reveal">
              <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-2">{p.etymology.tag}</p>

              <div className="bg-white rounded-2xl px-6 py-5 border border-gray-100">
                <p className="text-lg font-bold text-dodai-charcoal font-mono mb-1">{p.etymology.expression}</p>
                <p className="text-sm text-gray-500 font-light">{p.etymology.expressionDef}</p>
              </div>

              <p className="text-gray-600 font-light leading-relaxed text-lg">{p.etymology.p2}</p>
              <p className="text-gray-600 font-light leading-relaxed text-lg">{p.etymology.p3}</p>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-dodai-charcoal mb-3">{p.etymology.studioWord}</p>
                <p className="text-gray-600 font-light leading-relaxed">{p.etymology.studioP1}</p>
                <p className="text-gray-600 font-light leading-relaxed mt-2">{p.etymology.studioP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────── */}
      <section className="py-32 bg-dodai-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-6 reveal">{p.what.tag}</p>
          <p className="text-gray-300 font-light text-lg mb-16 max-w-2xl reveal">{p.what.intro}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {p.what.phases.map((phase: { label: string; items: string }, i: number) => (
              <div key={i} className="group reveal">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-dodai-red/40 hover:bg-white/[0.07] transition-all duration-500">
                  <p className="text-xs font-mono text-dodai-red uppercase tracking-widest mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-6 group-hover:text-dodai-red transition-colors duration-300">
                    {phase.label}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{phase.items}</p>
                  <div className="mt-8 w-8 h-0.5 bg-dodai-red rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-4 reveal">
            <p className="text-white font-bold text-lg">{p.what.footer1}</p>
            <p className="text-gray-400 font-light leading-relaxed">{p.what.footer2}</p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE NOT ───────────────────────────────────────────── */}
      <section className="py-32 bg-dodai-cream">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-16 reveal">{p.not.tag}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {p.not.items.map((item: string, i: number) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-dodai-charcoal transition-colors duration-300 reveal">
                <div className="flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full border border-dodai-red/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-dodai-red font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-32 bg-dodai-charcoal text-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-10">{p.cta.tag}</p>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">{p.cta.p1}</p>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">{p.cta.p2}</p>
          <p className="text-xl text-white font-bold leading-relaxed mb-12">{p.cta.p3}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              smooth
              to="/#contact"
              className="inline-flex items-center gap-3 bg-dodai-red text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-dodai-charcoal transition-colors duration-300 text-sm"
            >
              {p.cta.cta}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${p.cta.email}`}
              className="inline-flex items-center gap-2 text-gray-300 font-medium text-sm underline underline-offset-4 hover:text-white transition-colors duration-300"
            >
              {p.cta.email}
            </a>
          </div>

          {/* Phase links */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-6">
            <Link smooth to="/diagnostic" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
              Le Diagnostic →
            </Link>
            <Link smooth to="/build" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
              Le Build →
            </Link>
            <Link smooth to="/run" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-2">
              Le Run →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};
