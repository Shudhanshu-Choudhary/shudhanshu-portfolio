const SOCIALS = [
    {
        icon: "/assets/linkedin.png",
        alt: "LinkedIn profile",
        url: "https://www.linkedin.com/in/shudhanshus198/",
    },
    {
        icon: "/assets/github.png",
        alt: "Github profile",
        url: "https://github.com/Shudhanshu-Choudhary",
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
