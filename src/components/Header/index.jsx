import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);

  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#video", label: t.header.video },
    { href: "#projects", label: t.header.projects },
    { href: "#technologies", label: t.header.technologies },
    { href: "#architecture", label: t.header.architecture },
    { href: "#cases", label: t.header.cases },
  ];

  const iconBtn = "w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 dark:hover:bg-white dark:hover:text-neutral-900 dark:hover:border-white transition-all duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <a href="#about" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-neutral-900 font-bold text-lg">LS</span>
            </div>
            <span className="font-lexend font-bold text-xl text-neutral-900 dark:text-white hidden sm:block tracking-tight">
              Lucas Silva
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button onClick={toggleTheme} className={iconBtn} aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-3 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all duration-300 font-semibold text-xs"
              aria-label="Toggle language"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>

            <a href="https://www.linkedin.com/in/lucas-silva-ab27a326b/" target="_blank" rel="noopener noreferrer" className={iconBtn}>
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://github.com/lucas429a" target="_blank" rel="noopener noreferrer" className={iconBtn}>
              <FaGithub size={16} />
            </a>
            <a href="https://wa.me/37998400374" target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5! px-5! text-sm">
              <FaWhatsapp size={16} />
              <span>{t.header.contact}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200 dark:border-neutral-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button onClick={toggleTheme} className={iconBtn}>
                  {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="px-3 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold text-xs"
                >
                  {language === 'pt' ? 'EN' : 'PT'}
                </button>
                <a href="https://www.linkedin.com/in/lucas-silva-ab27a326b/" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                  <FaLinkedinIn size={16} />
                </a>
                <a href="https://github.com/lucas429a" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                  <FaGithub size={16} />
                </a>
                <a href="https://wa.me/37998400374" target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5! px-4! text-sm">
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
