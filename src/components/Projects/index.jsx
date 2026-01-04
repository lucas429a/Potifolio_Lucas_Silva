import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export function Projects() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const projects = [
    {
      title: t.projects.fileManager.title,
      description: t.projects.fileManager.description,
      tags: ["TypeScript", "Node.js", "Prisma", "PDFme", "Clean Architecture"],
      github: "#filesmanager",
      isInternal: true,
      featured: true,
    },
    {
      title: t.projects.movieDb.title,
      description: t.projects.movieDb.description,
      tags: ["Python", "Django", "PostgreSQL", "JWT"],
      github: "https://github.com/lucas429a/Buster",
    },
    {
      title: t.projects.userCourses.title,
      description: t.projects.userCourses.description,
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Express"],
      github: "https://github.com/lucas429a/User-e-Courses-Permissao-de-Administrador",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm mb-4">
            {t.projects.badge}
          </span>
          <h2 className="section-title dark:text-white">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle dark:text-gray-300 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700
                ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-linear-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-full">
                    {t.projects.featured}
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className={`
                p-6 
                ${project.featured 
                  ? 'bg-linear-to-r from-brand-primary to-brand-secondary text-white' 
                  : 'bg-gray-50 dark:bg-gray-700'
                }
              `}>
                <div className="flex items-center space-x-3">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${project.featured ? 'bg-white/20' : 'bg-brand-primary/10'}
                  `}>
                    <FaCode size={24} className={project.featured ? 'text-white' : 'text-brand-primary'} />
                  </div>
                  <h3 className={`text-xl font-bold ${project.featured ? 'text-white' : 'text-gray-dark dark:text-white'}`}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-medium dark:text-gray-300 mb-6 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-dark dark:text-gray-200 text-xs font-medium rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target={project.isInternal ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-medium hover:text-brand-primary transition-colors group/link"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-medium group-hover/link:underline">
                      {project.isInternal ? t.projects.viewDetails : t.projects.viewCode}
                    </span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-medium dark:text-gray-300 hover:text-brand-primary transition-colors group/link"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span className="text-sm font-medium group-hover/link:underline">{t.projects.demo}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/lucas429a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-secondary"
          >
            <FaGithub size={20} />
            <span>{t.projects.moreOnGithub}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
