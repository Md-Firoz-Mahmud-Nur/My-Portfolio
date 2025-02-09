import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Header></Header>
        <Hr></Hr>
        <Skills></Skills>
        <Hr></Hr>
        <Projects></Projects>
        <Hr></Hr>
        <Education></Education>
        <Hr></Hr>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}
