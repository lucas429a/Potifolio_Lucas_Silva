import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const projectsData = [
  {
    key: 'gostacker',
    featured: true,
    techs: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Asaas'],
    github: 'https://github.com/lucas429a',
    demo: null
  },
  {
    key: 'devstore',
    featured: false,
    techs: ['Next.js', 'Node.js', 'TypeScript', 'Nodemailer', 'JWT'],
    github: 'https://github.com/lucas429a',
    demo: null
  },
  {
    key: 'portfolio',
    featured: false,
    techs: ['React', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/lucas429a',
    demo: null
  },
  {
    key: 'fileManager',
    featured: false,
    techs: ['Node.js', 'Fastify', 'Prisma', 'TypeScript', 'Zod'],
    github: 'https://github.com/lucas429a',
    demo: null
  },
  {
    key: 'movieDb',
    featured: false,
    techs: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/lucas429a',
    demo: null
  },
  {
    key: 'userCourses',
    featured: false,
    techs: ['Node.js', 'TypeScript', 'SQL'],
    github: 'https://github.com/lucas429a',
    demo: null
  }
];

export function Projects() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const featured = projectsData.find(p => p.featured);
  const rest = projectsData.filter(p => !p.featured);
  const featuredT = t.projects.items[featured.key];

  return (
    <section id="projects" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <span className="section-tag">{t.projects.tag}</span>
          <h2 className="section-title">
            {t.projects.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.projects.subtitle}</p>
        </div>

        {/* Featured project */}
        <div
          className="mb-12 rounded-2xl border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-950 p-8 md:p-12 transition-colors duration-300"
          data-reveal
        >
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-neutral-900 dark:text-white" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              {t.projects.featured}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold font-lexend text-neutral-900 dark:text-white">
                {featuredT.title}
              </h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wide">
                {featuredT.subtitle}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
                {featuredT.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {featured.techs.map(tech => (
                  <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <FaGithub size={16} />
                  <span>{t.projects.viewCode}</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
                {t.projects.highlights}
              </h4>
              <ul className="space-y-3">
                {featuredT.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                  {t.projects.architectureLabel}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{featuredT.architecture}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, index) => {
            const pt = t.projects.items[project.key];
            return (
              <div
                key={project.key}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-1 transition-all duration-300 flex flex-col"
                data-reveal
                data-reveal-delay={index * 80}
              >
                <h3 className="text-xl font-bold font-lexend text-neutral-900 dark:text-white">
                  {pt.title}
                </h3>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wide">
                  {pt.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed grow">
                  {pt.description}
                </p>
                <ul className="space-y-1.5 mt-4">
                  {pt.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techs.map(tech => (
                    <span key={tech} className="text-[10px] font-semibold px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:underline"
                  >
                    <FaGithub size={14} />
                    {t.projects.viewCode}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:underline"
                    >
                      <FaExternalLinkAlt size={12} />
                      {t.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12" data-reveal>
          <a
            href="https://github.com/lucas429a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub size={16} />
            <span>{t.projects.moreOnGithub}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
