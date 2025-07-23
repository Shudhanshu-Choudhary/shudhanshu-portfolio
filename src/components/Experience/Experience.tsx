import { ExperienceCard } from "./ExperienceCard";

const EXPERIENCE = [
    {
        section: "Frontend Development",
        skills: [
            { skill: "React.js", level: "Experienced" },
            { skill: "React Native", level: "Experienced" },
            { skill: "JavaScript", level: "Advanced" },
            { skill: "TypeScript", level: "Intermediate" },
            { skill: "Redux Toolkit", level: "Advanced" },
        ],
    },
    {
        section: "Other Tools / Basics",
        skills: [
            { skill: "Node.js", level: "Basic" },
            { skill: "Express.js", level: "Basic" },
            { skill: "PostgreSQL", level: "Basic" },
            { skill: "Git", level: "Advanced" },
        ],
    },
];

export const Experience = () => (
    <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
            <div className="experience-containers">
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
