import About from "./component/About";
import Navbar from "./component/Navbar";
import Soft from "./component/Soft";
import Coding from "./component/Coding";
import Contact from "./component/Contact";
import Me from "./component/Me";
import Projects from "./component/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Me/>
        <About />
        <Soft />
        <Coding />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
