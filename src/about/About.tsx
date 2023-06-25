import React, {MutableRefObject, useContext} from "react";
import "./About.css"
import {FaRegEnvelope} from "react-icons/fa";
import {SiGithub} from "react-icons/si";
import {TfiLinkedin} from "react-icons/tfi";
import {LangContext} from "../App";

const englishAbout = {
    presentation: "I am a French DevOps engineer with a research oriented background.\n" +
        "I am currently looking for a post as a DevOps engineer.\n\n " +
        "After getting an engineering degree at INSA Rennes with a double degress in computer science obtained at University Rennes, I worked as a research engineer at DiverSE team at IRISA.\n" +
        "This work experience gave me an expertise in the capacity of chosing and implementing DevOps practices adapted to a Software Project.",
    contactMe: "Contact me"
}

const frenchAbout = {
    presentation: "Je suis un ingénieur DevOps français avec une formation accès vers la recherche.\n" +
        "Je suis actuellement à la recherche d'un poste d'ingénieur DevOps dans un contexte de recherche et développement.\n\n" +
        "Après avoir été diplômé à l'INSA Rennes en tant qu'ingénieur en informatique avec un double diplôme ingénieur-chercheur, j'ai travaillé en tant qu'ingénieur de recherche au sein de l'équipe DiverSE aux laboratoire de l'Irisa à Rennes.\n" +
        "Ce travail m'a donné une expertise dans la capacité à choisir et implémenter les pratiques DevOps adaptées à un projet logiciel.",
    contactMe: "ME CONTACTER"
}

function About({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const lang = useContext(LangContext)
    const name = "Romain Belafia"
    const mail = "romain.belafia@irisa.fr"

    const about = lang === "French" ? frenchAbout : englishAbout


    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section className="about" ref={ref}>
        <h1 className="about-name">{name}</h1>
        <a className="about-contact" href={`mailto:${mail}`}>
            <FaRegEnvelope fill="black"/>
            <span className="about-contact-txt">{about.contactMe}</span>
        </a>
        <p>
            {
                about.presentation.split('\n').map((line, index) => <>
                    {index !== 0 && <br/>}
                    <span>{line}</span>
                </>)
            }
        </p>
        <div style={{display: "flex", flexDirection: "row"}}>
            <a className="about-logo" href="https://www.linkedin.com/in/romain-belafia/">
                <TfiLinkedin/>
            </a>
            <a className="about-logo" href="https://github.com/rbelafia"
               style={{marginLeft: "0.5em"}}><SiGithub/></a>
        </div>

    </section>
}

export default About
