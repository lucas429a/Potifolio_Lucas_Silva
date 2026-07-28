import { useState } from 'react';
import { FaCheckCircle, FaFileCsv, FaFileCode, FaTag, FaArrowRight, FaGithub } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const endpoints = [
  { method: 'POST', path: '/:company/upload', desc: 'upload' },
  { method: 'POST', path: '/pdf/generate', desc: 'pdf' },
];

const stats = [
  { value: '4+', key: 'companies' },
  { value: '25+', key: 'generators' },
  { value: '10+', key: 'patterns' },
  { value: '50+', key: 'fields' },
];

export function FileManagerSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['overview', 'upload', 'pdf'];

  return (
    <section id="filesmanager" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <span className="section-tag">{t.fileManager.badge}</span>
          <h2 className="section-title">
            {t.fileManager.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.fileManager.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.fileManager.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap" data-reveal>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white'
              }`}
            >
              {t.fileManager.tabs[tab]}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in space-y-12">
            <div className="text-center max-w-3xl mx-auto" data-reveal>
              <h3 className="text-2xl font-bold font-lexend text-neutral-900 dark:text-white mb-4">
                {t.fileManager.overview.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t.fileManager.overview.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.key}
                  className="text-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800"
                  data-reveal="zoom"
                  data-reveal-delay={i * 80}
                >
                  <div className="text-4xl font-bold font-lexend text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white mt-2">
                    {t.fileManager.overview[stat.key]}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.fileManager.overview[`${stat.key}Label`]}
                  </div>
                </div>
              ))}
            </div>

            {/* Design patterns */}
            <div data-reveal>
              <h4 className="text-lg font-bold font-lexend text-neutral-900 dark:text-white mb-6 text-center">
                {t.fileManager.overview.designPatterns}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  <h5 className="font-bold text-neutral-900 dark:text-white">{t.fileManager.overview.cleanArchitecture}</h5>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 mb-4">{t.fileManager.overview.cleanArchitectureDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {['layer1', 'layer2', 'layer3', 'layer4'].map(layer => (
                      <span key={layer} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                        {t.fileManager.overview[layer]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  <h5 className="font-bold text-neutral-900 dark:text-white">{t.fileManager.overview.solidPrinciples}</h5>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 mb-4">{t.fileManager.overview.solidPrinciplesDesc}</p>
                  <ul className="space-y-2">
                    {['srp', 'ocp', 'lsp', 'isp', 'dip'].map(principle => (
                      <li key={principle} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0" size={12} />
                        <span>{t.fileManager.overview[principle]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="animate-fade-in space-y-12">
            <div className="text-center max-w-3xl mx-auto" data-reveal>
              <h3 className="text-2xl font-bold font-lexend text-neutral-900 dark:text-white mb-4">
                {t.fileManager.upload.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t.fileManager.upload.description}
              </p>
            </div>

            {/* Flow */}
            <div data-reveal>
              <h4 className="text-lg font-bold font-lexend text-neutral-900 dark:text-white mb-6 text-center">
                {t.fileManager.upload.flow}
              </h4>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {['step1', 'step2', 'step3', 'step4'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="px-5 py-3 rounded-full border-2 border-neutral-900 dark:border-white font-semibold text-sm text-neutral-900 dark:text-white">
                      {t.fileManager.upload[step]}
                    </div>
                    {i < arr.length - 1 && <FaArrowRight className="text-neutral-400" size={14} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="left">
                <ul className="space-y-3">
                  {t.fileManager.upload.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                      <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0 mt-1" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4" data-reveal="right">
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                  <h5 className="font-bold text-neutral-900 dark:text-white mb-3">{t.fileManager.upload.formats}</h5>
                  <div className="flex gap-3">
                    <FaFileCsv size={28} className="text-neutral-900 dark:text-white" />
                    <FaFileCode size={28} className="text-neutral-900 dark:text-white" />
                    <FaTag size={28} className="text-neutral-900 dark:text-white" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {['CSV', 'XML', 'ZPL'].map(f => (
                      <span key={f} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                  <h5 className="font-bold text-neutral-900 dark:text-white mb-3">{t.fileManager.upload.tech}</h5>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Fastify', 'Prisma', 'Zod', 'Vitest'].map(tech => (
                      <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="https://github.com/lucas429a" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                  <FaGithub size={16} />
                  <span>{t.fileManager.upload.viewRepository}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PDF Tab */}
        {activeTab === 'pdf' && (
          <div className="animate-fade-in space-y-12">
            <div className="text-center max-w-3xl mx-auto" data-reveal>
              <h3 className="text-2xl font-bold font-lexend text-neutral-900 dark:text-white mb-4">
                {t.fileManager.pdf.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t.fileManager.pdf.description}
              </p>
            </div>

            {/* Modes */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto" data-reveal>
              {['single', 'batch', 'custom'].map((mode, i) => (
                <div key={mode} className="text-center p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="zoom" data-reveal-delay={i * 80}>
                  <div className="font-bold font-lexend text-neutral-900 dark:text-white">{t.fileManager.pdf.modes[mode].mode}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{t.fileManager.pdf.modes[mode].desc}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800" data-reveal="left">
                <ul className="space-y-3">
                  {t.fileManager.pdf.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                      <FaCheckCircle className="text-neutral-900 dark:text-white shrink-0 mt-1" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4" data-reveal="right">
                {['fonts', 'barcodes', 'positioning', 'performance'].map(feature => (
                  <div key={feature} className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                    <h5 className="font-bold text-sm text-neutral-900 dark:text-white">{t.fileManager.pdf[feature]}</h5>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{t.fileManager.pdf[`${feature}Desc`]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Endpoints */}
        <div className="mt-12 max-w-2xl mx-auto" data-reveal>
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            {t.fileManager.endpoints}
          </h4>
          <div className="space-y-2">
            {endpoints.map(ep => (
              <div key={ep.path} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 dark:bg-neutral-900 dark:border dark:border-neutral-700 font-mono text-sm">
                <span className="font-bold text-white bg-white/20 px-2.5 py-1 rounded">{ep.method}</span>
                <span className="text-neutral-300">{ep.path}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
