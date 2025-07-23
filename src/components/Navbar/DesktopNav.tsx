const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const DesktopNav = () => (
    <nav id="desktop-nav">
        <div className="logo">Shudhanshu Choudhary</div>
        <div>
            <ul className="nav-links">
                {NAV_LINKS.map(link => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);
