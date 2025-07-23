import { ContactItem } from "./ContactItem";

const CONTACTS = [
    {
        icon: "/assets/email.png",
        alt: "Email icon",
        href: "mailto:examplemail@gmail.com",
        label: "Example@gmail.com",
        bigIcon: true,
    },
    {
        icon: "/assets/linkedin.png",
        alt: "LinkedIn icon",
        href: "https://www.linkedin.com",
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
