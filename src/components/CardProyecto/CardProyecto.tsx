
import type { Proyectos } from "../../types/index"

interface CardProyectoProps {
    proyecto: Proyectos
}

const CardProyecto = ({ proyecto }: CardProyectoProps) => {

    const { nombre, link, imagen } = proyecto
    return (
        <article className="proyecto-container">
            <a className="proyecto-url" href={link} target="_blank">
                <img className="proyecto-imagen" src={imagen} alt={`Imagen del proyecto ${nombre}`} />
                <h3 className="proyecto-titulo">{nombre}</h3>


            </a>
        </article>
    )
}

export default CardProyecto