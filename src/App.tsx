import {useRef} from 'react'
import meCropped from './assets/me_cropped.jpg'
import './App.css'
import About from "./about/About";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skills from "./skills/Skills";

function App() {
    const educationRef = useRef<HTMLDivElement>();
    const experienceRef = useRef<HTMLDivElement>();
    const skillsRef = useRef<HTMLDivElement>();
    const aboutRef = useRef<HTMLDivElement>();

    // @ts-ignore
    return <>
        <nav>
            <div className="me-container">
                <img src={meCropped} alt="Romain Belafia"/>
            </div>
            <ul className="nav-list">
                <li onClick={() => aboutRef?.current?.scrollIntoView()}>ABOUT</li>
                <li onClick={() => skillsRef?.current?.scrollIntoView()}>SKILLS</li>
                <li onClick={() => experienceRef?.current?.scrollIntoView()}>EXPERIENCE</li>
                <li onClick={() => educationRef?.current?.scrollIntoView()}>EDUCATION</li>
            </ul>
        </nav>
        <main className="app-main">
            <About reference={aboutRef}/>
            <Skills reference={skillsRef}/>
            <Experience reference={experienceRef}/>
            <Education reference={educationRef}/>
        </main>
    </>
}

export default App
