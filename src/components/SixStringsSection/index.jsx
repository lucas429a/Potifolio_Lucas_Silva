import { FaCheckCircle, FaMusic, FaShieldAlt, FaDatabase, FaServer } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const techGroups = [
  { key: 'frontend', items: ['React', 'TypeScript', 'TailwindCSS'] },
  { key: 'backend', items: ['Node.js', 'Express', 'JWT', 'bcrypt'] },
  { key: 'database', items: ['PostgreSQL'] },
  { key: 'others', items: ['Git', 'Docker'] }
];

export function SixStringsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="sixstrings" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <span className="section-tag">{t.sixStrings.badge}</span>
          <h2 className="section-title">
            {t.sixStrings.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.sixStrings.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.sixStrings.subtitle}</p>
        </div>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="left">
            <div className="flex items-center gap-3 mb-4">
              <FaMusic className="text-neutral-900 dark:text-white" size={20} />
              <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white">
                {t.sixStrings.problem}
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t.sixStrings.problemDesc}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-900 dark:bg-white" data-reveal="right">
            <h3 className="text-xl font-bold font-lexend text-white dark:text-neutral-900 mb-4">
              {t.sixStrings.solution}
            </h3>
            <p className="text-neutral-300 dark:text-neutral-600 leading-relaxed">
              {t.sixStrings.solutionDesc}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-12" data-reveal>
          <h3 className="text-lg font-bold font-lexend text-neutral-900 dark:text-white mb-6 text-center">
            {t.sixStrings.featuresTitle}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.sixStrings.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800"
                data-reveal
                data-reveal-delay={i * 60}
              >
                <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0 mt-1" size={14} />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech + Architecture */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="left">
            <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white mb-6">
              {t.sixStrings.techTitle}
            </h3>
            <div className="space-y-4">
              {techGroups.map(group => (
                <div key={group.key}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                    {t.sixStrings[group.key]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="right">
            <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white mb-6">
              {t.sixStrings.architecture}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-neutral-900 dark:text-white shrink-0 mt-1" size={16} />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{t.sixStrings.security}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.sixStrings.securityDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaDatabase className="text-neutral-900 dark:text-white shrink-0 mt-1" size={16} />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{t.sixStrings.dataModel}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.sixStrings.dataModelDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaServer className="text-neutral-900 dark:text-white shrink-0 mt-1" size={16} />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{t.sixStrings.api}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.sixStrings.apiDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
