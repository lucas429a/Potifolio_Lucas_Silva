import { useState } from 'react';
import { 
  FaFileUpload, FaFilePdf, FaDatabase,
  FaHardHat, FaCode, FaServer, FaLayerGroup,
  FaCheckCircle, FaCogs, FaGithub
} from "react-icons/fa";
import { 
  SiPrisma, SiTypescript 
} from "react-icons/si";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export function FileManagerSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const { language } = useLanguage();
  const t = useTranslation(language);

  const tabs = [
    { id: 'overview', label: t.fileManager.tabs.overview, icon: FaLayerGroup },
    { id: 'upload', label: t.fileManager.tabs.upload, icon: FaFileUpload },
    { id: 'pdf', label: t.fileManager.tabs.pdf, icon: FaFilePdf },
    { id: 'future', label: t.fileManager.tabs.future, icon: FaHardHat, isWip: true },
  ];

  const endpoints = [
    {
      id: 'upload',
      method: 'POST',
      path: '/api/upload',
      description: 'Processa arquivos CSV/XML/ZPL',
      features: ['Multi-empresa', 'Merge inteligente', 'Validação'],
    },
    {
      id: 'pdf-generate',
      method: 'POST',
      path: '/api/pdf/generate',
      description: 'Gera PDFs de etiquetas',
      features: ['25+ templates', 'QR Code', 'Barcode'],
    },
    {
      id: 'tags-get',
      method: 'GET',
      path: '/api/tags',
      description: 'Lista etiquetas com filtros',
      features: ['Filtros dinâmicos', 'Paginação', 'Cache'],
    },
    {
      id: 'tags-delete',
      method: 'DELETE',
      path: '/api/tags',
      description: 'Remove etiquetas',
      features: ['Soft delete', 'Histórico', 'Rollback'],
    },
    {
      id: 'companies',
      method: 'GET/POST',
      path: '/api/companies',
      description: 'Gerencia empresas',
      features: ['CRUD completo', 'Validações', 'Relacionamentos'],
    },
  ];

  const patterns = [
    { name: 'Factory Pattern', desc: 'Processadores e conversores', icon: FaCogs },
    { name: 'Strategy Pattern', desc: 'Estratégias por empresa', icon: FaCode },
    { name: 'Repository Pattern', desc: 'Abstração de persistência', icon: FaDatabase },
    { name: 'Use Case Pattern', desc: 'Lógica de negócio isolada', icon: FaLayerGroup },
  ];

  const techStack = [
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaServer },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'PDFme', icon: FaFilePdf },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Project description */}
            <div className="bg-linear-to-r from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 rounded-2xl p-8 border border-brand-primary/10 dark:border-brand-primary/20">
              <h3 className="text-2xl font-bold text-gray-dark dark:text-white mb-4">
                {t.fileManager.overview.title}
              </h3>
              <p className="text-gray-medium dark:text-gray-300 leading-relaxed mb-6">
                {t.fileManager.overview.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                      <Icon size={20} className="text-brand-primary" />
                      <span className="font-medium text-gray-dark dark:text-white">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '13', label: t.fileManager.overview.companies, sublabel: t.fileManager.overview.companiesLabel },
                { value: '25+', label: t.fileManager.overview.generators, sublabel: t.fileManager.overview.generatorsLabel },
                { value: '20+', label: t.fileManager.overview.patterns, sublabel: t.fileManager.overview.patternsLabel },
                { value: '25k+', label: t.fileManager.overview.fields, sublabel: t.fileManager.overview.fieldsLabel },
              ].map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-dark dark:text-white font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-medium dark:text-gray-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Design Patterns */}
            <div>
              <h4 className="text-lg font-semibold text-gray-dark dark:text-white mb-4">
                {t.fileManager.overview.designPatterns}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {patterns.map((pattern) => {
                  const Icon = pattern.icon;
                  return (
                    <div key={pattern.name} className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-600 hover:border-brand-primary transition-colors">
                      <Icon size={24} className="text-brand-primary mb-2" />
                      <div className="font-medium text-gray-dark dark:text-white text-sm">{pattern.name}</div>
                      <div className="text-xs text-gray-medium dark:text-gray-400 mt-1">{pattern.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'upload':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-primary">
              <h3 className="text-xl font-bold text-gray-dark mb-4 flex items-center">
                <FaFileUpload className="mr-3 text-brand-primary" />
                {t.fileManager.upload.title}
              </h3>
              <p className="text-gray-medium mb-6">
                {t.fileManager.upload.description}
              </p>
              
              {/* Flow diagram */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm text-gray-dark dark:text-gray-200 whitespace-pre-wrap">
{`Cliente → Middleware Upload → UploadController 
  → ProcessTagFile UseCase 
    → FileProcessorFactory (seleciona processor)
      → FileProcessor específico da empresa
        → FileDetector (identifica tipos)
        → ConverterFactory (seleciona conversores)
          → Converters específicos (parse)
        → Merge de dados (se aplicável)
        → TagDataService (persistência)
      → CompanyRulesService (validação)
  → Resposta JSON + Cleanup`}
                </pre>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {t.fileManager.upload.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 shrink-0" />
                    <span className="text-gray-dark dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code example */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">POST /api/upload</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">200 OK</span>
              </div>
              <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "message": "Arquivos processados com sucesso",
  "orderNumber": "123456",
  "tagCount": 150,
  "tagTypes": ["corrugado", "frontbox", "palmilha"]
}`}
              </pre>
            </div>
          </div>
        );

      case 'pdf':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-secondary">
              <h3 className="text-xl font-bold text-gray-dark mb-4 flex items-center">
                <FaFilePdf className="mr-3 text-brand-secondary" />
                {t.fileManager.pdf.title}
              </h3>
              <p className="text-gray-medium mb-6">
                {t.fileManager.pdf.description}
              </p>

              {/* Modes */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  t.fileManager.pdf.modes.single,
                  t.fileManager.pdf.modes.batch,
                  t.fileManager.pdf.modes.custom,
                ].map((item) => (
                  <div key={item.mode} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                    <div className="font-semibold text-brand-primary">{item.mode}</div>
                    <div className="text-sm text-gray-medium dark:text-gray-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {t.fileManager.pdf.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 shrink-0" />
                    <span className="text-gray-dark dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request example */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">POST /api/pdf/generate</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">PDF Buffer</span>
              </div>
              <pre className="text-sm overflow-x-auto">
{`{
  "companyCode": 1758846,
  "tipoEtiqueta": "corrugado",
  "orderNumber": "123456",
  "sizesWithQuantities": [
    { "id": "uuid-1", "quantity": 50 },
    { "id": "uuid-2", "quantity": 100 }
  ]
}`}
              </pre>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
              <FaHardHat size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-dark mb-2">
                Em Construção
              </h3>
              <p className="text-gray-medium max-w-md mx-auto">
                Novas funcionalidades e integrações estão sendo desenvolvidas. 
                Em breve mais opções estarão disponíveis aqui.
              </p>
            </div>

            {/* Upcoming features */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Dashboard Analytics', desc: 'Métricas e visualizações com Nivo' },
                { title: 'Cache com Redis', desc: 'Performance otimizada' },
                { title: 'Autenticação JWT', desc: 'Segurança avançada' },
                { title: 'Webhook Integration', desc: 'Notificações em tempo real' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md border border-dashed border-gray-300 opacity-60">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaHardHat className="text-yellow-500" />
                    <span className="font-semibold text-gray-dark">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="filesmanager" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm mb-4">
            {t.fileManager.badge}
          </span>
          <h2 className="section-title dark:text-white">
            {t.fileManager.title} <span className="gradient-text">{t.fileManager.titleHighlight}</span>
          </h2>
          <p className="section-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            {t.fileManager.subtitle}
          </p>
          <a
            href="https://github.com/lucas429a/File-Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub size={20} />
            <span>{language === 'pt' ? 'Ver código no GitHub' : 'View code on GitHub'}</span>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-700 text-gray-medium dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }
                `}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                {tab.isWip && (
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-100">
          {renderTabContent()}
        </div>

        {/* API Endpoints List */}
        {/* <div className="mt-12">
          <h4 className="text-lg font-semibold text-gray-dark dark:text-white mb-6 text-center">
            {t.fileManager.endpoints}
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {endpoints.map((endpoint) => (
              <div 
                key={endpoint.id} 
                className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`
                    px-2 py-1 text-xs font-bold rounded
                    ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : ''}
                    ${endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : ''}
                    ${endpoint.method === 'DELETE' ? 'bg-red-100 text-red-700' : ''}
                    ${endpoint.method === 'GET/POST' ? 'bg-purple-100 text-purple-700' : ''}
                  `}>
                    {endpoint.method}
                  </span>
                  <code className="text-sm text-gray-dark dark:text-gray-200 font-mono">{endpoint.path}</code>
                </div>
                <p className="text-sm text-gray-medium dark:text-gray-300 mb-2">{endpoint.description}</p>
                <div className="flex flex-wrap gap-1">
                  {endpoint.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
