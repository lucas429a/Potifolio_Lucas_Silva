import { 
  FaReact, FaNode, FaPython, 
  FaDatabase, FaDocker 
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiPrisma, 
  SiRedis, SiMui, SiDjango, 
  SiExpress, SiSwiper, SiHtml5, SiCss3
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export function Technologies() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const frontendTech = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "MUI/Material", icon: SiMui, color: "#007FFF" },
    { name: "Swiper", icon: SiSwiper, color: "#6332F6" },
    { name: "Emotion", icon: FaReact, color: "#D36AC2" },
  ];

  const backendTech = [
    { name: "Node.js", icon: FaNode, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "TypeORM", icon: FaDatabase, color: "#FE0902" },
    { name: "Multer", icon: FaNode, color: "#339933" },
    { name: "CORS", icon: FaNode, color: "#339933" },
  ];

  const databaseTech = [
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#4169E1" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  ];

  const toolsTech = [
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Day.js", icon: SiJavascript, color: "#FB6052" },
    { name: "Nivo Charts", icon: FaReact, color: "#F47560" },
    { name: "PDFme", icon: FaReact, color: "#FF6B6B" },
    { name: "Patch-Package", icon: FaNode, color: "#339933" },
  ];

  const TechCard = ({ tech }) => {
    const Icon = tech.icon;
    return (
      <div className="tech-badge group cursor-pointer dark:bg-gray-800 dark:border-gray-700">
        <Icon 
          size={40} 
          style={{ color: tech.color }} 
          className="mb-3 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="text-sm font-medium text-gray-dark dark:text-gray-200 text-center">
          {tech.name}
        </span>
      </div>
    );
  };

  const TechSection = ({ title, techs, delay = 0 }) => (
    <div className="space-y-4" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-lg font-semibold text-gray-dark dark:text-white border-l-4 border-brand-primary pl-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techs.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm mb-4">
            {t.technologies.badge}
          </span>
          <h2 className="section-title dark:text-white">
            {t.technologies.title} <span className="gradient-text">{t.technologies.titleHighlight}</span>
          </h2>
          <p className="section-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="space-y-12">
          <TechSection title={t.technologies.frontend} techs={frontendTech} delay={0} />
          <TechSection title={t.technologies.backend} techs={backendTech} delay={100} />
          <TechSection title={t.technologies.database} techs={databaseTech} delay={200} />
          <TechSection title={t.technologies.tools} techs={toolsTech} delay={300} />
        </div>

        {/* Learning note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-gray-medium dark:text-gray-300">
              {t.technologies.learning}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
