'use client';

import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/15 dark:bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-tertiary/15 dark:bg-tertiary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.05),transparent)]" />
      </div>

      <div className="container-max section-padding pt-28 sm:pt-32 lg:pt-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 dark:bg-primary/10 border border-primary/20 dark:border-primary/80">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-primary dark:text-primary">
                  Building Inclusive Workplaces
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
                Breaking{' '}
                <span className="gradient-text gradient-text-dark">Barriers</span>
                <br />
                Building{' '}
                <span className="gradient-text gradient-text-dark">Futures</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Juan Without Borders connects talented individuals with disabilities to forward-thinking employers. 
                We believe every person deserves meaningful employment, and every company benefits from true diversity.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary text-lg !px-8 !py-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Find Opportunities
                </a>
                <a href="#employers" className="btn-secondary text-lg !px-8 !py-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  For Employers
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary">2,500+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Jobs Placed</div>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary dark:text-secondary">350+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Partner Companies</div>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-tertiary dark:text-tertiary">98%</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Satisfaction</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Image grid */}
          <AnimatedSection animation="scale" delay={200} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 aspect-[4/5]">
                  <img
                    src="https://via.placeholder.com/400x500/4f46e5/ffffff?text=Image+0"
                    alt="A person with a disability working confidently in a modern office environment"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://via.placeholder.com/400x400/06b6d4/ffffff?text=Image+1"
                    alt="Inclusive workplace team collaboration meeting"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://via.placeholder.com/400x400/10b981/ffffff?text=Image+2"
                    alt="Corporate diversity and inclusion event"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-accent-500/10 dark:shadow-accent-500/5 aspect-[4/5]">
                  <img
                    src="https://via.placeholder.com/400x500/f59e0b/ffffff?text=Image+3"
                    alt="Happy employee celebrating career milestone"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">Verified Inclusive</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">All employers are accessibility-certified</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
