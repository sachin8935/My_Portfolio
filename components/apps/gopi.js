import React, { Component } from "react";
import ReactGA from "react-ga";

export class AboutGopi extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about gopi"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutGopi;

export const displayAboutGopi = () => {
  return <AboutGopi />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/Alan_Walker.jpeg"
          alt="Sachin Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          This is <span className="font-bold">Sachin Kumar</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Web Developer !!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm an <span className=" font-medium">Undergraduate Student</span>{" "}
          currently pursuing Computer Science from{" "}
          <u className=" cursor-pointer ">
            {" "}
            <a
              href="https://cucet.cuchd.in/?type=gsn-cucet&gad_source=1&gclid=EAIaIQobChMI_PSD8NyRhgMVo6hmAh1WVAaoEAAYASAAEgJhJfD_BwE"
              target={"_blank"}
            >
              Chandigarh University
            </a>{" "}
          </u>
          , and I'm open for internship opportunities!
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I have done internship with CAC{" "}
          <u>
            <a
              href="https://www.cac-cuchd.in/"
              target="_blank"
              rel="noreferrer"
            >
              CAC
            </a>
          </u>{" "}
          as an Backend Intern
        </li>
        <li className=" mt-3 list-star">
          {" "}
          And I also have interest in Cloud Computing & DevOps!
        </li>
        <li className=" mt-3 list-time">
          {" "}
          Other than coding, I listen to Alan Walker songs and play games both
          online and offline.
        </li>
        <li className=" mt-3 list-social">
          Connect with me -
          <p>
            <u>
              <a
                href="https://www.linkedin.com/in/startwithsachin/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </u>
          </p>
          <p>
            <u>
              <a
                href="https://github.com/sachin8935"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </u>
          </p>
          <p>
            <u>
              <a className="text-underline" href="mailto:sachin89359@gmail.com">
                <u>GMail</u>
              </a>
            </u>
          </p>
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Chandigarh University
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2021 - 2025</div>
          <div className=" text-sm md:text-base">Computer Science</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 7.75/10
          </div>
        </li>
        {/* <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Class 12<sup>th</sup> (FIITJEE, Vijayawada)
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2018 - 2020</div>
          <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            JEE Percentile &nbsp; 98.95%
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Percentage &nbsp; 95.4%
          </div>
        </li> */}
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills &#38; Achievements
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a wide variety of programming languages & frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            I am a{" "}
            <strong className="text-ubt-gedit-orange">
              MERN stack and devops developer,
            </strong>{" "}
            and an Open source Contributor
          </div>
        </li>
        {/* <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>I was selected in MLH Prep Fellowship Program</div>
        </li> */}
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            I secured runner up position at hackathon organised by MHRD.(5G
            vimarsh hackathon)
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            Clinched global rank 98 among 11,347 participants in CodeChef June
            Long Two 2022.
          </div>
        </li>
        {/* <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>I was the part of WCARL team (Research Team of our college)</div>
        </li> */}
        {/* <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            I was the Technical Chief of Spark (Magazine team of our college)
          </div>
        </li> */}
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-grey?style=flat&logo=javascript"
              alt=" javascript"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-grey?style=flat&logo=python"
              alt=" python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-grey?style=flat&logo=c%2B%2B"
              alt="c++"
            />
            <img
              src="https://img.shields.io/badge/-Git-grey?style=flat&logo=git"
              alt="git"
              className="m-1"
            />
            {/* <img
              src="https://img.shields.io/badge/-Golang-grey?style=flat&logo=go"
              alt="gopi golang"
              className="m-1"
            /> */}
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-MongoDB-grey?style=flat&logo=mongodb"
              alt="gopi react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Express.js-grey?style=flat&logo=express"
              alt=" react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-grey?style=flat&logo=react"
              alt=" react"
            />
            <img
              src="https://img.shields.io/badge/-Nodejs-grey?style=flat&logo=Node.js"
              alt=" node.js"
              className="m-1"
            />
            <img
              className=" m-1"
              src="http://img.shields.io/badge/-Django-grey?style=flat&logo=django"
              alt=" linux"
            />
            <img
              className=" m-1"
              src="http://img.shields.io/badge/-Linux-grey?style=flat&logo=linux"
              alt=" linux"
            />
            <img
              className=" m-1"
              src="http://img.shields.io/badge/-Docker-grey?style=flat&logo=docker"
              alt="linux"
            />
            <img
              className=" m-1"
              src="http://img.shields.io/badge/-AWS-grey?style=flat&logo=amazon"
              alt=" linux"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "EduConnect",
      date: "Nov 2023",
      link: "https://github.com/sachin8935/EduConnect",
      description: [
        "A project to solve students problem of learning",
        "It helps students of our college to learn anytime and anywhere with just a click",
      ],
      domains: ["javascript", "react.js", "MongoDB", "NodeJS", "redux"],
    },
    {
      name: "Three Tier Application Deployment on Kubernetes with ArgoCD",
      date: "May 2024",
      link: "https://github.com/sachin8935/3-tier-app-on-k8",
      description: [
        "Architected and deployed a three-tier application on a personal Kubernetes cluster using Minikube, Docker, and ArgoCD, ensuring seamless continuous deployment. Demonstrated expertise in containerization by managing over 20 Docker containers across 5 Kubernetes pods.",
      ],
      domains: ["AWS", "Kubernetes", "minikube", "Containerization"],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">
                    {project.name}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=sachin8935&repo=${projectName}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={project.name.toLowerCase() + "-star"}
                  ></iframe>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      return (
                        <span
                          key={index}
                          className={`px-1.5 py-0.5 w-max border border-blue-400 text-pink-400 m-1 rounded`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/Sachin_resume.pdf"
      title="Sachin's resume"
      frameBorder="0"
    ></iframe>
  );
}
