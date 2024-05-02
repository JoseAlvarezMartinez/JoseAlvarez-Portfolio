import Navbar from "../../components/Navbar/Navbar"
import Avatar from "../../assets/avatar.png"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
    return (
        <header>
            <div className="background-black">
                <Navbar />

                <div className="header-container">
                    <img className="avatar-img" src={Avatar} alt="Imagen de Avatar" />

                    <section className="container-presentacion-personal">
                        <h2 className="header-h2">José Alvarez Martinez<span>Desarrollador Front End</span></h2>

                        <div className="header-container-buttons">
                            <a target="_blank" className="descargar-cv-button" href="https://drive.google.com/file/d/1w3PJpocXokdCyrUyv805b1FbCQl-M0by/view?usp=sharing">Descargar CV</a>
                            <div className="redes-buttons">
                                <a
                                    className="redes-icons"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/jos%C3%A9-alvarez-martinez-621404211/">
                                    <CiLinkedin size={"2.6rem"} color={"#fff"} />
                                </a>
                                <a
                                    className="redes-icons"
                                    target="_blank"
                                    href="https://github.com/JoseAlvarezMartinez">
                                    <FaGithub size={"2.2rem"} color={"#fff"} />
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* <IoIosArrowDown className="arrow-icon" size={"2rem"} color={"#fff"} /> */}
                </div>
            </div>
        </header>
    )
}

export default Header