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
    { href: "#technologies", label: t.header.technologies },
    { href: "#architecture", label: t.header.architecture },
    { href: "#projects", label: t.header.projects },
    { href: "#filesmanager", label: t.header.fileManager },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LS</span>
            </div>
            <span className="font-lexend font-bold text-xl text-gray-dark dark:text-white hidden sm:block">
              Lucas Silva
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-medium dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary text-gray-medium dark:text-gray-300 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary text-gray-medium dark:text-gray-300 transition-all duration-300 font-medium text-sm"
              aria-label="Toggle language"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>

            <a
              href="https://www.linkedin.com/in/lucas-silva-ab27a326b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/lucas429a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://wa.me/37998400374"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <FaWhatsapp size={18} />
              <span>{t.header.contact}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-medium dark:text-gray-300"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-medium dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {/* Theme Toggle Mobile */}
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300"
                >
                  {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                </button>
                
                {/* Language Toggle Mobile */}
                <button
                  onClick={toggleLanguage}
                  className="px-3 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300 font-medium text-sm"
                >
                  {language === 'pt' ? 'EN' : 'PT'}
                </button>

                <a
                  href="https://www.linkedin.com/in/lucas-silva-ab27a326b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/lucas429a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-primary hover:text-white text-gray-medium dark:text-gray-300 transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://wa.me/37998400374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FaWhatsapp size={18} />
                  <span>{t.header.contact}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
