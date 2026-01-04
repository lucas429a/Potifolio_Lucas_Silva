import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

export function HeroBanner() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="about" className="min-h-screen pt-20 md:pt-24 flex items-center bg-linear-to-br from-white via-brand-light/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-light/30 dark:from-brand-primary/20 to-transparent -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse" />
                <span className="text-brand-primary font-medium text-sm">
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lexend leading-tight text-gray-dark dark:text-white">
                {t.hero.greeting}{" "}
                <span className="gradient-text">{t.hero.name}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-medium dark:text-gray-300 font-medium">
                {t.hero.role}
              </p>

              {/* Description */}
              <div className="space-y-4 text-gray-medium dark:text-gray-400 leading-relaxed">
                <p>
                  {t.hero.description1} <strong className="text-gray-dark dark:text-white">{t.hero.description1Bold}</strong>{t.hero.description1Rest}
                </p>
                <p>
                  {t.hero.description2}
                  <strong className="text-brand-primary"> SOLID</strong>, 
                  <strong className="text-brand-primary"> Clean Architecture</strong>, 
                  <strong className="text-brand-primary"> DDD</strong> e 
                  <strong className="text-brand-primary"> TDD</strong>{t.hero.description2Rest}
                </p>
                <p>
                  {t.hero.description3}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="btn-primary flex items-center space-x-2 group"
                >
                  <span>{t.hero.viewProjects}</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#technologies"
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>{t.hero.viewTechnologies}</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-gray-800 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">+1</div>
                  <div className="text-sm text-gray-medium dark:text-gray-400 mt-1">{t.hero.stats.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-medium dark:text-gray-400 mt-1">{t.hero.stats.technologies}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-medium dark:text-gray-400 mt-1">{t.hero.stats.projects}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-linear-to-br from-brand-primary to-brand-secondary rounded-2xl -z-10 transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-primary rounded-2xl -z-10 transform -rotate-3" />
              
              {/* Photo container */}
              <div className="w-70 h-70 md:w-90 md:h-90 lg:w-105 lg:h-105 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-brand-primary to-brand-secondary">
                <img 
                  src="/profile.png" 
                  alt="Lucas Silva - Desenvolvedor Full Stack"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating badges */}
              {/* <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg px-3 py-2 animate-pulse-slow">
                <span className="text-brand-primary font-bold">React</span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white rounded-lg shadow-lg px-3 py-2 animate-pulse-slow">
                <span className="text-brand-primary font-bold">Node.js</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
