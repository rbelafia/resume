import React, {MutableRefObject} from "react";
import "./About.css"
import {FaRegEnvelope} from "react-icons/fa";
import {SiGithub} from "react-icons/si";
import {TfiLinkedin} from "react-icons/tfi";

function About({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const name = "Romain Belafia"
    const mail = "romain.belafia@irisa.fr"
    const presentation = "I am a French engineer specialized in DevOps and I am currently looking for a post as a DevOps engineer.\n\n " +
        "After getting an engineering degree at INSA Rennes with a double degress in computer science obtained at University Rennes, I worked as a research engineer at DiverSE team at IRISA.\n" +
        "This work experience gave me an expertise on DevOps practices adapted to a Software Project."
    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section className="about" ref={ref}>
        <h1 className="about-name">{name}</h1>
        <a className="about-contact" href={`mailto:${mail}`}>
            <FaRegEnvelope fill="black"/>
            <span style={{paddingLeft: "0.5em"}}>CONTACT ME</span>
        </a>
        <p>
            {
                presentation.split('\n').map((line, index) => <>
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
