import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";
import CustomCursor from "./Components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor></CustomCursor>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Header></Header>
        <Hr></Hr>
        <Skills></Skills>
        <Hr></Hr>
        <Projects></Projects>
        <Hr></Hr>
        <Education></Education>
        <Hr></Hr>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
