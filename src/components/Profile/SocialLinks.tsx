const SOCIALS = [
    {
        icon: "/assets/linkedin.png",
        alt: "LinkedIn profile",
        url: "https://linkedin.com/",
    },
    {
        icon: "/assets/github.png",
        alt: "Github profile",
        url: "https://github.com/",
    },
];

export const SocialLinks = () => (
    <div id="socials-container">
        {SOCIALS.map(s => (
            <img
                key={s.alt}
                src={s.icon}
                alt={s.alt}
                className="icon"
                style={{ cursor: "pointer" }}
                onClick={() => window.open(s.url, "_blank")}
            />
        ))}
    </div>
);
