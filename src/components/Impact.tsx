'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Impact() {
  return (
    <section id="impact" className="section-padding" aria-labelledby="impact-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection animation="slide-left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://via.placeholder.com/600x450/8b5cf6/ffffff?text=Image+4"
                  alt="Team of diverse colleagues working together in an accessible office space"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary dark:text-primary">94%</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary dark:text-secondary">40+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-tertiary/50 dark:bg-tertiary/10 text-tertiary dark:text-tertiary mb-4">
                Our Impact
              </span>
              <h2 id="impact-heading" className="section-heading mb-4">
                Changing Lives,{' '}
                <span className="gradient-text gradient-text-dark">One Job at a Time</span>
              </h2>
              <p className="section-subheading">
                When you hire inclusively, everyone wins. Companies with diverse teams show 35% better financial returns, 
                higher innovation, and stronger employee engagement.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {[
                { label: 'Job seekers placed in meaningful roles', value: '2,500+', icon: '🎯' },
                { label: 'Average salary increase for placed candidates', value: '42%', icon: '📈' },
                { label: 'Employer satisfaction rate', value: '98%', icon: '⭐' },
                { label: 'Community members worldwide', value: '15,000+', icon: '🌍' },
              ].map((stat, index) => (
                <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary dark:hover:border-primary transition-colors">
                    <span className="text-2xl" role="img" aria-hidden="true">{stat.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
