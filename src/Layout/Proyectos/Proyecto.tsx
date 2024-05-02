import CardProyecto from "../../components/CardProyecto/CardProyecto"
import { proyectos } from "../../data/db"
const Proyecto = () => {
    return (
        <main className="sections-containers">

            <h2 className="sections-h2">Proyectos</h2>

            <div className="proyectos-responsive">
                {proyectos.map(proyecto => <CardProyecto key={proyecto.nombre} proyecto={proyecto} />)}
            </div>
        </main>
    )
}

export default Proyecto