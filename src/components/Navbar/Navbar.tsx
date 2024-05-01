import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='navbar'>
            <Hamburger size={30} color='#fff' toggled={isOpen} toggle={setOpen} />

            <h1 className='nav-h1'>José Alvarez</h1>
        </nav>
    )
}

export default Navbar