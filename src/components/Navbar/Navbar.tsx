import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='navbar'>

            <h2 className='nav-h2'></h2>

            <Hamburger size={30} color='#fff' toggled={isOpen} toggle={setOpen} />
        </nav>
    )
}

export default Navbar