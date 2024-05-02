import Avatar from "../../assets/avatar.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";



const Footer = () => {
    return (
        <footer>

            <img className="avatar-img avatar-footer" src={Avatar} alt="Imagen de Avatar" />

            <h2 className="header-h2 footer-h2">José Alvarez Martinez<span>Desarrollador Front End</span></h2>

            <div className="footer-buttons">
                <a target="_blank"
                    href="https://www.linkedin.com/in/jos%C3%A9-alvarez-martinez-621404211/">
                    <FaLinkedin size={"1.8rem"} color={"#fff"} />
                </a>
                <a target="_blank" href="https://github.com/JoseAlvarezMartinez">
                    <FaGithub size={"1.8rem"} color={"#fff"} />
                </a>
                <a href="mailto:alvarezmjose2021@gmail.com">
                    <CiMail size={"2rem"} color={"#fff"} />
                </a>
            </div>

        </footer>

    )
}

export default Footer