import type { Proyectos, Experiencia } from "../types/index"
export const experiencia: Experiencia[] = [
    {
        cargo: "Desarrollador Front End Freelance",
        anio: 2021,
        descripcion: "Desarrollo aplicaciones webs utilizando tecnologías modernas como React. Mi enfoque principal es la creación de soluciones personalizadas para clientes en diversos sectores, incluidos blogs, aplicaciones de gestión de stock, plataformas de noticias deportivas y tiendas digitales.",
        clase: "freelance"
    },
    {
        cargo: "Coderhouse",
        anio: 2022,
        descripcion: "Lidero comisiónes de Desarrollo Web dentro de la empresa. Planifico clases, diseño materiales didácticos y evalúo el progreso de los estudiantes. Fomento un entorno de aprendizaje dinámico y colaborativo, ofreciendo apoyo individualizado para garantizar el éxito de los alumnos.",
        clase: "coderhouse"
    },
    {
        cargo: "Hisluma",
        anio: 2023,
        clase: "hisluma",
        descripcion: `
        Mi responsabilidad principal es mantener actualizado el contenido de noticias en el sitio web, asegurando que los usuarios tengan acceso a la información más reciente y relevante. Además, formé
parte del equipo de desarrollo que contribuyó al diseño e implementación de diversas funcionalidades, mejorando así la experiencia del usuario.
        `,

    }
]

export const proyectos: Proyectos[] = [
    {
        nombre: "Hisluma TV",
        link: "https://hisluma.netlify.app/accueil",
        imagen: "https://i.ibb.co/b3sxTxY/Captura-de-pantalla-2024-05-02-110308.png",
        id: "HislumaProject"
    },
    {
        nombre: "Proyecto Fenox",
        link: "https://francoazari.github.io/proyecto-fenox/",
        imagen: "https://i.ibb.co/DgmYDYr/Captura-de-pantalla-2024-05-02-113125.png",
        id: "FenoxProject"
    },
    {
        nombre: "Rest Countries",
        link: "https://662692608a1f4d03b727d498--jovial-kitsune-b9ac8c.netlify.app/",
        imagen: "https://i.ibb.co/N6YkR2t/Captura-de-pantalla-2024-05-02-113211.png",
        id: "CountriesProject"
    },
    {
        nombre: "Space Tourism",
        link: "https://661feadec0d654039ba26198--exquisite-gaufre-5ec575.netlify.app/",
        imagen: "https://i.ibb.co/VNM3Bzz/Captura-de-pantalla-2024-05-02-113243.png",
        id: "SpaceProject"
    },
    {
        nombre: "Administrador de turnos",
        link: "https://kaleidoscopic-kashata-078ec7.netlify.app/",
        imagen: "https://i.ibb.co/t2TzmmX/Captura-de-pantalla-2024-05-02-113304.png",
        id: "TurnosProject"
    },
    {
        nombre: "Cotizador de Criptomonedas",
        link: "https://transcendent-tiramisu-c5fc58.netlify.app/",
        imagen: "https://i.ibb.co/3WHkX55/Captura-de-pantalla-2024-05-02-113308.png",
        id: "CryptoProject"
    },

]

interface Tecnologias {
    [key: string]: string
}
export const tecnologias: Tecnologias[] = [
    {
        tecnologiaID: "html",
        img: "https://i.ibb.co/rFy2mPv/html-Logo-removebg-preview.png"
    },
    {
        tecnologiaID: "css",
        img: "https://i.ibb.co/vLyJmvh/cssLogo.png"
    },    
    {
        tecnologiaID: "bootstrap",
        img: "https://i.ibb.co/t4dQhx3/bootstrap-Logo-removebg-preview.png"
    },
    {
        tecnologiaID: "sass",
        img: "https://i.ibb.co/r4KzVpx/sass-Logo-removebg-preview.png"
    },
    {
        tecnologiaID: "javascript",
        img: "https://i.ibb.co/XFS47jZ/jsLogo.png"
    },
    {
        tecnologiaID: "typescript",
        img: "https://i.ibb.co/DpCcDNG/typescript-Logo.png"
    },
    {
        tecnologiaID: "react",
        img: "https://i.ibb.co/HK0NWXz/react-Logo.png"
    },
    {
        tecnologiaID: "redux",
        img: "https://i.ibb.co/ypSbbt9/images-removebg-preview.png"
    },
    {
        tecnologiaID: "zustand",
        img: "https://i.ibb.co/b7HyVDR/zustand-logo.png"
    },

]