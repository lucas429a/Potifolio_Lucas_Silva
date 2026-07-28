import { FaArrowRight, FaPlay } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

export function HeroBanner() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="about" className="min-h-screen pt-24 md:pt-28 flex items-center bg-white dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration — pure grayscale */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-neutral-200/60 dark:bg-neutral-800/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neutral-100 dark:bg-neutral-900/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1" data-reveal="left">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full">
                <span className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full mr-2 animate-pulse" />
                <span className="text-neutral-900 dark:text-white font-medium text-sm">
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lexend leading-tight text-neutral-900 dark:text-white tracking-tight">
                {t.hero.greeting}{" "}
                <span className="underline decoration-4 underline-offset-8">{t.hero.name}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium">
                {t.hero.role}
              </p>

              {/* Description */}
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  {t.hero.description1} <strong className="text-neutral-900 dark:text-white">{t.hero.description1Bold}</strong>{t.hero.description1Rest}
                </p>
                <p>
                  {t.hero.description2}
                  <strong className="text-neutral-900 dark:text-white"> SOLID</strong>,
                  <strong className="text-neutral-900 dark:text-white"> Clean Architecture</strong>,
                  <strong className="text-neutral-900 dark:text-white"> DDD</strong> {language === 'pt' ? 'e' : 'and'}
                  <strong className="text-neutral-900 dark:text-white"> TDD</strong>{t.hero.description2Rest}
                </p>
                <p>
                  {t.hero.description3}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="btn-primary group">
                  <span>{t.hero.viewProjects}</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#video" className="btn-secondary">
                  <FaPlay size={12} />
                  <span>{t.hero.watchVideo}</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold font-lexend text-neutral-900 dark:text-white">+1</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{t.hero.stats.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-lexend text-neutral-900 dark:text-white">15+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{t.hero.stats.technologies}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-lexend text-neutral-900 dark:text-white">10+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{t.hero.stats.projects}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-reveal="right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-neutral-900 dark:bg-white rounded-2xl -z-10 transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-neutral-900 dark:border-white rounded-2xl -z-10 transform -rotate-3" />

              {/* Photo container */}
              <div className="w-70 h-70 md:w-90 md:h-90 lg:w-105 lg:h-105 rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                <img
                  src="/profile.png"
                  alt="Lucas Silva - Full Stack Developer"
                  className="w-full h-full object-contain grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
