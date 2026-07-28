import { FaLinkedinIn, FaGithub, FaWhatsapp, FaHeart } from "react-icons/fa";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

export function Footer() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#video", label: t.header.video },
    { href: "#projects", label: t.header.projects },
    { href: "#technologies", label: t.header.technologies },
    { href: "#architecture", label: t.header.architecture },
    { href: "#cases", label: t.header.cases },
  ];

  return (
    <footer className="bg-neutral-950 dark:bg-black text-white border-t border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-lg">LS</span>
              </div>
              <span className="font-lexend font-bold text-xl">Lucas Silva</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
              {t.footer.navigation}
            </h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
              {t.footer.contact}
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/lucas-silva-ab27a326b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:bg-white hover:text-neutral-900 hover:border-white transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://github.com/lucas429a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:bg-white hover:text-neutral-900 hover:border-white transition-all duration-300"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://wa.me/37998400374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:bg-white hover:text-neutral-900 hover:border-white transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm flex items-center gap-1.5">
            {t.footer.rights} <FaHeart size={12} className="text-white" /> {t.footer.codeText}
          </p>
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Lucas Silva
          </p>
        </div>
      </div>
    </footer>
  );
}
