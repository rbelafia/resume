import React, {MutableRefObject, useContext} from "react";
import "./Education.css"
import {MdLocationOn} from "react-icons/md";
import insaPicture from "../assets/insa.png"
import univPicture from "../assets/ur1.png"
import {LangContext} from "../App";

interface EducationInfo {
    title: string,
    description: string,
    location: string
    date: number | [number, number],
    topics: string[],
    logoName: string
}

const englishInfos: EducationInfo[] = [
    {
        title: "Engineering Degree in Computer Science",
        description: "I followed a curriculum at INSA Rennes, composed of 2 year general preparatory cycle, " +
            "followed by a 3 year curriculum in computer science. During my curriculum I had the opportunity to " +
            "study at Aalborg University in Denmark for a semester. During the last year of my curriculum I followed" +
            "a double degree at Rennes 1 University more research focused. ",
        location: "INSA Rennes",
        date: [2016, 2021],
        topics: [
            "Software engineering",
            "Architecture",
            "Data and network",
            "Media and interactions",
            "Language and compilation",
            "Science and Technique for the engineer",
            "Music study"
        ],
        logoName: "insa"
    },
    {
        title: "Master in Computer Science as a double degree",
        location: "University of Rennes – INSA Rennes",
        description: "During the last year of my curriculum at INSA Rennes, I followed a research double degree " +
            "at the University of Rennes",
        date: 2021,
        topics: [
            "Architecture",
            "Language and compilation",
            "Software security",
            "Software science"
        ],
        logoName: "ur1"
    }
]

const frenchInfos: EducationInfo[] = [
    {
        title: "Diplôme d'ingénieur en informatique",
        description: "J'ai suivi un cursus d'ingénieur à l'INSA Rennes, composé de 2 années de classes préparatoires intégrées " +
            "suivies d'un cycle ingénieur de trois ans spécialisé en informatique. Au cours de mon cursus j'ai eu l'occasion " +
            "d'effectuer une mobilité universitaire à l'Université d'Aalborg au Danemark pendant un semestre. Durant la dernière année de mon cursus " +
            "j'ai pu effectuer un double diplôme recherche à l'Université de Rennes. ",
        location: "INSA Rennes",
        date: [2016, 2021],
        topics: [
            "Conception logiciel",
            "Architecture logicielle et matérielle",
            "Données et réseaux",
            "Media et interactions",
            "Langages et compilation",
            "Sciences et Techniques pour l’ingénieur",
            "Musique étude"
        ],
        logoName: "insa"
    },
    {
        title: "Master recherche d'informatique en double diplôme",
        location: "Université de Rennes – INSA Rennes",
        description: "Durant la dernière année de mon cursus à l'INSA Rennes, j'ai suivi un master recherche en double diplôme avec l'Université de Rennes.",
        date: 2021,
        topics: [
            "Architecture",
            "Langages et compilation",
            "Sécurité logicielle",
            "Génie logicielle"
        ],
        logoName: "ur1"
    }
]

const englishContext = {
    title: "Education",
    infos: englishInfos
}

const frenchContext = {
    title: "Formation",
    infos: frenchInfos
}

function GetLogo(path: string) {
    const pic = {
        "insa": insaPicture,
        "ur1": univPicture
    }[path]
    return pic === undefined ? insaPicture : pic
}
function Education({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    const lang = useContext(LangContext)

    const context = lang === "French" ? frenchContext : englishContext
    // @ts-ignore
    return <section ref={ref} className="education">
        <h2>{context.title}</h2>
        {
            context.infos.map(({date, description, location, title, topics, logoName}) => (
                <article className="education-info">
                    <div className="education-title-container">
                        <h3>
                            <span className="education-date">
                                {
                                    typeof date === "number" ?
                                        <>{date} </> :
                                        <>{date[0]} – {date[1]} </>
                                }
                            </span>
                            <span className="education-title">{title}</span>
                        </h3>

                        <img className="education-logo" src={GetLogo(logoName)} alt="INSA Rennes logo"/>
                    </div>
                    <div className="education-sub-details">
                        <div className="education-location">
                            <MdLocationOn/>
                            <span>{location}</span>
                        </div>
                        <p className="education-description">{description}</p>

                        <ul className="education-topics">
                            {topics.map(tag => <li className="education-topic">{tag}</li>)}
                        </ul>
                    </div>

                </article>
            ))
        }

    </section>
}

export default Education

