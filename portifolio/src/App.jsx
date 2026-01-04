import { Header } from "./components/Header"
import { HeroBanner } from "./components/HeroBanner"
import { Technologies } from "./components/Technologies"
import { Architecture } from "./components/Architecture"
import { Projects } from "./components/Projects"
import { FileManagerSection } from "./components/FileManagerSection"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <HeroBanner />
            <Technologies />
            <Architecture />
            <Projects />
            <FileManagerSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
