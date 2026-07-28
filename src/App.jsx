import { Header } from "./components/Header"
import { HeroBanner } from "./components/HeroBanner"
import { VideoSection } from "./components/VideoSection"
import { Projects } from "./components/Projects"
import { Technologies } from "./components/Technologies"
import { Architecture } from "./components/Architecture"
import { FileManagerSection } from "./components/FileManagerSection"
import { ImageConverterSection } from "./components/ImageConverterSection"
import { SixStringsSection } from "./components/SixStringsSection"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext"
import { useTranslation } from "./translations"
import { useReveal } from "./hooks/useReveal"

function CasesIntro() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div id="cases" className="pt-20 md:pt-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
        <span className="section-tag">{t.cases.tag}</span>
        <h2 className="section-title">
          {t.cases.title}{" "}
          <span className="underline decoration-4 underline-offset-8">{t.cases.titleHighlight}</span>
        </h2>
        <p className="section-subtitle mx-auto">{t.cases.subtitle}</p>
      </div>
    </div>
  )
}

function Page() {
  useReveal();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <main>
        <HeroBanner />
        <VideoSection />
        <Projects />
        <Technologies />
        <Architecture />
        <CasesIntro />
        <FileManagerSection />
        <ImageConverterSection />
        <SixStringsSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Page />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
