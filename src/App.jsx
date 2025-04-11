import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";
import SmoothScroll from "./SmoothScroll/SmoothScroll";
import SkillsMarquee from "./Components/SkillsMarquee";
import CheckDesktop from "./Hooks/CheckDesktop";

export default function App() {
  const showCursor = CheckDesktop();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="dark">
        <header className="bg-testred text-gray-800 dark:text-white">
          Test Dark Mode
        </header>
      </div>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        Dark mode supported!
      </div>

      <SmoothScroll>
        <Navbar></Navbar>
        <div
          className="container mx-auto"
          style={{
            clipPath: `inset(${scrollY}px 0 0 0)`,
          }}
        >
          <Header></Header>
          <Hr></Hr>
          {showCursor ? <SkillsMarquee></SkillsMarquee> : <Skills></Skills>}
          <Hr></Hr>
          <Projects></Projects>
          <Hr></Hr>
          <Education></Education>
          <Hr></Hr>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </SmoothScroll>
    </>
  );
}
