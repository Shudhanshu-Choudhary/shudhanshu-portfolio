interface ProjectCardProps {
    title: string;
    image: string;
    github: string;
    demo: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
    title, image, github, demo
}) => (
    <div className="details-container color-container">
        <div className="article-container">
            <img src={image} alt={title} className="project-img" />
        </div>
        <h2 className="experience-sub-title project-title">{title}</h2>
        <div className="btn-container">
            <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open(github, "_blank")}
            >Github</button>
            <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open(demo, "_blank")}
            >Live Demo</button>
        </div>
    </div>
);
