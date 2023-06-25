import React, {MutableRefObject, useContext, useState} from "react";
import "./Experience.css";
import {MdLocationOn} from "react-icons/md";
import Icons from "../icons/Icons";
import {LangContext} from "../App";

interface WorkExperience {
    title: string,
    location: string,
    description: string | string[],
    tags: string[],
    tools: string[],
    date: number | [number, number]
}
const englishWorkExperiences: WorkExperience[] = [
    {
        title: "Research engineer",
        location: "IRISA - DiverSE team (in connection with Jamespot)",
        description: [
            "Study of CI / CD chain scalability in a context of massification of client data, based on Jamespot practices",
            "Support for Jamespot CI / CD improvement",
            "Development of a recommendation tools for DevOps practices adapted to a software project, by comparing a set of metrics to those obtained in a large dataset of Open-source projects",
            "Supervision of Verification and Validation practical works at the University of Rennes"
        ],
        tags: [
            "DevOps",
            "CI / CD",
            "Data Analysis"
        ],
        tools: [
            "Python",
            "Docker / Docker Compose",
            "Kubernetes",
            "Gitlab CI",
            "GitHub Actions",
            "React",
            "Django"
        ],
        date: [2021, 2023]
    },
    {
        title: "End of study intership",
        location: "IRISA - DiverSE team (in connection with Obeo)",
        description: [
            "Migration of a Cloud-based IDE toward microservices: Sirius Web",
            "Redaction of a research article: 'From Monolithic to Microservice Architecture: The Case of Extensible and Domain-Specific IDEs, Models 2021'"
        ],
        tags: [
            "Microservices",
            "Language Engineering",
            "Research"
        ],
        tools: [
            "Spring Boot",
            "Quarkus",
            "EMF",
            "Java",
            "LaTex"
        ],
        date: 2021
    },

    {
        title: "Research and development internship",
        location: "IRISA - PACAP Team",
        description: "Simulation and exploration of a material fault model in an architecture simulator",
        tags: [
            "Low level"
        ],
        tools: [
            "C",
            "C++",
            "Python"
        ],
        date: 2020
    },

    {
        title: "Development internship",
        location: "Ziwit HTTPCS",
        description: "Development of Web and Python programs in relation with Cybersecurity",
        tools: [
            "Python",
            "Synfony"
        ],
        tags: [
            "Cybersecurity",
            "Web"
        ],
        date: 2019
    }
];

const frenchWorkExperiences: WorkExperience[] = [
    {
        title: "Ingénieur de recherche et de formation",
        location: "IRISA – équipe DiverSE (en lien avec Jamespot)",
        description: [
            "Etude de la scalabilité des chaînes d’intégration et déploiement continus dans un contexte de massification des données, en se basant sur les pratiques de Jamespot",
            "Aide à l’amélioration de la chaîne d’intégration et déploiement continus de Jamespot",
            "Mise en place d’un outil de recommandation de pratiques DevOps adaptées à un projet " +
            "logiciel, en comparant un ensemble de métriques à celles obtenues sur large corpus de " +
            "projets open-source",
            "Encadrement de travaux pratiques de Vérification et Validation à l’Université de Rennes"
        ],
        tags: [
            "DevOps",
            "CI / CD",
            "Data Analysis"
        ],
        tools: [
            "Python",
            "Docker / Docker Compose",
            "Kubernetes",
            "Gitlab CI",
            "GitHub Actions",
            "React",
            "Django"
        ],
        date: [2021, 2023]
    },
    {
        title: "Projet de fin d'étude",
        location: "IRISA – Equipe DiverSE (en lien avec OBEO)",
        description: [
            "Migration vers les microservices d’un IDE en Cloud : Sirius Web",
            "Rédaction d'un article de recherche: 'From Monolithic to Microservice Architecture: The Case of Extensible and Domain-Specific IDEs, Models 2021'"
        ],
        tags: [
            "Microservices",
                "Language Engineering",
            "Recherche"
        ],
        tools: [
            "Spring Boot",
            "Quarkus",
            "EMF",
            "Java",
            "LaTex"
        ],
        date: 2021
    },

    {
        title: "Stage de recherche et développement",
        location: "IRISA – Equipe PACAP",
        description: "Simulation et exploration d'un modèle de faute matérielle dans un simulateur d'architecture",
        tags: [
            "Bas niveau"
        ],
        tools: [
            "C",
            "C++",
            "Python"
        ],
        date: 2020
    },

    {
        title: "Stage de dévelopement",
        location: "Ziwit HTTPCS",
        description: "Stage de Développement Python et Web autour de la cybersécurité",
        tools: [
            "Python",
            "Synfony"
        ],
        tags: [
            "Cybersecurity",
            "Web"
        ],
        date: 2019
    }
];

const englishContext = {
    title: "Work experiences",
    experiences: englishWorkExperiences,
    more: "Show more",
    less: "Show less"
}

const frenchContext = {
    title: "Experiences professionelles",
    experiences: frenchWorkExperiences,
    more: "Montrer plus",
    less: "Montrer moins"
}
function Experience({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const [showMore, setShowMore] = useState(false);
    const lang = useContext(LangContext)

    const context = lang === "French" ? frenchContext : englishContext
    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section ref={ref} className="experiences">
        <h1>{context.title}</h1>
        <div className="experiences-container">
            {
                context.experiences
                    .filter((value, index) => {
                        if (showMore) return true;
                        return index < 2;
                    })
                    .map(({description, location, title, tools, date, tags}) => (
                    <div className="experience">
                        <div className="experience-details">
                            <h2 className="experience-title-container">
                                <div className="experience-date">
                                    {
                                        typeof date === "number" ?
                                            <span>{date}</span> :
                                            <span>{date[0]} – {date[1]}</span>
                                    }
                                </div>
                                <span className="experience-title">{title}</span>

                            </h2>
                            <div className="experience-subdetails">
                                <h3 className="experience-location">
                                    <MdLocationOn/>
                                    <span>{location}</span>
                                </h3>
                                {
                                    typeof description === "string" ?
                                        <p className="experience-description">{description}</p> :
                                        <ul className="experience-description">
                                            {description.map(line => <li>{line}</li>)}
                                        </ul>
                                }

                                <ul className="experience-tags">
                                    {tags.map(tag => <li className="experience-tag">{tag}</li>)}

                                </ul>
                                <ul className="experience-tools">
                                    {tools.map(tool => <Icons toolName={tool}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="show-more-container">
                <div className="show-more-button" onClick={() => setShowMore(prevState => !prevState)}>
                    {showMore ? <span>{context.less}</span>:<span>{context.more}</span>}
                    </div>
            </div>
        </div>
    </section>;
}

export default Experience;

