import { SocialLinks } from "./SocialLinks";

export const Profile = () => (
    <section id="profile">
        {/* <div className="section__profile_pic-container">
            
        </div> */}
        <div className="profile-pic-container">
            <img
                src="/assets/profile.jpg"
                className="profile-pic"
                alt="Shudhanshu Choudhary profile picture"
            />
        </div>
        <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Shudhanshu Choudhary</h1>
            <p className="section__text__p2">Frontend Developer</p>
            <div className="btn-container">
                {[
                    {
                        text: "Download CV",
                        class: "btn btn-color-2",
                        onClick: () => window.open("/assets/resume.pdf"),
                    },
                    {
                        text: "Contact Info",
                        class: "btn btn-color-1",
                        onClick: () => {
                            window.location.hash = "#contact";
                        },
                    },
                ].map((btn, idx) => (
                    <button
                        key={idx}
                        className={btn.class}
                        onClick={btn.onClick}
                    >
                        {btn.text}
                    </button>
                ))}
            </div>
            <SocialLinks />
        </div>
    </section>
);
