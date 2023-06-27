import React, {createContext, useRef, useState} from "react";
import meCropped from "./assets/me_cropped.jpg";
import "./App.css";
import About from "./about/About";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import {FR, GB} from "country-flag-icons/react/3x2";


import {isMobile} from "react-device-detect";
import {SlMenu} from "react-icons/sl";
import Experience from "./experience/Experience";
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
    const handleLangClick = () => {
        setLang(prevState => prevState === "French" ? "English" : "French");
        setShowNav(false);
    }

    const handleLangKeyDownRef = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") handleLangClick()
    }

    const handleRefClick = (ref: React.MutableRefObject<HTMLDivElement | undefined>) => () => {
        setShowNav(false);
        ref?.current?.scrollIntoView();
    }

    const handleKeyDownRef = (ref: React.MutableRefObject<HTMLDivElement | undefined>) => (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleRefClick(ref)()
        }
    };

    const linksRefs = [
        {
            name: context.links.about,
            ref: aboutRef
        },
        {
            name: context.links.skills,
            ref: skillsRef
        },
        {
            name: context.links.experience,
            ref: experienceRef
        },
        {
            name: context.links.education,
            ref: educationRef
        }
    ]
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
                        {
                            linksRefs.map(({name, ref}) => (
                                <li key={`${name}`}
                                    role="link"
                                    tabIndex={0}
                                    onClick={handleRefClick(ref)}
                                    onKeyDown={handleKeyDownRef(ref)}
                                >
                                    {name}
                                </li
                                >))
                        }
                    </ul>
                    <div role="link"
                         tabIndex={0}
                         className="app-icon-country"
                         onClick={handleLangClick}
                         onKeyDown={handleLangKeyDownRef}
                    >
                        {
                            lang === "English" ?  <FR title="Français"/> : <GB title="English"/>
                        }
                    </div>
                </nav>
        }

        <LangContext.Provider value={lang} >
            <main className="app-main">
                {
                    isMobile && (
                        <aside tabIndex={-1} className={`app-menu-container${showNav ? ' shown' : ''}`} onClick={() => setShowNav(prevState => !prevState)}>
                        <SlMenu/>
                    </aside>)
                }
                <article className="app-submain"  onClick={() => setShowNav(false)}>
                    <About reference={aboutRef}/>
                    <hr/>
                    <Skills reference={skillsRef}/>
                    <hr/>
                    <Experience reference={experienceRef}/>
                    <hr/>
                    <Education reference={educationRef}/>
                </article>

            </main>
        </LangContext.Provider>
    </>;
}


export default App;
