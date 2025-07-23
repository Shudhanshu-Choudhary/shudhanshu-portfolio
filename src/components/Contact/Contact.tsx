import { ContactItem } from "./ContactItem";

const CONTACTS = [
    {
        icon: "/assets/email.png",
        alt: "Email icon",
        href: "mailto:hello@shudhanshu.dev",
        label: "hello@shudhanshu.dev",
        bigIcon: true,
    },
    {
        icon: "/assets/linkedin.png",
        alt: "LinkedIn icon",
        href: "https://www.linkedin.com/in/shudhanshus198/",
        label: "LinkedIn",
    },
];

export const Contact = () => (
    <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
            {CONTACTS.map(contact => (
                <ContactItem key={contact.label} {...contact} />
            ))}
        </div>
    </section>
);
