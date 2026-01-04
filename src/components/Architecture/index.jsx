import { 
  FaCubes, FaLayerGroup, FaProjectDiagram, FaCheckCircle,
  FaCode 
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export function Architecture() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const architectures = [
    {
      name: t.architecture.solid.name,
      fullName: t.architecture.solid.fullName,
      icon: FaCubes,
      description: t.architecture.solid.description,
      principles: t.architecture.solid.principles,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: t.architecture.cleanArch.name,
      fullName: t.architecture.cleanArch.fullName,
      icon: FaLayerGroup,
      description: t.architecture.cleanArch.description,
      principles: t.architecture.cleanArch.principles,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: t.architecture.ddd.name,
      fullName: t.architecture.ddd.fullName,
      icon: FaProjectDiagram,
      description: t.architecture.ddd.description,
      principles: t.architecture.ddd.principles,
      color: "from-green-500 to-green-600"
    },
    {
      name: t.architecture.tdd.name,
      fullName: t.architecture.tdd.fullName,
      icon: FaCheckCircle,
      description: t.architecture.tdd.description,
      principles: t.architecture.tdd.principles,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm mb-4">
            {t.architecture.badge}
          </span>
          <h2 className="section-title dark:text-white">
            {t.architecture.title} <span className="gradient-text">{t.architecture.titleHighlight}</span>
          </h2>
          <p className="section-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* Architecture Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {architectures.map((arch, index) => {
            const Icon = arch.icon;
            return (
              <div 
                key={arch.name}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient header */}
                <div className={`bg-linear-to-r ${arch.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{arch.name}</h3>
                      <p className="text-white/80 text-sm">{arch.fullName}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-medium dark:text-gray-300 mb-6 leading-relaxed">
                    {arch.description}
                  </p>

                  {/* Principles list */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-dark dark:text-white mb-3">
                      {t.architecture.mainConcepts}
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      {arch.principles.map((principle, i) => (
                        <li 
                          key={i}
                          className="flex items-center text-sm text-gray-medium dark:text-gray-400"
                        >
                          <span className={`w-2 h-2 rounded-full bg-linear-to-r ${arch.color} mr-3`} />
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover effect decoration */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${arch.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-linear-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <FaCode size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.architecture.cleanCode}</h3>
                <p className="text-white/80">
                  {t.architecture.cleanCodeDesc}
                </p>
              </div>
            </div>
            <a 
              href="#filesmanager"
              className="px-6 py-3 bg-white text-brand-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.architecture.viewFileManager}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
