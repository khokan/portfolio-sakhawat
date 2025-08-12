import "./index.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <div>
        <Navbar />
         <Home />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        <Footer /> 
      </div>
    </>
  );
}

export default App;
