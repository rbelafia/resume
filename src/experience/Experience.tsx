import React, {MutableRefObject, useState} from "react";
import "./Experience.css";
import {MdLocationOn} from "react-icons/md";
import Icons from "../icons/Icons";

interface WorkExperience {
    title: string,
    location: string,
    description: string | string[],
    tags: string[],
    tools: string[],
    date: number | [number, number]
}
const workExperiences: WorkExperience[] = [
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
function Experience({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const [showMore, setShowMore] = useState(false);

    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section ref={ref} className="experiences">
        <h1>Work experience</h1>
        <div className="experiences-container">
            {
                workExperiences
                    .filter((value, index) => {
                        if (showMore) return true;
                        return index < 2;
                    })
                    .map(({description, location, title, tools, date, tags}) => (
                    <div className="experience">
                        <div className="experience-details">
                            <div className="experience-title-container">
                                <div className="experience-date">
                                    {
                                        typeof date === "number" ?
                                            <span>{date}</span> :
                                            <span>{date[0]} – {date[1]}</span>
                                    }
                                </div>
                                <h3 className="experience-title">{title}</h3>

                            </div>
                            <div className="experience-subdetails">
                                <div className="experience-location">
                                    <MdLocationOn/>
                                    <span>{location}</span>
                                </div>
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
                    {showMore ? <span>Show less</span>:<span>Show more experiences</span>}
                    </div>
            </div>
        </div>
    </section>;
}

export default Experience;

