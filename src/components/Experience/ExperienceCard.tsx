interface ExperienceCardProps {
    title: string;
    items: { skill: string; level: string }[];
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    title,
    items,
}) => (
    <div className="details-container">
        <h2 className="experience-sub-title">{title}</h2>
        <div className="article-container">
            {items.map(i => (
                <article key={i.skill}>
                    <img
                        src="/assets/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                    />
                    <div>
                        <h3>{i.skill}</h3>
                        <p>{i.level}</p>
                    </div>
                </article>
            ))}
        </div>
    </div>
);
