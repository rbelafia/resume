import React from "react";
import "./Icons.css"
import {FaJava, FaPhp, FaPython} from "react-icons/fa";
import {
    SiAbletonlive,
    SiAmazonaws,
    SiAngular,
    SiAnsible,
    SiC,
    SiCircleci,
    SiCplusplus,
    SiCurl,
    SiCypress,
    SiDjango,
    SiDocker,
    SiEclipseide,
    SiFastapi,
    SiGit,
    SiGithubactions,
    SiGitlab,
    SiGrafana,
    SiGraphql,
    SiJavascript,
    SiJenkins,
    SiJest,
    SiJetbrains,
    SiJunit5,
    SiJupyter,
    SiKotlin,
    SiKubernetes,
    SiLatex,
    SiLinux,
    SiMariadb,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPostgresql,
    SiPrometheus,
    SiProtools,
    SiQuarkus,
    SiR,
    SiReact,
    SiSelenium,
    SiSonarqube,
    SiSpring,
    SiSqlite,
    SiSymfony,
    SiTerraform,
    SiTypescript,
    SiVisualstudiocode
} from "react-icons/si";
import {VscTerminalBash} from "react-icons/vsc";
import {DiRuby} from "react-icons/di";
import {TbBrandPython, TbTestPipe} from "react-icons/tb";
import {IoPieChart} from "react-icons/io5";
import {TiPencil} from "react-icons/ti";
import {LuDna} from "react-icons/lu";
import {BiCodeCurly} from "react-icons/bi";

function Icons({toolName}: {toolName: string}) {
    const res = {
        "Python": () => <FaPython/>,
        "Java": () => <FaJava/>,
        "JavaScript": () => <SiJavascript/>,
        "TypeScript": () => <SiTypescript/>,
        "C": () => <SiC/>,
        "C++": () => <SiCplusplus></SiCplusplus>,
        "Kotlin": () => <SiKotlin></SiKotlin>,
        "PHP": () => <FaPhp></FaPhp>,
        "Bash": () => <VscTerminalBash/>,
        "R": () => <SiR/>,
        "Ruby": () => <DiRuby/>,
        "Quarkus": () => <SiQuarkus/>,
        "Spring Boot": () => <SiSpring/>,
        "Django": () => <SiDjango/>,
        "Fast API": () => <SiFastapi/>,
        "React": () => <SiReact/>,
        "Angular": () => <SiAngular/>,
        "JUnit": () => <SiJunit5/>,
        "Jest": () => <SiJest/>,
        "PHP Unit": () => <TbTestPipe/>,
        "Selenium": () => <SiSelenium/>,
        "Cypress": () => <SiCypress/>,
        "Docker / Docker Compose": () => <SiDocker/>,
        "Kubernetes": () => <SiKubernetes/>,
        "Gitlab CI": () => <SiGitlab/>,
        "GitHub Actions": () => <SiGithubactions/>,
        "Jenkins": () => <SiJenkins/>,
        "Circle CI": () => <SiCircleci/>,
        "Sonarqube": () => <SiSonarqube/>,
        "Prometheus": () => <SiPrometheus/>,
        "Grafana": () => <SiGrafana/>,
        "Amazon Web Services": () => <SiAmazonaws/>,
        "Terraform": () => <SiTerraform/>,
        "Numpy": () => <SiNumpy/>,
        "Pandas": () => <SiPandas/>,
        "Matplotlib": () => <IoPieChart/>,
        "Jupyter Notebook": () => <SiJupyter/>,
        "MySQL": () => <SiMysql/>,
        "MariaDB": () => <SiMariadb/>,
        "SQLite": () => <SiSqlite/>,
        "Postegresql": () => <SiPostgresql/>,
        "Git": () => <SiGit/>,
        "Linux": () => <SiLinux/>,
        "Jetbrains suite": () => <SiJetbrains/>,
        "Visual Studio Code": () => <SiVisualstudiocode/>,
        "Eclipse": () => <SiEclipseide/>,
        "Checkstyle": () => <TiPencil></TiPencil>,
        "PIT": () => <LuDna></LuDna>,
        "PMD": () => <BiCodeCurly/>,
        "Pylint": () => <TbBrandPython/>,
        "Ableton": () => <SiAbletonlive></SiAbletonlive>,
        "Pro tools": () => <SiProtools/>,
        "Rest": () => <SiCurl/>,
        "GraphQL": () => <SiGraphql/>,
        "Ansible": () => <SiAnsible/>,
        "Synfony": () => <SiSymfony/>,
        "LaTex": () => <SiLatex/>,
        "EMF": () => <SiEclipseide/>

    }[toolName]

    const found_icon = (res === undefined) ? <></> : res()

    return <li className="skills-tool">
        {found_icon}
        <span className="skills-tooltip">{toolName}</span>
    </li>
}

export default Icons

