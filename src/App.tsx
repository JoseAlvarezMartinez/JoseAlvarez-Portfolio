import Experiencia from "./Layout/Experiencia/Experiencia"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import Proyecto from "./Layout/Proyectos/Proyecto"
import Servicios from "./Layout/Servicios/Servicios"
import SobreMi from "./Layout/SobreMi/SobreMi"

function App() {
  return (
    <>
      <Header />
      <SobreMi />
      <Experiencia />
      <Servicios />
      <Proyecto />
      <Footer />
    </>
  )
}

export default App
