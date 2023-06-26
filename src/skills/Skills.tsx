import React, {MutableRefObject, useContext} from "react";
import "./Skills.css"
import {GB, FR} from "country-flag-icons/react/3x2";
import {ES} from "country-flag-icons/react/3x2";
import Icons from "../icons/Icons";
import {LangContext} from "../App";


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
        <h3>{title}</h3>

        <div className="skills-divs">
            {
                skills.map(({skill, subSkills}) => (
                    <div className="skills-div">
                        <h4 className="skill-name">{skill}</h4>
                        <div className="skill-tools">
                            {subSkills.map(({subSkill, tools}) => (
                                <div className="skills-one dot">
                                    <h5 className="subskill">{subSkill}</h5>
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
const englishTechnicalSkills: Skill[] = [
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
                subSkill: "Development environnement",
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
                subSkill: "Containerization / Orchestration",
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
const frenchTechnicalSkills: Skill[] = [
    {
        skill: "Développement",
        subSkills: [
            {
                subSkill: "Principaux langages de programmation",
                tools: [
                    "Python",
                    "Java",
                    "JavaScript",
                    "TypeScript"
                ]
            } ,
            {
                subSkill: "Autres langages de programmation",
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
                subSkill: "Environnement de développement",
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
                subSkill: "Frameworks web",
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
                subSkill: "Bases de données",
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
        skill: "Vérification & Validation",
        subSkills: [
            {
                subSkill: "Test unitaires",
                tools: [
                    "JUnit",
                    "PHP Unit",
                    "Jest"
                ]
            },
            {
                subSkill: "Test end-to-end",
                tools: [
                    "Selenium",
                    "Cypress"
                ]
            },
            {
                subSkill: "Analyse statique",
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
                subSkill: "Containerisation / Orchestration",
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


const englishContext = {
    title: "Skills",
    workExperiences: {
        title: "IT skills",
        skills: englishTechnicalSkills
    },
    otherExperiences: {
        title: "Other skills",
        music: {
            title: "Music production",
            subSkills: [
                {
                    subSkill: "Digital Audio Workstations",
                    tools: [
                        "Ableton",
                        "Pro tools",
                    ]
                }
            ]
        },
        languages: {
            title: "Languages",
            languages: [
            {
                language: "French",
                level: "Native speaker",
                details: [],
                iconLang: "french"
            },
            {
                language: "English",
                level: "Level C1",
                details: [
                    "TOEIC obtained in 2021",
                    "TOEFL IBT obtained in 2019"
                ],
                iconLang: "english"
            },
            {
                language: "Spanish",
                level: "Level B1",
                details: [],
                iconLang: "spanish"
            }
        ]}
    }
}

const frenchContext = {
    title: "Compétences",
    workExperiences: {
        title: "Compétences informatiques",
        skills: frenchTechnicalSkills
    },
    otherExperiences: {
        title: "Autres compétences",
        music: {
            title: "Production musicale",
            subSkills: [
                {
                    subSkill: "Digital Audio Workstations",
                    tools: [
                        "Ableton",
                        "Pro tools",
                    ]
                }
            ]
        },
        languages: {
            title: "Langues",
            languages: [
                {
                    language: "Français",
                    level: "Natif",
                    details: [],
                    iconLang: "french"
                },
                {
                    language: "Anglais",
                    level: "Niveau C1",
                    details: [
                        "TOEIC obtenu en 2021",
                        "TOEFL IBT obtenu en 2019"
                    ],
                    iconLang: "english"
                },
                {
                    language: "Espagnol",
                    level: "Niveau B1",
                    details: [],
                    iconLang: "spanish"
                }
            ]

        }
    }
}

const FindFlags = ({languageName}: {languageName: string}) => {
    const res = {
        "french": () => <FR title="French"/>,
        "english": () => <GB title="English"/>,
        "spanish": () => <ES title="Spansih"/>
    }[languageName]
    return res === undefined ? <></> : res()
}
function Skills({reference}: {reference: MutableRefObject<HTMLDivElement | undefined>}) {
    const lang = useContext(LangContext)

    const context = lang === "French" ? frenchContext : englishContext


    const ref = reference.current === undefined ? reference : reference as MutableRefObject<HTMLDivElement>
    // @ts-ignore
    return <section ref={ref} className="skills">
        <h2>{context.title}</h2>
        <div>
            {<SkillsAux title={context.workExperiences.title} skills={context.workExperiences.skills}/>}
            <h3 style={{marginTop: "1em"}}>{context.otherExperiences.title}</h3>
            <div className="skills-divs">
                <div className="skills-div">
                    <h4 className="skill-name">{context.otherExperiences.music.title}</h4>
                    <div className="skill-tools">
                        <div className="skills-one dot">
                            <h5 className="subskill">{context.otherExperiences.music.subSkills[0].subSkill}</h5>
                            <ul>
                                <Icons toolName={"Ableton"}/>
                                <Icons toolName={"Pro tools"}/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills-div">
                    <h4 className="skill-name">{context.otherExperiences.languages.title}</h4>
                    <div className="skill-tools">
                        {
                            context.otherExperiences.languages.languages.map(language => (
                                <div className="skills-one">
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className="icon-country">
                                            <FindFlags languageName={language.iconLang}></FindFlags>
                                        </div>
                                        <h5><span style={{fontWeight: "bold"}}>{language.language}</span> - {language.level}</h5>
                                    </div>
                                    <ul>
                                        {language.details.map((detail) => (
                                            <li className="skills-language-detail">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default Skills

