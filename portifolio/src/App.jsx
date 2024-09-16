import { HeaderPortifolio } from "./components/HeaderSection"
import { BannerSection } from "./components/bannerSection"
import { ProjectsSection } from "./components/projectsSection"
import { TecnologiesSection } from "./components/tecnologiesSection"
import "./styles/index.scss"

function App(){
  return (
    <>
     <HeaderPortifolio />
     <BannerSection />
     <TecnologiesSection />
     <ProjectsSection />
    </>
  )
}

export default App
