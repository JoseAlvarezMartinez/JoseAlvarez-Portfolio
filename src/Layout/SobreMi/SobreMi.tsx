import { tecnologias } from "../../data/db"
const SobreMi = () => {

  const edad = new Date().getFullYear() - 2001
  return (
    <section id="sobremi" className="sobre-mi-section">
      <div className="sections-containers">
        <div className="sobre-mi-superior">
          <h2 className="sections-h2">Sobre Mi</h2>

          <p className="sobre-mi-parrafo">
            Hola! Soy José Alvarez Martinez, y tengo {edad} años.<span> Me encanta sumergirme en el mundo del desarrollo, especialmente en el front-end con React en conjunto con TypeScript.</span> Estoy emocionado por ampliar mis habilidades y aventurarme en el mundo del desarrollo full-stack.
          </p>
        </div>


        <div className="sobre-mi-inferior">
          <h2 className="sections-h2">Tecnologías</h2>
          <section className="tecnologias">


            {tecnologias.map(tecnologia => (
              <figcaption key={tecnologia.tecnologiaID} className="probando">
                <img className={`tecnologia-img ${tecnologia.tecnologiaID}`} src={tecnologia.img} />
              </figcaption>
            ))}

          </section>
        </div>
      </div>
    </section >
  )
}

export default SobreMi