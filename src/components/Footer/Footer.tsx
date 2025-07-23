const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => (
    <footer>
        <nav>
            <div className="nav-links-container">
                <ul className="nav-links">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        <p>Copyright &#169; 2025 Shudhanhu Choudhary. All Rights Reserved.</p>
    </footer>
);
