import { FaCheckCircle, FaArrowRight, FaGithub, FaImage } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

export function ImageConverterSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="imageconverter" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <span className="section-tag">{t.imageConverter.badge}</span>
          <h2 className="section-title">
            {t.imageConverter.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.imageConverter.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.imageConverter.subtitle}</p>
        </div>

        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12" data-reveal>
          {t.imageConverter.description}
        </p>

        {/* Frontend / Backend */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950" data-reveal="left">
            <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
              <FaImage size={20} />
              {t.imageConverter.frontendTitle}
            </h3>
            <ul className="space-y-3">
              {t.imageConverter.frontendFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                  <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0 mt-1" size={14} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950" data-reveal="right">
            <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white mb-6">
              {t.imageConverter.backendTitle}
            </h3>
            <ul className="space-y-3">
              {t.imageConverter.backendFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                  <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0 mt-1" size={14} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conversion flow */}
        <div className="mb-12" data-reveal>
          <h3 className="text-lg font-bold font-lexend text-neutral-900 dark:text-white mb-6 text-center">
            {t.imageConverter.flow}
          </h3>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {t.imageConverter.flowSteps.map((step, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-full border-2 border-neutral-900 dark:border-white font-semibold text-sm text-neutral-900 dark:text-white">
                  {step}
                </div>
                {i < arr.length - 1 && <FaArrowRight className="text-neutral-400" size={14} />}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture + Formats */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-neutral-900 dark:bg-white" data-reveal="left">
            <h3 className="text-xl font-bold font-lexend text-white dark:text-neutral-900 mb-4">
              {t.imageConverter.architecture}
            </h3>
            <p className="text-neutral-300 dark:text-neutral-600 leading-relaxed text-sm">
              {t.imageConverter.architectureDesc}
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950" data-reveal="right">
            <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white mb-4">
              {t.imageConverter.formats}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['PNG', 'JPEG', 'WEBP', 'AVIF'].map(f => (
                <span key={f} className="text-sm font-bold px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  {f}
                </span>
              ))}
            </div>
            <a href="https://github.com/lucas429a" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
