import { FaLinkedinIn, FaGithub, FaWhatsapp, FaHeart } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const socialLinks = [
    { 
      icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/lucas-silva-ab27a326b/",
      label: "LinkedIn"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/lucas429a",
      label: "GitHub"
    },
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/37998400374",
      label: "WhatsApp"
    },
  ];

  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#technologies", label: t.header.technologies },
    { href: "#architecture", label: t.header.architecture },
    { href: "#projects", label: t.header.projects },
    { href: "#filesmanager", label: t.header.fileManager },
  ];

  return (
    <footer className="bg-gray-dark dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <span className="font-lexend font-bold text-xl">Lucas Silva</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 dark:text-gray-500 hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/37998400374"
                className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 hover:text-brand-primary transition-colors"
              >
                <FaWhatsapp />
                <span>(37) 99840-0374</span>
              </a>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 dark:bg-gray-800 hover:bg-brand-primary text-gray-400 dark:text-gray-500 hover:text-white transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center">
            © {currentYear} Lucas Silva. {t.footer.rights}
            <FaHeart className="text-red-500 mx-1" size={12} />
            {t.footer.codeText}
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
