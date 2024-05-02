import { experiencia } from "../../data/db"

const Experiencia = () => {
    return (
        <section className="experiencia-container">
            <h2 className="sections-h2 experiencia-h2">Experiencia</h2>

            {experiencia.map(exp => (
                <article className="article-experiencia" key={exp.cargo}>
                    <h3 className="experiencia-cargo">{exp.cargo}</h3>
                    <h4 className="experiencia-anio">{exp.anio}</h4>
                    <p className="experiencia-descripcion">{exp.descripcion}</p>
                </article>
            ))}
        </section>
    )
}

export default Experiencia