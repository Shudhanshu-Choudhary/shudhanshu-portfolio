import { AboutCard } from "./AboutCard";

const ABOUT_CARDS = [
    {
        img: "/assets/experience.png",
        title: "Experience",
        description: "2+ years \nFrontend Development",
    },
    {
        img: "/assets/education.png",
        title: "Education",
        description: "B.Sc. Bachelors Degree\nM.Sc. Masters Degree",
    },
];

export const About = () => (
    <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
            <div className="section__pic-container">
                <img
                    src="/assets/about-pic.jpg"
                    alt="Profile picture"
                    className="about-pic"
                />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    {ABOUT_CARDS.map(card => <AboutCard key={card.title} {...card} />)}
                </div>
                <div className="text-container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                        reprehenderit et laborum, rem, dolore eum...
                    </p>
                </div>
            </div>
        </div>
        <button
            className="arrow-btn"
            onClick={() => (window.location.hash = "#experience")}
            aria-label="Scroll to Experience"
            style={{ lineHeight: 0, background: "transparent", border: "none" }}
        >
            <img
                src="/assets/arrow.png"
                alt="Arrow to Experience"
                className="icon arrow arrow-animate"
                draggable={false}
            />
        </button>
    </section>
);
