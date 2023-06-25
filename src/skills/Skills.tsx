import React, {MutableRefObject} from "react";
import "./Skills.css"
import {GB, FR} from "country-flag-icons/react/3x2";
import {ES} from "country-flag-icons/react/3x2";
import Icons from "../icons/Icons";


interface SubSkill {
    subSkill: string,
    tools: string[]
}
interface Skill {
    skill: string,
    subSkills: SubSkill[]
}



function SkillsAux({title, skills}: {title: string, skills: Skill[]}) {
    return <>
        <h2>{title}</h2>

        <div className="skills-divs">
            {
                skills.map(({skill, subSkills}) => (
                    <div className="skills-div">
                        <h3 className="skill-name">{skill.toUpperCase()}</h3>
                        <div className="skill-tools">
                            {subSkills.map(({subSkill, tools}) => (
                                <div className="skills-one dot">
                                    <h4 className="subskill">{subSkill}</h4>
                                    <ul>
                                        {
                                            tools.map((tool) => <Icons toolName={tool}/>)
                                        }
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </>
}
const technicalSkills: Skill[] = [
    {
        skill: "Development",
        subSkills: [
            {
                subSkill: "Main programming languages",
                tools: [
                    "Python",
                    "Java",
                    "JavaScript",
                    "TypeScript"
                ]
            } ,
            {
                subSkill: "Other programming languages",
                tools: [
                    "C",
                    "C++",
                    "PHP",
                    "Bash",
                    "Ruby",
                    "R"
                ]
            },
            {
                subSkill: "Development environment",
                tools: [
                    "Git",
                    "Linux",
                    "Jetbrains suite",
                    "Visual Studio Code",
                    "Eclipse"
                ]
            },
            {
                subSkill: "Data Analysis",
                tools: [
                    "Numpy",
                    "Pandas",
                    "Matplotlib",
                    "Jupyter Notebook",
                ]
            }
        ]
    },
    {
        skill: "Web",
        subSkills: [
            {
                subSkill: "Web frameworks",
                tools: [
                    "Quarkus",
                    "Spring Boot",
                    "Django",
                    "Fast API"
                ]
            } ,
            {
                subSkill: "Front-end",
                tools: [
                    "React",
                    "Angular"
                ]
            },
            {
                subSkill: "API",
                tools: [
                    "Rest",
                    "GraphQL"
                ]
            },
            {
                subSkill: "Database",
                tools: [
                    "MySQL",
                    "MariaDB",
                    "SQLite",
                    "Postegresql"
                ]
            }
        ]
    },
    {
        skill: "Verification & Validation",
        subSkills: [
            {
                subSkill: "Unit testing",
                tools: [
                    "JUnit",
                    "PHP Unit",
                    "Jest"
                ]
            },
            {
                subSkill: "End-to-end testing",
                tools: [
                    "Selenium",
                    "Cypress"
                ]
            },
            {
                subSkill: "Static analysis",
                tools: [
                    "PMD",
                    "Pylint",
                    "Checkstyle"
                ]
            } ,
            {
                subSkill: "Mutation testing",
                tools: [
                    "PIT"
                ]
            }
        ]
    },
    {
        skill: "DevOps",
        subSkills: [
            {
                subSkill: "Containerization / orchestration",
                tools: [
                    "Docker / Docker Compose",
                    "Kubernetes",
                ]
            },
            {
                subSkill: "CI / CD",
                tools: [
                    "Gitlab CI",
                    "GitHub Actions",
                    "Jenkins",
                    "Circle CI"
                ]
            },
            {
                subSkill: "Monitoring",
                tools: [
                    "Sonarqube",
                    "Prometheus",
                    "Grafana"
                ]
            },
            {
                subSkill: "Cloud Computing / Infrastructure As Code",
                tools: [
                    "Amazon Web Services",
                    "Terraform",
                    "Ansible"
                ]
            },
        ]
    }
]
function Skills({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section ref={ref} className="skills">
        <h1>Skills</h1>
        <div>
            {<SkillsAux title={"Technical skills"} skills={technicalSkills}/>}
            <h2 style={{marginTop: "1em"}}>Other skills</h2>
            <div className="skills-divs">
                <div className="skills-div">
                    <h3 className="skill-name">Music production</h3>
                    <div className="skill-tools">
                        <div className="skills-one dot">
                            <h4 className="subskill">Digital audio workstations</h4>
                            <ul>
                                <Icons toolName={"Ableton"}/>
                                <Icons toolName={"Pro tools"}/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills-div">
                    <h3 className="skill-name">Languages</h3>
                    <div className="skill-tools">
                        <div className="skills-one">
                            <div className="skills-language">
                                <div className="icon-country">
                                    <FR title="French"/>
                                </div>
                                <h4 className="skills-language-sub">
                                    <span style={{fontWeight: "bold"}}>French</span> - Native speaker
                                </h4>
                            </div>
                        </div>
                        <div className="skills-one">
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div className="icon-country">
                                    <GB title="English"/>
                                </div>
                                <h4><span style={{fontWeight: "bold"}}>English</span> - Level C1</h4>
                            </div>
                            <ul>
                                <li style={{fontStyle: "italic"}}>TOEIC obtained in 2021</li>
                                <li style={{fontStyle: "italic"}}>TOEFL IBT obtained in 2019</li>
                            </ul>
                        </div>
                        <div className="skills-one">
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div className="icon-country">
                                    <ES title="Spanish"/>
                                </div>
                                <h4><span style={{fontWeight: "bold"}}>Spanish</span> - Level B1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default Skills

