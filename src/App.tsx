import React, {createContext, useRef, useState} from "react";
import meCropped from "./assets/me_cropped.jpg";
import "./App.css";
import About from "./about/About";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import {FR, GB} from "country-flag-icons/react/3x2";


import {isMobile} from "react-device-detect";
import {SlMenu} from "react-icons/sl";
export const LangContext = createContext<"French" | "English">("English");

const frenchContext = {
    links: {
        about: "Qui suis-je ?",
        skills: "Compétences",
        experience: "Experiences professionnelles",
        education: "Formation"
    }
};
const englishContext = {
    links: {
        about: "About",
        skills: "Skills",
        experience: "Work experience",
        education: "Education"
    }
};

function App() {
    const [lang, setLang] = useState<"French" | "English">("French");
    const [showNav, setShowNav] = useState(false);
    const educationRef = useRef<HTMLDivElement>();
    const experienceRef = useRef<HTMLDivElement>();
    const skillsRef = useRef<HTMLDivElement>();
    const aboutRef = useRef<HTMLDivElement>();

    const context = lang === "French" ? frenchContext : englishContext;

    // @ts-ignore
    return <>
        {
            (!isMobile || showNav) &&
                <nav className={`app-nav`}>
                    {
                        (!isMobile) &&
                            <div className="me-container">
                                <img src={meCropped} alt="Romain Belafia"/>
                            </div>
                    }
                    <ul className="nav-list">
                        <li onClick={() => {
                            setShowNav(false);
                            aboutRef?.current?.scrollIntoView()
                        }}>
                            {context.links.about}
                        </li>
                        <li onClick={() => {
                            setShowNav(false);
                            skillsRef?.current?.scrollIntoView()
                        }}>{context.links.skills}</li>
                        <li onClick={() => {
                            setShowNav(false);
                            experienceRef?.current?.scrollIntoView()
                        }}>{context.links.experience}</li>
                        <li onClick={() => {
                            setShowNav(false);
                            educationRef?.current?.scrollIntoView()
                        }}>{context.links.education}</li>
                    </ul>
                    <div className="app-icon-country" onClick={() => setLang(prevState => {
                        return prevState === "French" ? "English" : "French";
                    })}>
                        {
                            lang === "English" ?  <FR title="Français"/> : <GB title="English"/>
                        }
                    </div>
                </nav>
        }

        <LangContext.Provider value={lang} >
            <main className={`app-main`}>
                {
                    isMobile && <div className="app-menu-container" onClick={() => setShowNav(prevState => !prevState)}>
                        <SlMenu/>
                    </div>
                }
                <div className="app-submain">
                    <About reference={aboutRef}/>
                    <Skills reference={skillsRef}/>
                    <Experience reference={experienceRef}/>
                    <Education reference={educationRef}/>
                </div>

            </main>
        </LangContext.Provider>
    </>;
}


export default App;
