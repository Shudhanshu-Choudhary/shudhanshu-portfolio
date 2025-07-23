interface AboutCardProps {
    img: string;
    title: string;
    description: string;
}
export const AboutCard: React.FC<AboutCardProps> = ({
    img,
    title,
    description,
}) => (
    <div className="details-container">
        <img src={img} alt={title + " icon"} className="icon" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);
