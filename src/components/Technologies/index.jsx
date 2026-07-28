import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const techCategories = [
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ]
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Fastify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ]
  },
  {
    key: 'database',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    ]
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Vitest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg' },
      { name: 'Zod', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zod/zod-original.svg' },
    ]
  }
];

export function Technologies() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="technologies" className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <span className="section-tag">{t.technologies.tag}</span>
          <h2 className="section-title">
            {t.technologies.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.technologies.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.technologies.subtitle}</p>
        </div>

        <div className="space-y-12">
          {techCategories.map((category, catIndex) => (
            <div key={category.key} data-reveal data-reveal-delay={catIndex * 100}>
              <h3 className="text-lg font-bold font-lexend text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-neutral-900 dark:bg-white" />
                {t.technologies[category.key]}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-1 transition-all duration-300"
                    data-reveal="zoom"
                    data-reveal-delay={techIndex * 50}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 tech-icon"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-3 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-12 italic" data-reveal>
          {t.technologies.learning}
        </p>
      </div>
    </section>
  );
}
