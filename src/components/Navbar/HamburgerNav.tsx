import React, { useState } from "react";

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const HamburgerNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav id="hamburger-nav">
            <div className="logo">Shudhanhu Choudhary</div>
            <div className="hamburger-menu">
                <div
                    className={`hamburger-icon${open ? " open" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu-links${open ? " open" : ""}`}>
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </nav>
    );
};
