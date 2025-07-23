const PROJECTS = [
    {
        title: "TravelMatic – Corporate Travel SaaS",
        description:
            "Built a dynamic travel management platform for corporate clients. Implemented React-based form automation, real-time updates with Pusher, and integrated Stripe for payments.",
        tech: ["ReactJS", "Redux Toolkit", "Pusher", "Stripe", "Google Maps"],
    },
    {
        title: "Cabin Tech – IoT Monitoring System",
        description:
            "Developed an IoT dashboard to monitor device data in real-time. Handled frontend architecture and integrated a secure payment flow.",
        tech: ["ReactJS", "TypeScript", "Stripe"],
    },
    {
        title: "Nobelman Books – eBook & Audiobook App",
        description:
            "Created a cross-platform app with audio streaming, PDF viewing, and secure in-app purchases. Released beta via TestFlight.",
        tech: ["React Native", "TypeScript", "Expo", "Stripe"],
    },
    {
        title: "Navy E-Claims – Claim Processing App",
        description:
            "Streamlined government claim processing via a React Native mobile app with RESTful API integration.",
        tech: ["React Native", "REST APIs", "TypeScript"],
    },
];

export const Projects = () => (
    <section id="projects" className="projects-section">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>

        <div className="project-list">
            {PROJECTS.map((project, index) => (
                <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tech-stack">
                        {project.tech.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </div>
            ))}
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
