import React, {MutableRefObject} from "react";
import "./Education.css"
import {MdLocationOn} from "react-icons/md";
import insaPicture from "../assets/insa.png"
import univPicture from "../assets/ur1.png"

interface EducationInfo {
    title: string,
    description: string,
    location: string
    date: number | [number, number],
    topics: string[],
    logoName: string
}
const infos: EducationInfo[] = [
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

function GetLogo(path: string) {
    const pic = {
        "insa": insaPicture,
        "ur1": univPicture
    }[path]
    return pic === undefined ? insaPicture : pic
}
function Education({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>

    // @ts-ignore
    return <section ref={ref} className="education">
        <h1>Education</h1>
        {
            infos.map(({date, description, location, title, topics, logoName}) => (
                <div className="education-info">
                        <div className="education-date">
                            {
                                typeof date === "number" ?
                                    <span>{date}</span> :
                                    <span>{date[0]} – {date[1]}</span>
                            }
                        </div>
                        <div className="education-details">
                            <div className="education-title-container">
                                <h3 className="education-title">{title}</h3>
                                <img className="education-logo" src={GetLogo(logoName)} alt="INSA Rennes logo"/>
                            </div>
                            <div className="education-location">
                                <MdLocationOn/>
                                <span>{location}</span>
                            </div>
                            <p>{description}</p>

                            <ul className="education-topics">
                                {topics.map(tag => <li className="education-topic">{tag}</li>)}
                            </ul>
                        </div>
                </div>
            ))
        }

    </section>
}

export default Education

