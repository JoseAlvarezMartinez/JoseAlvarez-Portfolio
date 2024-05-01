import Navbar from "./components/Navbar/Navbar"
import Avatar from "./assets/avatar.png"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function App() {

  return (
    <>
      <header>
        <div className="background-black">
          <Navbar />

          <img className="avatar-img" src={Avatar} alt="" />

          <h2 className="header-h2">José Alvarez <span>Desarrollador Front End</span></h2>

          <div className="header-container-buttons">
            <a className="descargar-cv-button" href="#">Descargar CV</a>
            <CiLinkedin size={"2rem"} color={"#fff"} />
            <FaGithub size={"1.7rem"} color={"#fff"} />
          </div>

          <IoIosArrowDown size={"2rem"} color={"#fff"} />
        </div>
      </header>
    </>
  )
}

export default App
