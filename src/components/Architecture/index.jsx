import { useState } from 'react';
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const archKeys = ['solid', 'cleanArch', 'ddd', 'tdd'];

export function Architecture() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="architecture" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <span className="section-tag">{t.architecture.tag}</span>
          <h2 className="section-title">
            {t.architecture.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.architecture.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.architecture.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {archKeys.map((key, index) => {
            const item = t.architecture[key];
            const isOpen = openIndex === index;
            return (
              <div
                key={key}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-900'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
                data-reveal
                data-reveal-delay={index * 80}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {item.fullName}
                    </p>
                  </div>
                  <FaChevronDown
                    className={`text-neutral-900 dark:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                      {t.architecture.mainConcepts}
                    </h4>
                    <ul className="space-y-2">
                      {item.principles.map((principle, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                          <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0" size={12} />
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12" data-reveal>
          <p className="font-lexend font-bold text-lg text-neutral-900 dark:text-white">
            {t.architecture.cleanCode}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {t.architecture.cleanCodeDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
