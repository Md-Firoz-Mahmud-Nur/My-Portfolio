import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Hr from "./Components/Hr";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SkillsMarquee from "./Components/SkillsMarquee";
import CheckDesktop from "./Hooks/CheckDesktop";
import SmoothScroll from "./SmoothScroll/SmoothScroll";

export default function App() {
  const showCursor = CheckDesktop();
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <SmoothScroll>
        <div
          className="container mx-auto"
          // style={{
          //   clipPath: `inset(${scrollY}px 0 0 0)`,
          // }}
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
      </SmoothScroll>
    </>
  );
}
