import React, {createContext, useRef, useState} from "react";
import meCropped from "./assets/me_cropped.jpg";
import "./App.css";
import About from "./about/About";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import {FR, GB} from "country-flag-icons/react/3x2";
export const LangContext = createContext<"French" | "English">("English");

const frenchContext = {
    links: {
        about: "Qui suis-je ?",
        skills: "Compétences",
        experience: "Experiences professionnelles",
        education: "Formation"
    }
}
const englishContext = {
    links: {
        about: "About",
        skills: "Skills",
        experience: "Work experience",
        education: "Education"
    }
}

function App() {

    const [lang, setLang] = useState<"French" | "English">("French");
    const educationRef = useRef<HTMLDivElement>();
    const experienceRef = useRef<HTMLDivElement>();
    const skillsRef = useRef<HTMLDivElement>();
    const aboutRef = useRef<HTMLDivElement>();

    const context = lang === "French" ? frenchContext : englishContext

    // @ts-ignore
    return <>
        <nav>
                <div className="me-container">
                    <img src={meCropped} alt="Romain Belafia"/>
                </div>
                <ul className="nav-list">
                    <li onClick={() => aboutRef?.current?.scrollIntoView()}>{context.links.about}</li>
                    <li onClick={() => skillsRef?.current?.scrollIntoView()}>{context.links.skills}</li>
                    <li onClick={() => experienceRef?.current?.scrollIntoView()}>{context.links.experience}</li>
                    <li onClick={() => educationRef?.current?.scrollIntoView()}>{context.links.education}</li>
                </ul>
            <div className="app-icon-country" onClick={() => setLang(prevState => {
                return prevState === "French" ? "English" : "French";
            })}>
                {
                    lang === "English" ?  <FR title="Français"/> : <GB title="English"/>
                }
            </div>
        </nav>
        <LangContext.Provider value={lang} >

            <main className="app-main">
                <About reference={aboutRef}/>
                <Skills reference={skillsRef}/>
                <Experience reference={experienceRef}/>
                <Education reference={educationRef}/>
            </main>
        </LangContext.Provider>
    </>;
}


export default App;
