import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.touchAction = "none"
        } else {
            document.body.style.overflow = "auto"
            document.body.style.touchAction = "auto"
        }
    }, [isOpen])

    const handleState = () => {
        setOpen(false)
    }

    return (
        <nav className='navbar'>

            <h2 className='nav-h2'></h2>
            <div className="burger-icon">
                <Hamburger size={30} color='#fff' toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className={`${isOpen ? "navbar-activa" : "navbar-inactiva"}`}>
                <li><a href="#">Inicio</a></li>
                <li><a onClick={handleState} href="#sobremi">Sobre Mi</a></li>
                <li><a onClick={handleState} href="#proyectos">Proyectos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar