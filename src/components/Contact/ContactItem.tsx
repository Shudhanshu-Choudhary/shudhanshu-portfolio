interface ContactItemProps {
    icon: string;
    alt: string;
    href: string;
    label: string;
    bigIcon?: boolean;
}
export const ContactItem: React.FC<ContactItemProps> = ({
    icon, alt, href, label, bigIcon
}) => (
    <div className="contact-info-container">
        <img
            src={icon}
            alt={alt}
            className={bigIcon ? "icon contact-icon email-icon" : "icon contact-icon"}
            draggable={false}
        />
        <p>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        </p>
    </div>
);
