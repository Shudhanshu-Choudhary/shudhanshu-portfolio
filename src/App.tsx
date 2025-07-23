import { DesktopNav } from "./components/Navbar/DesktopNav";
import { HamburgerNav } from "./components/Navbar/HamburgerNav";
import { Profile } from "./components/Profile/Profile";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./index.css";

export const App = () => (
  <>
    <DesktopNav />
    <HamburgerNav />
    <Profile />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);
