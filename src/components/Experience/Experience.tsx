import { ExperienceCard } from "./ExperienceCard";

const EXPERIENCE = [
    {
        section: "Frontend Development",
        skills: [
            { skill: "HTML", level: "Experienced" },
            { skill: "CSS", level: "Experienced" },
            { skill: "SASS", level: "Intermediate" },
            { skill: "JavaScript", level: "Basic" },
            { skill: "TypeScript", level: "Basic" },
            { skill: "Material UI", level: "Intermediate" },
        ],
    },
    {
        section: "Backend Development",
        skills: [
            { skill: "PostgreSQL", level: "Basic" },
            { skill: "Node JS", level: "Intermediate" },
            { skill: "Express JS", level: "Intermediate" },
            { skill: "Git", level: "Intermediate" },
        ],
    },
];

export const Experience = () => (
    <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
            <div className="about-containers">
                {EXPERIENCE.map(section => (
                    <ExperienceCard
                        key={section.section}
                        title={section.section}
                        items={section.skills}
                    />
                ))}
            </div>
        </div>
        <button
            className="arrow-btn"
            onClick={() => (window.location.hash = "#projects")}
            aria-label="Scroll to Projects"
            style={{ lineHeight: 0, background: "transparent", border: "none" }}
        >
            <img
                src="/assets/arrow.png"
                alt="Arrow to Projects"
                className="icon arrow arrow-animate"
                draggable={false}
            />
        </button>
    </section>
);
