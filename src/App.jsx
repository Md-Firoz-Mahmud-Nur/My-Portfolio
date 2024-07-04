import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

export default function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
    </div>
  );
}
