import CardProyecto from "../../components/CardProyecto/CardProyecto"
import { proyectos } from "../../data/db"
const Proyecto = () => {
    return (
        <main id="proyectos" className="sections-containers-experiencia">

            <h2 className="sections-h2">Proyectos</h2>

            <div className="proyectos-responsive">
                {proyectos.map(proyecto => <CardProyecto key={proyecto.nombre} proyecto={proyecto} />)}
            </div>
        </main>
    )
}

export default Proyecto