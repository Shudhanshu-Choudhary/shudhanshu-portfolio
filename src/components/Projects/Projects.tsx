import { ProjectCard } from "./ProjectCard";

const PROJECTS = [
    {
        title: "Project One",
        image: "/assets/project-1.png",
        github: "https://github.com/",
        demo: "https://github.com/",
    },
    {
        title: "Project Two",
        image: "/assets/project-2.png",
        github: "https://github.com/",
        demo: "https://github.com/",
    },
    {
        title: "Project Three",
        image: "/assets/project-3.png",
        github: "https://github.com/",
        demo: "https://github.com/",
    },
];

export const Projects = () => (
    <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
            <div className="about-containers">
                {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
        </div>
        <button
            className="arrow-btn"
            onClick={() => (window.location.hash = "#contact")}
            aria-label="Scroll to Contact"
            style={{ lineHeight: 0, background: "transparent", border: "none" }}
        >
            <img
                src="/assets/arrow.png"
                alt="Arrow to Contact"
                className="icon arrow arrow-animate"
                draggable={false}
            />
        </button>
    </section>
);
